import { motion } from 'framer-motion';
import Button from './Button';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#1E0B4B] text-white py-2 px-4 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span role="img" aria-label="rocket" className="text-2xl">🚀</span>
            <span className="font-medium">NameHost Has Now Expanded To The UK!</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="primary" size="sm" className="bg-[#FF6B00] hover:bg-[#FF8533]">
              Buy Now!
            </Button>
            <button className="text-white hover:text-gray-200">×</button>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-[#0A2FB6] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2">
              <span className="text-gray-300">💬</span>
              <span>Live Chat</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-300">❓</span>
              <span>Help Center</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-300">📞</span>
              <span>1-855-984-6263</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-300">🛒</span>
              <span>Cart</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#0A2FB6] min-h-[600px] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2FB6] to-[#0A2FB6]/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pt-32 pb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Fast Hosting & Domains Made Easy
            </h1>
            <p className="text-2xl text-gray-200 mb-8">
              2025 Spring Savings Event: Up to 70% Off!
            </p>

            <div className="max-w-xl mx-auto">
              <Button 
                variant="primary" 
                size="lg" 
                className="bg-[#FF6B00] hover:bg-[#FF8533] text-xl px-12"
              >
                Get Started Now
              </Button>
            </div>

            {/* Server Illustrations */}
            <div className="absolute left-0 bottom-0 opacity-20">
              <div className="w-64 h-64 border-2 border-white/20 transform rotate-45"></div>
            </div>
            <div className="absolute right-0 bottom-0 opacity-20">
              <div className="w-64 h-64 border-2 border-white/20 transform rotate-45"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;