import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { colors, gradients } = useTheme();

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
    <footer className="bg-[#0B2A97] text-white border-t border-[#1435AA]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-[#FF6B2C] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#1435AA]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-white/60">
                © 2024 NameHost. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-white/80 hover:text-[#FF6B2C] transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-[#FF6B2C] transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-[#FF6B2C] transition-colors duration-200"
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