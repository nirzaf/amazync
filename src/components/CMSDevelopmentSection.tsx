import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const CMSDevelopmentSection = () => {
  const { colors } = useTheme();

  const cmsServices = [
    {
      name: 'WordPress Development',
      description: 'Custom theme development, plugin integration, and complete WordPress solutions tailored to your business needs.',
      image: 'https://ik.imagekit.io/qch9hivley/wordpress-themes.png?updatedAt=1742508163108'
    },
    {
      name: 'Joomla Solutions',
      description: 'Professional Joomla development services for creating dynamic and scalable business websites.',
      image: 'https://ik.imagekit.io/qch9hivley/Generated%20Image%20March%2021,%202025%20-%203_45AM.png.jpeg?updatedAt=1742518010506'
    },
    {
      name: 'Moodle Implementation',
      description: 'Complete Moodle setup and customization for educational institutions and online learning platforms.',
      image: 'https://ik.imagekit.io/qch9hivley/Generated%20Image%20March%2021,%202025%20-%203_41AM.png.jpeg?updatedAt=1742517809707'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#192C99] to-[#1934B6]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            CMS Development & Customization
          </h2>
          <p className="text-xl text-white/80">
            Transform your digital presence with our expert CMS development services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cmsServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden rounded-lg mb-6">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
              <p className="text-white/80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CMSDevelopmentSection;