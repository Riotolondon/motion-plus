import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ExternalLink, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-12 pb-6 bg-gray-900">
      <div className="container px-4 mx-auto md:px-6">
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="MOTION+" className="h-12" />
            </div>
            <p className="mb-4 text-gray-400">
              Professional photography services capturing your special moments with exceptional quality and creativity.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-brand-blue">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-brand-blue">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 transition-colors hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 transition-colors hover:text-white">Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 transition-colors hover:text-white">Gallery</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 transition-colors hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 transition-colors hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#event" className="text-gray-400 transition-colors hover:text-white">Event Photography</Link>
              </li>
              <li>
                <Link to="/services#corporate" className="text-gray-400 transition-colors hover:text-white">Corporate Photography</Link>
              </li>
              <li>
                <Link to="/services#portrait" className="text-gray-400 transition-colors hover:text-white">Portrait Photography</Link>
              </li>
              <li>
                <Link to="/services#lifestyle" className="text-gray-400 transition-colors hover:text-white">Lifestyle Photography</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-brand-blue" />
                <a href="tel:+27682408816" className="text-gray-400 transition-colors hover:text-white">+27 68 240 8816</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-brand-blue" />
                <a href="mailto:info@motionplus.com" className="text-gray-400 transition-colors hover:text-white">info@motionplus.com</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink size={18} className="text-brand-blue" />
                <a href="https://www.motionplus.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-white">www.motionplus.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-gray-800">
          <p className="text-sm text-center text-gray-500">
            &copy; {new Date().getFullYear()} MOTION+ Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;