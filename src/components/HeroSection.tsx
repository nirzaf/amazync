import { motion } from 'framer-motion';
import Button from './Button';
import ServerNetworkAnimation from './ServerNetworkAnimation';

const HeroSection = () => {
  return (
    <>
      {/* Top Banner */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-[#1E0B4B] to-[#2A1B5D] text-white py-2 px-4 relative"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <span role="img" aria-label="rocket" className="text-2xl animate-bounce">🚀</span>
            <span className="font-medium">NameHost Has Now Expanded To The UK!</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <Button variant="primary" size="sm" className="bg-[#FF6B00] hover:bg-[#FF8533]">
              Buy Now!
            </Button>
            <button className="text-white hover:text-gray-200">×</button>
          </motion.div>
        </div>
      </motion.div>

      {/* Secondary Navigation */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gradient-to-r from-[#0A2FB6] to-[#1A3FC6] text-white py-3"
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-8"
          >
            <div className="flex items-center gap-2 hover:text-blue-200 transition-colors cursor-pointer">
              <span className="text-gray-300">💬</span>
              <span>Live Chat</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-200 transition-colors cursor-pointer">
              <span className="text-gray-300">❓</span>
              <span>Help Center</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-200 transition-colors cursor-pointer">
              <span className="text-gray-300">📞</span>
              <span>1-855-984-6263</span>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <div className="flex items-center gap-2 hover:text-blue-200 transition-colors cursor-pointer">
              <span className="text-gray-300">🛒</span>
              <span>Cart</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <div className="min-h-[700px] relative overflow-hidden">
        {/* Background Pattern and Animation Layer */}
        <div className="absolute inset-0">
          <ServerNetworkAnimation />
        </div>
        
        {/* Content Layer - Positioned Above Animation */}
        <div className="relative w-full h-full" style={{ zIndex: 20 }}>
          <div className="max-w-7xl mx-auto px-4 pt-40 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center relative"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  🎉 Limited Time Offer
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-6xl md:text-7xl font-bold text-white mb-6 relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
              >
                Fast Hosting & Domains
                <br />
                <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-transparent bg-clip-text">
                  Made Easy
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl md:text-3xl text-gray-200 mb-12 relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
              >
                2025 Spring Savings Event: 
                <span className="text-[#FF6B00] font-bold"> Up to 70% Off!</span>
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="max-w-xl mx-auto relative flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="bg-[#FF6B00] hover:bg-[#FF8533] text-xl px-12 py-4 rounded-full transform hover:scale-105 transition-transform"
                >
                  Get Started Now
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white/10 hover:bg-white/20 text-white text-xl px-12 py-4 rounded-full backdrop-blur-sm transform hover:scale-105 transition-transform"
                >
                  Learn More
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-12 flex flex-wrap justify-center gap-8 text-gray-300"
              >
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Free SSL</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Money Back Guarantee</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;