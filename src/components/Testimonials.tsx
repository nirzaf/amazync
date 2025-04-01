import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Testimonials = () => {
  useTheme();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Web Developer',
      company: 'TechStart Inc.',
      content: 'The hosting service is exceptional! The speed and reliability have exceeded my expectations. The support team is always ready to help.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'E-commerce Owner',
      company: 'ShopSmart',
      content: 'I\'ve been using their hosting for my online store for over a year. The uptime is incredible, and the SSL certificate setup was seamless.',
      rating: 5
    },
    {
      name: 'Emma Davis',
      role: 'Digital Marketing Agency',
      company: 'GrowthPro',
      content: 'The performance optimization tools are fantastic. My clients\' websites load instantly, which has significantly improved their conversion rates.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#192C99] to-[#1934B6]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-white/80">
            Join thousands of satisfied customers who trust us with their hosting needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              <p className="text-white mb-6 italic text-lg">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="text-lg font-bold text-white">
                  {testimonial.name}
                </h4>
                <p className="text-white/70">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;