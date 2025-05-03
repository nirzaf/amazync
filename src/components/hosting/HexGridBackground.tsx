import React, { useRef, useEffect } from 'react';

// Brand blue gradient and hex grid overlay
const HEX_COLOR = '#3B5CE9';
const HEX_GLOW = 'rgba(59,92,233,0.45)';
const BG_GRADIENT = 'radial-gradient(ellipse at 60% 0%, #2334a8 0%, #141B3A 100%)';

export interface HexGridBackgroundProps {
  className?: string;
  hexSize?: number;
  opacity?: number;
}

const HexGridBackground: React.FC<HexGridBackgroundProps> = ({ className = '', hexSize = 48, opacity = 0.12 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let width = window.innerWidth;
    let height = 700;
    function resize() {
      width = window.innerWidth;
      height = 700;
      canvas.width = width;
      canvas.height = height;
    }
    resize();
    window.addEventListener('resize', resize);
    const ctx = canvas.getContext('2d')!;
    function drawHexGrid() {
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = opacity;
      const dx = hexSize * 3/2;
      const dy = Math.sqrt(3) * hexSize;
      for (let y = -hexSize; y < height + hexSize; y += dy / 2) {
        for (let x = -hexSize; x < width + hexSize; x += dx) {
          const offsetY = ((x/hexSize) % 2) * (dy/4);
          drawHex(ctx, x, y + offsetY, hexSize, HEX_COLOR, HEX_GLOW);
        }
      }
      ctx.globalAlpha = 1;
    }
    drawHexGrid();
    window.addEventListener('resize', drawHexGrid);
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('resize', drawHexGrid);
    };
  }, [hexSize, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
      aria-hidden="true"
      style={{ minHeight: 700, background: BG_GRADIENT }}
    />
  );
};

function drawHex(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string, glow: string) {
  ctx.save();
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = Math.PI / 3 * i;
    const px = x + size * Math.cos(angle);
    const py = y + size * Math.sin(angle);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.strokeStyle = color;
  ctx.shadowColor = glow;
  ctx.shadowBlur = 8;
  ctx.lineWidth = 1.2;
  ctx.stroke();
  ctx.restore();
}

export default HexGridBackground;
