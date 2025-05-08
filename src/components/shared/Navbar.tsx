import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './index';
import { useTheme } from '../../context/ThemeContext';
import { OrbitingArrow as OrbitingFireball } from '../common';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useTheme(); // Using the theme context without destructuring to avoid lint errors
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-[#192C99] to-[#1934B6] shadow-lg' : 'bg-gradient-to-r from-[#192C99]/95 to-[#1934B6]/95 backdrop-blur-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <Link to="/hosting" className="flex items-center relative py-2">
              <div className="relative z-10">
                <img 
                  src="https://ik.imagekit.io/qch9hivley/image.png?updatedAt=1743447013040" 
                  alt="AmaZyncHost Logo" 
                  className="h-6 sm:h-8 w-auto transition-opacity duration-300 hover:opacity-90"
                />
              </div>
              <OrbitingFireball />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {[
                { path: '/hosting', label: 'Web Hosting' },
                { path: '/cms-hosting', label: 'CMS Hosting' },
                { path: '/reseller-hosting', label: 'Reseller Hosting' },
                { path: '/cloud-vps', label: 'Cloud VPS' },
                { path: '/email-hosting', label: 'E-Mail Hosting' },
                { path: '/domains', label: 'Domains' },
                { path: '/ssl', label: 'SSL' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative group text-white hover:text-white/80 transition-colors duration-300`}
                >
                  {item.label}
                  <motion.div
                    initial={{ width: location.pathname === item.path ? '100%' : '0%' }}
                    animate={{ width: location.pathname === item.path ? '100%' : '0%' }}
                    className="absolute bottom-0 left-0 h-0.5 bg-red-500 transition-colors duration-300"
                  />
                  <motion.div
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    className="absolute bottom-0 left-0 h-0.5 bg-white opacity-50 transition-colors duration-300"
                  />
                </Link>
              ))}
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="ml-auto px-6 py-2 rounded-full font-extrabold bg-gradient-to-r from-[#FF6B2C] via-[#FF3C14] to-[#FFB347] text-white shadow-[0_4px_24px_0_rgba(255,107,44,0.25)] hover:scale-105 hover:shadow-[0_2px_32px_0_rgba(255,60,20,0.35)] transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#FFB347]/70 animate-pulse"
              style={{ letterSpacing: 1 }}
              aria-label="Buy Now!"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="inline-block mr-1 animate-bounce">
                <path d="M6.5 6.5V5a3.5 3.5 0 117 0v1.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="3.5" y="6.5" width="13" height="10" rx="2.5" stroke="#fff" strokeWidth="1.5"/>
                <circle cx="8.5" cy="13.5" r="1" fill="#fff"/>
                <circle cx="11.5" cy="13.5" r="1" fill="#fff"/>
              </svg>
              Buy Now!
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#DBD9EC] transition-colors duration-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DBD9EC]/50 touch-manipulation"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-gradient-to-b from-[#192C99] to-[#1934B6] absolute left-0 right-0 top-14 sm:top-16 shadow-lg border-t border-[#7882B6]/30 z-50"
            >
              <div className="px-3 pt-3 pb-5 space-y-1 max-h-[80vh] overflow-y-auto">
                {/* Logo removed as requested */}
                {[
                  { path: '/hosting', label: 'Web Hosting' },
                  { path: '/cms-hosting', label: 'CMS Hosting' },
                  { path: '/reseller-hosting', label: 'Reseller Hosting' },
                  { path: '/cloud-vps', label: 'Cloud VPS' },
                  { path: '/email-hosting', label: 'E-Mail Hosting' },
                  { path: '/domains', label: 'Domains' },
                  { path: '/ssl', label: 'SSL' }
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-3.5 rounded-lg transition-all duration-300 text-base ${location.pathname === item.path 
                      ? 'bg-[#7882B6]/20 text-white font-medium' 
                      : 'text-white/90 hover:bg-[#7882B6]/10 hover:text-white'}`}
                  >
                    {item.label}
                    {location.pathname === item.path && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="h-0.5 bg-[#ff3c14] mt-1 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '30%' }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                ))}
                <div className="mt-6 px-2">
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="w-full py-3 rounded-full font-extrabold bg-gradient-to-r from-[#FF6B2C] via-[#FF3C14] to-[#FFB347] text-white shadow-[0_4px_24px_0_rgba(255,107,44,0.25)] hover:scale-105 hover:shadow-[0_2px_32px_0_rgba(255,60,20,0.35)] transition-all duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#FFB347]/70 animate-pulse" 
                    style={{ letterSpacing: 1 }}
                    aria-label="Buy Now!"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="inline-block mr-1 animate-bounce">
                      <path d="M6.5 6.5V5a3.5 3.5 0 117 0v1.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="3.5" y="6.5" width="13" height="10" rx="2.5" stroke="#fff" strokeWidth="1.5"/>
                      <circle cx="8.5" cy="13.5" r="1" fill="#fff"/>
                      <circle cx="11.5" cy="13.5" r="1" fill="#fff"/>
                    </svg>
                    Buy Now!
                  </Button>
                </div>
                
                {/* Social links */}
                <div className="mt-6 pt-4 border-t border-[#7882B6]/30 flex justify-center space-x-4">
                  {['Twitter', 'Facebook', 'Instagram'].map((social) => (
                    <a 
                      key={social} 
                      href={`#${social.toLowerCase()}`}
                      className="text-white/70 hover:text-white transition-colors duration-300"
                      aria-label={social}
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#7882B6]/20 hover:bg-[#7882B6]/40 transition-colors duration-300">
                        {social === 'Twitter' && 'X'}
                        {social === 'Facebook' && 'f'}
                        {social === 'Instagram' && 'IG'}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
      </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;