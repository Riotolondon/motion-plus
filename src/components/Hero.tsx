import React from 'react';
import { motion } from 'framer-motion';
import { CameraIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  buttonText?: string;
  buttonLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage = 'https://images.pexels.com/photos/1261824/pexels-photo-1261824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  buttonText,
  buttonLink,
}) => {
  return (
    <div 
      className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="container relative z-10 px-4 mx-auto text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            
          </div>
          
          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
            {title}
          </h1>
          
          {subtitle && (
            <p className="mb-8 text-xl text-gray-200 md:text-2xl">
              {subtitle}
            </p>
          )}
          
          {buttonText && buttonLink && (
            <Link
              to={buttonLink}
              className="inline-block px-8 py-3 text-lg font-medium text-white transition-colors duration-300 rounded-md bg-brand-blue hover:bg-blue-600"
            >
              {buttonText}
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;