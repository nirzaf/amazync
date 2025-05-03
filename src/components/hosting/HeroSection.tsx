import { motion } from 'framer-motion';
import { Button } from '../shared';
import { OrbitingArrow } from '../common';
import { useTheme } from '../../context/ThemeContext';
import WebHostingAnimation from './WebHostingAnimation';

const HeroSection = () => {
  const { colors } = useTheme();

  return (
    <>
      {/* Top Banner */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-2 px-4 relative shadow-lg hover:from-blue-900 hover:to-purple-900 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 relative"
          >
            <div className="relative">
              <OrbitingArrow />
              <img src="https://ik.imagekit.io/qch9hivley/image.png?updatedAt=1743447013040" alt="Logo" className="h-8 w-auto relative z-10" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <Button variant="primary" size="sm">
              Buy Now!
            </Button>
          </motion.div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`font-medium text-[${colors.lavenderWeb}]`}></span>
        </div>
      </motion.div>
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-[#DBD9EC]/90 backdrop-blur-sm text-gray-700 py-3 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-4 md:space-x-8"
          >
            <div className="flex items-center gap-2 hover:text-white transition-all duration-300 cursor-pointer group">
              <span className="text-blue-300 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">💬</span>
              <span>Live Chat</span>
            </div>
            <div className={`flex items-center gap-2 hover:text-[${colors.lavenderWeb}] transition-colors cursor-pointer group`}>
              <span className={`text-[${colors.glaucous}] group-hover:text-[${colors.lavenderWeb}] transition-colors`}>❓</span>
              <span className="hidden md:inline">Help Center</span>
            </div>
            <div className={`flex items-center gap-2 hover:text-[${colors.lavenderWeb}] transition-colors cursor-pointer group`}>
              <span className={`text-[${colors.glaucous}] group-hover:text-[${colors.lavenderWeb}] transition-colors`}>📞</span>
              <span className="hidden md:inline">+94752021670</span>
            </div>
          </motion.div>
          {/* Cart link removed as requested */}
        </div>
      </motion.div>
      <div className="min-h-[700px] relative overflow-hidden bg-[#192C99]">
        {/* Background Pattern and Animation Layer */}
        <div className="absolute inset-0 bg-opacity-90">
          <WebHostingAnimation showTextOverlay={false} />
        </div>
        
        {/* Content Layer */}
        <div className="relative w-full h-full" style={{ zIndex: 20 }}>
          <div className="max-w-7xl mx-auto px-4 pt-40 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center relative"
            >
              {/* Limited Time Offer Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="bg-[${colors.glaucous}]/40 backdrop-blur-md text-white px-6 py-2.5 rounded-full text-sm font-semibold border border-[${colors.lavenderWeb}]/20 shadow-lg [text-shadow:_1px_1px_0_rgba(0,0,0,0.3)] flex items-center gap-2 justify-center">
                  <span className="text-2xl animate-bounce">🚀</span>
                  <span>Get Started in Minutes</span>
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-6xl md:text-7xl font-bold text-white mb-6 relative [text-shadow:_1px_1px_0_rgba(0,0,0,0.5)]"
              >
                Web Hosting
                <br />
                <span className="text-[#EC3A1C] font-extrabold">
                  Made Easy!
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl md:text-3xl text-white mb-12 relative flex justify-center"
              >
                <span
                  className={`bg-[${colors.glaucous}]/30 backdrop-blur-md rounded-xl px-6 py-3 shadow-lg border border-[${colors.lavenderWeb}]/30 inline-block [text-shadow:_1px_1px_0_rgba(0,0,0,0.5)]`}
                  style={{
                    background: `linear-gradient(90deg, ${colors.glaucous}33 0%, ${colors.lavenderWeb}33 100%)`,
                    borderColor: colors.lavenderWeb + '33',
                  }}
                >
                  Powerful Website Hosting with
                  <span className={`text-[${colors.chiliRed}] font-bold`}> Unlimited Features</span>
                </span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="max-w-xl mx-auto relative flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button variant="primary" size="lg" className="bg-[#EC3A1C] hover:bg-[#7882B6] text-white" onClick={() => window.open('https://copilot.microsoft.com/', '_blank')}>
                  Get Started Now
                </Button>
                <Button variant="secondary" size="lg" className={`bg-[${colors.chiliRed}] hover:bg-[${colors.glaucous}] text-white`}>
                  Learn More
                </Button>
              </motion.div>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className={`mt-12 flex flex-wrap justify-center gap-8 text-[${colors.lavenderWeb}]`}
              >
                {['Free Domain Name', 'Unlimited SSD Storage', '99.9% Uptime', '24/7 Expert Support'].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 group">
                    <div className="flex items-center justify-center bg-gradient-to-r from-[#2A45C7]/80 to-[#3B5CE9]/80 backdrop-blur-md rounded-full p-4 shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,92,233,0.5)] transform hover:-translate-y-1">
                      <span className="text-[#4AFF91] font-bold group-hover:scale-110 transition-transform drop-shadow-[0_0_3px_rgba(74,255,145,0.7)]">✓</span>
                      <span className="text-white font-medium group-hover:text-[#4AFF91] transition-colors drop-shadow-[0_0_2px_rgba(255,255,255,0.5)] ml-2">{feature}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;