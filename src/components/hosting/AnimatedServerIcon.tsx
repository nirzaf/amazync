import React from "react";

/**
 * Animated CSS Server Rack Icon
 * Standalone React component, CSS is scoped within a <style> tag.
 */
const AnimatedServerIcon: React.FC = () => (
  <div style={{ width: 300, height: 300, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
    {/* Inline style tag to scope the CSS to this component */}
    <style>{`
    .amazync-animated-server-animation-container {
        width: 300px;
        height: 300px;
        background-color: #dbeafe;
        border-radius: 12px;
        box-shadow: 0 15px 30px rgba(0,0,0,0.1), 0 8px 8px rgba(0,0,0,0.1);
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding-bottom: 15px;
    }
    .amazync-animated-server-racks-flex {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 2;
        gap: 8px;
        padding: 0 12px;
    }
    .amazync-animated-server-clouds-background {
        position: absolute; top: 0; left: 0; width: 100%; height: 85%; overflow: hidden; z-index: 0;
    }
    .amazync-animated-server-cloud {
        position: absolute; background-color: rgba(229, 231, 235, 0.6); border-radius: 50%; opacity: 0.8;
        animation: amazync-moveClouds 40s linear infinite;
    }
    .amazync-animated-server-cloud.c1 { width: 100px; height: 30px; top: 20%; left: -120px; animation-delay: 0s; }
    .amazync-animated-server-cloud.c1::before, .amazync-animated-server-cloud.c1::after {
        content: ''; position: absolute; background-color: rgba(229, 231, 235, 0.6); border-radius: 50%;
    }
    .amazync-animated-server-cloud.c1::before { width: 50px; height: 50px; top: -20px; left: 20px; }
    .amazync-animated-server-cloud.c1::after { width: 60px; height: 40px; top: -10px; right: 15px; }
    .amazync-animated-server-cloud.c2 { width: 130px; height: 40px; top: 40%; left: -150px; animation-delay: -13.333s; opacity: 0.7; }
    .amazync-animated-server-cloud.c2::before, .amazync-animated-server-cloud.c2::after {
        content: ''; position: absolute; background-color: rgba(229, 231, 235, 0.6); border-radius: 50%;
    }
    .amazync-animated-server-cloud.c2::before { width: 60px; height: 60px; top: -25px; left: 30px; }
    .amazync-animated-server-cloud.c2::after { width: 70px; height: 50px; top: -15px; right: 25px; }
    .amazync-animated-server-cloud.c3 { width: 80px; height: 25px; top: 60%; left: -100px; animation-delay: -26.666s; }
    .amazync-animated-server-cloud.c3::before {
        content: ''; position: absolute; background-color: rgba(229, 231, 235, 0.6); border-radius: 50%; width: 40px; height: 40px; top: -15px; left: 10px;
    }
    @keyframes amazync-moveClouds {
        0% { transform: translateX(0); }
        100% { transform: translateX(450px); }
    }
    .amazync-animated-server-animation-container::before {
        content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 15px; background-color: #e5e7eb; z-index: 1;
    }
    .amazync-animated-server-server-rack {
        width: 35px;
        height: 240px;
        background-color: #2d3748;
        border-radius: 4px 4px 0 0;
        box-shadow: inset 0 3px 5px rgba(0,0,0,0.3), 0 2px 3px rgba(0,0,0,0.2);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 7px 3px;
        box-sizing: border-box;
        z-index: 2;
        /* Only animate vertical fall */
        transform: translateY(-540px);
        animation-name: amazync-fallServer;
        animation-duration: 1.5s;
        animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
        animation-fill-mode: forwards;
    }
    .amazync-animated-server-server-rack:nth-child(1) { animation-delay: 0s; }
.amazync-animated-server-server-rack:nth-child(2) { animation-delay: 0.15s; }
.amazync-animated-server-server-rack:nth-child(3) { animation-delay: 0.3s; }
.amazync-animated-server-server-rack:nth-child(4) { animation-delay: 0.45s; }
.amazync-animated-server-server-rack:nth-child(5) { animation-delay: 0.6s; }
.amazync-animated-server-server-rack:nth-child(6) { animation-delay: 0.75s; }
.amazync-animated-server-server-rack:nth-child(7) { animation-delay: 0.9s; }
    @keyframes amazync-fallServer {
  0% { transform: translateY(-540px); }
  70% { transform: translateY(8px); }
  100% { transform: translateY(0); }
}
    .amazync-animated-server-led {
        width: 60%; height: 6px; margin: 3px 0; border-radius: 2px; animation-name: amazync-blink; animation-duration: 0.8s; animation-iteration-count: infinite; animation-timing-function: ease-in-out;
    }
    .amazync-animated-server-led.blue { background-color: #3b82f6; box-shadow: 0 0 4px #3b82f6, 0 0 7px #3b82f6; }
    .amazync-animated-server-led.red { background-color: #ef4444; box-shadow: 0 0 4px #ef4444, 0 0 7px #ef4444; animation-delay: 0.4s; }
    @keyframes amazync-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
    .amazync-animated-server-server-rack::before, .amazync-animated-server-server-rack::after {
        content: ''; display: block; width: 80%; height: 3px; background-color: rgba(255,255,255,0.1); margin: 8px auto; border-radius: 1px;
    }
    .amazync-animated-server-server-rack::after { margin-bottom: 12px; }
    .amazync-animated-server-data-flow-container {
        position: absolute; bottom: 15px; left: 50%; transform: translateX(-50%); width: 323px; height: 240px; display: flex; opacity: 0; animation: amazync-showDataFlow 0.5s ease-out forwards; animation-delay: 2.3s; z-index: 3;
    }
    .amazync-animated-server-data-pulse {
        width: 4px; height: 4px; background-color: #3b82f6; border-radius: 50%; position: absolute; bottom: 8px; opacity: 0.7; animation: amazync-pulseUp 0.8s infinite ease-out;
    }
    .amazync-animated-server-data-pulse.p1 { left: 10%; animation-delay: 0s; }
    .amazync-animated-server-data-pulse.p2 { left: 30%; animation-delay: 0.2s; }
    .amazync-animated-server-data-pulse.p3 { left: 50%; animation-delay: 0.4s; }
    .amazync-animated-server-data-pulse.p4 { left: 70%; animation-delay: 0.6s; }
    .amazync-animated-server-data-pulse.p5 { left: 90%; animation-delay: 0.8s; }
    @keyframes amazync-showDataFlow { to { opacity: 1; } }
    @keyframes amazync-pulseUp {
        0% { transform: translateY(0) scale(1); opacity: 0.7; }
        50% { transform: translateY(-120px) scale(0.7); opacity: 1; }
        100% { transform: translateY(-240px) scale(0.5); opacity: 0; }
    }
    .amazync-animated-server-ground-details {
        position: absolute; bottom: 3px; left: 50%; transform: translateX(-50%); width: 95%; height: 8px; opacity: 0; animation: amazync-showGroundDetails 0.5s ease-out forwards; animation-delay: 2.6s; z-index: 3;
    }
    .amazync-animated-server-ground-line { position: absolute; height: 2px; background-color: #3b82f6; opacity: 0.5; }
    .amazync-animated-server-ground-line.gl1 { width: 40%; left: 0; top: 0; animation: amazync-expandLine 1s infinite alternate ease-in-out 0s; }
    .amazync-animated-server-ground-line.gl2 { width: 30%; right: 0; top: 5px; animation: amazync-expandLine 1s infinite alternate ease-in-out 0.5s; }
    .amazync-animated-server-ground-line.gl3 { width: 25%; left: 35%; top: 2px; animation: amazync-expandLine 1.2s infinite alternate-reverse ease-in-out 0.25s; }
    @keyframes amazync-showGroundDetails { to { opacity: 0.6; } }
    @keyframes amazync-expandLine { 0% { transform: scaleX(0.5); } 100% { transform: scaleX(1); } }
    `}</style>
    <div className="amazync-animated-server-animation-container">
      <div className="amazync-animated-server-clouds-background">
        <div className="amazync-animated-server-cloud c1"></div>
        <div className="amazync-animated-server-cloud c2"></div>
        <div className="amazync-animated-server-cloud c3"></div>
      </div>
      {/* Flex wrapper for 7 server racks */}
      <div className="amazync-animated-server-racks-flex">
        <div className="amazync-animated-server-server-rack"> <div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div></div>
        <div className="amazync-animated-server-server-rack"> <div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div></div>
        <div className="amazync-animated-server-server-rack"> <div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div></div>
        <div className="amazync-animated-server-server-rack"> <div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div></div>
        <div className="amazync-animated-server-server-rack"> <div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div></div>
        <div className="amazync-animated-server-server-rack"> <div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div></div>
        <div className="amazync-animated-server-server-rack"> <div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led blue"></div><div className="amazync-animated-server-led red"></div><div className="amazync-animated-server-led blue"></div></div>
      </div>
      <div className="amazync-animated-server-data-flow-container">
        <div className="amazync-animated-server-data-pulse p1"></div>
        <div className="amazync-animated-server-data-pulse p2"></div>
        <div className="amazync-animated-server-data-pulse p3"></div>
        <div className="amazync-animated-server-data-pulse p4"></div>
        <div className="amazync-animated-server-data-pulse p5"></div>
      </div>
      <div className="amazync-animated-server-ground-details">
        <div className="amazync-animated-server-ground-line gl1"></div>
        <div className="amazync-animated-server-ground-line gl2"></div>
        <div className="amazync-animated-server-ground-line gl3"></div>
      </div>
    </div>
  </div>
);

export default AnimatedServerIcon;
