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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#192C99] mb-4">
            Key Features
          </h2>
          <p className="text-xl text-[#192C99]/80">
            Experience the best hosting features for your website
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-[#192C99]/5 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center text-center hover:bg-gradient-to-br hover:from-white hover:to-[#192C99]/10 transition-all duration-300 transform hover:-translate-y-2 border border-[#192C99]/10 hover:border-[#192C99]/30 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              {/* Decorative background element */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#192C99]/5 rounded-full group-hover:bg-[#192C99]/10 transition-all duration-500"></div>
              
              <motion.div 
                className="text-5xl mb-6 bg-[#192C99]/10 p-5 rounded-full relative z-10 group-hover:bg-[#192C99]/20 transition-all duration-300 shadow-md group-hover:shadow-lg"
                whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold text-[#192C99] mb-3 relative z-10">
                {feature.title}
              </h3>
              
              <p className="text-[#192C99]/80 relative z-10 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Bottom accent line with animation */}
              <motion.div 
                className="h-1 bg-gradient-to-r from-[#192C99] to-[#FF6B2C] w-0 group-hover:w-1/2 absolute bottom-0 left-1/4 transition-all duration-300 rounded-t-full"
                initial={{ width: 0 }}
                animate={{ width: '20%' }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;