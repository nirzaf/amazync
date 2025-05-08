import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  useTheme();

  const footerLinks = {
    hosting: [
      'Web Hosting',
      'WordPress Hosting',
      'VPS Hosting',
      'Dedicated Servers',
      'Cloud Hosting'
    ],
    domains: [
      'Domain Names',
      'Domain Transfer',
      'Domain Privacy',
      'WHOIS Lookup',
      'Domain Auctions'
    ],
    support: [
      'Contact Us',
      'Knowledge Base',
      'Community Forums',
      'Status Page',
      'Submit a Ticket'
    ],
    company: [
      'About Us',
      'Blog',
      'Careers',
      'Press',
      'Partners'
    ]
  };

  return (
    <footer className="bg-gradient-to-r from-[#081D66] to-[#0F2680] text-white border-t border-[#1435AA]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-[#FF6B2C] transition-colors duration-200 text-sm sm:text-base block py-1"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-[#1435AA]">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <p className="text-white/60 text-sm sm:text-base text-center sm:text-left">
                © 2024 NameHost. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a
                href="#"
                className="text-white/80 hover:text-[#FF6B2C] transition-colors duration-200 text-sm sm:text-base whitespace-nowrap"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-[#FF6B2C] transition-colors duration-200 text-sm sm:text-base whitespace-nowrap"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-[#FF6B2C] transition-colors duration-200 text-sm sm:text-base whitespace-nowrap"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;