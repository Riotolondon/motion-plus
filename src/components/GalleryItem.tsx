import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface GalleryItemProps {
  image: string;
  title: string;
  category: string;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, title, category, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img 
        src={image} 
        alt={title} 
        className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className={`absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="transition-transform duration-300 transform translate-y-4 group-hover:translate-y-0">
          <span className="text-sm tracking-wider uppercase text-brand-blue">{category}</span>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryItem;