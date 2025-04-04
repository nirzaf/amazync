import { motion } from 'framer-motion';
import { ThemeProvider } from '../context/ThemeContext';
import { Navbar, FAQ, Footer, Testimonials } from '../components/shared';
import { CMSPricingCards, PreInstalledCMSSection } from '../components/cms-hosting';
import { PerformanceReliabilitySection } from '../components/hosting';

const CMSHosting = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0B2A97]">
        <Navbar />
        
        {/* Hero Section with CMS-specific content */}
        <section className="pt-32 pb-20 bg-[#0B2A97] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl font-bold mb-6">Fast & Secure CMS Hosting</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Optimized hosting for WordPress, Drupal, Joomla and other popular content management systems
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Started
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <img 
                src="https://ik.imagekit.io/qch9hivley/cms-hosting-hero.png?updatedAt=1743447500000" 
                alt="CMS Hosting Illustration" 
                className="max-w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </section>
        
        {/* CMS Pricing Cards */}
        <CMSPricingCards />
        
        {/* Pre-installed CMS Section */}
        <PreInstalledCMSSection />
        
        {/* Performance & Reliability Section */}
        <PerformanceReliabilitySection />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default CMSHosting;