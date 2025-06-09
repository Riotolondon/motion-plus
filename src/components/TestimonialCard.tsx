import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => {
  return (
    <motion.div 
      className="bg-gray-900 p-6 rounded-lg shadow-lg"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Quote className="h-8 w-8 text-brand-blue mb-4 opacity-50" />
      <p className="text-gray-300 mb-6 italic">{quote}</p>
      <div>
        <h4 className="font-semibold text-white">{author}</h4>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;