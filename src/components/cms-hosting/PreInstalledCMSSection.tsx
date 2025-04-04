import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface CMSSystem {
  name: string;
  logo: string;
}

const PreInstalledCMSSection = () => {
  useTheme(); // Keep the hook call without destructuring

  const cmsSystems: CMSSystem[] = [
    {
      name: 'Prestashop',
      logo: 'https://ik.imagekit.io/qch9hivley/CMS/prestashop.png?updatedAt=1743802890058'
    },
    {
      name: 'Magento',
      logo: 'https://ik.imagekit.io/qch9hivley/CMS/magento.png?updatedAt=1743802918040'
    },
    {
      name: 'Drupal',
      logo: 'https://ik.imagekit.io/qch9hivley/CMS/drupal-1.png?updatedAt=1743802992391'
    },
    {
      name: 'phpBB',
      logo: 'https://ik.imagekit.io/qch9hivley/CMS/phpbb.png?updatedAt=1743802991056'
    },
    {
      name: 'Joomla',
      logo: 'https://ik.imagekit.io/qch9hivley/CMS/joomla-1.png?updatedAt=1743802993092'
    },
    {
      name: 'WordPress',
      logo: 'https://ik.imagekit.io/qch9hivley/CMS/wordpress-1.png?updatedAt=1743802994419'
    },
    {
      name: 'Laravel',
      logo: 'https://ik.imagekit.io/qch9hivley/CMS/laravel_logo-e1666712721319-150x150.png?updatedAt=1743802992504'
    },
    {
      name: 'WooCommerce',
      logo: 'https://ik.imagekit.io/qch9hivley/CMS/woo-logo-e1666712636416-300x296.png?updatedAt=1743802994880'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#0B2A97]">
            Pre-installed CMS – Choose the One You Love.
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            The latest version of CMS is installed by default – choose yours to get started
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cmsSystems.slice(0, 4).map((cms, index) => (
            <motion.div
              key={cms.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-b from-white to-gray-50 rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_-4px_rgba(11,42,151,0.1),0_4px_8px_-4px_rgba(11,42,151,0.06)] relative before:absolute before:inset-0 before:bg-white/40 before:rounded-lg before:backdrop-blur-[2px] before:border before:border-[#0B2A97]/10 group"
            >
              <div className="flex flex-col items-center relative z-10">
                <div className="relative mb-4 bg-gradient-to-b from-white/80 to-gray-50/80 p-4 rounded-lg shadow-inner">
                  <img 
                    src={cms.logo} 
                    alt={`${cms.name} logo`} 
                    className="h-16 object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-lg" 
                  />
                </div>
                <span className="text-[#0B2A97] font-medium text-lg drop-shadow-sm">{cms.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {cmsSystems.slice(4).map((cms, index) => (
            <motion.div
              key={cms.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
              className="bg-gradient-to-b from-white to-gray-50 rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_-4px_rgba(11,42,151,0.1),0_4px_8px_-4px_rgba(11,42,151,0.06)] relative before:absolute before:inset-0 before:bg-white/40 before:rounded-lg before:backdrop-blur-[2px] before:border before:border-[#0B2A97]/10 group"
            >
              <div className="flex flex-col items-center relative z-10">
                <div className="relative mb-4 bg-gradient-to-b from-white/80 to-gray-50/80 p-4 rounded-lg shadow-inner">
                  <img 
                    src={cms.logo} 
                    alt={`${cms.name} logo`} 
                    className="h-16 object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-lg" 
                  />
                </div>
                <span className="text-[#0B2A97] font-medium text-lg drop-shadow-sm">{cms.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreInstalledCMSSection;
