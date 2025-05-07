import React from 'react';

/**
 * Animated Data Centers Icon
 * Features a world map with pulsing data center locations
 */
const DataCentersIcon: React.FC = () => {
  return (
    <div className="amazync-data-centers-icon-container">
      <style>{`
        .amazync-data-centers-icon-container {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* World Map Base */
        .amazync-world-map {
          width: 50px;
          height: 40px;
          background: linear-gradient(135deg, #e9ecef, #dee2e6);
          border-radius: 4px;
          position: relative;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        /* Continent Shapes - Simplified */
        .amazync-continent {
          position: absolute;
          background: #adb5bd;
          border-radius: 1px;
        }
        
        /* North America */
        .amazync-continent:nth-child(1) {
          top: 8px;
          left: 5px;
          width: 12px;
          height: 10px;
          clip-path: polygon(0% 0%, 100% 30%, 80% 100%, 0% 70%);
        }
        
        /* South America */
        .amazync-continent:nth-child(2) {
          top: 20px;
          left: 12px;
          width: 8px;
          height: 12px;
          clip-path: polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%);
        }
        
        /* Europe/Africa */
        .amazync-continent:nth-child(3) {
          top: 10px;
          left: 22px;
          width: 10px;
          height: 18px;
          clip-path: polygon(0% 0%, 100% 10%, 80% 100%, 20% 80%);
        }
        
        /* Asia/Australia */
        .amazync-continent:nth-child(4) {
          top: 8px;
          right: 5px;
          width: 15px;
          height: 15px;
          clip-path: polygon(0% 20%, 70% 0%, 100% 30%, 90% 100%, 30% 80%);
        }
        
        /* Data Center Locations */
        .amazync-data-center {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #3498db;
          border-radius: 50%;
          z-index: 2;
        }
        
        .amazync-data-center::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: rgba(52, 152, 219, 0.3);
          border-radius: 50%;
          animation: amazync-pulse-location 2s infinite;
          z-index: 1;
        }
        
        /* North America Centers */
        .amazync-data-center:nth-child(5) {
          top: 10px;
          left: 8px;
          animation-delay: 0.1s;
        }
        
        .amazync-data-center:nth-child(6) {
          top: 14px;
          left: 12px;
          animation-delay: 0.5s;
        }
        
        /* Europe Centers */
        .amazync-data-center:nth-child(7) {
          top: 12px;
          left: 25px;
          animation-delay: 0.3s;
        }
        
        .amazync-data-center:nth-child(8) {
          top: 16px;
          left: 28px;
          animation-delay: 0.7s;
        }
        
        /* Asia Centers */
        .amazync-data-center:nth-child(9) {
          top: 12px;
          right: 10px;
          animation-delay: 0.2s;
        }
        
        .amazync-data-center:nth-child(10) {
          top: 18px;
          right: 8px;
          animation-delay: 0.6s;
        }
        
        /* Australia Center */
        .amazync-data-center:nth-child(11) {
          bottom: 10px;
          right: 6px;
          animation-delay: 0.4s;
        }
        
        /* South America Center */
        .amazync-data-center:nth-child(12) {
          bottom: 12px;
          left: 14px;
          animation-delay: 0.8s;
        }
        
        /* Counter Display */
        .amazync-counter-display {
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          background: #3498db;
          color: white;
          font-size: 10px;
          font-weight: bold;
          padding: 1px 6px;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          white-space: nowrap;
        }
        
        /* Animations */
        @keyframes amazync-pulse-location {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          70% {
            transform: scale(2);
            opacity: 0;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
      
      <div className="amazync-world-map">
        <div className="amazync-continent"></div>
        <div className="amazync-continent"></div>
        <div className="amazync-continent"></div>
        <div className="amazync-continent"></div>
        
        <div className="amazync-data-center"></div>
        <div className="amazync-data-center"></div>
        <div className="amazync-data-center"></div>
        <div className="amazync-data-center"></div>
        <div className="amazync-data-center"></div>
        <div className="amazync-data-center"></div>
        <div className="amazync-data-center"></div>
        <div className="amazync-data-center"></div>
        
        <div className="amazync-counter-display">24</div>
      </div>
    </div>
  );
};

export default DataCentersIcon;
