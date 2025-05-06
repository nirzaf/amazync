import React from "react";

/**
 * Animated 24/7 Support Icon (SVG-based, React component)
 * Styles are scoped via a <style> tag.
 *
 * The icon is sized to fit in a card similar to other service icons.
 */
const SupportAnimatedIcon: React.FC = () => {
  return (
    <div className="amazync-support-icon-container">
      <style>
        {`
          .amazync-support-icon-container {
            width: 300px;
            height: 300px;
            background-color: #dbeafe;
            border-radius: 12px;
            box-shadow: 0 15px 30px rgba(0,0,0,0.1), 0 8px 8px rgba(0,0,0,0.1);
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Arial', sans-serif;
          }
          
          .amazync-support-icon-svg {
            width: 90%;
            height: 90%;
            display: block;
          }
          
          /* --- Agent Styling --- */
          .amazync-agent-body {
            fill: #D80032; /* Vibrant Red */
          }
          .amazync-agent-tie {
            fill: #007BFF; /* Professional Blue */
          }
          .amazync-headset-band,
          .amazync-mic-arm-stroke {
            stroke: #007BFF;
            stroke-width: 2.5px;
            stroke-linecap: round;
            fill: none;
          }
          .amazync-headset-earpiece,
          .amazync-mic-tip {
            fill: #007BFF;
          }
          .amazync-mic-light {
            fill: #FFFFFF;
            stroke: #007BFF;
            stroke-width: 0.5px;
          }
          
          /* --- Clock Styling --- */
          .amazync-clock-face {
            stroke: #007BFF;
            stroke-width: 2.5px;
            fill: none;
          }
          .amazync-clock-text {
            fill: #007BFF;
            font-size: 10px;
            font-weight: bold;
            text-anchor: middle;
            dominant-baseline: central;
            font-family: 'Inter', sans-serif;
          }
          .amazync-clock-hand {
            stroke: #007BFF;
            stroke-width: 2px;
            stroke-linecap: round;
          }
          
          /* --- Animations --- */
          .amazync-agent-head-group {
            transform-origin: 25px 42px;
            animation: amazync-agentNod 4s infinite ease-in-out;
          }
          @keyframes amazync-agentNod {
            0%, 100% { transform: rotate(0deg); }
            20% { transform: rotate(5deg); }
            40% { transform: rotate(0deg); }
          }
          
          .amazync-mic-light {
            animation: amazync-micBlink 2.5s infinite;
          }
          @keyframes amazync-micBlink {
            0%, 70%, 100% { opacity: 1; }
            85% { opacity: 0.2; }
          }
          
          .amazync-clock-hand {
            transform-origin: 72px 50px;
            animation: amazync-clockSweep 3s linear infinite;
          }
          @keyframes amazync-clockSweep {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      
      <svg className="amazync-support-icon-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Support Agent */}
        <g className="amazync-agent-group" transform="translate(0, 5)">
          {/* Agent Body */}
          <path className="amazync-agent-body" d="M25,45 C25,45 15,60 25,75 L25,85 L35,85 L35,75 C45,60 35,45 35,45 L25,45 Z" />
          
          {/* Agent Tie */}
          <path className="amazync-agent-tie" d="M28,45 L32,45 L33,55 L30,60 L27,55 L28,45 Z" />
          
          {/* Agent Head Group (animated) */}
          <g className="amazync-agent-head-group">
            {/* Head */}
            <circle cx="30" cy="35" r="10" fill="#FFDBAC" />
            
            {/* Headset Band */}
            <path className="amazync-headset-band" d="M20,35 C20,28 25,25 30,25 C35,25 40,28 40,35" />
            
            {/* Headset Earpieces */}
            <circle className="amazync-headset-earpiece" cx="20" cy="35" r="3" />
            <circle className="amazync-headset-earpiece" cx="40" cy="35" r="3" />
            
            {/* Microphone Arm */}
            <path className="amazync-mic-arm-stroke" d="M20,35 C15,38 15,42 18,45" />
            
            {/* Microphone Tip */}
            <circle className="amazync-mic-tip" cx="18" cy="45" r="2" />
            
            {/* Microphone Light (animated) */}
            <circle className="amazync-mic-light" cx="18" cy="45" r="0.5" />
          </g>
        </g>
        
        {/* Clock */}
        <g className="amazync-clock-group" transform="translate(42, 0)">
          {/* Clock Face */}
          <circle className="amazync-clock-face" cx="30" cy="50" r="15" />
          
          {/* Clock Numbers */}
          <text className="amazync-clock-text" x="30" y="38">12</text>
          <text className="amazync-clock-text" x="42" y="50">3</text>
          <text className="amazync-clock-text" x="30" y="62">6</text>
          <text className="amazync-clock-text" x="18" y="50">9</text>
          
          {/* Clock Hands (animated) */}
          <line className="amazync-clock-hand" x1="30" y1="50" x2="30" y2="40" />
          <line className="amazync-clock-hand" x1="30" y1="50" x2="38" y2="50" />
          
          {/* 24/7 Text */}
          <text className="amazync-clock-text" x="30" y="75" style={{ fontSize: '8px' }}>24/7</text>
        </g>
      </svg>
    </div>
  );
};

export default SupportAnimatedIcon;
