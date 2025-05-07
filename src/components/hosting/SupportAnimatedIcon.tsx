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
      <style>{`
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
        }
        .amazync-support-icon-svg {
          width: 95%;
          height: 95%;
          display: block;
        }
        .amazync-agent-body { fill: #D80032; }
        .amazync-agent-tie { fill: #007BFF; }
        .amazync-headset-band,
        .amazync-mic-arm-stroke {
          stroke: #007BFF;
          stroke-width: 2.5px;
          stroke-linecap: round;
          fill: none;
        }
        .amazync-headset-earpiece,
        .amazync-mic-tip { fill: #007BFF; }
        .amazync-mic-light {
          fill: #FFFFFF;
          stroke: #007BFF;
          stroke-width: 0.5px;
        }
        .amazync-agent-head { fill: #FFDBAC; }
        .amazync-clock-face {
          stroke: #007BFF;
          stroke-width: 2.5px;
          fill: none;
        }
        .amazync-clock-text {
          fill: #007BFF;
          font-size: 7px;
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
        .amazync-247-text {
          fill: #007BFF;
          font-size: 8px;
          font-weight: bold;
          text-anchor: middle;
          dominant-baseline: central;
          font-family: 'Inter', sans-serif;
          animation: amazync-pulse247 2s infinite ease-in-out;
          transform-origin: center;
        }
        .amazync-agent-head-group {
          transform-origin: 30px 35px;
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
        .amazync-hour-hand {
          transform-origin: 30px 50px;
          animation: amazync-hourHandSweep 12s linear infinite;
        }
        .amazync-minute-hand {
          transform-origin: 30px 50px;
          animation: amazync-minuteHandSweep 3s linear infinite;
        }
        @keyframes amazync-hourHandSweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes amazync-minuteHandSweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes amazync-pulse247 {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
      `}</style>
      <svg className="amazync-support-icon-svg" viewBox="12.5 12.5 75 75" xmlns="http://www.w3.org/2000/svg">
        <g className="amazync-agent-group" transform="translate(0, 5)">
          <path className="amazync-agent-body" d="M25,45 C25,45 15,60 25,75 L25,85 L35,85 L35,75 C45,60 35,45 35,45 L25,45 Z" />
          <path className="amazync-agent-tie" d="M28,45 L32,45 L33,55 L30,60 L27,55 L28,45 Z" />
          <g className="amazync-agent-head-group">
            <circle className="amazync-agent-head" cx="30" cy="35" r="10" />
            <circle cx="27" cy="33" r="1" fill="#333333"/>
            <circle cx="33" cy="33" r="1" fill="#333333"/>
            <path d="M28,38 Q30,39.5 32,38" stroke="#A0522D" strokeWidth="0.7" fill="none" strokeLinecap="round"/>
            <path className="amazync-headset-band" d="M20,35 C20,28 25,25 30,25 C35,25 40,28 40,35" />
            <circle className="amazync-headset-earpiece" cx="20" cy="35" r="3" />
            <circle className="amazync-headset-earpiece" cx="40" cy="35" r="3" />
            <path className="amazync-mic-arm-stroke" d="M20,35 C15,38 15,42 18,45" />
            <circle className="amazync-mic-tip" cx="18" cy="45" r="2" />
            <circle className="amazync-mic-light" cx="18" cy="45" r="0.5" />
          </g>
        </g>
        <g className="amazync-clock-group" transform="translate(35, 0)">
          <circle className="amazync-clock-face" cx="30" cy="50" r="18" />
          <text className="amazync-clock-text" x="30" y="35">12</text>
          <text className="amazync-clock-text" x="45" y="50">3</text>
          <text className="amazync-clock-text" x="30" y="65">6</text>
          <text className="amazync-clock-text" x="15" y="50">9</text>
          <line className="amazync-clock-hand amazync-hour-hand" x1="30" y1="50" x2="30" y2="38" />
          <line className="amazync-clock-hand amazync-minute-hand" x1="30" y1="50" x2="40" y2="50" />
          <text className="amazync-247-text" x="30" y="73">24/7</text>
        </g>
      </svg>
    </div>
  );
};

export default SupportAnimatedIcon;
