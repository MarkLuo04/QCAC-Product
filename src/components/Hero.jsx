import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import warmImage from '../images/glass_cup_warm.webp';
import coldImage from '../images/glass_cup_cold.webp';

export default function Hero() {
  // Product data
  const product = {
    brand: 'Linko Art',
    name: 'Yae Miko Color-Changing Glass Cup',
    price: 24.00,
    description: 'Yae Miko inspired glass, featuring her kitsune form and cherry blossoms! Pink elements change from pastel pink to fuschia in temperatures below 10°C.'
  };

  // Image gallery data 
  const images = [
    { src: warmImage, alt: 'Glass cup warm', label: 'Warm' },
    { src: coldImage, alt: 'Glass cup cold', label: 'Cold' }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
        <ImageGallery images={images} />
        <ProductInfo product={product} />
      </div>
    </section>
  );
}
