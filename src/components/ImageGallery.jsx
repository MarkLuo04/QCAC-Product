import React, { useState } from 'react';

export default function ImageGallery({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex gap-3">
      {/* Thumbnail Navigation */}
      <div className="flex flex-col gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className="w-16 h-16 rounded border-2 overflow-hidden cursor-pointer"
            style={{
              borderColor: currentImageIndex === index ? 'var(--color-primary)' : 'transparent'
            }}
          >
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative flex-1 rounded-lg p-8 group" style={{ backgroundColor: 'var(--color-primary-bg)' }}>
        <img 
          src={images[currentImageIndex].src} 
          alt={images[currentImageIndex].alt} 
          className="w-full h-auto rounded" 
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              aria-label="Next image"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
