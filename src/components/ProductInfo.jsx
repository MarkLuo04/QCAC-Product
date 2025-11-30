import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ANIMATIONS } from '../utils/constants.js';

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Form elements container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: ANIMATIONS.STAGGERS.slow,
        delayChildren: 0.2,
        ...ANIMATIONS.TRANSITIONS.easeOut
      }
    }
  };

  // Individual form element animation
  const itemVariants = {
    hidden: ANIMATIONS.VARIANTS.fadeUp.initial,
    visible: {
      ...ANIMATIONS.VARIANTS.fadeUp.animate,
      transition: ANIMATIONS.TRANSITIONS.gentleSpring
    }
  };

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Product name and price */}
      <motion.div variants={itemVariants}>
        <motion.p
          className="text-sm mb-2 text-primary"
          variants={itemVariants}
        >
          {product.brand}
        </motion.p>
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
          variants={itemVariants}
        >
          {product.name}
        </motion.h1>
        <motion.p
          className="text-2xl font-semibold text-primary"
          variants={itemVariants}
        >
          ${product.price.toFixed(2)}
        </motion.p>
      </motion.div>

      {/* Product description */}
      <motion.div variants={itemVariants}>
        <motion.h2
          className="text-lg font-semibold text-gray-900 mb-3"
          variants={itemVariants}
        >
          Description
        </motion.h2>
        <motion.p
          className="text-gray-700 leading-relaxed"
          variants={itemVariants}
        >
          {product.description}
        </motion.p>
      </motion.div>

      {/* Quantity selector */}
      <motion.div variants={itemVariants}>
        <motion.label
          className="block text-sm font-medium text-gray-700 mb-3"
          variants={itemVariants}
        >
          Quantity
        </motion.label>
        <div className="flex items-center gap-3 w-32">
          <button
            onClick={decreaseQuantity}
            className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:text-primary transition-all"
          >
            −
          </button>
          <motion.span
            className="flex-1 text-center font-medium text-lg"
            key={quantity}
            initial={{ scale: 1.1, color: "#1C8080" }}
            animate={{ scale: 1, color: "#374151" }}
            transition={ANIMATIONS.TRANSITIONS.gentleSpring}
          >
            {quantity}
          </motion.span>
          <button
            onClick={increaseQuantity}
            className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:text-primary transition-all"
          >
            +
          </button>
        </div>
      </motion.div>

      {/* Action buttons */}
      <motion.div
        className="flex gap-3 pt-2"
        variants={itemVariants}
      >
        <button 
          className="flex-1 text-white py-3 px-6 rounded-lg font-medium cursor-pointer bg-primary hover:bg-primary-hover transition-colors"
        >
          Add to Cart
        </button>
        <button 
          className="flex-1 bg-white py-3 px-6 rounded-lg font-medium cursor-pointer border-2 border-primary text-primary hover:bg-primary-bg transition-colors"
        >
          Buy Now
        </button>
      </motion.div>
    </motion.div>
  );
}
