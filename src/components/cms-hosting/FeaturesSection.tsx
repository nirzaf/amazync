import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const features = [
  {
    title: 'Pre-Installed CMS',
    description: 'Optimized & fast performance latest version of your preferred CMS is installed by default with every plan.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M16 20h16M16 28h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'Advance Stack',
    description: 'Apache and Nginx as web servers, PHP-FPM, and MySQL/MariaDB as databases for the fastest page loading.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path d="M12 36l12-24 12 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 26h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'Lightning Fast Websites',
    description: 'All our servers are packed with NVME storage. You have full control of your website with top response times.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path d="M24 4l-8 24h16L24 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: 'Free SSL',
    description: 'Our built-in Let\'s Encrypt SSL improves CMS website security with a trusted certificate to fulfill HTTPS requirements.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path d="M14 22v-6a10 10 0 0120 0v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="10" y="22" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="32" r="2" fill="currentColor" />
      </svg>
    )
  },
  {
    title: 'Built-in Cache Plugin',
    description: 'Our simple yet powerful cache plugin offers improved performance for CMS websites without any additional cost.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M16 24h16M24 16v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'Automatic CMS Update',
    description: 'Core updates of your preferred CMS is automated. You can always enjoy the latest features of the CMS platform.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path d="M24 4v8M24 36v8M44 24h-8M12 24H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 32a8 8 0 100-16 8 8 0 000 16z" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: 'Dedicated Firewall',
    description: 'Our servers are protected by firewalls offering a secure hosting and regular OS patches to remove vulnerabilities.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path d="M24 4l16 8v12c0 8-6 16-16 20-10-4-16-12-16-20V12l16-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M24 22l4 4-4 4-4-4 4-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: 'FREE Migration Support',
    description: 'Complimentary website migration is provided. Our expert team transfers your website for free.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path d="M8 24h32M8 24l8-8M8 24l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

const FeaturesSection = () => {
  const { colors } = useTheme();

  return (
    <section className="py-20 bg-gradient-to-br from-[#0B2A97] to-[#1934B6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Features You Will Love
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Get a secure and performance focused managed CMS hosting for complete peace of mind. Pre-installed & configured CMS application (WordPress, Joomla, Drupal, Magento etc) for you to start your website in no time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 border border-white/20 hover:border-white/40"
            >
              <div className="text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/80 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;