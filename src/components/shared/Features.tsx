import { motion } from 'framer-motion';
// import { useTheme } from '../../context/ThemeContext'; // Removed this import

const Features = () => {
  // useTheme(); // Removed this unused hook call

  const features = [
    {
      title: 'Lightning Fast Speed',
      description: 'Experience blazing-fast website loading times with our optimized servers and SSD storage.',
      icon: (
        // Lightning Fast Speed (Refined Lightning Bolt with Trail and Pulse)
        <motion.svg
          width="60" height="60" viewBox="0 0 60 60" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="drop-shadow-xl"
        >
          <defs>
            <radialGradient id="speed3d" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#ff3c14" />
              <stop offset="60%" stopColor="#DBD9EC" />
              <stop offset="100%" stopColor="#1934B6" />
            </radialGradient>
             <linearGradient id="boltGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFEB3B" /> {/* Yellowish start */}
                <stop offset="100%" stopColor="#FF9800" /> {/* Orangish end */}
            </linearGradient>
             <linearGradient id="boltTrail" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFEB3B" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF9800" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Background circle */}
          <ellipse cx="30" cy="30" rx="27" ry="27" fill="url(#speed3d)" />
          {/* Lightning bolt shape */}
          <motion.path
            d="M32 10 L18 34 L28 34 L24 50 L42 26 L32 26 Z"
            fill="url(#boltGradient)"
            stroke="#F57C00" // Darker orange stroke
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          {/* Subtle pulse animation on the bolt */}
           <motion.path
            d="M32 10 L18 34 L28 34 L24 50 L42 26 L32 26 Z"
            fill="none"
            stroke="#FFEB3B" // Lighter yellow stroke for pulse
            strokeWidth="2"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: [0, 1, 0], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
           {/* Lightning trail animation */}
           <motion.path
            d="M32 10 L18 34 L28 34 L24 50 L42 26 L32 26 Z"
            fill="url(#boltTrail)"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut", delay: 0.5 }}
          />
          {/* Shadow ellipse */}
          <ellipse cx="30" cy="48" rx="12" ry="4" fill="#000" opacity="0.15" />
        </motion.svg>
      )
    },
    {
      title: '99.9% Uptime Guarantee',
      description: 'Your website stays online with our industry-leading uptime guarantee and redundant infrastructure.',
      icon: (
        // 99.9% Uptime Guarantee (Refined Clock with Smooth Second Hand)
        <motion.svg
          width="60" height="60" viewBox="0 0 60 60" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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
             <radialGradient id="clockGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Background circle */}
          <ellipse cx="30" cy="30" rx="26" ry="26" fill="url(#uptime3d)" />
          {/* Clock face */}
          <circle cx="30" cy="30" r="18" fill="#fff" opacity="0.9" />
          {/* Glowing effect on clock face */}
          <motion.circle
            cx="30" cy="30" r="18" fill="url(#clockGlow)"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          {/* Clock center */}
          <circle cx="30" cy="30" r="3" fill="#ff3c14" />
          {/* Minute hand */}
          <line x1="30" y1="30" x2="30" y2="15" stroke="url(#clockhand)" strokeWidth="4" strokeLinecap="round" />
          {/* Hour hand */}
          <line x1="30" y1="30" x2="40" y2="30" stroke="#7882B6" strokeWidth="3" strokeLinecap="round" />
           {/* Second hand with smooth rotation */}
           <motion.line
            x1="30" y1="30" x2="30" y2="12"
            stroke="#ff3c14" strokeWidth="2" strokeLinecap="round"
            animate={{ rotate: 360 }}
            style={{ originX: '30px', originY: '30px' }}
            transition={{ repeat: Infinity, duration: 60, ease: 'linear' }} // 60 seconds for a full rotation
          />
           {/* Shadow ellipse */}
          <ellipse cx="30" cy="48" rx="12" ry="4" fill="#000" opacity="0.15" />
        </motion.svg>
      )
    },
    {
      title: 'Free SSL Certificate',
      description: 'Secure your website with a free SSL certificate, ensuring safe data transmission.',
      icon: (
        // Free SSL Certificate (Checkmark with Cute Animation)
        <motion.svg
          width="60" height="60" viewBox="0 0 60 60" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="drop-shadow-xl"
        >
          <defs>
            <radialGradient id="checkmarkBg" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#A5D6A7" /> {/* Light Green */}
              <stop offset="70%" stopColor="#388E3C" /> {/* Darker Green */}
              <stop offset="100%" stopColor="#1934B6" /> {/* Blue */}
            </radialGradient>
             <linearGradient id="checkmarkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff" /> {/* White */}
                <stop offset="100%" stopColor="#A5D6A7" /> {/* Light Green */}
            </linearGradient>
          </defs>
          {/* Background circle */}
          <ellipse cx="30" cy="30" rx="26" ry="26" fill="url(#checkmarkBg)" />

          {/* Checkmark path with drawing and bounce animation */}
          <motion.path
            d="M18 30 L28 40 L42 20"
            fill="none"
            stroke="url(#checkmarkGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, translateY: 0 }}
            animate={{ pathLength: 1, translateY: [0, -5, 0] }} // Draw and bounce
            transition={{
              pathLength: { duration: 1.5, ease: "easeInOut" },
              translateY: { duration: 1, repeat: Infinity, ease: "easeInOut", delay: 1.5 } // Bounce after drawing
            }}
          />
           {/* Shadow ellipse */}
          <ellipse cx="30" cy="48" rx="12" ry="4" fill="#000" opacity="0.15" />
        </motion.svg>
      )
    },
    {
      title: '24/7 Support',
      description: 'Our expert support team is available around the clock to help you with any issues.',
      icon: (
        // 24/7 Support (Refined Chat Bubble with Headset and Typing Indicator)
        <motion.svg
          width="60" height="60" viewBox="0 0 60 60" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="drop-shadow-xl"
        >
          <defs>
            <radialGradient id="support3d" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#DBD9EC" />
              <stop offset="80%" stopColor="#7882B6" />
              <stop offset="100%" stopColor="#1934B6" />
            </radialGradient>
            <linearGradient id="bubble" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff3c14" />
              <stop offset="100%" stopColor="#DBD9EC" />
            </linearGradient>
             <linearGradient id="headsetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1934B6" />
                <stop offset="100%" stopColor="#7882B6" />
            </linearGradient>
          </defs>
          {/* Background circle */}
          <ellipse cx="30" cy="30" rx="26" ry="26" fill="url(#support3d)" />
          {/* Chat bubble shape */}
          <path d="M18 25 C18 18.373 23.373 13 30 13 C36.627 13 42 18.373 42 25 C42 31.627 36 38 30 38 C29.1716 38 28.3672 37.9182 27.588 37.7585 L18 42 L18 25 Z" fill="url(#bubble)" stroke="#ff3c14" strokeWidth="2" />
          {/* Headset */}
          <motion.g
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <path d="M30 18 C25 18 22 22 22 26 V28 H26 V26 C26 23.7909 27.7909 22 30 22 C32.2091 22 34 23.7909 34 26 V28 H38 V26 C38 22 35 18 30 18 Z" fill="url(#headsetGradient)" stroke="#1934B6" strokeWidth="1.5"/>
            <path d="M30 28 L30 34" stroke="#1934B6" strokeWidth="1.5" strokeLinecap="round"/> {/* Microphone arm */}
             <circle cx="30" cy="36" r="2" fill="#1934B6"/> {/* Microphone end */}
          </motion.g>
          {/* Typing indicator dots */}
          <motion.circle cx="26" cy="28" r="2" fill="#fff" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 1.2 }} />
          <motion.circle cx="30" cy="28" r="2" fill="#fff" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 1.4 }} />
          <motion.circle cx="34" cy="28" r="2" fill="#fff" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 1.6 }} />
           {/* Shadow ellipse */}
          <ellipse cx="30" cy="48" rx="12" ry="4" fill="#000" opacity="0.15" />
        </motion.svg>
      )
    },
    {
      title: 'Daily Backups',
      description: 'Your data is automatically backed up daily, ensuring you never lose important information.',
      icon: (
        // Daily Backups (Refined Sync Arrows with Data Transfer Animation)
        <motion.svg
          width="60" height="60" viewBox="0 0 60 60" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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
            <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Background circle */}
          <ellipse cx="30" cy="30" rx="26" ry="26" fill="url(#backupSyncBg)" />
          {/* Sync arrows group with rotation */}
          <motion.g
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
            style={{ transformOrigin: '30px 30px' }}
          >
            {/* Arrow A */}
            <path d="M41 34c-2.5 4-7 7-11 7-4.5 0-8-3-8-7" stroke="url(#syncArrowA)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <polygon points="41,34 38,38 45,37" fill="url(#syncArrowA)" />
          </motion.g>
          <motion.g
            initial={{ rotate: 180 }}
            animate={{ rotate: 540 }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
            style={{ transformOrigin: '30px 30px' }}
          >
            {/* Arrow B */}
            <path d="M19 26c2.5-4 7-7 11-7 4.5 0 8 3 8 7" stroke="url(#syncArrowB)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <polygon points="19,26 22,22 15,23" fill="url(#syncArrowB)" />
          </motion.g>
          {/* Data flow animation */}
          <motion.circle
            cx="30" cy="30" r="10" fill="url(#dataFlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut" }}
          />
          {/* Shadow ellipse */}
          <ellipse cx="30" cy="48" rx="12" ry="4" fill="#000" opacity="0.15" />
        </motion.svg>
      )
    },
    {
      title: 'DDoS Protection',
      description: 'Advanced security measures to protect your website from DDoS attacks and other threats.',
      icon: (
        // DDoS Protection (Refined Shield with Incoming Threats Animation)
        <motion.svg
          width="60" height="60" viewBox="0 0 60 60" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="drop-shadow-xl"
        >
          <defs>
            <radialGradient id="ddos3d" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#ff3c14" />
              <stop offset="70%" stopColor="#DBD9EC" />
              <stop offset="100%" stopColor="#1934B6" />
            </radialGradient>
            <linearGradient id="shield" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7882B6" />
              <stop offset="100%" stopColor="#ff3c14" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          {/* Background circle */}
          <ellipse cx="30" cy="30" rx="26" ry="26" fill="url(#ddos3d)" />
          {/* Shield shape with pulsing effect */}
          <motion.path 
            d="M30 10C30 10 11 15 11 28C11 46 30 54 30 54C30 54 49 46 49 28C49 15 30 10 30 10Z" 
            fill="url(#shield)" 
            stroke="#ff3c14" 
            strokeWidth="2"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          {/* Shield center */}
          <circle cx="30" cy="32" r="7" fill="#DBD9EC" stroke="#ff3c14" strokeWidth="2" filter="url(#glow)" />
          {/* Network nodes and connections */}
          {/* Animated threat indicators */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.circle 
              cx="15" cy="15" r="2" 
              fill="#ff3c14" 
              initial={{ x: 30, y: 30 }}
              animate={{ x: 0, y: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 1, repeatDelay: 2 }}
            />
            <motion.circle 
              cx="45" cy="15" r="2" 
              fill="#ff3c14" 
              initial={{ x: -30, y: 30 }}
              animate={{ x: 0, y: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 2, repeatDelay: 2 }}
            />
            <motion.circle 
              cx="15" cy="45" r="2" 
              fill="#ff3c14" 
              initial={{ x: 30, y: -30 }}
              animate={{ x: 0, y: 0 }}
              transition={{ repeat: Infinity, duration: 3, delay: 1.5, repeatDelay: 2 }}
            />
          </motion.g>
          {/* Shield inner glow pulse */}
          <motion.circle 
            cx="30" cy="32" r="5" 
            fill="#ff3c14" 
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          {/* Shadow ellipse */}
          <ellipse cx="30" cy="48" rx="12" ry="4" fill="#000" opacity="0.15" />
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