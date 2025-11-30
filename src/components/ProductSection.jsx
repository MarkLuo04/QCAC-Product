import React from 'react';
import { motion } from 'framer-motion';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import { ANIMATIONS } from '../utils/constants.js';
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

  // Staggered container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: ANIMATIONS.STAGGERS.medium,
        delayChildren: 0.2,
        ...ANIMATIONS.TRANSITIONS.easeOut
      }
    }
  };

  // Individual item entrance
  const itemVariants = {
    hidden: ANIMATIONS.VARIANTS.fadeUp.initial,
    visible: {
      ...ANIMATIONS.VARIANTS.fadeUp.animate,
      transition: ANIMATIONS.TRANSITIONS.gentleSpring
    }
  };

  return (
    <motion.section
      className="max-w-6xl mx-auto px-8 py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={ANIMATIONS.VIEWPORT}
    >
      <div className="grid md:grid-cols-[1.15fr_1fr] gap-12 items-start">
        <motion.div variants={itemVariants}>
          <ImageGallery images={images} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ProductInfo product={product} />
        </motion.div>
      </div>
    </motion.section>
  );
}
