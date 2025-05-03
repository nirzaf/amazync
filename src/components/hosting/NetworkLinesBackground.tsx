import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Color palette (brand colors)
const COLORS = [
  '#4AFF91', // Green
  '#7882B6', // Glaucous
  '#DBD9EC', // Lavender Web
  '#1934B6', // Persian Blue
  '#2ED1FC', // Teal/Blue
  '#FFFFFF'  // White
];

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  pulse: number;
  pulseSpeed: number;
  color: string;
}

interface Connection {
  a: number;
  b: number;
  color: string;
}

const NODE_COUNT = 18;
const CONNECTIONS_PER_NODE = 3;
const CANVAS_OPACITY = 0.82;
const DOT_RADIUS = 3.2;
const LINE_WIDTH = 1.2;

const NetworkLinesBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);

  // Initialize nodes and connections
  useEffect(() => {
    const w = window.innerWidth;
    const h = 700; // Target hero min-height
    // Place nodes in a loose grid with random offsets
    const nodes: Node[] = Array.from({ length: NODE_COUNT }).map((_, i) => {
      const angle = (i / NODE_COUNT) * Math.PI * 2;
      const r = 0.35 + 0.22 * Math.random();
      const x = w / 2 + Math.cos(angle) * w * r * 0.33 + (Math.random() - 0.5) * 60;
      const y = h / 2 + Math.sin(angle) * h * r * 0.38 + (Math.random() - 0.5) * 60;
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.008 + Math.random() * 0.007,
        color: COLORS[Math.floor(Math.random() * COLORS.length)]
      };
    });
    nodesRef.current = nodes;

    // Build random connections (avoid duplicates)
    const connections: Connection[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const already = new Set<number>();
      for (let j = 0; j < CONNECTIONS_PER_NODE; j++) {
        let b = Math.floor(Math.random() * NODE_COUNT);
        while (b === i || already.has(b)) b = Math.floor(Math.random() * NODE_COUNT);
        already.add(b);
        connections.push({
          a: i,
          b,
          color: COLORS[Math.floor(Math.random() * COLORS.length)]
        });
      }
    }
    connectionsRef.current = connections;
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let running = true;
    const ctx = canvas.getContext('2d')!;
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

    function animate() {
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = CANVAS_OPACITY;
      // Draw lines
      for (const conn of connectionsRef.current) {
        const n1 = nodesRef.current[conn.a];
        const n2 = nodesRef.current[conn.b];
        ctx.save();
        ctx.strokeStyle = conn.color + 'CC';
        ctx.shadowColor = conn.color + '66';
        ctx.shadowBlur = 6;
        ctx.lineWidth = LINE_WIDTH;
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.stroke();
        ctx.restore();
      }
      // Draw nodes (dots)
      for (const node of nodesRef.current) {
        const pulse = 0.65 + 0.35 * Math.sin(node.pulse);
        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, DOT_RADIUS * pulse, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 10 * pulse;
        ctx.globalAlpha = 0.75 + 0.25 * pulse;
        ctx.fill();
        ctx.restore();
      }
      // Animate node positions and pulses
      for (const node of nodesRef.current) {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;
        // Soft bounds
        if (node.x < 80 || node.x > width - 80) node.vx *= -1;
        if (node.y < 80 || node.y > height - 80) node.vy *= -1;
        // Gentle drift
        node.vx += (Math.random() - 0.5) * 0.002;
        node.vy += (Math.random() - 0.5) * 0.002;
        node.vx = Math.max(-0.16, Math.min(0.16, node.vx));
        node.vy = Math.max(-0.16, Math.min(0.16, node.vy));
      }
      if (running) animationRef.current = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      running = false;
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      style={{ minHeight: 700, background: 'radial-gradient(ellipse at 60% 0%, #2334a8 0%, #141B3A 100%)' }}
    />
  );
};

export default NetworkLinesBackground;
