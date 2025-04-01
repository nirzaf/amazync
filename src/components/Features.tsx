import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Features = () => {
  useTheme();

  const features = [
    {
      title: 'Lightning Fast Speed',
      description: 'Experience blazing-fast website loading times with our optimized servers and SSD storage.',
      icon: '⚡'
    },
    {
      title: '99.9% Uptime Guarantee',
      description: 'Your website stays online with our industry-leading uptime guarantee and redundant infrastructure.',
      icon: '🛡️'
    },
    {
      title: 'Free SSL Certificate',
      description: 'Secure your website with a free SSL certificate, ensuring safe data transmission.',
      icon: '🔒'
    },
    {
      title: '24/7 Support',
      description: 'Our expert support team is available around the clock to help you with any issues.',
      icon: '💬'
    },
    {
      title: 'Daily Backups',
      description: 'Your data is automatically backed up daily, ensuring you never lose important information.',
      icon: '💾'
    },
    {
      title: 'DDoS Protection',
      description: 'Advanced security measures to protect your website from DDoS attacks and other threats.',
      icon: '🛡️'
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
          <h2 className="text-4xl font-bold text-[#192C99] mb-4">
            Key Features
          </h2>
          <p className="text-xl text-[#192C99]/80">
            Experience the best hosting features for your website
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-[#192C99]/5 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center text-center hover:bg-gradient-to-br hover:from-white hover:to-[#192C99]/10 transition-all duration-300 transform hover:-translate-y-2 border border-[#192C99]/10 hover:border-[#192C99]/30 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              {/* Decorative background element */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#192C99]/5 rounded-full group-hover:bg-[#192C99]/10 transition-all duration-500"></div>
              
              <motion.div 
                className="text-5xl mb-6 bg-[#192C99]/10 p-5 rounded-full relative z-10 group-hover:bg-[#192C99]/20 transition-all duration-300 shadow-md group-hover:shadow-lg"
                whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold text-[#192C99] mb-3 relative z-10">
                {feature.title}
              </h3>
              
              <p className="text-[#192C99]/80 relative z-10 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Bottom accent line with animation */}
              <motion.div 
                className="h-1 bg-gradient-to-r from-[#192C99] to-[#FF6B2C] w-0 group-hover:w-1/2 absolute bottom-0 left-1/4 transition-all duration-300 rounded-t-full"
                initial={{ width: 0 }}
                animate={{ width: '20%' }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;