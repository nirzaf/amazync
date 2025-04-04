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
  const { colors } = useTheme();

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
      className="fixed top-0 w-full z-50 transition-all duration-300 bg-blue-600 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/hosting" className="flex items-center relative">
              <div className="relative z-10">
                <img 
                  src="https://ik.imagekit.io/qch9hivley/image.png?updatedAt=1743447013040" 
                  alt="AmaZyncHost Logo" 
                  className="h-8 w-auto transition-opacity duration-300 hover:opacity-90"
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
              className="ml-auto"
            >
              Buy Now!
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
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
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div className="flex justify-center mb-4">
                  <img 
                    src="https://ik.imagekit.io/qch9hivley/image.png?updatedAt=1743447013040" 
                    alt="AmaZyncHost Logo" 
                    className="h-8 w-auto"
                  />
                </div>
                <Link
                  to="/hosting"
                  className="block px-3 py-2 text-white hover:text-white/80"
                  onClick={() => setIsOpen(false)}
                >
                  Web Hosting
                </Link>
                <Link
                  to="/cms-hosting"
                  className="block px-3 py-2 text-white hover:text-white/80"
                  onClick={() => setIsOpen(false)}
                >
                  CMS Hosting
                </Link>
                <Link
                  to="/reseller-hosting"
                  className="block px-3 py-2 text-white hover:text-white/80"
                  onClick={() => setIsOpen(false)}
                >
                  Reseller Hosting
                </Link>
                <Link
                  to="/cloud-vps"
                  className="block px-3 py-2 text-white hover:text-white/80"
                  onClick={() => setIsOpen(false)}
                >
                  Cloud VPS
                </Link>
                <Link
                  to="/email-hosting"
                  className="block px-3 py-2 text-white hover:text-white/80"
                  onClick={() => setIsOpen(false)}
                >
                  E-Mail Hosting
                </Link>
                <Link
                  to="/domains"
                  className="block px-3 py-2 text-white hover:text-white/80"
                  onClick={() => setIsOpen(false)}
                >
                  Domains
                </Link>
                <Link
                  to="/ssl"
                  className="block px-3 py-2 text-white hover:text-white/80"
                  onClick={() => setIsOpen(false)}
                >
                  SSL
                </Link>
                <div className="mt-4">
                  <Button variant="secondary" size="sm" className="w-full">
                    Buy Now!
                  </Button>
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