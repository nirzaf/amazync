import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
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
        <img src="https://ik.imagekit.io/qch9hivley/Laravel.png?updatedAt=1742558709238" alt="Laravel" className="w-10 h-10 object-contain" />
      )
    },
    {
      name: 'WordPress',
      description: 'Popular CMS for building websites',
      icon: (
        <img src="https://ik.imagekit.io/qch9hivley/_CITYPNG.COM_Wordpress%20Logo%20Image%20PNG%20-%201000x1000.png?updatedAt=1742559321260" alt="WordPress" className="w-10 h-10 object-contain" />
      )
    },
    {
      name: 'Moodle',
      description: 'Open-source learning platform',
      icon: (
        <img src="https://ik.imagekit.io/qch9hivley/Moodle.png?updatedAt=1742558771837" alt="Moodle" className="w-10 h-10 object-contain" />
      )
    },
    {
      name: 'Joomla',
      description: 'Flexible content management system',
      icon: (
        <img src="https://ik.imagekit.io/qch9hivley/joomla.svg?updatedAt=1742558852783" alt="Joomla" className="w-10 h-10 object-contain" />
      )
    },
    {
      name: 'Drupal',
      description: 'Enterprise-grade CMS platform',
      icon: (
        <img src="https://ik.imagekit.io/qch9hivley/Drupal.png?updatedAt=1742558872205" alt="Drupal" className="w-10 h-10 object-contain" />
      )
    },
    {
      name: 'osTicket',
      description: 'Help desk & support ticket system',
      icon: (
        <img src="https://ik.imagekit.io/qch9hivley/idCrWmLMG4_1742558986326.png?updatedAt=1742558995426" alt="osTicket" className="w-10 h-10 object-contain" />
      )
    },
    {
      name: 'Magento',
      description: 'E-commerce platform for growth',
      icon: (
        <img src="https://ik.imagekit.io/qch9hivley/Adobe%20Commerce%20(Magneto).png?updatedAt=1742559024743" alt="Magento" className="w-10 h-10 object-contain" />
      )
    },
    {
      name: 'ZenCart',
      description: 'Secure online store solution',
      icon: (
        <img src="https://ik.imagekit.io/qch9hivley/zencart-graphic.png?updatedAt=1742559186687" alt="ZenCart" className="w-10 h-10 object-contain" />
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#192C99] mb-4">
            Integrations & Technologies
          </h2>
          <p className="text-xl text-[#192C99]/80">
            Seamlessly integrate with your favorite tools and platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#192C99]/10 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center justify-center gap-6 hover:bg-[#192C99]/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-[#192C99]/10 hover:border-[#192C99]/20 group"
            >
              <div className="bg-[#192C99]/5 rounded-full p-6 backdrop-blur-lg shadow-[0_0_15px_rgba(25,44,153,0.1)] group-hover:shadow-[0_0_25px_rgba(25,44,153,0.2)] transition-all duration-300">
                {integration.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#192C99] group-hover:text-[#192C99]/90 transition-colors duration-300">{integration.name}</h3>
              <p className="text-[#192C99]/90 text-center text-base leading-relaxed">{integration.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;