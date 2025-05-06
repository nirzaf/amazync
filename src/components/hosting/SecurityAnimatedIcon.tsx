import React from "react";

/**
 * Hyper-Realistic Animated Security & Maintenance Icon
 * Features red shield with blue accents, animated scan lines, and particle effects
 */
const SecurityAnimatedIcon: React.FC = () => {
  return (
    <div className="amazync-security-icon-container">
      <style>
        {`
          .amazync-security-icon-container {
            width: 300px;
            height: 300px;
            background-color: #fff;
            border-radius: 24px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.12), 0 4px 10px rgba(0,0,0,0.08);
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Inter', system-ui, sans-serif;
          }
          
          .amazync-security-icon-svg {
            width: 100%;
            height: 100%;
            display: block;
            overflow: visible;
          }
          
          /* Background Panel Styling */
          .amazync-background-panel {
            fill: #F8F9FA;
            stroke: #D1D5DB;
            stroke-width: 1px;
          }
          
          .amazync-panel-inner-shadow {
            fill: none;
            stroke: rgba(0,0,0,0.05);
            stroke-width: 10px;
            filter: blur(4px);
          }
          
          .amazync-panel-header-dot {
            fill: #A0AEC0;
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
          
          /* Shield Styling */
          .amazync-shield-group {
            transform-origin: center center;
            animation: amazync-shieldBreathe 4.5s infinite ease-in-out;
          }
          
          .amazync-shield-main-body {
            stroke: #800000;
            stroke-width: 4px;
            stroke-linejoin: round;
          }
          
          .amazync-shield-edge-highlight {
            fill: none;
            stroke: #FF9999;
            stroke-width: 1.5px;
            stroke-linejoin: round;
            opacity: 0.7;
          }
          
          .amazync-shield-inner-glow {
            fill: none;
            stroke: rgba(255,150,150,0.25);
            stroke-width: 10px;
            filter: blur(5px);
            opacity: 0.8;
          }
          
          .amazync-shield-highlight-shimmer {
            fill: rgba(255,255,255,0.3);
            opacity: 0;
            pointer-events: none;
            animation: amazync-shieldShimmer 3.5s cubic-bezier(0.165,0.84,0.44,1) infinite;
            animation-delay: 0.5s;
          }
          
          .amazync-shield-hex-pattern path {
            fill: none;
            stroke: rgba(255,100,100,0.15);
            stroke-width: 0.75px;
            stroke-dasharray: 5 5;
            animation: amazync-shieldPatternFlow 8s linear infinite;
          }
          
          .amazync-shield-activation-ring {
            fill: none;
            stroke: #FF9999;
            stroke-width: 1px;
            opacity: 0;
            transform-origin: center center;
            animation: amazync-shieldActivation 2s cubic-bezier(0.23,1,0.32,1) infinite;
          }
          
          /* Key and Icon Styling */
          .amazync-key-icon-shape, .amazync-sub-shield-icon-shape {
            fill: #007FFF;
            stroke: #80BFFF;
            stroke-width: 0.75px;
          }
          
          .amazync-key-icon-highlight, .amazync-sub-shield-highlight {
            fill: #FFFFFF;
            opacity: 0.8;
          }
          
          .amazync-icon-group {
            animation: amazync-iconPulse 3s ease-in-out infinite, 
                       amazync-iconGlow 1.5s ease-in-out infinite;
          }
          
          .amazync-key-icon.k1 .amazync-icon-group {
            animation-delay: 0s, 0.15s;
          }
          
          .amazync-key-icon.k2 .amazync-icon-group {
            animation-delay: 1s, 1.15s;
          }
          
          .amazync-sub-shield-icon .amazync-icon-group {
            animation-delay: 2s, 2.15s;
          }
          
          .amazync-key-turn-element {
            transform-origin: center center;
            animation: amazync-keyTurn 0.5s ease-in-out infinite alternate;
            animation-delay: 1.35s;
          }
          
          .amazync-keyhole {
            fill: #0059B3;
          }
          
          .amazync-keyhole-accent {
            fill: #800000;
          }
          
          /* Particle and Aura Effects */
          .amazync-aura {
            fill: none;
            stroke: #007FFF;
            stroke-width: 0.5px;
            opacity: 0;
            transform-origin: center center;
            animation: amazync-auraPulse 3s ease-out infinite;
          }
          
          .amazync-aura.a2 {
            animation-delay: -1.5s;
            opacity: 0.2;
          }
          
          .amazync-particle {
            opacity: 0;
            animation: amazync-particleEffect 3s ease-out infinite;
          }
          
          .amazync-particle.p-blue {
            fill: #007FFF;
          }
          
          .amazync-particle.p-gold {
            fill: #FFD700;
          }
          
          .amazync-particles g:nth-child(1) .amazync-particle { animation-delay: 0s; }
          .amazync-particles g:nth-child(2) .amazync-particle { animation-delay: -0.4s; }
          .amazync-particles g:nth-child(3) .amazync-particle { animation-delay: -0.8s; }
          .amazync-particles g:nth-child(4) .amazync-particle { animation-delay: -1.2s; }
          .amazync-particles g:nth-child(5) .amazync-particle { animation-delay: -1.6s; }
          .amazync-particles g:nth-child(6) .amazync-particle { animation-delay: -2.0s; }
          
          /* Animations */
          @keyframes amazync-shieldShimmer {
            0%, 100% { opacity: 0; transform: translateX(-160%) skewX(-40deg); }
            50% { opacity: 1; transform: translateX(160%) skewX(-40deg); }
          }
          
          @keyframes amazync-shieldBreathe {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.025); }
          }
          
          @keyframes amazync-shieldActivation {
            0% { transform: scale(0.8); opacity: 0.7; }
            70% { transform: scale(1.15); opacity: 0.2; }
            100% { transform: scale(1.2); opacity: 0; }
          }
          
          @keyframes amazync-shieldPatternFlow {
            from { stroke-dashoffset: 0; }
            to { stroke-dashoffset: 20; }
          }
          
          @keyframes amazync-iconPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          
          @keyframes amazync-iconGlow {
            0%, 100% { filter: drop-shadow(0 0 2px rgba(0,127,255,0.8)); }
            50% { filter: drop-shadow(0 0 7px rgba(0,127,255,0.8)) drop-shadow(0 0 15px rgba(0,127,255,0.8)); }
          }
          
          @keyframes amazync-keyTurn {
            from { transform: rotate(-15deg); }
            to { transform: rotate(15deg); }
          }
          
          @keyframes amazync-panelScan {
            0% { stroke-dashoffset: 170; }
            45%, 55% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -170; }
          }
          
          @keyframes amazync-dataPacketFlow {
            0% { opacity: 0; transform: translate(0, 5px) scale(0.8); }
            20% { opacity: 0.9; transform: translate(0, 0) scale(1); }
            80% { opacity: 0.9; transform: translate(0, 0) scale(1); }
            100% { opacity: 0; transform: translate(0, -5px) scale(0.8); }
          }
          
          @keyframes amazync-drawGraph {
            0% { stroke-dashoffset: 100; opacity: 0.5; }
            50% { stroke-dashoffset: 0; opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 1; }
          }
          
          @keyframes amazync-particleEffect {
            0% { transform: translate(var(--x-start, 0px), var(--y-start, 0px)) scale(0.3); opacity: 0; }
            30% { opacity: 1; transform: scale(1); }
            100% { transform: translate(var(--x-end, 0px), var(--y-end, -25px)) scale(0); opacity: 0; }
          }
          
          @keyframes amazync-auraPulse {
            0%, 100% { transform: scale(0.95); opacity: 0.3; }
            50% { transform: scale(1.05); opacity: 0.7; }
          }
        `}
      </style>
      
      <svg viewBox="0 0 200 200" className="amazync-security-icon-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="amazync-shieldGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FF4D4D"/>
            <stop offset="100%" stopColor="#CC0000"/>
          </linearGradient>
          <filter id="amazync-shieldDropShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="5" dy="10" stdDeviation="6" floodColor="#000000" floodOpacity="0.15"/>
          </filter>
          <clipPath id="amazync-shieldClipPath">
            <path d="M100 12 L180 45 L180 115 C180 170, 100 198, 100 198 C100 198, 20 170, 20 115 L20 45 Z"/>
          </clipPath>
        </defs>
        
        {/* Background UI Panel Group */}
        <g className="amazync-background-panel-group">
          <rect className="amazync-background-panel" x="8" y="22" width="184" height="156" rx="12"/>
          <path className="amazync-panel-inner-shadow" d="M18 32 h164 v136 h-164 Z" />
          <circle className="amazync-panel-header-dot" cx="25" cy="38" r="2.5"/>
          <circle className="amazync-panel-header-dot" cx="35" cy="38" r="2.5"/>
          <circle className="amazync-panel-header-dot" cx="45" cy="38" r="2.5"/>
          
          {/* Graph and scan lines */}
          <path className="amazync-graph-line" d="M30 100 Q 50 80, 70 95 T 110 85 T 150 100 T 170 90"/>
          <line className="amazync-panel-content-line" x1="30" y1="120" x2="90" y2="120"/>
          <line className="amazync-panel-scan-line s1" x1="30" y1="120" x2="90" y2="120"/>
          <line className="amazync-panel-content-line" x1="30" y1="135" x2="170" y2="135"/>
          <line className="amazync-panel-scan-line s2" x1="30" y1="135" x2="170" y2="135"/>
          
          {/* Data packets */}
          <rect className="amazync-data-packet" x="150" y="55" width="5" height="3" rx="1"/>
          <rect className="amazync-data-packet" x="160" y="65" width="5" height="3" rx="1"/>
          <rect className="amazync-data-packet" x="145" y="75" width="5" height="3" rx="1"/>
        </g>
        
        {/* Shield Aura */}
        <circle className="amazync-aura" cx="100" cy="100" r="90"/>
        <circle className="amazync-aura a2" cx="100" cy="100" r="98"/>
        
        {/* Shield Group */}
        <g className="amazync-shield-group" transform="translate(0, -5)" filter="url(#amazync-shieldDropShadow)">
          <path className="amazync-shield-main-body" fill="url(#amazync-shieldGradient)" 
                d="M100 12 L180 45 L180 115 C180 170, 100 198, 100 198 C100 198, 20 170, 20 115 L20 45 Z"/>
          <path className="amazync-shield-edge-highlight" 
                d="M100 12 L180 45 L180 115 C180 170, 100 198, 100 198 C100 198, 20 170, 20 115 L20 45 Z"/>
          <path className="amazync-shield-inner-glow" 
                d="M100 12 L180 45 L180 115 C180 170, 100 198, 100 198 C100 198, 20 170, 20 115 L20 45 Z"/>
          <circle className="amazync-shield-activation-ring" cx="100" cy="105" r="60"/>
          
          <g className="amazync-shield-hex-pattern" clipPath="url(#amazync-shieldClipPath)">
            <path d="M-5 100 L25 50 L85 50 L115 100 L85 150 L25 150 Z"/>
            <path d="M85 100 L115 50 L175 50 L205 100 L175 150 L115 150 Z"/>
            <path d="M45 20 L75 -30 L135 -30 L165 20 L135 70 L75 70 Z"/>
            <path d="M45 180 L75 130 L135 130 L165 180 L135 230 L75 230 Z"/>
          </g>
          
          <path className="amazync-shield-highlight-shimmer" 
                d="M100 12 L180 45 L180 115 C180 170, 100 198, 100 198 C100 198, 20 170, 20 115 L20 45 Z"/>
          
          {/* Left Key */}
          <g className="amazync-key-icon k1" transform="translate(50 95) rotate(-38) scale(0.85)">
            <g className="amazync-icon-group">
              <path className="amazync-key-icon-shape" d="M0 -15 A10 10 0 1 1 0 -14.99 Z M-2.5 -5 L2.5 -5 L2.5 18 L-2.5 18 Z M-7 12 L-4 12 L-4 15 L-7 15 Z M4 12 L7 12 L7 15 L4 15 Z M-7 8 L-4 8 L-4 11 L-7 11 Z M4 8 L7 8 L7 11 L4 8Z"/>
              <path className="amazync-key-icon-highlight" d="M-1 -14 A8 8 0 0 1 2 -14 L1 -5 L-1 -5 Z"/>
            </g>
          </g>
          
          {/* Right Key */}
          <g className="amazync-key-icon k2" transform="translate(150 95) rotate(38) scale(0.85)">
            <g className="amazync-icon-group">
              <path className="amazync-key-icon-shape" d="M0 -15 A10 10 0 1 1 0 -14.99 Z M-2.5 -5 L2.5 -5 L2.5 18 L-2.5 18 Z M-7 12 L-4 12 L-4 15 L-7 15 Z M4 12 L7 12 L7 15 L4 15 Z M-7 8 L-4 8 L-4 11 L-7 11 Z M4 8 L7 8 L7 11 L4 8Z"/>
              <path className="amazync-key-icon-highlight" d="M-1 -14 A8 8 0 0 1 2 -14 L1 -5 L-1 -5 Z"/>
            </g>
          </g>
          
          {/* Center Shield with Keyhole */}
          <g className="amazync-sub-shield-icon" transform="translate(100 55) scale(0.42)">
            <g className="amazync-icon-group">
              <path className="amazync-sub-shield-icon-shape" d="M100 15 L160 40 L160 90 C160 135 100 160 100 160 C100 160 40 135 40 90 L40 40 Z"/>
              <path className="amazync-sub-shield-highlight" d="M100 18 L150 42 L150 50 L100 30 Z"/>
              <g className="amazync-key-turn-element">
                <circle className="amazync-keyhole-accent" cx="100" cy="78" r="12"/>
                <path className="amazync-keyhole-accent" d="M100 88 L92 115 L108 115 Z"/>
                <circle className="amazync-keyhole" cx="100" cy="78" r="8"/>
                <path className="amazync-keyhole" d="M100 88 L95 108 L105 108 Z"/>
              </g>
            </g>
          </g>
        </g>
        
        {/* Particle Effects */}
        <g className="amazync-particles" clipPath="url(#amazync-shieldClipPath)">
          <g style={{ transform: 'translate(100px, 100px) translate(-15px, -25px)' }}>
            <circle className="amazync-particle p-blue" cx="0" cy="0" r="2.5"/>
          </g>
          <g style={{ transform: 'translate(100px, 100px) translate(10px, -30px)' }}>
            <circle className="amazync-particle p-gold" cx="0" cy="0" r="1.5"/>
          </g>
          <g style={{ transform: 'translate(100px, 100px) translate(20px, -15px)' }}>
            <circle className="amazync-particle p-blue" cx="0" cy="0" r="2"/>
          </g>
          <g style={{ transform: 'translate(100px, 100px) translate(-5px, -35px)' }}>
            <circle className="amazync-particle p-gold" cx="0" cy="0" r="1"/>
          </g>
          <g style={{ transform: 'translate(100px, 100px) translate(15px, -20px)' }}>
            <circle className="amazync-particle p-blue" cx="0" cy="0" r="2.2"/>
          </g>
          <g style={{ transform: 'translate(100px, 100px) translate(-20px, -25px)' }}>
            <circle className="amazync-particle p-gold" cx="0" cy="0" r="1.2"/>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default SecurityAnimatedIcon;
