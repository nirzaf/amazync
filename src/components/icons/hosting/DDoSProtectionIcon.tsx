import React from 'react';

/**
 * Animated DDoS Protection Icon
 * Features a shield with animated attack particles being blocked
 */
const DDoSProtectionIcon: React.FC = () => {
  return (
    <div className="amazync-ddos-icon-container">
      <style>{`
        .amazync-ddos-icon-container {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* Shield Base */
        .amazync-shield {
          width: 40px;
          height: 48px;
          background: linear-gradient(135deg, #4c6ef5 0%, #3b5bdb 100%);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          position: relative;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        
        /* Shield Inner */
        .amazync-shield-inner {
          width: 34px;
          height: 42px;
          background: linear-gradient(135deg, #748ffc 0%, #5c7cfa 100%);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* Shield Icon */
        .amazync-shield-icon {
          width: 20px;
          height: 20px;
          background: white;
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'%3E%3C/path%3E%3C/svg%3E");
          mask-size: contain;
          mask-repeat: no-repeat;
          mask-position: center;
        }
        
        /* Attack Particles */
        .amazync-attack-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #fa5252;
          border-radius: 50%;
          opacity: 0;
          z-index: 0;
        }
        
        .amazync-attack-particle:nth-child(1) {
          top: 10px;
          left: -10px;
          animation: amazync-attack-right 2s infinite 0.1s;
        }
        
        .amazync-attack-particle:nth-child(2) {
          top: 20px;
          left: -15px;
          animation: amazync-attack-right 2s infinite 0.5s;
        }
        
        .amazync-attack-particle:nth-child(3) {
          top: 30px;
          left: -12px;
          animation: amazync-attack-right 2s infinite 0.9s;
        }
        
        .amazync-attack-particle:nth-child(4) {
          top: 10px;
          right: -10px;
          animation: amazync-attack-left 2s infinite 0.3s;
        }
        
        .amazync-attack-particle:nth-child(5) {
          top: 20px;
          right: -15px;
          animation: amazync-attack-left 2s infinite 0.7s;
        }
        
        .amazync-attack-particle:nth-child(6) {
          top: 30px;
          right: -12px;
          animation: amazync-attack-left 2s infinite 1.1s;
        }
        
        .amazync-attack-particle:nth-child(7) {
          top: -10px;
          left: 20px;
          animation: amazync-attack-down 2s infinite 0.2s;
        }
        
        .amazync-attack-particle:nth-child(8) {
          top: -15px;
          left: 30px;
          animation: amazync-attack-down 2s infinite 0.6s;
        }
        
        /* Shield Pulse Effect */
        .amazync-shield::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: rgba(76, 110, 245, 0.3);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          animation: amazync-shield-pulse 2s infinite;
          z-index: -1;
        }
        
        /* Status Label */
        .amazync-status-label {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          background: #4c6ef5;
          color: white;
          font-size: 8px;
          font-weight: bold;
          padding: 2px 6px;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          white-space: nowrap;
        }
        
        /* Animations */
        @keyframes amazync-attack-right {
          0% {
            transform: translateX(0) scale(1);
            opacity: 0;
          }
          50% {
            transform: translateX(15px) scale(1.5);
            opacity: 1;
          }
          100% {
            transform: translateX(25px) scale(0.5);
            opacity: 0;
          }
        }
        
        @keyframes amazync-attack-left {
          0% {
            transform: translateX(0) scale(1);
            opacity: 0;
          }
          50% {
            transform: translateX(-15px) scale(1.5);
            opacity: 1;
          }
          100% {
            transform: translateX(-25px) scale(0.5);
            opacity: 0;
          }
        }
        
        @keyframes amazync-attack-down {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          50% {
            transform: translateY(15px) scale(1.5);
            opacity: 1;
          }
          100% {
            transform: translateY(25px) scale(0.5);
            opacity: 0;
          }
        }
        
        @keyframes amazync-shield-pulse {
          0% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            opacity: 0.7;
          }
        }
      `}</style>
      
      <div className="amazync-attack-particle"></div>
      <div className="amazync-attack-particle"></div>
      <div className="amazync-attack-particle"></div>
      <div className="amazync-attack-particle"></div>
      <div className="amazync-attack-particle"></div>
      <div className="amazync-attack-particle"></div>
      <div className="amazync-attack-particle"></div>
      <div className="amazync-attack-particle"></div>
      
      <div className="amazync-shield">
        <div className="amazync-shield-inner">
          <div className="amazync-shield-icon"></div>
        </div>
      </div>
      
      <div className="amazync-status-label">Protected</div>
    </div>
  );
};

export default DDoSProtectionIcon;
