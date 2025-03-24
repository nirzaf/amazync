import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const FrameworkDevelopmentSection = () => {
  const { colors } = useTheme();

  const frameworks = [
    {
      name: 'Laravel Development',
      description: 'Professional Laravel application development with secure, scalable, and maintainable solutions for your business.',
      image: 'https://ik.imagekit.io/qch9hivley/amazync-host-ai.jpeg?updatedAt=1742517562890'
    },
    {
      name: 'Custom Web Solutions',
      description: 'Tailored web application development that meets your unique business requirements and drives growth.',
      image: 'https://ik.imagekit.io/qch9hivley/home-support.png?updatedAt=1742508138367'
    },
    {
      name: 'API Integration',
      description: 'Seamless API integration services to connect your applications and streamline your business processes.',
      image: 'https://ik.imagekit.io/qch9hivley/home-control_panel.png?updatedAt=1742508119275'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-white to-[#DBD9EC]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#192C99] mb-4">
            Framework Development
          </h2>
          <p className="text-xl text-[#192C99]/80">
            Build robust and scalable applications with our expert development services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {frameworks.map((framework, index) => (
            <motion.div
              key={framework.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={framework.image}
                  alt={framework.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#192C99] mb-3">{framework.name}</h3>
                <p className="text-[#192C99]/80">{framework.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkDevelopmentSection;