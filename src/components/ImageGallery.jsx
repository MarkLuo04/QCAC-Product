import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ANIMATIONS } from '../utils/constants.js';

export default function ImageGallery({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-3">
      {/* Main Image */}
      <div className="relative flex-1 rounded-lg p-4 sm:p-6 lg:p-8 bg-primary-bg overflow-hidden order-1 lg:order-2">
        {/* Image transition animation */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
          src={images[currentImageIndex].src} 
          alt={images[currentImageIndex].alt} 
          className="w-full h-auto rounded" 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={ANIMATIONS.TRANSITIONS.easeInOut}
        />
        </AnimatePresence>
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <motion.button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg cursor-pointer transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={ANIMATIONS.TRANSITIONS.spring}
              aria-label="Previous image"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg cursor-pointer transition-colors"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={ANIMATIONS.TRANSITIONS.spring}
              aria-label="Next image"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </>
        )}
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center lg:justify-start gap-2 lg:flex-col lg:gap-2 order-2 lg:order-1">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded border-2 overflow-hidden cursor-pointer transition-all duration-300 ${
              currentImageIndex === index ? 'border-primary shadow-lg scale-105' : 'border-transparent hover:border-primary/50'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
