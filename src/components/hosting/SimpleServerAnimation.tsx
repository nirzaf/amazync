import React from 'react';
import { motion } from 'framer-motion';

interface SimpleServerAnimationProps {
  className?: string;
}

const SimpleServerAnimation: React.FC<SimpleServerAnimationProps> = ({ className = '' }) => {
  // Brand colors
  const colors = {
    primary: '#1934B6', // Persian Blue
    secondary: '#7882B6', // Glaucous
    accent: '#4AFF91', // Green
    red: '#EC3A1C', // Chili Red
    blue: '#3B5CE9', // Bright Blue
    light: '#DBD9EC', // Lavender Web
    dark: '#0A1642', // Dark Blue
  };

  // Server rack configuration
  const racks = 7; // Increased number of racks
  const serverRows = 14; // More servers per rack
  
  return (
    <div 
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
      style={{ 
        background: `linear-gradient(to bottom, ${colors.dark}, #0A0E24)`,
      }}
    >
      {/* Simple grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(${colors.primary}22 1px, transparent 1px), 
                            linear-gradient(90deg, ${colors.primary}22 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Server racks */}
      <div className="absolute inset-0 flex justify-around items-center">
        {Array.from({ length: racks }).map((_, rackIndex) => (
          <div 
            key={`rack-${rackIndex}`}
            className="h-[80%] flex flex-col justify-between relative"
            style={{ 
              width: `${90 / racks}%`,
            }}
          >
            {/* Rack frame */}
            <div 
              className="absolute inset-0 rounded-md"
              style={{
                background: colors.dark,
                border: `1px solid ${colors.secondary}33`,
                boxShadow: `0 0 20px rgba(0,0,0,0.5)`,
              }}
            />
            
            {/* Servers */}
            {Array.from({ length: serverRows }).map((_, serverIndex) => {
              // Randomize server types and activity
              const isActive = Math.random() > 0.3;
              const hasActivity = isActive && Math.random() > 0.6;
              
              return (
                <div 
                  key={`server-${rackIndex}-${serverIndex}`}
                  className="w-full relative z-10 rounded-sm overflow-hidden"
                  style={{
                    height: `${80 / serverRows}%`,
                    marginBottom: '2px',
                    background: '#111',
                    borderTop: '1px solid #222',
                    borderBottom: '1px solid #000',
                  }}
                >
                  {/* Server indicator lights - now with red, green, and blue */}
                  {isActive && (
                    <>
                      {/* Right side indicators */}
                      <div className="absolute right-1 top-1/2 -translate-y-1/2 flex space-x-1">
                        {/* Main status light - can be green, red, or blue */}
                        <motion.div
                          className="rounded-full"
                          style={{
                            width: '4px',
                            height: '4px',
                            backgroundColor: hasActivity 
                              ? Math.random() > 0.66 ? colors.accent : 
                                Math.random() > 0.5 ? colors.red : colors.blue
                              : colors.light,
                            boxShadow: `0 0 6px ${hasActivity 
                              ? Math.random() > 0.66 ? colors.accent : 
                                Math.random() > 0.5 ? colors.red : colors.blue
                              : colors.light}`,
                          }}
                          animate={{
                            opacity: hasActivity ? [0.7, 1, 0.7] : [0.4, 0.7, 0.4],
                          }}
                          transition={{
                            duration: hasActivity ? 0.8 + Math.random() * 0.4 : 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        
                        {/* Multiple secondary indicators for busy servers */}
                        {hasActivity && (
                          <>
                            {/* First secondary light - always present if server is active */}
                            <motion.div
                              className="rounded-full"
                              style={{
                                width: '3px',
                                height: '3px',
                                backgroundColor: Math.random() > 0.66 ? colors.red : 
                                              Math.random() > 0.5 ? colors.blue : colors.accent,
                                boxShadow: `0 0 4px ${Math.random() > 0.66 ? colors.red : 
                                          Math.random() > 0.5 ? colors.blue : colors.accent}`,
                              }}
                              animate={{
                                opacity: [0.5, 0.9, 0.5],
                              }}
                              transition={{
                                duration: 0.6 + Math.random() * 0.8,
                                repeat: Infinity,
                                delay: Math.random() * 0.5,
                                ease: "easeInOut",
                              }}
                            />
                            
                            {/* Second secondary light - 70% chance */}
                            {Math.random() > 0.3 && (
                              <motion.div
                                className="rounded-full"
                                style={{
                                  width: '2px',
                                  height: '2px',
                                  backgroundColor: Math.random() > 0.66 ? colors.accent : 
                                                Math.random() > 0.5 ? colors.blue : colors.red,
                                  boxShadow: `0 0 3px ${Math.random() > 0.66 ? colors.accent : 
                                            Math.random() > 0.5 ? colors.blue : colors.red}`,
                                }}
                                animate={{
                                  opacity: [0.4, 0.8, 0.4],
                                }}
                                transition={{
                                  duration: 0.5 + Math.random() * 0.5,
                                  repeat: Infinity,
                                  delay: Math.random() * 0.3,
                                  ease: "easeInOut",
                                }}
                              />
                            )}
                          </>
                        )}
                      </div>
                      
                      {/* MIDDLE RACK LIGHTS - Prominent central indicators */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-2">
                        {/* Central primary indicator - always present and larger */}
                        <motion.div
                          className="rounded-full"
                          style={{
                            width: '6px',
                            height: '6px',
                            backgroundColor: hasActivity 
                              ? Math.random() > 0.6 ? colors.accent : 
                                Math.random() > 0.3 ? colors.red : colors.blue
                              : colors.light,
                            boxShadow: `0 0 8px ${hasActivity 
                              ? Math.random() > 0.6 ? colors.accent : 
                                Math.random() > 0.3 ? colors.red : colors.blue
                              : colors.light}`,
                          }}
                          animate={{
                            opacity: [0.7, 1, 0.7],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            opacity: {
                              duration: 1.2 + Math.random() * 0.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                            },
                            scale: {
                              duration: 2 + Math.random(),
                              repeat: Infinity,
                              ease: "easeInOut",
                            }
                          }}
                        />
                        
                        {/* Secondary central indicators */}
                        {hasActivity && (
                          <motion.div
                            className="rounded-full"
                            style={{
                              width: '5px',
                              height: '5px',
                              backgroundColor: Math.random() > 0.5 ? colors.blue : colors.red,
                              boxShadow: `0 0 7px ${Math.random() > 0.5 ? colors.blue : colors.red}`,
                            }}
                            animate={{
                              opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                              duration: 0.8 + Math.random() * 0.6,
                              repeat: Infinity,
                              delay: 0.2,
                              ease: "easeInOut",
                            }}
                          />
                        )}
                      </div>
                    </>
                  )}
                  
                  {/* Data activity animation - now with red, green, or blue */}
                  {hasActivity && (
                    <motion.div
                      className="absolute inset-y-0 flex items-center"
                      style={{
                        left: '20%',
                        width: '60%',
                      }}
                    >
                      <motion.div
                        className="h-[1px] w-full"
                        style={{
                          background: Math.random() > 0.66 ? colors.accent : 
                                    Math.random() > 0.33 ? colors.red : colors.blue,
                          boxShadow: `0 0 4px ${Math.random() > 0.66 ? colors.accent : 
                                     Math.random() > 0.33 ? colors.red : colors.blue}`,
                        }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: 0.8 + Math.random(),
                          repeat: Infinity,
                          repeatType: "loop",
                          repeatDelay: Math.random() * 3, // Shorter delays for more frequent activity
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  )}
                  
                  {/* Additional data pulse for very active servers */}
                  {hasActivity && Math.random() > 0.7 && (
                    <motion.div
                      className="absolute inset-y-0 flex items-center"
                      style={{
                        left: '10%',
                        width: '80%',
                        top: '70%',
                      }}
                    >
                      <motion.div
                        className="h-[1px] w-full"
                        style={{
                          background: Math.random() > 0.5 ? colors.blue : colors.accent,
                          boxShadow: `0 0 3px ${Math.random() > 0.5 ? colors.blue : colors.accent}`,
                          opacity: 0.7,
                        }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: 0.6 + Math.random() * 0.4,
                          repeat: Infinity,
                          repeatType: "loop",
                          repeatDelay: Math.random() * 2,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      
      {/* Subtle moving light effect */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colors.light}, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Floating particles - now with red, green, blue and white */}
      <div className="absolute inset-0">
        {Array.from({ length: 35 }).map((_, i) => { // Increased particle count
          const size = 1 + Math.random() * 2;
          // Randomly choose between green, red, blue, and white particles
          const colorRand = Math.random();
          const particleColor = colorRand > 0.75 ? colors.accent : 
                               colorRand > 0.5 ? colors.red : 
                               colorRand > 0.25 ? colors.blue :
                               colors.light;
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: particleColor,
                boxShadow: `0 0 ${size * 2}px ${particleColor}`,
                opacity: 0.3 + Math.random() * 0.4,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8 + Math.random() * 8, // Slightly faster movement
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          );
        })}
      </div>
      
      {/* Additional ambient light pulses */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => {
          // Position lights more centrally in the racks
          const posX = 15 + i * 15;
          const posY = 30 + (i % 3) * 20;
          const color = i % 3 === 0 ? colors.blue : i % 3 === 1 ? colors.accent : colors.red;
          return (
            <motion.div
              key={`ambient-light-${i}`}
              className="absolute rounded-full"
              style={{
                width: '80px',
                height: '80px',
                background: `radial-gradient(circle, ${color}22 0%, ${color}11 40%, transparent 70%)`,
                left: `${posX}%`,
                top: `${posY}%`,
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i * 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          );
        })}
      </div>
      
      {/* Central rack highlight pulses */}
      <div className="absolute inset-0 flex justify-around items-center">
        {Array.from({ length: racks }).map((_, rackIndex) => (
          <div 
            key={`central-highlight-${rackIndex}`}
            className="relative"
            style={{ 
              width: `${90 / racks}%`,
              height: '40%',
            }}
          >
            {/* Central pulsing highlight */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: rackIndex % 3 === 0 ? colors.accent : 
                               rackIndex % 3 === 1 ? colors.red : colors.blue,
                boxShadow: `0 0 15px ${rackIndex % 3 === 0 ? colors.accent : 
                          rackIndex % 3 === 1 ? colors.red : colors.blue}`,
                opacity: 0.8,
              }}
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.3, 1],
              }}
              transition={{
                opacity: {
                  duration: 2 + rackIndex * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 3 + rackIndex * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleServerAnimation;
