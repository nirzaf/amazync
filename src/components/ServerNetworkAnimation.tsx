import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface Server {
  id: number;
  x: number;
  y: number;
}

interface Connection {
  from: number;
  to: number;
}

interface DataPacket {
  id: number;
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  color: string;
  size: number;
}

const ServerNetworkAnimation: React.FC = () => {
  const { colors } = useTheme();
  const [dataPackets, setDataPackets] = useState<DataPacket[]>([]);
  const [packetId, setPacketId] = useState(0);

  // Generate server positions in a network topology
  const servers: Server[] = [
    { id: 1, x: 20, y: 20 },
    { id: 2, x: 80, y: 20 },
    { id: 3, x: 20, y: 50 },
    { id: 4, x: 80, y: 50 },
    { id: 5, x: 20, y: 80 },
    { id: 6, x: 80, y: 80 },
  ];

  // Define connections between servers
  const connections: Connection[] = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
    { from: 3, to: 5 },
    { from: 4, to: 6 },
    { from: 5, to: 6 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a new data packet
      const connection = connections[Math.floor(Math.random() * connections.length)];
      const fromServer = servers.find(s => s.id === connection.from)!;
      const toServer = servers.find(s => s.id === connection.to)!;

      const newPacket: DataPacket = {
        id: packetId,
        fromX: fromServer.x,
        fromY: fromServer.y,
        toX: toServer.x,
        toY: toServer.y,
        color: Math.random() > 0.5 ? colors.chiliRed : colors.lavenderWeb,
        size: Math.random() * 4 + 2, // Random size between 2 and 6 pixels
      };

      setDataPackets(prev => [...prev, newPacket]);
      setPacketId(prev => prev + 1);

      // Remove the packet after animation completes
      setTimeout(() => {
        setDataPackets(prev => prev.filter(p => p.id !== newPacket.id));
      }, 2000);
    }, 800); // Increased frequency of data packets

    return () => clearInterval(interval);
  }, [packetId]);

  return (
    <div className="w-full h-full relative">
      <svg width="100%" height="100%" className="absolute inset-0">
        {/* Connection lines */}
        {connections.map(({ from, to }) => {
          const fromServer = servers.find(s => s.id === from)!;
          const toServer = servers.find(s => s.id === to)!;
          return (
            <line
              key={`${from}-${to}`}
              x1={`${fromServer.x}%`}
              y1={`${fromServer.y}%`}
              x2={`${toServer.x}%`}
              y2={`${toServer.y}%`}
              stroke={`${colors.lavenderWeb}`}
              strokeWidth="2"
              strokeOpacity="0.9"
              strokeDasharray="4 4"
            />
          );
        })}

        {/* Data packets */}
        {dataPackets.map((packet) => (
          <motion.circle
            key={packet.id}
            cx={`${packet.fromX}%`}
            cy={`${packet.fromY}%`}
            r={packet.size}
            fill={packet.color}
            initial={{ opacity: 0.8 }}
            animate={{
              cx: [`${packet.fromX}%`, `${packet.toX}%`],
              cy: [`${packet.fromY}%`, `${packet.toY}%`],
              opacity: [0.8, 0]
            }}
            transition={{
              duration: 2,
              ease: "linear"
            }}
            style={{
              filter: 'drop-shadow(0 0 20px currentColor)'
            }}
          />
        ))}
      </svg>

      {/* Servers */}
      {servers.map((server) => (
        <div
          key={server.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
          style={{
            left: `${server.x}%`,
            top: `${server.y}%`,
          }}
        >
          {/* Server container */}
          <div 
            className={`w-12 h-12 rounded-lg relative transition-transform transform group-hover:scale-110`}
            style={{
              background: `${colors.persianBlue}`,
              opacity: 0.8,
              border: `2px solid ${colors.lavenderWeb}90`,
              boxShadow: `0 0 20px ${colors.lavenderWeb}`,
            }}
          >
            {/* Server lights */}
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full animate-pulse"
              style={{ 
                backgroundColor: colors.chiliRed,
                boxShadow: `0 0 10px ${colors.chiliRed}`,
              }} 
            />
            
            {/* Server slots */}
            <div className="absolute bottom-2 left-2 right-2 flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-1 rounded-full"
                  style={{
                    backgroundColor: colors.lavenderWeb,
                    opacity: 0.7
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServerNetworkAnimation;