'use client';

import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import ChatInterface from './ChatInterface';

interface ClarrieModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ClarrieModal = ({ isOpen, onClose }: ClarrieModalProps) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full md:w-[95vw] md:h-[95vh] md:rounded-2xl overflow-hidden shadow-2xl bg-background border border-gray-800"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 bg-surface hover:bg-gray-700 rounded-lg transition-colors group"
              aria-label="Close Clarrie AI"
            >
              <X className="w-6 h-6 text-gray-400 group-hover:text-white" />
            </button>

            {/* ClarrieAI Interface - Integrated */}
            <ChatInterface />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ClarrieModal;


