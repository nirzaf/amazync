import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface Integration {
  name: string;
  icon: JSX.Element;
  description: string;
}

const IntegrationSection = () => {
  const { colors } = useTheme();

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
    <section className="py-20 bg-gradient-to-b from-[#0B2A97] to-[#1435AA]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Integrated with more than 100+ applications you love.
          </h2>
          <p className="text-xl text-white/80">
            Creating a website from scratch can feel like a time suck. Choose from a variety of pre-assembled apps and let our nifty 1-click installer do the work for you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl border border-white/10 hover:border-white/20"
            >
              <div className="bg-white/5 rounded-full p-4 backdrop-blur-md">
                {integration.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{integration.name}</h3>
              <p className="text-white/70 text-center text-sm">{integration.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;