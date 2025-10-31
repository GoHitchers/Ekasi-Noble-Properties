import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 w-full z-[50000] transition-all duration-300 bg-white shadow-md py-3`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a href="#" className="text-2xl font-bold flex items-center">
              <img
                src="/logo.png"
                alt="Ekasi Noble Properties"
                className="h-12 sm:h-14 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-3 xl:space-x-5 items-center">
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 transition-colors text-sm xl:text-base"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-900 hover:text-blue-600 transition-colors text-sm xl:text-base"
            >
              About
            </a>
            <a
              href="#properties"
              className="text-gray-900 hover:text-blue-600 transition-colors text-sm xl:text-base"
            >
              Properties
            </a>
            <a
              href="#rent-to-own"
              className="text-gray-900 hover:text-blue-600 transition-colors text-sm xl:text-base"
            >
              Rent-to-Own
            </a>
            <a
              href="#gallery"
              className="text-gray-900 hover:text-blue-600 transition-colors text-sm xl:text-base"
            >
              Gallery
            </a>
            <a
              href="#events"
              className="text-gray-900 hover:text-blue-600 transition-colors text-sm xl:text-base"
            >
              Events
            </a>
            <a
              href="#faq"
              className="text-gray-900 hover:text-blue-600 transition-colors text-sm xl:text-base"
            >
              FAQ
            </a>
            <a
              href="#projects"
              className="text-gray-900 hover:text-blue-600 transition-colors text-sm xl:text-base"
            >
              Projects
            </a>
            <a
              href="#investment"
              className="text-gray-900 hover:text-blue-600 transition-colors text-sm xl:text-base"
            >
              Investment
            </a>
            <a
              href="#contact"
              className="text-gray-900 hover:text-blue-600 transition-colors text-sm xl:text-base"
            >
              Contact
            </a>
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href="tel:0115271978"
              className="flex items-center hover:text-blue-600 transition-colors bg-blue-50 px-4 py-2 rounded-lg"
            >
              <Phone size={16} className="mr-2 text-blue-600" />
              <span className="text-gray-900 text-sm xl:text-base font-medium">011 527 1978</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-gray-900 hover:text-blue-600 transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-900 hover:text-blue-600 transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#properties"
                className="text-gray-900 hover:text-blue-600 transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Properties
              </a>
              <a
                href="#rent-to-own"
                className="text-gray-900 hover:text-blue-600 transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Rent-to-Own
              </a>
              <a
                href="#gallery"
                className="text-gray-900 hover:text-blue-600 transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#events"
                className="text-gray-900 hover:text-blue-600 transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </a>
              <a
                href="#faq"
                className="text-gray-900 hover:text-blue-600 transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#projects"
                className="text-gray-900 hover:text-blue-600 transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#investment"
                className="text-gray-900 hover:text-blue-600 transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Investment
              </a>
              <a
                href="#contact"
                className="text-gray-900 hover:text-blue-600 transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="tel:0115271978"
                className="flex items-center text-white bg-blue-600 hover:bg-blue-700 transition-colors py-3 px-4 rounded-lg mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone size={18} className="mr-2" />
                <span className="font-medium">011 527 1978</span>
              </a>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header; 