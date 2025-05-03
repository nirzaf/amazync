import React, { useRef, useEffect } from 'react';

// Glowing blue line racks for flanking sides
const LINE_COLOR = '#3B5CE9';
const GLOW_COLOR = 'rgba(59,92,233,0.45)';
const NUM_LINES = 8;
const RACK_HEIGHT = 420;
const RACK_WIDTH = 22;

export interface SideRackLinesProps {
  side: 'left' | 'right';
  className?: string;
}

const SideRackLines: React.FC<SideRackLinesProps> = ({ side, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let width = 80;
    let height = 700;
    function resize() {
      width = 80;
      height = 700;
      canvas.width = width;
      canvas.height = height;
    }
    resize();
    window.addEventListener('resize', resize);
    function drawLines() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < NUM_LINES; i++) {
        const x = 20 + i * (RACK_WIDTH / NUM_LINES) + (side === 'right' ? 30 : 0);
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, 80);
        ctx.lineTo(x, RACK_HEIGHT + 180 + Math.sin(i * 0.7) * 16);
        ctx.strokeStyle = LINE_COLOR;
        ctx.shadowColor = GLOW_COLOR;
        ctx.shadowBlur = 10;
        ctx.lineWidth = 2.2;
        ctx.globalAlpha = 0.7;
        ctx.stroke();
        ctx.restore();
      }
    }
    drawLines();
    window.addEventListener('resize', drawLines);
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('resize', drawLines);
    };
  }, [side]);
  return (
    <canvas
      ref={canvasRef}
      className={`absolute top-0 ${side === 'left' ? 'left-0' : 'right-0'} h-full w-[80px] pointer-events-none z-10 ${className}`}
      aria-hidden="true"
      style={{ minHeight: 700 }}
    />
  );
};

export default SideRackLines;
