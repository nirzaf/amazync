import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';

const AdvancedSupportSection = () => {
  useTheme();

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://ik.imagekit.io/qch9hivley/new-advance-support.png?updatedAt=1742836351309"
                alt="Optimized Server Support"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-[#EC3A1C] to-[#FF6B2C] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-bl from-[#192C99] to-[#1934B6] rounded-full opacity-30 blur-3xl"></div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-[#192C99]"
          >
            <div className="inline-block mb-4">
              <span className="bg-[#192C99]/10 backdrop-blur-md text-[#192C99] px-4 py-1.5 rounded-full text-sm font-medium border border-[#192C99]/20 shadow-lg">
                Premium Support
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#192C99]">
              Optimized Server for <span className="text-[#EC3A1C]">Ultimate Performance</span>
            </h2>
            
            <div className="space-y-6 mb-8 text-[#192C99]/80">
              <p>
                Finding industry-premium products and services at affordable prices will hugely benefit your business. All our services are here to provide you with an improved Internet experience.
              </p>
              
              <p>
                Starting from Low-end cost Shared Hosting, we have range of products that lights up your online business on the www.
              </p>
              
              <p>
                You will find our Support Team to be everything you need in terms of friendly and helpful assistance. These are real people who are ready to help you out with any issue on a 24/7 basis.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button 
                variant="primary" 
                size="lg" 
                className="bg-[#EC3A1C] hover:bg-[#ff4d2e] text-white shadow-lg shadow-[#EC3A1C]/20 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedSupportSection;