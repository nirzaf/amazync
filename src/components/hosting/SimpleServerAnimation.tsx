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
    light: '#DBD9EC', // Lavender Web
    dark: '#0A1642', // Dark Blue
  };

  // Server rack configuration
  const racks = 6;
  const serverRows = 12;
  
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
                  {/* Server indicator light */}
                  {isActive && (
                    <motion.div
                      className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full"
                      style={{
                        width: '4px',
                        height: '4px',
                        backgroundColor: hasActivity ? colors.accent : colors.light,
                        boxShadow: `0 0 6px ${hasActivity ? colors.accent : colors.light}`,
                      }}
                      animate={{
                        opacity: hasActivity ? [0.7, 1, 0.7] : [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: hasActivity ? 1 : 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                  
                  {/* Data activity animation */}
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
                          background: colors.accent,
                          boxShadow: `0 0 4px ${colors.accent}`,
                        }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: 1 + Math.random(),
                          repeat: Infinity,
                          repeatType: "loop",
                          repeatDelay: Math.random() * 5,
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
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => {
          const size = 1 + Math.random() * 2;
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: Math.random() > 0.7 ? colors.accent : colors.light,
                boxShadow: `0 0 ${size * 2}px ${Math.random() > 0.7 ? colors.accent : colors.light}`,
                opacity: 0.3 + Math.random() * 0.3,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SimpleServerAnimation;
