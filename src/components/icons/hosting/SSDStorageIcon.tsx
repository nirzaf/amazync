import React from 'react';

/**
 * Animated SSD Storage Icon with lightning bolt effect
 * Features a stylized SSD drive with animated lightning bolt
 */
const SSDStorageIcon: React.FC = () => {
  return (
    <div className="amazync-ssd-icon-container">
      <style>{`
        .amazync-ssd-icon-container {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* SSD Drive Base */
        .amazync-ssd-drive {
          width: 40px;
          height: 30px;
          background: linear-gradient(135deg, #f0f0f0 0%, #d8d8d8 100%);
          border-radius: 4px;
          position: relative;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          z-index: 1;
          border: 1px solid #ccc;
        }
        
        /* SSD Connector */
        .amazync-ssd-connector {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 4px;
          background: #333;
          border-radius: 0 0 2px 2px;
        }
        
        /* SSD Chip */
        .amazync-ssd-chip {
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 10px;
          background: #555;
          border-radius: 1px;
        }
        
        /* Lightning Bolt */
        .amazync-lightning {
          position: absolute;
          width: 24px;
          height: 40px;
          z-index: 2;
        }
        
        .amazync-lightning-path {
          fill: none;
          stroke: #FFD700;
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-linejoin: round;
          filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.8));
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: amazync-lightning-animate 1.5s linear infinite;
        }
        
        /* Activity Lights */
        .amazync-activity-light {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #3498db;
          animation: amazync-blink 0.8s infinite alternate;
        }
        
        .amazync-activity-light:nth-child(1) {
          top: 5px;
          right: 5px;
          animation-delay: 0s;
        }
        
        .amazync-activity-light:nth-child(2) {
          top: 5px;
          right: 12px;
          animation-delay: 0.2s;
        }
        
        /* Animations */
        @keyframes amazync-lightning-animate {
          0% {
            stroke-dashoffset: 100;
            opacity: 0;
          }
          20% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          40% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }
        
        @keyframes amazync-blink {
          from {
            opacity: 0.3;
            box-shadow: 0 0 2px #3498db;
          }
          to {
            opacity: 1;
            box-shadow: 0 0 8px #3498db;
          }
        }
      `}</style>
      
      <div className="amazync-ssd-drive">
        <div className="amazync-ssd-chip"></div>
        <div className="amazync-ssd-connector"></div>
        <div className="amazync-activity-light"></div>
        <div className="amazync-activity-light"></div>
      </div>
      
      <svg className="amazync-lightning" viewBox="0 0 24 40" xmlns="http://www.w3.org/2000/svg">
        <path 
          className="amazync-lightning-path" 
          d="M12,2 L5,20 L12,20 L8,38 L18,18 L12,18 L16,2 Z"
        />
      </svg>
    </div>
  );
};

export default SSDStorageIcon;
