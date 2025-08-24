import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container px-4 mx-auto md:px-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="MOTION+" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-brand-blue' : ''}`}>
              Home
            </Link>
            <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'text-brand-blue' : ''}`}>
              Services
            </Link>
            <Link to="/gallery" className={`nav-link ${location.pathname === '/gallery' ? 'text-brand-blue' : ''}`}>
              Gallery
            </Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'text-brand-blue' : ''}`}>
              About
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="text-white md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 w-full px-4 py-4 shadow-lg md:hidden top-full bg-black/95 backdrop-blur-md animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-brand-blue' : ''}`}>
                Home
              </Link>
              <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'text-brand-blue' : ''}`}>
                Services
              </Link>
              <Link to="/gallery" className={`nav-link ${location.pathname === '/gallery' ? 'text-brand-blue' : ''}`}>
                Gallery
              </Link>
              <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'text-brand-blue' : ''}`}>
                About
              </Link>
              <Link to="/contact" className="w-full text-center btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;