// src/components/OrbitingArrow.tsx
import { motion } from 'framer-motion';

const OrbitingArrow = () => {
  // Adjust these values to change the appearance and orbit
  const orbitRadius = 35; // How far the arrow orbits from the center (pixels)
  const arrowSize = 18;  // Size of the arrow (pixels)
  const animationDuration = 4; // Duration of one full orbit (seconds)

  return (
    <motion.div
      className="absolute top-1/2 left-1/2" // Center the rotation origin div
      style={{ width: 0, height: 0 }} // Make the origin div sizeless
      animate={{ rotate: 360 }}
      transition={{
        duration: animationDuration,
        ease: 'linear', // Constant speed
        repeat: Infinity, // Loop forever
      }}
    >
      {/* This div offsets the arrow and holds the SVG */}
      <div
        style={{
          position: 'absolute',
          // Offset the arrow from the center to create the orbit radius
          // Adjust x/y percentage if arrow SVG isn't perfectly centered
          transform: `translate(-50%, -50%) translateY(-${orbitRadius}px)`,
          width: `${arrowSize}px`,
          height: `${arrowSize}px`,
          // Apply the glow using CSS filter: drop-shadow
          // Multiple shadows create a more fiery glow effect
          filter: `
            drop-shadow(0 0 3px rgba(255, 220, 0, 0.9)) /* Inner bright yellow */
            drop-shadow(0 0 8px rgba(255, 165, 0, 0.7)) /* Mid orange */
            drop-shadow(0 0 15px rgba(255, 69, 0, 0.5))  /* Outer red-orange */
          `,
        }}
      >
        {/* SVG Arrow with Gradient */}
        <svg
          width={arrowSize}
          height={arrowSize}
          viewBox="0 0 24 24"
          fill="url(#fireGradient)" // Use the gradient defined below
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'rotate(90deg)' }} // Point arrow along the orbit path
        >
          <defs>
            {/* Gradient for the fire trail effect */}
            <linearGradient id="fireGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 69, 0, 0.8)" /> {/* Red-orange tail */}
              <stop offset="50%" stopColor="rgba(255, 165, 0, 1)" /> {/* Orange middle */}
              <stop offset="100%" stopColor="rgba(255, 255, 0, 1)" /> {/* Yellow tip */}
            </linearGradient>
          </defs>
          {/* Simple arrow path (points upwards initially) */}
          <path d="M12 2L22 12H16V22H8V12H2L12 2Z" />
        </svg>
      </div>
    </motion.div>
  );
};

export default OrbitingArrow;