import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Features = () => {
  const { colors, gradients } = useTheme();

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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#192C99]/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center hover:bg-[#192C99]/20 transition-all duration-300 transform hover:-translate-y-1 border border-[#192C99]/10 hover:border-[#192C99]/20"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#192C99] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#192C99]/80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;