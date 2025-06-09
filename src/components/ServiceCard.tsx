import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image }) => {
  return (
    <motion.div 
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg h-full"
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div 
        className="h-48 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <div className="bg-brand-blue p-2 rounded-full">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;