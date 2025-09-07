import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ExternalLink, Instagram, Facebook, TicketCheckIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-12 pb-6 bg-gray-900">
      <div className="container px-4 mx-auto md:px-6">
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="https://ik.imagekit.io/secula/MOTION/Branding/Motion+%20Watermark.png?updatedAt=1756509025611" alt="MOTION+" className="h-12" />
            </div>
            <p className="mb-4 text-gray-400">
              Multimedia services capturing your special moments with exceptional quality and creativity.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/motion_plus__/" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-brand-blue">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-brand-blue">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
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
                <Link to="/services#event" className="text-gray-400 transition-colors hover:text-white">Events</Link>
              </li>
              <li>
                <Link to="/services#corporate" className="text-gray-400 transition-colors hover:text-white">Corporate</Link>
              </li>
              <li>
                <Link to="/services#portrait" className="text-gray-400 transition-colors hover:text-white">Portrait</Link>
              </li>
              <li>
                <Link to="/services#lifestyle" className="text-gray-400 transition-colors hover:text-white">Lifestyle</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-brand-blue" />
                <a href="tel:+27813932643" className="text-gray-400 transition-colors hover:text-white">+27 81 393 2643</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-brand-blue" />
                <a href="mailto:motion@seculastudios.com" className="text-gray-400 transition-colors hover:text-white">motion@seculastudios.com</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink size={18} className="text-brand-blue" />
                <a href="https://www.motion.seculastudios.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-white">www.motion.secualstudios.com</a>
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