import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Features = () => {
  useTheme();

  const features = [
    {
      title: 'Lightning Fast Speed',
      description: 'Experience blazing-fast website loading times with our optimized servers and SSD storage.',
      icon: (
        // Lightning Fast Speed (3D Lightning Bolt)
        <motion.svg
          width="60" height="60" viewBox="0 0 60 60" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="drop-shadow-xl"
        >
          <defs>
            <radialGradient id="speed3d" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#ff3c14" />
              <stop offset="60%" stopColor="#DBD9EC" />
              <stop offset="100%" stopColor="#1934B6" />
            </radialGradient>
            <linearGradient id="boltEdge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff3c14" />
              <stop offset="100%" stopColor="#DBD9EC" />
            </linearGradient>
          </defs>
          <ellipse cx="30" cy="30" rx="27" ry="27" fill="url(#speed3d)" />
          <polygon points="32,10 18,34 28,34 24,50 42,26 32,26" fill="url(#boltEdge)" stroke="#ff3c14" strokeWidth="2" filter="url(#shadow)" />
          <ellipse cx="30" cy="44" rx="10" ry="3" fill="#DBD9EC" opacity="0.25" />
        </motion.svg>
      )
    },
    {
      title: '99.9% Uptime Guarantee',
      description: 'Your website stays online with our industry-leading uptime guarantee and redundant infrastructure.',
      icon: (
        // 99.9% Uptime Guarantee (3D Clock)
        <motion.svg
          width="60" height="60" viewBox="0 0 60 60" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="drop-shadow-xl"
        >
          <defs>
            <radialGradient id="uptime3d" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#7882B6" />
              <stop offset="70%" stopColor="#DBD9EC" />
              <stop offset="100%" stopColor="#192C99" />
            </radialGradient>
            <linearGradient id="clockhand" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1934B6" />
              <stop offset="100%" stopColor="#ff3c14" />
            </linearGradient>
          </defs>
          <ellipse cx="30" cy="30" rx="26" ry="26" fill="url(#uptime3d)" />
          <circle cx="30" cy="30" r="16" fill="#fff" opacity="0.9" />
          <circle cx="30" cy="30" r="2.5" fill="#ff3c14" />
          <motion.line x1="30" y1="30" x2="30" y2="17" stroke="url(#clockhand)" strokeWidth="4" strokeLinecap="round" animate={{ rotate: [0, 360] }} style={{ originX: '30px', originY: '30px' }} transition={{ repeat: Infinity, duration: 8, ease: 'linear' }} />
          <line x1="30" y1="30" x2="42" y2="30" stroke="#7882B6" strokeWidth="3" strokeLinecap="round" />
        </motion.svg>
      )
    },
    {
      title: 'Free SSL Certificate',
      description: 'Secure your website with a free SSL certificate, ensuring safe data transmission.',
      icon: (
        // Free SSL Certificate (3D Lock with Glowing Checkmark)
        <motion.svg
          width="60" height="60" viewBox="0 0 60 60" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-xl"
        >
          <defs>
            <radialGradient id="ssl3d" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#DBD9EC" />
              <stop offset="70%" stopColor="#A5D6A7" />
              <stop offset="100%" stopColor="#1934B6" />
            </radialGradient>
            <linearGradient id="lockbody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7882B6" />
              <stop offset="100%" stopColor="#388E3C" />
            </linearGradient>
            <linearGradient id="lockshimmer" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#A5D6A7" stopOpacity="0.2" />
            </linearGradient>
            <radialGradient id="checkglow" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#A5D6A7" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#388E3C" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <ellipse cx="30" cy="30" rx="26" ry="26" fill="url(#ssl3d)" />
          <rect x="18" y="28" width="24" height="16" rx="6" fill="url(#lockbody)" stroke="#388E3C" strokeWidth="2" />
          <rect x="24" y="16" width="12" height="14" rx="6" fill="#fff" stroke="#388E3C" strokeWidth="2" />
          <rect x="24" y="16" width="12" height="7" rx="6" fill="url(#lockshimmer)" opacity="0.6" />
          <ellipse cx="30" cy="32" rx="5" ry="2.5" fill="#A5D6A7" opacity="0.5" />
          <motion.g
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            <ellipse cx="30" cy="40" rx="7" ry="4" fill="url(#checkglow)" />
            <motion.path
              d="M26 38l4 4 8-8"
              fill="none"
              stroke="#4CAF50"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              filter="drop-shadow(0 0 8px #A5D6A7)"
            />
          </motion.g>
        </motion.svg>
      )
    },
    {
      title: '24/7 Support',
      description: 'Our expert support team is available around the clock to help you with any issues.',
      icon: (
        // 24/7 Support (3D Chat Bubble with Headset)
        <motion.svg
          width="60" height="60" viewBox="0 0 60 60" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="drop-shadow-xl"
        >
          <defs>
            <radialGradient id="support3d" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#DBD9EC" />
              <stop offset="80%" stopColor="#7882B6" />
              <stop offset="100%" stopColor="#192C99" />
            </radialGradient>
            <linearGradient id="bubble" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff3c14" />
              <stop offset="100%" stopColor="#DBD9EC" />
            </linearGradient>
          </defs>
          <ellipse cx="30" cy="30" rx="26" ry="26" fill="url(#support3d)" />
          <ellipse cx="30" cy="34" rx="14" ry="8" fill="#fff" opacity="0.3" />
          <ellipse cx="30" cy="28" rx="12" ry="7" fill="url(#bubble)" />
          <rect x="22" y="22" width="16" height="10" rx="5" fill="#fff" stroke="#7882B6" strokeWidth="1.5" />
          <ellipse cx="30" cy="27" rx="4" ry="2" fill="#ff3c14" opacity="0.3" />
          <path d="M22 32 Q19 34 22 36" stroke="#7882B6" strokeWidth="2" fill="none" />
          <path d="M38 32 Q41 34 38 36" stroke="#7882B6" strokeWidth="2" fill="none" />
        </motion.svg>
      )
    },
    {
      title: 'Daily Backups',
      description: 'Your data is automatically backed up daily, ensuring you never lose important information.',
      icon: (
        // Daily Backups (3D Synchronize/Sync Arrows)
        <motion.svg
          width="60" height="60" viewBox="0 0 60 60" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-xl"
        >
          <defs>
            <radialGradient id="backupSyncBg" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#DBD9EC" />
              <stop offset="80%" stopColor="#7882B6" />
              <stop offset="100%" stopColor="#1934B6" />
            </radialGradient>
            <linearGradient id="syncArrowA" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff3c14" />
              <stop offset="100%" stopColor="#DBD9EC" />
            </linearGradient>
            <linearGradient id="syncArrowB" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7882B6" />
              <stop offset="100%" stopColor="#1934B6" />
            </linearGradient>
          </defs>
          <ellipse cx="30" cy="30" rx="26" ry="26" fill="url(#backupSyncBg)" />
          <motion.g
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
            style={{ transformOrigin: '30px 30px' }}
          >
            <path d="M41 34c-2.5 4-7 7-11 7-4.5 0-8-3-8-7" stroke="url(#syncArrowA)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <polygon points="41,34 38,38 45,37" fill="url(#syncArrowA)" />
          </motion.g>
          <motion.g
            initial={{ rotate: 180 }}
            animate={{ rotate: 540 }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
            style={{ transformOrigin: '30px 30px' }}
          >
            <path d="M19 26c2.5-4 7-7 11-7 4.5 0 8 3 8 7" stroke="url(#syncArrowB)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <polygon points="19,26 22,22 15,23" fill="url(#syncArrowB)" />
          </motion.g>
        </motion.svg>
      )
    },
    {
      title: 'DDoS Protection',
      description: 'Advanced security measures to protect your website from DDoS attacks and other threats.',
      icon: (
        // DDoS Protection (3D Shield with Network Nodes)
        <motion.svg
          width="60" height="60" viewBox="0 0 60 60" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="drop-shadow-xl"
        >
          <defs>
            <radialGradient id="ddos3d" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#ff3c14" />
              <stop offset="70%" stopColor="#DBD9EC" />
              <stop offset="100%" stopColor="#192C99" />
            </radialGradient>
            <linearGradient id="shield" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7882B6" />
              <stop offset="100%" stopColor="#ff3c14" />
            </linearGradient>
          </defs>
          <ellipse cx="30" cy="30" rx="26" ry="26" fill="url(#ddos3d)" />
          <path d="M30 10C30 10 11 15 11 28C11 46 30 54 30 54C30 54 49 46 49 28C49 15 30 10 30 10Z" fill="url(#shield)" stroke="#ff3c14" strokeWidth="2"/>
          <circle cx="30" cy="32" r="7" fill="#DBD9EC" stroke="#ff3c14" strokeWidth="2" />
          <circle cx="30" cy="18" r="2" fill="#ff3c14" />
          <circle cx="19" cy="28" r="2" fill="#7882B6" />
          <circle cx="41" cy="28" r="2" fill="#192C99" />
          <line x1="30" y1="18" x2="30" y2="32" stroke="#ff3c14" strokeWidth="1.5" />
          <line x1="19" y1="28" x2="30" y2="32" stroke="#7882B6" strokeWidth="1.5" />
          <line x1="41" y1="28" x2="30" y2="32" stroke="#192C99" strokeWidth="1.5" />
        </motion.svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#192C99] to-[#1934B6] relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 10 + 10,
              delay: Math.random() * 5,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#192C99]/80 via-transparent to-[#ff3c14]/20 animate-pulse" 
           style={{ animationDuration: '8s' }} />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-block relative"
          >
            <h2 className="text-5xl font-bold text-white mb-4 relative z-10 drop-shadow-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#DBD9EC]">Key Features</span>
            </h2>
            <motion.div 
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#7882B6] via-[#ff3c14] to-[#7882B6] opacity-70 blur-lg"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% 200%' }}
            />
          </motion.div>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Experience the best hosting features for your website with our enterprise-grade infrastructure
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#192C99]/90 to-[#1934B6]/90 backdrop-blur-md rounded-xl p-8 flex flex-col items-center text-center hover:bg-gradient-to-br hover:from-[#1934B6] hover:to-[#192C99] transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-[#7882B6]/30 hover:border-[#7882B6]/70 shadow-lg hover:shadow-2xl relative overflow-hidden group"
            >
              {/* Decorative background elements */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#7882B6]/20 rounded-full group-hover:bg-[#7882B6]/40 group-hover:scale-110 transition-all duration-500"></div>
              <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-[#ff3c14]/10 rounded-full group-hover:bg-[#ff3c14]/20 group-hover:scale-110 transition-all duration-700 delay-100"></div>
              
              {/* Animated dots/particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-white/40 hidden group-hover:block"
                  style={{
                    left: 20 + (i * 15) + '%',
                    top: '85%',
                  }}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: -40 - (i * 10), opacity: [0, 1, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5 + (i * 0.2), 
                    delay: i * 0.1,
                    ease: 'easeOut'
                  }}
                />
              ))}
              
              <motion.div 
                className="text-5xl mb-6 bg-gradient-to-br from-[#7882B6]/40 to-[#192C99]/40 text-white p-5 rounded-full relative z-10 group-hover:from-[#7882B6]/60 group-hover:to-[#192C99]/60 transition-all duration-500 shadow-md group-hover:shadow-xl ring-2 ring-white/10 group-hover:ring-white/30"
                whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.2 }}
                animate={{ 
                  boxShadow: [
                    '0 5px 15px rgba(0,0,0,0.1)', 
                    '0 5px 25px rgba(120,130,182,0.3)', 
                    '0 5px 15px rgba(0,0,0,0.1)'
                  ]
                }}
                transition={{ 
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  },
                  duration: 0.5 
                }}
              >
                {feature.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#DBD9EC] mb-3 relative z-10 group-hover:scale-105 transition-transform duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 relative z-10 leading-relaxed group-hover:text-white transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Bottom accent line with animation */}
              <motion.div 
                className="h-1.5 bg-gradient-to-r from-[#7882B6] via-white to-[#ff3c14] w-0 group-hover:w-3/4 absolute bottom-0 left-[12.5%] transition-all duration-500 rounded-t-full"
                initial={{ width: 0 }}
                animate={{ width: '20%' }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              />
              
              {/* Hover reveal button */}
              <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-[#7882B6]/30 to-transparent group-hover:h-16 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="text-white/80 text-sm font-medium hover:text-white transition-colors cursor-pointer inline-flex items-center">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call-to-action button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-[#7882B6] to-[#ff3c14] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Explore All Features</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#ff3c14] to-[#7882B6]"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
              style={{ opacity: 0.85 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;