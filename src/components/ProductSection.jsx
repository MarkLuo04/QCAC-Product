import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import warmImage from '../images/glass_cup_warm.webp';
import coldImage from '../images/glass_cup_cold.webp';
import linkoImage from '../images/linko_pfp.png';


export default function ProductSection() {
  // Product data 
  const product = {
    brand: 'Linko Art',
    name: 'Yae Miko Cherry Blossom (Genshin Impact) Colour-Changing Glass Cup',
    price: 35.00,
    description: 'Yae Miko inspired glass, featuring her kitsune form and cherry blossoms! Pink elements change from pastel pink to fuschia in temperatures below 10°C.'
  };

  // Image gallery data
  const images = [
    { src: warmImage, alt: 'Glass cup warm', label: 'Warm' },
    { src: coldImage, alt: 'Glass cup cold', label: 'Cold' },
  ];

  return (
    <section className="max-w-6xl mx-auto px-8 py-16">
      <div className="grid md:grid-cols-[1.15fr_1fr] gap-12 items-start">
        <ImageGallery images={images} />
        <ProductInfo product={product} />
      </div>
    </section>
  );
}
