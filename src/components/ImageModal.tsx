import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageModalProps {
  image: string;
  title: string;
  category: string;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({
  image,
  title,
  category,
  onClose,
  onPrevious,
  onNext,
  isFirst,
  isLast,
}) => {
  // Close on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Handle arrow key navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && !isFirst) onPrevious();
      if (e.key === 'ArrowRight' && !isLast) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onPrevious, onNext, isFirst, isLast]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
      onClick={onClose}
    >
      <div 
        className="relative w-full mx-auto max-w-7xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-0 text-white transition-colors -top-12 hover:text-brand-blue"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
          />

          <div className="absolute bottom-0 left-0 right-0 p-6 rounded-b-lg bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="mb-1 text-xl font-bold text-white">{title}</h3>
            <p className="text-brand-blue">{category}</p>
          </div>

          {!isFirst && (
            <button
              onClick={onPrevious}
              className="absolute p-2 transition-colors -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/50 hover:bg-brand-blue"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
          )}

          {!isLast && (
            <button
              onClick={onNext}
              className="absolute p-2 transition-colors -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/50 hover:bg-brand-blue"
              aria-label="Next image"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ImageModal;