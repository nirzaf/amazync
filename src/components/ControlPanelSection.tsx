import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ControlPanelSection = () => {
  const { colors } = useTheme();

  const features = [
    {
      name: 'User-Friendly Dashboard',
      description: 'Intuitive control panel interface with easy access to all your hosting and website management tools.',
      image: 'https://ik.imagekit.io/qch9hivley/home-control_panel.png?updatedAt=1742508119275'
    },
    {
      name: 'Analytics Integration',
      description: 'Comprehensive analytics tools to track website performance, visitor behavior, and business metrics.',
      image: 'https://ik.imagekit.io/qch9hivley/amazync-host-ai.jpeg?updatedAt=1742517562890'
    },
    {
      name: 'Client Portal',
      description: 'Secure client portal for managing services, viewing reports, and accessing support resources.',
      image: 'https://ik.imagekit.io/qch9hivley/home-support.png?updatedAt=1742508138367'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-bl from-[#192C99] to-[#1934B6]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Control Panel & Management
          </h2>
          <p className="text-xl text-white/80">
            Powerful tools to manage your digital presence with ease
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{feature.name}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ControlPanelSection;