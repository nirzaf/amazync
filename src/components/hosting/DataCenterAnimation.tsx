import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface DataCenterAnimationProps {
  className?: string;
}

const DataCenterAnimation: React.FC<DataCenterAnimationProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create server racks
  const rackCount = 5;
  const serversPerRack = 12;
  
  // Colors
  const rackColor = '#1A1A1A';
  const floorColor = '#192C99';
  const ceilingColor = '#141B3A';
  const lightColor = '#DBD9EC';
  const indicatorColors = ['#4AFF91', '#3B5CE9', '#DBD9EC', '#1934B6'];
  
  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
      style={{ 
        perspective: '1000px',
        backgroundColor: ceilingColor,
      }}
    >
      {/* Ceiling with ducts and lights */}
      <div className="absolute inset-x-0 top-0 h-1/4 flex justify-center items-start">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`light-${i}`}
            className="w-16 h-4 mx-8 rounded-sm"
            style={{ 
              backgroundColor: lightColor,
              boxShadow: `0 0 20px 5px rgba(219, 217, 236, 0.3)`,
              marginTop: i % 2 === 0 ? '10%' : '5%'
            }}
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      {/* Ducts and cables */}
      <div className="absolute inset-x-0 top-[5%] flex justify-around">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`duct-${i}`}
            className="h-8 rounded-full"
            style={{ 
              width: `${30 + i * 10}%`,
              backgroundColor: '#2A2A2A',
              border: '1px solid #3A3A3A',
            }}
          />
        ))}
      </div>
      
      {/* Cables running across ceiling */}
      <div className="absolute inset-x-0 top-[15%] flex justify-around">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`cable-${i}`}
            className="h-1 rounded-full"
            style={{ 
              width: `${70 + Math.random() * 30}%`,
              backgroundColor: i % 3 === 0 ? '#3B5CE9' : i % 3 === 1 ? '#1934B6' : '#7882B6',
              marginTop: `${Math.random() * 5}%`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>
      
      {/* Server Racks - Perspective View */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ 
          transform: 'rotateX(60deg) translateY(20%)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Floor */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${floorColor}, ${ceilingColor})`,
            opacity: 0.7,
            transform: 'translateZ(-10px)',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        
        {/* Server Racks */}
        <div className="relative w-full h-full flex justify-around items-center">
          {Array.from({ length: rackCount }).map((_, rackIndex) => (
            <div 
              key={`rack-${rackIndex}`}
              className="relative h-[70%] flex flex-col justify-between"
              style={{ 
                width: `${100 / rackCount - 5}%`,
                backgroundColor: rackColor,
                border: '2px solid #333',
                borderRadius: '4px',
                boxShadow: '0 0 15px rgba(0,0,0,0.5)',
                transform: `translateZ(${20 + rackIndex * 10}px)`,
              }}
            >
              {/* Servers in rack */}
              {Array.from({ length: serversPerRack }).map((_, serverIndex) => (
                <div 
                  key={`server-${rackIndex}-${serverIndex}`}
                  className="w-full h-[7%] my-[1%] bg-[#2A2A2A] relative overflow-hidden"
                  style={{
                    borderTop: '1px solid #444',
                    borderBottom: '1px solid #444',
                  }}
                >
                  {/* Server indicators */}
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 flex space-x-1">
                    {Array.from({ length: 3 }).map((_, i) => {
                      const blinkDelay = Math.random() * 5;
                      const color = indicatorColors[Math.floor(Math.random() * indicatorColors.length)];
                      return (
                        <motion.div
                          key={`indicator-${rackIndex}-${serverIndex}-${i}`}
                          className="w-1 h-1 rounded-full"
                          style={{ backgroundColor: color }}
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
                      className="h-[2px] bg-[#4AFF91]"
                      style={{ width: '30%' }}
                      animate={{
                        x: ['-100%', '300%'],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Camera panning effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          x: ['0%', '-5%', '0%', '5%', '0%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      />
      
      {/* Lighting overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(59, 92, 233, 0.1) 0%, rgba(20, 27, 58, 0.3) 70%)',
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
};

export default DataCenterAnimation;
