import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'History', path: '/history' },
    { name: 'Archives', path: '/archives' },
    { name: 'Media', path: '/media' },
    { name: 'Publications', path: '/publications' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-[#1A2B47] rounded-full flex items-center justify-center group-hover:bg-[#C5A572] transition-colors">
              <span className="text-white font-serif font-semibold text-xl">A</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif font-semibold text-xl text-[#1A2B47]">Aniagolu's Legacy</h1>
              <p className="text-xs text-[#8B8478]">Justice · Leadership · Service</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md transition-all duration-200 relative group ${
                  location.pathname === link.path
                    ? 'text-[#1A2B47] font-medium'
                    : 'text-[#8B8478] hover:text-[#1A2B47]'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#C5A572] transition-all duration-200 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-[#C5A572] text-white rounded-md hover:bg-[#9E7E4A] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Support
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#1A2B47] hover:bg-[#E8E2D9] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-[#E8E2D9]"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-md transition-colors ${
                    location.pathname === link.path
                      ? 'bg-[#1A2B47] text-white'
                      : 'text-[#8B8478] hover:bg-[#E8E2D9]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block px-4 py-3 bg-[#C5A572] text-white rounded-md text-center hover:bg-[#9E7E4A] transition-colors mt-4"
              >
                Support the Mission
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
