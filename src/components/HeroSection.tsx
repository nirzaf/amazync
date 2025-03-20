import { motion } from 'framer-motion';
import Button from './Button';
import ServerNetworkAnimation from './ServerNetworkAnimation';
import { useTheme } from '../context/ThemeContext';

const HeroSection = () => {
  const { colors, gradients } = useTheme();

  return (
    <>
      {/* Top Banner */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 relative shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <span role="img" aria-label="rocket" className="text-2xl animate-bounce">🚀</span>
            <span className={`font-medium text-[${colors.lavenderWeb}]`}>NameHost Has Now Expanded To The UK!</span>
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
            <button className={`text-[${colors.lavenderWeb}] hover:text-white transition-colors`}>×</button>
          </motion.div>
        </div>
      </motion.div>

      {/* Secondary Navigation */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-[#1934B6]/90 backdrop-blur-sm text-white py-3 shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-8"
          >
            <div className="flex items-center gap-2 hover:text-white transition-all duration-300 cursor-pointer group">
              <span className="text-blue-300 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">💬</span>
              <span>Live Chat</span>
            </div>
            <div className={`flex items-center gap-2 hover:text-[${colors.lavenderWeb}] transition-colors cursor-pointer group`}>
              <span className={`text-[${colors.glaucous}] group-hover:text-[${colors.lavenderWeb}] transition-colors`}>❓</span>
              <span>Help Center</span>
            </div>
            <div className={`flex items-center gap-2 hover:text-[${colors.lavenderWeb}] transition-colors cursor-pointer group`}>
              <span className={`text-[${colors.glaucous}] group-hover:text-[${colors.lavenderWeb}] transition-colors`}>📞</span>
              <span>1-855-984-6263</span>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <div className={`flex items-center gap-2 hover:text-[${colors.lavenderWeb}] transition-colors cursor-pointer group`}>
              <span className={`text-[${colors.glaucous}] group-hover:text-[${colors.lavenderWeb}] transition-colors`}>🛒</span>
              <span>Cart</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <div className="min-h-[700px] relative overflow-hidden bg-[#0B2A97]">
        {/* Background Pattern and Animation Layer */}
        <div className="absolute inset-0">
          <ServerNetworkAnimation />
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
                  <span className="text-lg">🎉</span>
                  <span>Limited Time Offer</span>
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-6xl md:text-7xl font-bold text-white mb-6 relative [text-shadow:_1px_1px_0_rgba(0,0,0,0.5)]"
              >
                Fast Hosting & Domains
                <br />
                <span className="text-[#EC3A1C] font-extrabold">
                  Made Easy
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl md:text-3xl text-white mb-12 relative [text-shadow:_1px_1px_0_rgba(0,0,0,0.5)]"
              >
                2025 Spring Savings Event: 
                <span className={`text-[${colors.chiliRed}] font-bold`}> Up to 70% Off!</span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="max-w-xl mx-auto relative flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button variant="primary" size="lg" className="bg-[#EC3A1C] hover:bg-[#7882B6] text-white">
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
                {['99.9% Uptime', '24/7 Support', 'Free SSL', 'Money Back Guarantee'].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 group">
                    <div className="flex items-center justify-center bg-gradient-to-r from-[#1934B6] to-[#192C99] rounded-full p-4">
                      <span className="text-green-500 group-hover:scale-110 transition-transform glow">✓</span>
                      <span className="text-green-500 group-hover:text-white transition-colors glow ml-2">{feature}</span>
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