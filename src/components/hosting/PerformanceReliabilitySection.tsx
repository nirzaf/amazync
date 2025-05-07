import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { 
  // Feature icons
  SSDStorageIcon, 
  UptimeGuaranteeIcon, 
  GlobalCDNIcon, 
  AutomatedBackupIcon,
  // Performance stats icons
  PageLoadIcon,
  UptimeStatsIcon,
  DataCentersIcon,
  DDoSProtectionIcon
} from '../../components/icons/hosting';

const PerformanceReliabilitySection = () => {
  useTheme();

  const performanceFeatures = [
    {
      name: 'High-Speed SSD Storage',
      description: 'All hosting plans include ultra-fast SSD storage for lightning-quick website loading times.',
      icon: <SSDStorageIcon />
    },
    {
      name: '99.9% Uptime Guarantee',
      description: 'We guarantee 99.9% uptime for all our hosting services with redundant infrastructure.',
      icon: <UptimeGuaranteeIcon />
    },
    {
      name: 'Global CDN Network',
      description: 'Content delivery network with global edge locations for faster content delivery worldwide.',
      icon: <GlobalCDNIcon />
    },
    {
      name: 'Automated Backups',
      description: 'Daily automated backups with easy one-click restore options to keep your data safe.',
      icon: <AutomatedBackupIcon />
    }
  ];

  const performanceStats = [
    { 
      label: 'Average Page Load Time', 
      value: '0.5s',
      icon: <PageLoadIcon />
    },
    { 
      label: 'Uptime', 
      value: '99.9%',
      icon: <UptimeStatsIcon />
    },
    { 
      label: 'Global Data Centers', 
      value: '24',
      icon: <DataCentersIcon />
    },
    { 
      label: 'DDoS Protection', 
      value: 'Included',
      icon: <DDoSProtectionIcon />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Performance & Reliability
          </h2>
          <p className="text-xl text-gray-600">
            Enterprise-grade infrastructure for maximum speed and reliability
          </p>
        </motion.div>

        {/* Performance Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {performanceStats.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-blue-100 group"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <p className="text-gray-600 text-sm mb-1 group-hover:text-blue-600 transition-colors duration-300">{stat.label}</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Performance Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {performanceFeatures.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white shadow-md rounded-xl p-6 flex items-start gap-6 border border-gray-100 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex-shrink-0 bg-gray-100 p-3 rounded-lg">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View Performance Reports
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceReliabilitySection;