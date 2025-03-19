import { motion } from 'framer-motion';
import { Zap, Shield, Clock, Server } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Quick And Easy To Setup',
      description: 'Get your website up and running in minutes with our intuitive control panel and one-click installations.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500'
    },
    {
      title: 'Your Website 20x Faster',
      description: 'Experience lightning-fast load times with our optimized servers and advanced caching technology.',
      icon: Server,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=500'
    },
    {
      title: 'Supreme Reliability',
      description: 'Enjoy 99.9% uptime guarantee with our enterprise-grade infrastructure and redundant systems.',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=500'
    },
    {
      title: 'Superhero Support That\'s Always Online',
      description: '24/7 expert support ready to help you with any hosting-related questions or issues.',
      icon: Clock,
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=500'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col md:flex-row items-center gap-12 mb-20"
          >
            <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
              <div className="flex items-center space-x-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
                <button className="text-blue-600 font-semibold hover:text-blue-700">Learn More</button>
              </div>
            </div>
            <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;