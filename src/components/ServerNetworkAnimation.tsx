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
  const [dataPackets, setDataPackets] = useState([]);
  
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
      };
      
      setDataPackets(prev => [...prev, newPacket]);
      
      // Remove packet after animation completes
      setTimeout(() => {
        setDataPackets(prev => prev.filter(p => p.id !== newPacket.id));
      }, 1500);
    };
    
    const interval = setInterval(() => {
      generatePacket();
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* Semi-transparent overlay to improve text visibility */}
      <div className="absolute inset-0 bg-[#0A2FB6]/30 z-10"></div>
      {/* Servers */}
      {servers.map(server => (
        <div 
          key={server.id}
          className="absolute w-16 h-20 transform -translate-x-8 -translate-y-10"
          style={{ left: server.x, top: server.y }}
        >
          <motion.div 
            className="w-full h-full bg-white/30 backdrop-blur-sm rounded-md border border-white/40 flex flex-col items-center justify-center shadow-lg shadow-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: server.id * 0.1 }}
          >
            {/* Server lights */}
            <div className="flex gap-1 mb-2">
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-green-400"
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-blue-400"
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.6, 1, 0.6]
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
            <div className="w-10 h-1 bg-white/20 rounded-sm mb-1"></div>
            <div className="w-10 h-1 bg-white/20 rounded-sm mb-1"></div>
            <div className="w-10 h-1 bg-white/20 rounded-sm"></div>
          </motion.div>
        </div>
      ))}
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full z-0">
        {connections.map(connection => {
          const fromServer = servers.find(s => s.id === connection.from);
          const toServer = servers.find(s => s.id === connection.to);
          
          // Parse percentage values to calculate actual positions
          const parsePercentage = (value) => {
            return parseFloat(value) / 100;
          };
          
          // Calculate positions (adding offset to center of server)
          const fromXPercent = parsePercentage(fromServer.x);
          const fromYPercent = parsePercentage(fromServer.y);
          const toXPercent = parsePercentage(toServer.x);
          const toYPercent = parsePercentage(toServer.y);
          
          return (
            <motion.line
              key={`${connection.from}-${connection.to}`}
              x1={`${fromXPercent * 100}%`}
              y1={`${fromYPercent * 100}%`}
              x2={`${toXPercent * 100}%`}
              y2={`${toYPercent * 100}%`}
              stroke="rgba(255, 255, 255, 0.35)"
              strokeWidth="1"
              strokeDasharray="4 4"
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
          className="absolute w-3 h-3 rounded-full z-20 blur-[2px]"
          style={{ 
            backgroundColor: packet.color,
            boxShadow: `0 0 8px ${packet.color}`,
            left: packet.fromX,
            top: packet.fromY
          }}
          animate={{
            left: packet.toX,
            top: packet.toY,
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default ServerNetworkAnimation;