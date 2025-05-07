import React from 'react';

/**
 * Animated Page Load Time Icon
 * Features a speedometer with animated needle and loading progress
 */
const PageLoadIcon: React.FC = () => {
  return (
    <div className="amazync-page-load-icon-container">
      <style>{`
        .amazync-page-load-icon-container {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* Speedometer Base */
        .amazync-speedometer {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        /* Speedometer Ticks */
        .amazync-speedometer::before {
          content: '';
          position: absolute;
          top: 5px;
          left: 5px;
          right: 5px;
          bottom: 25px;
          border-radius: 50% 50% 0 0;
          border-top: 2px solid #dee2e6;
          border-left: 2px solid #dee2e6;
          border-right: 2px solid #dee2e6;
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
        
        /* Speedometer Needle */
        .amazync-needle {
          position: absolute;
          bottom: 25px;
          left: 50%;
          transform-origin: bottom center;
          width: 2px;
          height: 20px;
          background: #dc3545;
          transform: translateX(-50%) rotate(-60deg);
          animation: amazync-needle-move 2s ease-in-out infinite alternate;
          z-index: 2;
        }
        
        /* Needle Base */
        .amazync-needle::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: #dc3545;
          border-radius: 50%;
        }
        
        /* Speed Zones */
        .amazync-speed-zones {
          position: absolute;
          top: 5px;
          left: 5px;
          right: 5px;
          bottom: 25px;
          border-radius: 50% 50% 0 0;
          overflow: hidden;
        }
        
        .amazync-speed-zone {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          clip-path: polygon(50% 100%, 0 0, 33% 0);
          background: #dc3545;
          opacity: 0.1;
        }
        
        .amazync-speed-zone:nth-child(2) {
          clip-path: polygon(50% 100%, 33% 0, 66% 0);
          background: #ffc107;
          opacity: 0.15;
        }
        
        .amazync-speed-zone:nth-child(3) {
          clip-path: polygon(50% 100%, 66% 0, 100% 0);
          background: #28a745;
          opacity: 0.2;
        }
        
        /* Loading Bar */
        .amazync-loading-bar {
          position: absolute;
          bottom: 10px;
          left: 10px;
          right: 10px;
          height: 4px;
          background: #e9ecef;
          border-radius: 2px;
          overflow: hidden;
        }
        
        .amazync-loading-progress {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: linear-gradient(90deg, #4dabf7, #3498db);
          animation: amazync-loading 1.5s ease-in-out infinite;
          border-radius: 2px;
        }
        
        /* Time Display */
        .amazync-time-display {
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 8px;
          font-weight: bold;
          color: #495057;
          white-space: nowrap;
        }
        
        /* Animations */
        @keyframes amazync-needle-move {
          0% {
            transform: translateX(-50%) rotate(-60deg);
          }
          50% {
            transform: translateX(-50%) rotate(60deg);
          }
          100% {
            transform: translateX(-50%) rotate(-60deg);
          }
        }
        
        @keyframes amazync-loading {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
      
      <div className="amazync-speedometer">
        <div className="amazync-speed-zones">
          <div className="amazync-speed-zone"></div>
          <div className="amazync-speed-zone"></div>
          <div className="amazync-speed-zone"></div>
        </div>
        <div className="amazync-needle"></div>
        <div className="amazync-loading-bar">
          <div className="amazync-loading-progress"></div>
        </div>
        <div className="amazync-time-display">0.5s</div>
      </div>
    </div>
  );
};

export default PageLoadIcon;
