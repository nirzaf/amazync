import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const PreInstalledCMSSection = () => {
  const { colors } = useTheme();

  const cmsSystems = [
    {
      name: 'WordPress',
      description: 'The world\'s most popular CMS with endless customization options and plugins.',
      image: 'https://ik.imagekit.io/qch9hivley/CMS/wordpress-1.png?updatedAt=1743802994419'
    },
    {
      name: 'Drupal',
      description: 'Enterprise-grade CMS for complex, content-rich websites with advanced security.',
      image: 'https://ik.imagekit.io/qch9hivley/CMS/drupal-1.png?updatedAt=1743802992391'
    },
    {
      name: 'Joomla',
      description: 'Flexible CMS with a balance of features, user-friendliness, and extensibility.',
      image: 'https://ik.imagekit.io/qch9hivley/CMS/joomla-1.png?updatedAt=1743802993092'
    },
    {
      name: 'Magento',
      description: 'Powerful e-commerce platform for creating sophisticated online stores.',
      image: 'https://ik.imagekit.io/qch9hivley/CMS/magento.png?updatedAt=1743802918040'
    },
    {
      name: 'WooCommerce',
      description: 'A customizable, open-source eCommerce platform built on WordPress.',
      image: 'https://ik.imagekit.io/qch9hivley/CMS/woo-logo-e1666712636416-300x296.png?updatedAt=1743802994880'
    },
    {
      name: 'Laravel',
      description: 'A popular PHP framework for building web applications.',
      image: 'https://ik.imagekit.io/qch9hivley/CMS/laravel_logo-e1666712721319-150x150.png?updatedAt=1743802992504'
    },
    {
      name: 'PHPBB',
      description: 'Free and open source forum software.',
      image: 'https://ik.imagekit.io/qch9hivley/CMS/phpbb.png?updatedAt=1743802991056'
    },
    {
      name: 'PrestaShop',
      description: 'An efficient and innovative e-commerce solution with all the features you need.',
      image: 'https://ik.imagekit.io/qch9hivley/CMS/prestashop.png?updatedAt=1743802890058'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0B2A97] mb-4">
            Pre-Installed CMS Solutions
          </h2>
          <p className="text-xl text-gray-600">
            Launch your website instantly with our pre-configured content management systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cmsSystems.map((cms, index) => (
            <motion.div
              key={cms.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg relative overflow-hidden group"
            >
              <div className="mb-6 h-20 flex items-center justify-center">
                <img 
                  src={cms.image} 
                  alt={`${cms.name} logo`} 
                  className="h-16 object-contain transition-all duration-300 group-hover:scale-110" 
                />
              </div>
              <h3 className="text-xl font-bold text-[#0B2A97] mb-2">{cms.name}</h3>
              <p className="text-gray-600">{cms.description}</p>
              <div className="mt-6">
                <button className="text-[#0B2A97] font-medium hover:text-blue-700 transition-colors duration-300 flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700 mb-6">
            All our hosting plans include one-click CMS installation and setup wizards
          </p>
          <button className="bg-[#0B2A97] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore Hosting Plans
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PreInstalledCMSSection;