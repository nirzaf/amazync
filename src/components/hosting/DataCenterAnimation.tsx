import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface DataCenterAnimationProps {
  className?: string;
}

const DataCenterAnimation: React.FC<DataCenterAnimationProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Enhanced server rack configuration
  const rackRowsCount = 4; // Multiple rows of racks
  const racksPerRow = 6; // More racks per row
  const serversPerRack = 14; // More servers per rack
  
  // Enhanced color palette
  const rackColor = '#0F0F0F';
  const rackHighlight = '#2A2A2A';
  const floorColor = '#0A1642';
  const ceilingColor = '#0A0E24';
  const lightColor = '#DBD9EC';
  const ductColor = '#1A1A1A';
  const cableColors = ['#3B5CE9', '#1934B6', '#7882B6', '#192C99'];
  const indicatorColors = ['#4AFF91', '#3B5CE9', '#DBD9EC', '#1934B6', '#FF3C14'];
  
  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
      style={{ 
        perspective: '1500px', // Enhanced perspective for more dramatic effect
        backgroundColor: ceilingColor,
      }}
    >
      {/* Enhanced Camera Movement - Wraps entire scene */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{
          x: ['0%', '-3%', '0%', '3%', '0%'],
          y: ['0%', '-1%', '0%', '1%', '0%'],
        }}
        transition={{
          x: {
            duration: 40, // Slower, more sweeping movement
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          },
          y: {
            duration: 30,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }
        }}
      >
        {/* Enhanced Ceiling with more intricate ducts, fixtures and lights */}
        <div className="absolute inset-x-0 top-0 h-1/3 flex flex-col">
          {/* Ceiling panels */}
          <div className="w-full h-full grid grid-cols-8 gap-1 opacity-40">
            {Array.from({ length: 16 }).map((_, i) => (
              <div 
                key={`ceiling-${i}`}
                className="border border-[#2A3366] bg-[#141B3A]" 
              />
            ))}
          </div>
          
          {/* Main ceiling lights */}
          <div className="absolute inset-x-0 top-[5%] flex justify-around">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`light-${i}`}
                className="w-24 h-6 rounded-sm"
                style={{ 
                  backgroundColor: lightColor,
                  boxShadow: `0 0 30px 10px rgba(219, 217, 236, 0.4)`,
                }}
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.7,
                }}
              />
            ))}
          </div>
          
          {/* Large cooling ducts */}
          <div className="absolute inset-x-0 top-[15%] flex justify-around">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={`large-duct-${i}`}
                className="relative"
                style={{ 
                  width: `${25 + i * 5}%`,
                  height: '20px',
                }}
              >
                <div 
                  className="absolute inset-0 rounded-md"
                  style={{ 
                    backgroundColor: ductColor,
                    border: '1px solid #3A3A3A',
                    boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.4)',
                  }}
                />
                {/* Duct details */}
                {Array.from({ length: 5 }).map((_, j) => (
                  <div 
                    key={`duct-detail-${i}-${j}`}
                    className="absolute h-[3px] bg-[#2A2A2A]"
                    style={{ 
                      width: '100%',
                      top: `${j * 25}%`,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
          
          {/* Enhanced network of cables */}
          <div className="absolute inset-0 flex flex-col justify-around">
            {Array.from({ length: 12 }).map((_, i) => {
              const color = cableColors[i % cableColors.length];
              const thickness = Math.random() > 0.7 ? 2 : 1;
              return (
                <motion.div
                  key={`cable-${i}`}
                  className={`h-[${thickness}px] rounded-full`}
                  style={{ 
                    width: `${40 + Math.random() * 60}%`,
                    alignSelf: i % 2 === 0 ? 'flex-start' : 'flex-end',
                    marginLeft: i % 2 === 0 ? `${Math.random() * 10}%` : 'auto',
                    marginRight: i % 2 === 1 ? `${Math.random() * 10}%` : 'auto',
                    backgroundColor: color,
                    opacity: 0.7 + (Math.random() * 0.3),
                    height: `${thickness}px`,
                  }}
                />
              );
            })}
          </div>
          
          {/* Small indicator lights on ceiling */}
          <div className="absolute inset-0">
            {Array.from({ length: 15 }).map((_, i) => {
              const size = 2 + Math.random() * 2;
              const color = indicatorColors[Math.floor(Math.random() * indicatorColors.length)];
              return (
                <motion.div
                  key={`ceiling-indicator-${i}`}
                  className="absolute rounded-full"
                  style={{ 
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundColor: color,
                    boxShadow: `0 0 ${size * 2}px ${color}`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              );
            })}
          </div>
        </div>
        
        {/* Enhanced 3D Scene with Server Racks - More dramatic perspective */}
        <div 
          className="absolute inset-0 flex items-end justify-center"
          style={{ 
            transform: 'rotateX(70deg) translateY(30%)', // More extreme angle looking up
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Enhanced reflective floor */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, ${floorColor}CC, ${floorColor}99)`,
              backgroundSize: '200% 200%',
              opacity: 0.9,
              transform: 'translateZ(-5px) rotateX(-5deg)',
              boxShadow: 'inset 0 0 50px rgba(59, 92, 233, 0.2)',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          
          {/* Floor grid pattern */}
          <div 
            className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-[2px]"
            style={{
              transform: 'translateZ(-4px) rotateX(-5deg)',
              opacity: 0.3,
            }}
          >
            {Array.from({ length: 144 }).map((_, i) => (
              <div 
                key={`floor-tile-${i}`}
                className="border border-[#3B5CE9] rounded-sm"
              />
            ))}
          </div>
          
          {/* Light reflections on floor */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`reflection-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${30 + Math.random() * 50}px`,
                height: `${10 + Math.random() * 20}px`,
                background: 'radial-gradient(ellipse at center, rgba(219,217,236,0.15) 0%, rgba(219,217,236,0) 70%)',
                left: `${Math.random() * 100}%`,
                top: `${30 + Math.random() * 60}%`,
                transform: 'translateZ(-3px) rotateX(-5deg)',
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
          
          {/* Multiple rows of server racks */}
          <div className="relative w-full h-full">
            {Array.from({ length: rackRowsCount }).map((_, rowIndex) => (
              <div 
                key={`rack-row-${rowIndex}`}
                className="absolute w-full flex justify-around items-center"
                style={{
                  bottom: `${15 + rowIndex * 20}%`,
                  transform: `translateZ(${50 - rowIndex * 15}px)`, // Depth effect
                  opacity: rowIndex === 0 ? 1 : 1 - (rowIndex * 0.15), // Fade with distance
                }}
              >
                {Array.from({ length: racksPerRow - (rowIndex % 2) }).map((_, rackIndex) => {
                  // Offset every other row for more natural layout
                  const offsetX = rowIndex % 2 === 0 ? 0 : 100 / (racksPerRow * 2);
                  return (
                    <div 
                      key={`rack-${rowIndex}-${rackIndex}`}
                      className="relative flex flex-col justify-between"
                      style={{ 
                        width: `${100 / racksPerRow - 2}%`,
                        height: `${70 - rowIndex * 5}%`,
                        marginLeft: rackIndex === 0 ? `${offsetX}%` : '0',
                        backgroundColor: rackColor,
                        border: '1px solid #333',
                        borderTop: '2px solid #444',
                        borderBottom: '2px solid #222',
                        boxShadow: '0 0 15px rgba(0,0,0,0.7)',
                      }}
                    >
                      {/* Rack frame */}
                      <div className="absolute inset-0 border-x-[3px] border-[#222] opacity-50" />
                      
                      {/* Servers in rack */}
                      {Array.from({ length: serversPerRack }).map((_, serverIndex) => {
                        const serverType = Math.random() > 0.7 ? 'storage' : 'compute';
                        const serverHeight = serverType === 'storage' ? 8 : 4;
                        return (
                          <div 
                            key={`server-${rowIndex}-${rackIndex}-${serverIndex}`}
                            className="w-full relative overflow-hidden"
                            style={{
                              height: `${serverHeight}%`,
                              marginBottom: '1px',
                              backgroundColor: serverIndex % 2 === 0 ? '#1A1A1A' : '#151515',
                              borderTop: '1px solid #333',
                              borderBottom: '1px solid #111',
                            }}
                          >
                            {/* Server face details */}
                            <div className="absolute inset-y-0 left-0 w-1/4 flex flex-col justify-center px-1">
                              {serverType === 'storage' && (
                                <div className="grid grid-cols-4 gap-[1px]">
                                  {Array.from({ length: 8 }).map((_, i) => (
                                    <div 
                                      key={`disk-${rowIndex}-${rackIndex}-${serverIndex}-${i}`}
                                      className="aspect-square bg-[#0A0A0A] rounded-sm"
                                    />
                                  ))}
                                </div>
                              )}
                            </div>
                            
                            {/* Server indicators */}
                            <div className="absolute right-1 top-1/2 -translate-y-1/2 flex space-x-1">
                              {Array.from({ length: Math.floor(2 + Math.random() * 3) }).map((_, i) => {
                                const blinkDelay = Math.random() * 5;
                                const color = indicatorColors[Math.floor(Math.random() * indicatorColors.length)];
                                const size = 1 + Math.random();
                                return (
                                  <motion.div
                                    key={`indicator-${rowIndex}-${rackIndex}-${serverIndex}-${i}`}
                                    className="rounded-full"
                                    style={{ 
                                      width: `${size}px`,
                                      height: `${size}px`,
                                      backgroundColor: color,
                                      boxShadow: `0 0 ${size * 2}px ${color}`,
                                    }}
                                    animate={{
                                      opacity: [0.4, 1, 0.4],
                                    }}
                                    transition={{
                                      duration: 2 + Math.random() * 2,
                                      repeat: Infinity,
                                      delay: blinkDelay,
                                    }}
                                  />
                                );
                              })}
                            </div>
                            
                            {/* Data transfer animation */}
                            {Math.random() > 0.7 && (
                              <motion.div
                                className="absolute inset-y-0 right-0 flex items-center"
                                style={{ width: '70%' }}
                              >
                                <motion.div
                                  className="h-[1px] bg-[#4AFF91] w-full"
                                  style={{
                                    boxShadow: '0 0 4px #4AFF91',
                                    opacity: 0.7,
                                  }}
                                  animate={{
                                    scaleX: [0, 1, 0],
                                    originX: Math.random() > 0.5 ? 0 : 1,
                                  }}
                                  transition={{
                                    duration: 1.5 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 10,
                                    ease: 'easeInOut',
                                  }}
                                />
                              </motion.div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Enhanced lighting and atmosphere effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main ambient light */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(59, 92, 233, 0.15) 0%, rgba(20, 27, 58, 0.1) 70%, rgba(10, 14, 36, 0.2) 100%)',
            mixBlendMode: 'screen',
          }}
        />
        
        {/* Light beams */}
        {Array.from({ length: 3 }).map((_, i) => {
          const posX = 20 + i * 30;
          return (
            <div 
              key={`light-beam-${i}`}
              className="absolute top-0 w-[80px] h-[40%] opacity-10"
              style={{
                left: `${posX}%`,
                background: 'linear-gradient(to bottom, rgba(219, 217, 236, 0.3) 0%, rgba(219, 217, 236, 0) 100%)',
                transform: `rotate(${-5 + Math.random() * 10}deg)`,
              }}
            />
          );
        })}
        
        {/* Dust particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: `${1 + Math.random()}px`,
                height: `${1 + Math.random()}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.1 + Math.random() * 0.2,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                y: {
                  duration: 10 + Math.random() * 20,
                  repeat: Infinity,
                  ease: 'linear',
                },
                opacity: {
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataCenterAnimation;
