import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ServerNetworkAnimation = () => {
  // Generate random server positions
  const servers = [
    { id: 1, x: '10%', y: '15%' },
    { id: 2, x: '25%', y: '65%' },
    { id: 3, x: '45%', y: '25%' },
    { id: 4, x: '65%', y: '70%' },
    { id: 5, x: '85%', y: '30%' },
    { id: 6, x: '90%', y: '80%' },
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
        fromX: fromServer.x,
        fromY: fromServer.y,
        toX: toServer.x,
        toY: toServer.y,
        color: Math.random() > 0.5 ? '#4ADE80' : '#60A5FA',
      };
      
      setDataPackets(prev => [...prev, newPacket]);
      
      // Remove packet after animation completes
      setTimeout(() => {
        setDataPackets(prev => prev.filter(p => p.id !== newPacket.id));
      }, 2000);
    };
    
    const interval = setInterval(() => {
      generatePacket();
    }, 800);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Servers */}
      {servers.map(server => (
        <div 
          key={server.id}
          className="absolute w-16 h-20"
          style={{ left: server.x, top: server.y }}
        >
          <motion.div 
            className="w-full h-full bg-white/10 rounded-md border border-white/20 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: server.id * 0.1 }}
          >
            {/* Server lights */}
            <div className="flex gap-1 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" 
                style={{ animationDelay: '0.5s' }}
              ></div>
            </div>
            {/* Server slots */}
            <div className="w-10 h-1 bg-white/20 rounded-sm mb-1"></div>
            <div className="w-10 h-1 bg-white/20 rounded-sm mb-1"></div>
            <div className="w-10 h-1 bg-white/20 rounded-sm"></div>
          </motion.div>
        </div>
      ))}
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map(connection => {
          const fromServer = servers.find(s => s.id === connection.from);
          const toServer = servers.find(s => s.id === connection.to);
          
          // Calculate positions (adding offset to center of server)
          const fromX = `calc(${fromServer.x} + 2rem)`;
          const fromY = `calc(${fromServer.y} + 2.5rem)`;
          const toX = `calc(${toServer.x} + 2rem)`;
          const toY = `calc(${toServer.y} + 2.5rem)`;
          
          return (
            <motion.line
              key={`${connection.from}-${connection.to}`}
              x1={fromX}
              y1={fromY}
              x2={toX}
              y2={toY}
              stroke="rgba(255, 255, 255, 0.1)"
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
          className="absolute w-2 h-2 rounded-full z-10"
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
          }}
          transition={{
            duration: 2,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default ServerNetworkAnimation;