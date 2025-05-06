import React, { useEffect, useRef } from "react";

/**
 * Enhanced Animated Security & Maintenance Icon (SVG-based, React component)
 * Features improved animations and visual design.
 * Includes interactive elements and dynamic effects.
 */
const SecurityAnimatedIcon: React.FC = () => {
  // Reference for potential future interactive elements
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Add subtle background animation effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Optional: Add event listeners for interaction effects
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      // Apply subtle tilt effect
      container.style.transform = `perspective(1000px) rotateX(${y * 2}deg) rotateY(${x * -2}deg)`;
    };
    
    const handleMouseLeave = () => {
      container.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <div className="amazync-security-icon-container" ref={containerRef}>
      <style>
        {`
          .amazync-security-icon-container {
            width: 300px;
            height: 300px;
            background: linear-gradient(135deg, #e6f2ff 0%, #dbeafe 100%);
            border-radius: 12px;
            box-shadow: 0 15px 30px rgba(0,0,0,0.1), 0 8px 8px rgba(0,0,0,0.1);
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Inter', system-ui, sans-serif;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .amazync-security-icon-container:hover {
            box-shadow: 0 20px 40px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.1);
          }
          
          .amazync-security-icon-svg {
            width: 90%;
            height: 90%;
            display: block;
            overflow: hidden;
            filter: drop-shadow(0 5px 15px rgba(0,0,0,0.1));
          }
          
          /* --- Background Panel Styling --- */
          .amazync-background-panel {
            fill: #F8FAFC;
            stroke: #CBD5E0;
            stroke-width: 1.5px;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.05));
          }
          
          .amazync-panel-content-line {
            stroke: #E2E8F0;
            stroke-width: 2.5px;
            stroke-linecap: round;
            transition: stroke 0.3s ease;
          }
          
          .amazync-panel-scan-line {
            stroke: #3B82F6;
            stroke-width: 2.5px;
            stroke-linecap: round;
            stroke-dasharray: 15 85;
            stroke-dashoffset: 0;
            animation: amazync-panelScan 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            opacity: 0.8;
          }
          
          .amazync-panel-scan-line.s2 {
            animation-delay: 1.5s;
            stroke: #60A5FA;
          }
          
          /* --- Shield Styling --- */
          .amazync-shield-group {
            transform-origin: center center;
            animation: amazync-shieldBreathe 3.5s infinite cubic-bezier(0.4, 0, 0.2, 1);
            filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
          }
          
          .amazync-shield-main-body {
            stroke: #DC2626;
            stroke-width: 3px;
            stroke-linejoin: round;
            filter: drop-shadow(0 2px 4px rgba(220, 38, 38, 0.3));
          }
          
          .amazync-shield-highlight {
            fill: rgba(255, 255, 255, 0.4);
            opacity: 0;
            pointer-events: none;
            animation: amazync-shieldShimmer 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
            animation-delay: 0.5s;
          }
          
          .amazync-shield-inner {
            fill: none;
            stroke: rgba(255, 255, 255, 0.5);
            stroke-width: 1.5px;
            stroke-dasharray: 2 3;
            animation: amazync-shieldPulse 3s infinite alternate;
          }
          
          /* --- Icons on Shield Styling --- */
          .amazync-key-icon, .amazync-sub-shield-icon {
            fill: #2563EB;
            stroke: #60A5FA;
            stroke-width: 1px;
            filter: drop-shadow(0 0 2px rgba(37, 99, 235, 0.5));
            transform-origin: center center;
          }
          
          .amazync-key-icon.k1 {
            animation: amazync-iconFloat 4s ease-in-out infinite, 
                       amazync-iconGlow 2s ease-out infinite;
          }
          
          .amazync-key-icon.k2 {
            animation: amazync-iconFloat 4s ease-in-out infinite reverse, 
                       amazync-iconGlow 2s ease-out infinite;
            animation-delay: 1s, 0.5s;
          }
          
          .amazync-sub-shield-icon {
            animation: amazync-iconPulse 3s ease-in-out infinite, 
                       amazync-iconGlow 2.5s ease-out infinite;
            animation-delay: 0.5s, 1.25s;
            filter: drop-shadow(0 0 3px rgba(37, 99, 235, 0.6));
          }
          
          .amazync-keyhole {
            fill: #EF4444;
            animation: amazync-keyholeGlow 3s infinite alternate;
          }
          
          .amazync-key-bit {
            animation: amazync-keyBitPulse 2s infinite alternate;
            transform-origin: center center;
            animation-delay: var(--bit-delay, 0s);
          }
          
          .amazync-lock-icon {
            animation: amazync-lockPulse 3s infinite alternate;
            transform-origin: center center;
          }
          
          /* --- Animations --- */
          @keyframes amazync-shieldShimmer {
            0%, 100% {
              opacity: 0;
              transform: translateX(-120%) skewX(-30deg);
            }
            50% {
              opacity: 1;
              transform: translateX(120%) skewX(-30deg);
            }
          }
          
          @keyframes amazync-shieldBreathe {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.025); }
          }
          
          @keyframes amazync-shieldPulse {
            0% { opacity: 0.3; stroke-dashoffset: 0; }
            100% { opacity: 0.7; stroke-dashoffset: 10; }
          }
          
          @keyframes amazync-iconPulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.8;
            }
          }
          
          @keyframes amazync-iconFloat {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            25% {
              transform: translateY(-2px) rotate(-2deg);
            }
            75% {
              transform: translateY(2px) rotate(2deg);
            }
          }
          
          @keyframes amazync-iconGlow {
            0%, 100% { filter: drop-shadow(0 0 1px rgba(96, 165, 250, 0.7)); }
            50% { filter: drop-shadow(0 0 5px rgba(96, 165, 250, 0.9)); }
          }
          
          @keyframes amazync-keyholeGlow {
            0% { fill: #EF4444; }
            100% { fill: #F87171; }
          }
          
          @keyframes amazync-keyBitPulse {
            0% { transform: scale(1); }
            100% { transform: scale(1.15); }
          }
          
          @keyframes amazync-lockPulse {
            0% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(1.05); opacity: 1; }
          }
          
          @keyframes amazync-panelScan {
            0% {
              stroke-dashoffset: 160;
              opacity: 0.5;
            }
            50% {
              stroke-dashoffset: 0;
              opacity: 1;
            }
            100% {
              stroke-dashoffset: -160;
              opacity: 0.5;
            }
          }
        `}
      </style>
      
      <svg viewBox="0 0 200 200" className="amazync-security-icon-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="amazync-shieldGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FF8A8A"/>
            <stop offset="100%" stopColor="#E53E3E"/>
          </linearGradient>
          <linearGradient id="amazync-blueGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD"/>
            <stop offset="100%" stopColor="#3B82F6"/>
          </linearGradient>
          <filter id="amazync-shieldDropShadow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="4" dy="6" stdDeviation="3.5" floodColor="#000000" floodOpacity="0.18"/>
          </filter>
          <filter id="amazync-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>

        {/* Background Panel - positioned to avoid any unwanted elements */}
        <g className="amazync-background-panel-group" transform="translate(0, 25)">
          {/* Main panel background with subtle gradient */}
          <rect className="amazync-background-panel" x="15" y="30" width="170" height="140" rx="10"/>
          
          {/* Panel content lines with scanning effect */}
          <line className="amazync-panel-content-line" x1="30" y1="70" x2="90" y2="70"/>
          <line className="amazync-panel-content-line" x1="30" y1="85" x2="170" y2="85"/>
          <line className="amazync-panel-scan-line s1" x1="30" y1="85" x2="170" y2="85"/>
          <line className="amazync-panel-content-line" x1="30" y1="100" x2="150" y2="100"/>
          <line className="amazync-panel-scan-line s2" x1="30" y1="100" x2="150" y2="100"/>
          
          {/* Panel buttons/controls */}
          <rect className="amazync-panel-content-line" x="30" y="118" width="45" height="18" rx="3" fill="#E2E8F0" stroke="none"/>
          <rect className="amazync-panel-content-line" x="85" y="118" width="45" height="18" rx="3" fill="#E2E8F0" stroke="none"/>
        </g>

        {/* Main Shield Group with enhanced animations */}
        <g className="amazync-shield-group" transform="translate(0, 10)" filter="url(#amazync-shieldDropShadow)">
          {/* Main shield body */}
          <path className="amazync-shield-main-body" fill="url(#amazync-shieldGradient)"
                d="M100 25
                   L165 50 L165 115
                   C165 155, 100 185, 100 185
                   C100 185, 35 155, 35 115
                   L35 50 Z"/>

          {/* Inner shield pattern for depth */}
          <path className="amazync-shield-inner" 
                d="M100 35
                   L150 55 L150 110
                   C150 140, 100 165, 100 165
                   C100 165, 50 140, 50 110
                   L50 55 Z"/>

          {/* Shield highlight for shimmer effect */}
          <path className="amazync-shield-highlight"
                d="M100 25
                   L165 50 L165 115
                   C165 155, 100 185, 100 185
                   C100 185, 35 155, 35 115
                   L35 50 Z"/>

          {/* Left floating key with enhanced animation */}
          <g className="amazync-key-icon k1" transform="translate(60 80) rotate(-30)">
            <circle cx="0" cy="-8" r="6.5"/>
            <rect x="-2.5" y="-3" width="5" height="16" rx="1.5"/>
            <rect className="amazync-key-bit" x="-6.5" y="11" width="3.5" height="3.5" style={{ animationDelay: "0.2s" }}/>
            <rect className="amazync-key-bit" x="3" y="11" width="3.5" height="3.5" style={{ animationDelay: "0.4s" }}/>
          </g>

          {/* Right floating key with enhanced animation */}
          <g className="amazync-key-icon k2" transform="translate(140 80) rotate(30)">
            <circle cx="0" cy="-8" r="6.5"/>
            <rect x="-2.5" y="-3" width="5" height="16" rx="1.5"/>
            <rect className="amazync-key-bit" x="-6.5" y="11" width="3.5" height="3.5" style={{ animationDelay: "0.1s" }}/>
            <rect className="amazync-key-bit" x="3" y="11" width="3.5" height="3.5" style={{ animationDelay: "0.3s" }}/>
          </g>

          {/* Center lock icon with enhanced animation */}
          <g className="amazync-sub-shield-icon" transform="translate(100 62) scale(0.38)">
            <path className="amazync-lock-icon" fill="url(#amazync-blueGradient)" 
                  d="M100 20
                     L150 40 L150 90
                     C150 120, 100 140, 100 140
                     C100 140, 50 120, 50 90
                     L50 40 Z"/>
            <circle className="amazync-keyhole" cx="100" cy="70" r="8.5"/>
            <path className="amazync-keyhole" d="M100 75 L94.5 96 L105.5 96 Z"/>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default SecurityAnimatedIcon;
