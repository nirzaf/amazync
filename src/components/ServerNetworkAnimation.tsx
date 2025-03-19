import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ServerNetworkAnimation = () => {
  // Generate server positions in a network topology
  const servers = [
    { id: 1, x: '15%', y: '20%' },
    { id: 2, x: '30%', y: '60%' },
    { id: 3, x: '45%', y: '30%' },
    { id: 4, x: '60%', y: '65%' },
    { id: 5, x: '75%', y: '25%' },
    { id: 6, x: '85%', y: '70%' },
  ];

  // Define connections between servers
  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 5 },
    { from: 4, to: 5 },
    { from: 4, to: 6 },
    { from: 5, to: 6 },
  ];

  // State for data packets
  const [dataPackets, setDataPackets] = useState<Array<{
    id: number;
    fromX: string;
    fromY: string;
    toX: string;
    toY: string;
    color: string;
    size: number;
    speed: number;
  }>>([]);
  
  // Generate new data packet at random intervals
  useEffect(() => {
    const generatePacket = () => {
      const connection = connections[Math.floor(Math.random() * connections.length)];
      const fromServer = servers.find(s => s.id === connection.from);
      const toServer = servers.find(s => s.id === connection.to);
      
      const newPacket = {
        id: Date.now(),
        fromX: fromServer?.x || '0%',
        fromY: fromServer?.y || '0%',
        toX: toServer?.x || '0%',
        toY: toServer?.y || '0%',
        color: Math.random() > 0.5 ? '#4ADE80' : '#60A5FA',
        size: Math.random() * 6 + 3, // Random size between 3 and 9
        speed: Math.random() * 0.5 + 0.8, // Random speed between 0.8 and 1.3
      };
      
      setDataPackets(prev => [...prev, newPacket]);
      
      // Remove packet after animation completes
      setTimeout(() => {
        setDataPackets(prev => prev.filter(p => p.id !== newPacket.id));
      }, 1500);
    };
    
    const interval = setInterval(() => {
      generatePacket();
    }, 600); // Increased frequency
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#0A2FB6]">
      {/* Server Network Container */}
      <div className="absolute inset-0">
        {/* Servers */}
        {servers.map(server => (
          <div 
            key={server.id}
            className="absolute w-20 h-24 transform -translate-x-10 -translate-y-12"
            style={{ left: server.x, top: server.y }}
          >
            <motion.div 
              className="w-full h-full bg-white/95 backdrop-blur-sm rounded-md border-2 border-white flex flex-col items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.5)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: server.id * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Server lights */}
              <div className="flex gap-2 mb-3">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-green-400"
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.9, 1, 0.9]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="w-3 h-3 rounded-full bg-blue-400"
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.9, 1, 0.9]
                  }}
                  transition={{
                    duration: 2,
                    delay: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              {/* Server slots */}
              <div className="w-12 h-2 bg-white/90 rounded-sm mb-2"></div>
              <div className="w-12 h-2 bg-white/90 rounded-sm mb-2"></div>
              <div className="w-12 h-2 bg-white/90 rounded-sm"></div>
            </motion.div>
          </div>
        ))}
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          {connections.map(connection => {
            const fromServer = servers.find(s => s.id === connection.from);
            const toServer = servers.find(s => s.id === connection.to);
            
            const parsePercentage = (value: string) => {
              return parseFloat(value) / 100;
            };
            
            const fromXPercent = parsePercentage(fromServer?.x || '0%');
            const fromYPercent = parsePercentage(fromServer?.y || '0%');
            const toXPercent = parsePercentage(toServer?.x || '0%');
            const toYPercent = parsePercentage(toServer?.y || '0%');
            
            return (
              <motion.line
                key={`${connection.from}-${connection.to}`}
                x1={`${fromXPercent * 100}%`}
                y1={`${fromYPercent * 100}%`}
                x2={`${toXPercent * 100}%`}
                y2={`${toYPercent * 100}%`}
                stroke="rgba(255, 255, 255, 0.95)"
                strokeWidth="3"
                strokeDasharray="6 6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: (connection.from + connection.to) * 0.1 }}
              />
            );
          })}
        </svg>
        
        {/* Data packets */}
        {dataPackets.map(packet => (
          <motion.div
            key={packet.id}
            className="absolute rounded-full"
            style={{ 
              zIndex: 2,
              width: `${packet.size * 1.5}px`,
              height: `${packet.size * 1.5}px`,
              backgroundColor: packet.color,
              boxShadow: `0 0 60px ${packet.color}`,
              left: packet.fromX,
              top: packet.fromY
            }}
            animate={{
              left: packet.toX,
              top: packet.toY,
              scale: [1, 1.8, 1],
              opacity: [0.95, 1, 0.95]
            }}
            transition={{
              duration: 1.5 * packet.speed,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Glow effects */}
        {servers.map(server => (
          <motion.div
            key={`glow-${server.id}`}
            className="absolute w-64 h-64 rounded-full"
            style={{
              left: `calc(${server.x} - 5rem)`,
              top: `calc(${server.y} - 5rem)`,
              background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)',
              zIndex: 0
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ServerNetworkAnimation;