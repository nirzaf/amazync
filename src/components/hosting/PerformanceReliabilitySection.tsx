import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const PerformanceReliabilitySection = () => {
  const { colors } = useTheme();

  const performanceFeatures = [
    {
      name: 'High-Speed SSD Storage',
      description: 'All hosting plans include ultra-fast SSD storage for lightning-quick website loading times.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: '99.9% Uptime Guarantee',
      description: 'We guarantee 99.9% uptime for all our hosting services with redundant infrastructure.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: 'Global CDN Network',
      description: 'Content delivery network with global edge locations for faster content delivery worldwide.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: 'Automated Backups',
      description: 'Daily automated backups with easy one-click restore options to keep your data safe.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      )
    }
  ];

  const performanceStats = [
    { label: 'Average Page Load Time', value: '0.5s' },
    { label: 'Uptime', value: '99.9%' },
    { label: 'Global Data Centers', value: '24' },
    { label: 'DDoS Protection', value: 'Included' }
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
            <div 
              key={stat.label} 
              className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-100"
            >
              <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            </div>
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