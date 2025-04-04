import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { JSX } from 'react';

interface Integration {
  name: string;
  icon: JSX.Element;
  description: string;
}

const IntegrationSection = () => {
  useTheme();

  const integrations: Integration[] = [
    {
      name: 'Laravel',
      description: 'Modern PHP framework for web artisans',
      icon: (
        <img src="https://ik.imagekit.io/qch9hivley/Laravel.png?updatedAt=1742558709238" alt="Laravel" className="w-10 h-10 object-contain filter drop-shadow-lg" />
      )
    },
    {
      name: 'WordPress',
      description: 'Popular CMS for building websites',
      icon: (
        <img src="https://ik.imagekit.io/qch9hivley/_CITYPNG.COM_Wordpress%20Logo%20Image%20PNG%20-%201000x1000.png?updatedAt=1742559321260" alt="WordPress" className="w-10 h-10 object-contain filter drop-shadow-lg" />
      )
    },
    {
      name: 'Moodle',
      description: 'Open-source learning platform',
      icon: (
        <img src="https://ik.imagekit.io/qch9hivley/Moodle.png?updatedAt=1742558771837" alt="Moodle" className="w-10 h-10 object-contain filter drop-shadow-lg" />
      )
    },
    {
      name: 'Joomla',
      description: 'Flexible content management system',
      icon: (
        <img src="https://ik.imagekit.io/qch9hivley/joomla.svg?updatedAt=1742558852783" alt="Joomla" className="w-10 h-10 object-contain filter drop-shadow-lg" />
      )
    },
    {
      name: 'Drupal',
      description: 'Enterprise-grade CMS platform',
      icon: (
        <img src="https://ik.imagekit.io/qch9hivley/Drupal.png?updatedAt=1742558872205" alt="Drupal" className="w-10 h-10 object-contain filter drop-shadow-lg" />
      )
    },
    {
      name: 'osTicket',
      description: 'Help desk & support ticket system',
      icon: (
        <img src="https://ik.imagekit.io/qch9hivley/idCrWmLMG4_1742558986326.png?updatedAt=1742558995426" alt="osTicket" className="w-10 h-10 object-contain filter drop-shadow-lg" />
      )
    },
    {
      name: 'Magento',
      description: 'E-commerce platform for growth',
      icon: (
        <img src="https://ik.imagekit.io/qch9hivley/Adobe%20Commerce%20(Magneto).png?updatedAt=1742559024743" alt="Magento" className="w-10 h-10 object-contain filter drop-shadow-lg" />
      )
    },
    {
      name: 'ZenCart',
      description: 'Secure online store solution',
      icon: (
        <img src="https://ik.imagekit.io/qch9hivley/zencart-graphic.png?updatedAt=1742559186687" alt="ZenCart" className="w-10 h-10 object-contain filter drop-shadow-lg" />
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#192C99] to-[#1934B6]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Integrations & Technologies
          </h2>
          <p className="text-xl text-white/80">
            Seamlessly integrate with your favorite tools and platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
              className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-xl p-6 flex flex-col items-center justify-center gap-5 transition-all duration-300 transform hover:shadow-2xl border border-white/20 hover:border-white/40 group overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)]"
            >
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl opacity-30"></div>
              
              {/* Icon container with improved styling */}
              <div className="relative z-10 bg-gradient-to-br from-white/20 to-white/5 rounded-full p-5 backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 border border-white/30">
                <div className="w-12 h-12 flex items-center justify-center">
                  {integration.icon}
                </div>
              </div>
              
              {/* Name with improved styling */}
              <h3 className="relative z-10 text-2xl font-bold text-white group-hover:text-white transition-colors duration-300 mt-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                {integration.name}
              </h3>
              
              {/* Description with improved styling */}
              <p className="relative z-10 text-white/80 group-hover:text-white text-center text-base leading-relaxed transition-colors duration-300 drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
                {integration.description}
              </p>
              
              {/* Subtle indicator for interaction */}
              <div className="absolute bottom-3 w-12 h-1.5 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.2)]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;