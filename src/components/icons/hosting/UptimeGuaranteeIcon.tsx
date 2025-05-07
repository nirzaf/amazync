import React from 'react';

/**
 * Animated Uptime Guarantee Icon
 * Features a checkmark in a circle with a pulsing effect and uptime counter
 */
const UptimeGuaranteeIcon: React.FC = () => {
  return (
    <div className="amazync-uptime-icon-container">
      <style>{`
        .amazync-uptime-icon-container {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* Circle Base */
        .amazync-uptime-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        /* Pulsing Border */
        .amazync-uptime-circle::before {
          content: '';
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border-radius: 50%;
          border: 2px solid #4CAF50;
          opacity: 0;
          animation: amazync-pulse 2s ease-out infinite;
        }
        
        /* Checkmark */
        .amazync-checkmark {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: amazync-draw-check 1.5s ease-in-out forwards;
          stroke: #4CAF50;
          stroke-width: 3;
          transform-origin: 50% 50%;
          z-index: 2;
        }
        
        /* Percentage Counter */
        .amazync-percentage {
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          background: #4CAF50;
          color: white;
          font-size: 10px;
          font-weight: bold;
          padding: 2px 6px;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          white-space: nowrap;
        }
        
        /* Server Status Dot */
        .amazync-status-dot {
          position: absolute;
          top: 5px;
          right: 5px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #4CAF50;
          animation: amazync-blink 1s infinite alternate;
        }
        
        /* Animations */
        @keyframes amazync-pulse {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          70% {
            transform: scale(1.1);
            opacity: 0;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
        
        @keyframes amazync-draw-check {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes amazync-blink {
          from {
            opacity: 0.5;
            box-shadow: 0 0 2px #4CAF50;
          }
          to {
            opacity: 1;
            box-shadow: 0 0 8px #4CAF50;
          }
        }
        
        @keyframes amazync-counter {
          from {
            content: "99.0%";
          }
          to {
            content: "99.9%";
          }
        }
      `}</style>
      
      <div className="amazync-uptime-circle">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            className="amazync-checkmark"
            d="M7 15L13 21L23 9" 
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="amazync-status-dot"></div>
      </div>
      <div className="amazync-percentage">99.9%</div>
    </div>
  );
};

export default UptimeGuaranteeIcon;
