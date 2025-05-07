import React from 'react';

/**
 * Animated Global CDN Network Icon
 * Features a globe with animated connection points and data transfer animations
 */
const GlobalCDNIcon: React.FC = () => {
  return (
    <div className="amazync-cdn-icon-container">
      <style>{`
        .amazync-cdn-icon-container {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* Globe Base */
        .amazync-globe {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2980b9, #3498db);
          position: relative;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          overflow: hidden;
        }
        
        /* Globe Grid Lines */
        .amazync-globe::before,
        .amazync-globe::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          border-radius: 50%;
          border: 1px dashed rgba(255, 255, 255, 0.3);
        }
        
        .amazync-globe::before {
          border-top: 1px solid rgba(255, 255, 255, 0.4);
          border-bottom: 1px solid rgba(255, 255, 255, 0.4);
          transform: rotate(30deg);
        }
        
        .amazync-globe::after {
          border-left: 1px solid rgba(255, 255, 255, 0.4);
          border-right: 1px solid rgba(255, 255, 255, 0.4);
          transform: rotate(-30deg);
        }
        
        /* Connection Points */
        .amazync-connection-point {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FFF;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
          z-index: 2;
        }
        
        .amazync-connection-point:nth-child(1) {
          top: 8px;
          left: 15px;
          animation: amazync-pulse-point 2s infinite 0.2s;
        }
        
        .amazync-connection-point:nth-child(2) {
          top: 25px;
          right: 5px;
          animation: amazync-pulse-point 2s infinite 0.7s;
        }
        
        .amazync-connection-point:nth-child(3) {
          bottom: 10px;
          left: 10px;
          animation: amazync-pulse-point 2s infinite 1.2s;
        }
        
        .amazync-connection-point:nth-child(4) {
          top: 15px;
          right: 12px;
          animation: amazync-pulse-point 2s infinite 0.5s;
        }
        
        /* Data Transfer Lines */
        .amazync-data-line {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: left center;
          height: 2px;
          background: linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0));
          z-index: 1;
        }
        
        .amazync-data-line:nth-child(5) {
          width: 15px;
          transform: rotate(45deg);
          animation: amazync-data-transfer 1.5s infinite 0.2s;
        }
        
        .amazync-data-line:nth-child(6) {
          width: 20px;
          transform: rotate(170deg);
          animation: amazync-data-transfer 1.5s infinite 0.7s;
        }
        
        .amazync-data-line:nth-child(7) {
          width: 18px;
          transform: rotate(-60deg);
          animation: amazync-data-transfer 1.5s infinite 1.2s;
        }
        
        /* Server Icon */
        .amazync-server {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 14px;
          height: 18px;
          background: #f0f0f0;
          border-radius: 2px;
          border: 1px solid #ddd;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .amazync-server::before,
        .amazync-server::after {
          content: '';
          position: absolute;
          left: 3px;
          width: 8px;
          height: 2px;
          background: #3498db;
        }
        
        .amazync-server::before {
          top: 4px;
        }
        
        .amazync-server::after {
          top: 9px;
        }
        
        /* Animations */
        @keyframes amazync-pulse-point {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes amazync-data-transfer {
          0% {
            opacity: 0;
            transform-origin: left center;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
      
      <div className="amazync-globe">
        <div className="amazync-connection-point"></div>
        <div className="amazync-connection-point"></div>
        <div className="amazync-connection-point"></div>
        <div className="amazync-connection-point"></div>
        <div className="amazync-data-line"></div>
        <div className="amazync-data-line"></div>
        <div className="amazync-data-line"></div>
      </div>
      <div className="amazync-server"></div>
    </div>
  );
};

export default GlobalCDNIcon;
