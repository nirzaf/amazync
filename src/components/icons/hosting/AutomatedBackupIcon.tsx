import React from 'react';

/**
 * Animated Automated Backup Icon
 * Features a document with animated backup process and restore button
 */
const AutomatedBackupIcon: React.FC = () => {
  return (
    <div className="amazync-backup-icon-container">
      <style>{`
        .amazync-backup-icon-container {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* Document Base */
        .amazync-document {
          width: 30px;
          height: 38px;
          background: linear-gradient(135deg, #f5f5f5, #e6e6e6);
          border-radius: 3px;
          position: relative;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          z-index: 1;
          overflow: hidden;
        }
        
        /* Document Fold */
        .amazync-document::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 8px 8px 0;
          border-color: transparent #d0d0d0 transparent transparent;
        }
        
        /* Document Lines */
        .amazync-document::after {
          content: '';
          position: absolute;
          top: 12px;
          left: 5px;
          right: 5px;
          height: 2px;
          background: #a0a0a0;
          box-shadow: 
            0 5px 0 #a0a0a0,
            0 10px 0 #a0a0a0,
            0 15px 0 #a0a0a0;
          opacity: 0.5;
        }
        
        /* Backup Cloud */
        .amazync-cloud {
          position: absolute;
          top: 5px;
          right: 0;
          width: 30px;
          height: 20px;
          z-index: 2;
        }
        
        .amazync-cloud-path {
          fill: none;
          stroke: #9b59b6;
          stroke-width: 2;
          stroke-linecap: round;
          filter: drop-shadow(0 2px 3px rgba(155, 89, 182, 0.3));
        }
        
        /* Data Transfer Animation */
        .amazync-data-transfer {
          position: absolute;
          top: 15px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 15px;
          z-index: 3;
        }
        
        .amazync-data-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #9b59b6;
          border-radius: 50%;
          left: -1px;
          animation: amazync-data-move 2s infinite;
          opacity: 0;
        }
        
        .amazync-data-dot:nth-child(1) {
          animation-delay: 0s;
        }
        
        .amazync-data-dot:nth-child(2) {
          animation-delay: 0.5s;
        }
        
        .amazync-data-dot:nth-child(3) {
          animation-delay: 1s;
        }
        
        /* Restore Button */
        .amazync-restore-button {
          position: absolute;
          bottom: 5px;
          right: 0;
          width: 20px;
          height: 20px;
          background: #9b59b6;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          animation: amazync-pulse-button 2s infinite alternate;
          z-index: 2;
        }
        
        .amazync-restore-arrow {
          width: 10px;
          height: 10px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(135deg);
          margin-top: 3px;
        }
        
        /* Backup Complete Indicator */
        .amazync-backup-complete {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #2ecc71;
          opacity: 0;
          animation: amazync-show-complete 2s infinite;
          z-index: 3;
        }
        
        /* Animations */
        @keyframes amazync-data-move {
          0% {
            top: 0;
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        
        @keyframes amazync-pulse-button {
          from {
            transform: scale(1);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          }
          to {
            transform: scale(1.1);
            box-shadow: 0 2px 8px rgba(155, 89, 182, 0.5);
          }
        }
        
        @keyframes amazync-show-complete {
          0%, 20% {
            opacity: 0;
          }
          40%, 60% {
            opacity: 1;
          }
          80%, 100% {
            opacity: 0;
          }
        }
      `}</style>
      
      <div className="amazync-document"></div>
      
      <svg className="amazync-cloud" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
        <path 
          className="amazync-cloud-path" 
          d="M7,14 C4.23857625,14 2,11.7614237 2,9 C2,6.23857625 4.23857625,4 7,4 C7.43869029,4 7.86486376,4.06015724 8.27146756,4.17273736 C9.00667979,2.25252872 10.8972442,1 13.0749645,1 C15.6314304,1 17.7684447,2.75022011 18.2054744,5.05090773 C18.4362733,5.01773099 18.6739578,5 18.9150498,5 C21.7414948,5 24,7.2680135 24,10 C24,12.7319865 21.7414948,15 18.9150498,15 L7,15 L7,14 Z"
        />
      </svg>
      
      <div className="amazync-data-transfer">
        <div className="amazync-data-dot"></div>
        <div className="amazync-data-dot"></div>
        <div className="amazync-data-dot"></div>
      </div>
      
      <div className="amazync-backup-complete"></div>
      
      <div className="amazync-restore-button">
        <div className="amazync-restore-arrow"></div>
      </div>
    </div>
  );
};

export default AutomatedBackupIcon;
