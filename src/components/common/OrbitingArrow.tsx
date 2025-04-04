// src/components/OrbitingFireball.tsx
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

const OrbitingFireball = () => {
  // --- Adjust these values ---
  const radiusX = 55; // Horizontal radius of the oval orbit (pixels)
  const radiusY = 18; // Vertical radius of the oval orbit (pixels)
  const fireballSize = 12; // Diameter of the fireball core (pixels)
  const animationDuration = 5; // Duration of one full orbit (seconds)
  const pulseScale = 1.15; // How much the fireball scales up during pulse
  const pulseDuration = 0.6; // Duration of one pulse cycle (seconds)
  // --- End adjustments ---

  // Motion value for the orbital angle
  const angle = useMotionValue(0);
  // Motion value for the pulsating scale
  const scale = useMotionValue(1);

  // Animate the orbital angle
  useEffect(() => {
    const controls = animate(angle, 360, {
      duration: animationDuration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop',
    });
    return () => controls.stop();
  }, [angle, animationDuration]);

  // Animate the pulsating scale
  useEffect(() => {
    const controls = animate(scale, [1, pulseScale, 1], { // Animate from 1 to pulseScale and back to 1
      duration: pulseDuration,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 0.2, // Optional small delay between pulses
    });
    return () => controls.stop();
  }, [scale, pulseScale, pulseDuration]);


  // Transform angle into X and Y coordinates for the ellipse
  const x = useTransform(angle, (a) => radiusX * Math.cos(a * Math.PI / 180));
  const y = useTransform(angle, (a) => radiusY * Math.sin(a * Math.PI / 180));

  // No rotation needed for a sphere

  return (
    // Positioning container at the center
    <div
      className="absolute top-1/2 left-1/2"
      style={{ width: 0, height: 0, zIndex: 5 }} // Keep behind logo (z-index 10)
    >
      {/* Fireball motion div */}
      <motion.div
        style={{
          x, // Apply calculated X position
          y, // Apply calculated Y position
          scale, // Apply pulsating scale
          // --- Fireball Styling ---
          width: `${fireballSize}px`,
          height: `${fireballSize}px`,
          // Center the fireball div on the path
          position: 'absolute',
          left: `-${fireballSize / 2}px`,
          top: `-${fireballSize / 2}px`,
          // Core gradient: Bright yellow center -> orange -> red
          background: `radial-gradient(circle at center, rgba(255,255,150,1) 0%, rgba(255,180,0,1) 50%, rgba(255,100,0,0.9) 80%)`,
          borderRadius: '50%', // Make it round
          // Outer glow using multiple box-shadows
          boxShadow: `
            0 0 4px 2px rgba(255, 255, 100, 0.6), /* Inner bright glow */
            0 0 10px 5px rgba(255, 165, 0, 0.4), /* Mid orange glow */
            0 0 20px 8px rgba(255, 69, 0, 0.2)    /* Outer soft red glow */
          `,
          // Optional: Add a slight blur to soften the edges
          // filter: 'blur(1px)',
        }}
      />
    </div>
  );
};

export default OrbitingFireball;