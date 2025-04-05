import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { ThemeProvider } from '../../context/ThemeContext';

const Hero = () => {
  const { colors, gradients } = useTheme();

  // Framer Motion Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        delay: 0.5, // Delay image appearance
      },
    },
  };

  return (
    <ThemeProvider>
      <section
        className={`relative ${gradients.primary} text-white overflow-hidden`} // Use theme gradient
      >
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-0">
          <video
            className="absolute w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://ik.imagekit.io/qch9hivley/cms-hosting-hero.png?updatedAt=1743447500000"
          >
            <source src="https://ik.imagekit.io/qch9hivley/Managed-WordPress.jpeg?updatedAt=1743814077234" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            Your browser does not support the video tag.
          </video>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Optional: Add subtle background elements - keeping this for additional texture */}
        <div className="absolute inset-0 opacity-10 -z-0">
          {/* Example background pattern or shapes */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotted-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill={colors.glaucous} fillOpacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotted-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 md:pt-36 md:pb-32 z-10">
          <motion.div
            className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Text Content Column */}
            <div className="text-center md:text-left">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 tracking-tight"
                variants={itemVariants}
              >
                Blazing Fast & Secure{' '}
                <span className={`block ${gradients.accent} bg-clip-text text-transparent`}> {/* Use accent gradient */}
                  CMS Hosting
                </span>
              </motion.h1>
              <motion.p
                className="text-lg lg:text-xl mb-8 max-w-xl mx-auto md:mx-0"
                style={{ color: colors.lavenderWeb }} // Use theme color for paragraph
                variants={itemVariants}
              >
                Optimized performance for WordPress, Drupal, Joomla & more. Launch your content-driven site with confidence.
              </motion.p>

              {/* Feature Highlights (Optional but nice) */}
              <motion.div className="space-y-2 text-left mb-10 max-w-md mx-auto md:mx-0" variants={itemVariants}>
                <div className="flex items-center">
                  <FiCheckCircle className="mr-2 flex-shrink-0" style={{ color: colors.chiliRed }}/>
                  <span>99.9% Uptime Guarantee</span>
                </div>
                <div className="flex items-center">
                  <FiCheckCircle className="mr-2 flex-shrink-0" style={{ color: colors.chiliRed }}/>
                  <span>Free SSL & Migrations</span>
                </div>
                <div className="flex items-center">
                  <FiCheckCircle className="mr-2 flex-shrink-0" style={{ color: colors.chiliRed }}/>
                  <span>Optimized ThunderStack</span>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
                variants={itemVariants}
              >
                <button
                  className="flex items-center justify-center text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1934B6]"
                  style={{
                    backgroundColor: colors.chiliRed,
                    // boxShadow: `0 10px 15px -3px ${colors.chiliRed}40, 0 4px 6px -2px ${colors.chiliRed}20` // Optional subtle glow
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.chiliRedHover}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.chiliRed}
                >
                  Get Started Now
                  <FiArrowRight className="ml-2" />
                </button>
                <button
                  className="px-8 py-3.5 rounded-lg font-semibold transition-colors duration-300 border-2 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-transparent"
                  style={{
                    borderColor: colors.lavenderWeb,
                    color: colors.lavenderWeb,
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.lavenderWebTransparent}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  View Plans
                </button>
              </motion.div>
            </div>

            {/* Video Column */}
            <motion.div
              className="relative mt-10 md:mt-0 flex justify-center"
              variants={imageVariants} // Apply animation variants to the video wrapper
            >
              {/* Background image effect */}
              <div 
                className="absolute inset-0 rounded-lg blur-sm opacity-30 transform -translate-x-10 translate-y-10"
                style={{ 
                  backgroundImage: 'url(https://ik.imagekit.io/qch9hivley/Managed-WordPress.jpeg?updatedAt=1743814077234)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '120%', 
                  height: '120%' 
                }}
              ></div>
              
              {/* Video element replacing the image */}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </ThemeProvider>
  );
};

export default Hero;