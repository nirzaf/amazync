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
              {/* Background glow effect */}
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
              
              {/* Video Player - GIF-like */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                {/* Removed yellow border and animated border effect */}
                
                {/* Video Player */}
                <div className="relative w-full h-full bg-black/20 backdrop-blur-sm">
                  {/* Removed video controls bar, seek bar and timer */}
                  
                  {/* Video Content - GIF-like with blur effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <video
                      className="w-full h-full object-cover filter blur-sm"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="https://ik.imagekit.io/qch9hivley/2ee1002b-0be3-4a4b-8351-02bf16226471.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Floating CMS Logos - Animated */}
                    <div className="absolute inset-0 pointer-events-none">
                      {/* WordPress Logo */}
                      <motion.div 
                        className="absolute top-[20%] left-[15%] bg-white rounded-full p-2 shadow-lg"
                        animate={{
                          y: [0, -15, 0],
                          rotate: [0, 5, 0, -5, 0],
                        }}
                        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10">
                          <path fill="#21759b" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 19.5c-5.247 0-9.5-4.253-9.5-9.5S6.753 2.5 12 2.5s9.5 4.253 9.5 9.5-4.253 9.5-9.5 9.5z"/>
                          <path fill="#21759b" d="M3.176 12c0 4.871 2.832 9.066 6.923 11.027L4.38 10.67A9.002 9.002 0 0 0 3.176 12zM12 20.824c1.647 0 3.234-.566 4.484-1.607l-.042-.035-2.698-7.382c-2.461.666-2.028 6.944.78 6.944.26 0 .504-.033.732-.094-2.326 1.977-5.692 2.472-8.517 1.294 1.264.83 2.754 1.308 4.356 1.308l.905-.028zM12 3.176c-1.899 0-3.683.52-5.214 1.425.152.152.295.296.426.448 1.185 1.362 2.578 3.192 4.126 5.492l2.278-6.219c.151-.413.304-.866.304-1.289 0-.586-.364-.888-.728-.888-.238 0-.484.086-.697.27.697-.43 1.5-.675 2.35-.675 1.545 0 2.962.56 4.062 1.488A8.81 8.81 0 0 0 12 3.176zm8.307 11.394c.393-1.176.612-2.418.612-3.702 0-1.024-.132-2.015-.377-2.964-.59 1.024-1.52 1.92-2.853 2.427-1.028.392-2.114.587-3.255.587-.83 0-1.646-.132-2.433-.392l3.494 9.546c2.79-1.72 4.444-4.678 4.812-7.827v2.325z"/>
                        </svg>
                      </motion.div>
                      
                      {/* Drupal Logo */}
                      <motion.div 
                        className="absolute bottom-[30%] right-[20%] bg-white rounded-full p-2 shadow-lg"
                        animate={{
                          y: [0, 15, 0],
                          rotate: [0, -5, 0, 5, 0],
                        }}
                        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8">
                          <path fill="#0678BE" d="M15.78 5.113C14.09 3.425 12.48 1.815 11.998 0c-.48 1.815-2.09 3.425-3.778 5.113-2.534 2.53-5.405 5.4-5.405 9.702a9.184 9.185 0 1 0 18.368 0c0-4.303-2.871-7.171-5.405-9.702M6.72 16.954c-.563-.019-2.64-3.6 1.215-7.416l2.55 2.788a.218.218 0 0 1-.016.325c-.61.625-3.204 3.227-3.527 4.126-.066.186-.164.18-.222.177M12 21.677a3.158 3.158 0 0 1-3.158-3.159 3.291 3.291 0 0 1 .787-2.087c.57-.696 2.37-2.655 2.37-2.655s1.774 1.988 2.367 2.649a3.09 3.09 0 0 1 .792 2.093A3.158 3.158 0 0 1 12 21.677m6.046-5.123c-.068.15-.223.398-.431.405-.371.014-.411-.177-.686-.583-.604-.892-5.864-6.39-6.848-7.455-.866-.935-.122-1.595.223-1.94C10.736 6.547 12 5.285 12 5.285s3.766 3.574 5.336 6.016c1.57 2.443 1.029 4.556.71 5.253"/>
                        </svg>
                      </motion.div>
                      
                      {/* Joomla Logo */}
                      <motion.div 
                        className="absolute top-[60%] right-[30%] bg-white rounded-full p-2 shadow-lg"
                        animate={{
                          y: [0, 10, 0],
                          x: [0, -10, 0],
                          rotate: [0, 10, 0],
                        }}
                        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', delay: 2 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 md:w-7 md:h-7">
                          <path fill="#5091CD" d="M8.44 10.11c-.04.07-.08.15-.12.24l1.03 1.01c.58.57.58 1.49 0 2.06-.57.57-1.49.57-2.06 0l-1.04-1.02c-.08.04-.16.08-.24.12-1.26.59-2.08 1.86-2.08 3.26 0 2.01 1.65 3.64 3.67 3.62 1.47-.01 2.79-.9 3.34-2.29.15-.36.51-.6.9-.6h.01c.55 0 1 .45 1 1 0 .17-.04.33-.12.47-.83 2.12-2.89 3.52-5.19 3.52-3.09 0-5.58-2.5-5.58-5.58 0-2.11 1.17-4.03 3.06-5 .08-.04.17-.08.26-.12l-1.03-1.01c-.58-.57-.58-1.49 0-2.06.57-.57 1.49-.57 2.06 0l1.04 1.02c.08-.04.16-.08.24-.12 1.26-.59 2.08-1.86 2.08-3.26 0-2.01-1.65-3.64-3.67-3.62-1.47.01-2.79.9-3.34 2.29-.15.36-.51.6-.9.6h-.01c-.55 0-1-.45-1-1 0-.17.04-.33.12-.47C2.7 1.4 4.77 0 7.07 0c3.09 0 5.58 2.5 5.58 5.58 0 2.11-1.17 4.03-3.06 5-.09.04-.18.08-.26.12l1.03-1.01c-.58-.57-.58-1.49 0-2.06.57-.57-1.49-.57-2.06 0l-1.04 1.02zm7.12 3.85c.04-.07.08-.15.12-.24l-1.03-1.01c-.58-.57-.58-1.49 0-2.06.57-.57 1.49-.57 2.06 0l1.04 1.02c.08-.04.16-.08.24-.12 1.26-.59 2.08-1.86 2.08-3.26 0-2.01-1.65-3.64-3.67-3.62-1.47.01-2.79.9-3.34 2.29-.15.36-.51.6-.9.6h-.01c-.55 0-1 .45-1 1 0-.17.04-.33.12-.47.83-2.12 2.89-3.52 5.19-3.52 3.09 0 5.58-2.5 5.58-5.58 0-2.11-1.17-4.03-3.06-5-.08-.04-.17.08-.26.12l1.03-1.01c.58-.57.58-1.49 0-2.06-.57-.57-1.49-.57-2.06 0l-1.04-1.02c-.08.04-.16.08-.24.12-1.26.59-2.08 1.86-2.08 3.26 0 2.01 1.65 3.64 3.67 3.62 1.47-.01 2.79-.9 3.34-2.29.15-.36.51-.6.9-.6h.01c.55 0 1 .45 1 1 0 .17-.04.33-.12.47-.83 2.12-2.89 3.52-5.19 3.52-3.09 0 5.58-2.5 5.58-5.58 0-2.11-1.17-4.03-3.06-5-.09-.04.18-.08.26-.12l-1.03-1.01c-.58-.57-.58-1.49 0-2.06.57-.57 1.49-.57 2.06 0l1.04 1.02c-.08-.04-.16-.08-.24-.12-1.26-.59-2.08-1.86-2.08-3.26 0-2.01 1.65-3.64 3.67-3.62 1.47.01 2.79.9 3.34 2.29.15.36.51.6.9.6h.01c.55 0 1-.45 1-1 0-.17-.04-.33-.12-.47C21.3 1.4 19.23 0 16.93 0c-3.09 0-5.58 2.5-5.58 5.58 0 2.11 1.17 4.03 3.06 5 .08.04.17.08.26.12l-1.03 1.01c-.58.57-.58 1.49 0 2.06.57.57 1.49.57 2.06 0l1.04-1.02c-.04.07-.08.15-.12.24-.59 1.26-1.86 2.08-3.26 2.08-2.01 0-3.64-1.65-3.62-3.67.01-1.47.9-2.79 2.29-3.34.36-.15.6-.51.6-.9v-.01c0-.55-.45-1-1-1-.17 0-.33.04-.47.12-2.12.83-3.52 2.89-3.52 5.19 0 3.09 2.5 5.58 5.58 5.58 2.11 0 4.03-1.17 5-3.06z"/>
                        </svg>
                      </motion.div>
                    </div>
                    
                    {/* Play Button Overlay removed */}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </ThemeProvider>
  );
};

export default Hero;