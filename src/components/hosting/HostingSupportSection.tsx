import { motion } from 'framer-motion';
import AnimatedServerIcon from './AnimatedServerIcon';
import { useTheme } from '../../context/ThemeContext';

const HostingSupportSection = () => {
  useTheme();

  const services = [
    {
      name: 'Managed Hosting',
      description: 'Comprehensive managed hosting solutions with automated backups, updates, and performance optimization.',
      image: 'https://ik.imagekit.io/qch9hivley/Managed%20Hosting.png?updatedAt=1742843529894&tr=w-800,h-450'
    },
    {
      name: '24/7 Technical Support',
      description: 'Round-the-clock expert technical support to ensure your applications run smoothly and efficiently.',
      image: 'https://ik.imagekit.io/qch9hivley/24_7%20Technical%20Support.jpeg?updatedAt=1742843363103&tr=w-800,h-450'
    },
    {
      name: 'Security & Maintenance',
      description: 'Proactive security monitoring, regular maintenance, and instant threat detection to protect your digital assets.',
      image: 'https://ik.imagekit.io/qch9hivley/Security%20&%20Maintenance.jpeg?updatedAt=1742843651001&tr=w-800,h-450'
    }
  ];

  return (
    <section className="bg-gradient-to-bl from-[#192C99] to-[#1934B6] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Hosting & Support Services
          </h2>
          <p className="text-xl text-white/80">
            Reliable hosting solutions backed by expert technical support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              {service.name === 'Managed Hosting' ? (
  <div className="flex items-end justify-center" style={{ minHeight: 300, height: 300, width: '100%' }}>
    <AnimatedServerIcon />
  </div>
) : (
  <div className="aspect-video overflow-hidden">
    <img
      src={service.image}
      alt={service.name}
      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
    />
  </div>
)}              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-white/80">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingSupportSection;