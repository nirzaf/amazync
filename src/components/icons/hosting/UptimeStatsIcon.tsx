import React from 'react';

/**
 * Animated Uptime Stats Icon
 * Features a circular progress bar with percentage counter
 */
const UptimeStatsIcon: React.FC = () => {
  return (
    <div className="amazync-uptime-stats-icon-container">
      <style>{`
        .amazync-uptime-stats-icon-container {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* Circle Base */
        .amazync-uptime-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* Progress Track */
        .amazync-progress-track {
          position: absolute;
          top: 5px;
          left: 5px;
          right: 5px;
          bottom: 5px;
          border-radius: 50%;
          border: 3px solid #dee2e6;
        }
        
        /* Progress Indicator */
        .amazync-progress-indicator {
          position: absolute;
          top: 5px;
          left: 5px;
          right: 5px;
          bottom: 5px;
          border-radius: 50%;
          border: 3px solid transparent;
          border-top-color: #40c057;
          border-right-color: #40c057;
          border-bottom-color: #40c057;
          animation: amazync-progress-rotate 3s linear infinite;
        }
        
        /* Percentage Display */
        .amazync-percentage-display {
          font-size: 14px;
          font-weight: bold;
          color: #495057;
          position: relative;
        }
        
        /* Percentage Symbol */
        .amazync-percentage-display::after {
          content: '%';
          font-size: 8px;
          position: absolute;
          top: 2px;
          right: -10px;
        }
        
        /* Server Status Indicator */
        .amazync-server-status {
          position: absolute;
          top: 5px;
          right: 5px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #40c057;
          animation: amazync-status-blink 1.5s infinite alternate;
        }
        
        /* Uptime Label */
        .amazync-uptime-label {
          position: absolute;
          bottom: 10px;
          left: 0;
          right: 0;
          text-align: center;
          font-size: 8px;
          color: #6c757d;
          font-weight: 500;
        }
        
        /* Animations */
        @keyframes amazync-progress-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes amazync-status-blink {
          from {
            opacity: 0.5;
            box-shadow: 0 0 2px #40c057;
          }
          to {
            opacity: 1;
            box-shadow: 0 0 8px #40c057;
          }
        }
        
        @keyframes amazync-counter {
          from {
            content: "99.0";
          }
          to {
            content: "99.9";
          }
        }
      `}</style>
      
      <div className="amazync-uptime-circle">
        <div className="amazync-progress-track"></div>
        <div className="amazync-progress-indicator"></div>
        <div className="amazync-percentage-display">99.9</div>
        <div className="amazync-server-status"></div>
        <div className="amazync-uptime-label">UPTIME</div>
      </div>
    </div>
  );
};

export default UptimeStatsIcon;
