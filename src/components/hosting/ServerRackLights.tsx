import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Color palette
const LED_COLORS = [
  '#4AFF91', // Green
  '#7882B6', // Glaucous
  '#DBD9EC', // Lavender Web
  '#1934B6', // Persian Blue
  '#FFFFFF'  // White
];

interface ServerRackLightsProps {
  rows?: number;
  cols?: number;
  ledSize?: number;
  className?: string;
}

/**
 * Stylized, abstract server rack/data center lights grid.
 * - Minimal, gently pulsing or blinking LEDs.
 * - Slight bokeh (blur) effect for abstraction.
 * - Highly performant, responsive, and accessible.
 */
const ServerRackLights: React.FC<ServerRackLightsProps> = ({
  rows = 8,
  cols = 32,
  ledSize = 12,
  className = ''
}) => {
  // Precompute random delays and colors for each LED for a natural, non-uniform look
  const leds = useMemo(() => {
    return Array.from({ length: rows * cols }, (_, i) => {
      const color = LED_COLORS[Math.floor(Math.random() * LED_COLORS.length)];
      // Random delay for each LED's animation
      const delay = Math.random() * 2;
      // Some LEDs are dimmer for depth
      const dim = Math.random() > 0.7 ? 0.5 + Math.random() * 0.2 : 1;
      // Some LEDs are slightly out of focus (bokeh)
      const blur = Math.random() > 0.85 ? 2 + Math.random() * 3 : 0;
      return { color, delay, dim, blur };
    });
  }, [rows, cols]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-[#141B3A] bg-opacity-95 ${className}`}
      aria-hidden="true"
      style={{ zIndex: 1 }}
    >
      <div
        className="grid w-full h-full"
        style={{
          gridTemplateRows: `repeat(${rows}, minmax(${ledSize + 4}px, 1fr))`,
          gridTemplateColumns: `repeat(${cols}, minmax(${ledSize + 4}px, 1fr))`,
          gap: `${ledSize / 2.5}px`,
          width: '90vw',
          maxWidth: '1200px',
          height: '60vh',
          filter: 'blur(0.5px)'
        }}
      >
        {leds.map((led, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0.5 * led.dim }}
            animate={{
              opacity: [0.2 * led.dim, 1 * led.dim, 0.8 * led.dim, 0.2 * led.dim],
              filter: led.blur ? `blur(${led.blur}px)` : 'none',
              boxShadow: `0 0 ${led.blur ? 12 : 6}px ${led.color}`
            }}
            transition={{
              duration: 2.8 + Math.random(),
              repeat: Infinity,
              repeatType: 'loop',
              delay: led.delay,
              ease: 'easeInOut'
            }}
            style={{
              width: ledSize,
              height: ledSize,
              borderRadius: '50%',
              background: led.color,
              boxShadow: `0 0 ${led.blur ? 12 : 6}px ${led.color}`,
              filter: led.blur ? `blur(${led.blur}px)` : 'none',
              opacity: led.dim,
              margin: 'auto',
              pointerEvents: 'none'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ServerRackLights;
