import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATIONS } from '../utils/constants.js';

export default function Features() {
  const features = [
    '16 oz glass cup with a glass straw and bamboo lid',
    'Pink elements change from pastel pink to fuschia in temperatures below 10°C',
    'Holds hot and cold drinks',
    'Designs made with permanent Cricut vinyl and heat-sealed for longevity',
    'Hand-wash only'
  ];

  // Feature list container
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

  // Individual feature animation
  const itemVariants = {
    hidden: ANIMATIONS.VARIANTS.slideLeft.initial,
    visible: {
      ...ANIMATIONS.VARIANTS.slideLeft.animate,
      transition: ANIMATIONS.TRANSITIONS.gentleSpring
    }
  };

  return (
    <motion.section
      className="max-w-6xl mx-auto px-8 py-12 border-t border-gray-200"
      initial={ANIMATIONS.VARIANTS.fadeUp.initial}
      whileInView={ANIMATIONS.VARIANTS.fadeUp.animate}
      viewport={ANIMATIONS.VIEWPORT}
      transition={ANIMATIONS.TRANSITIONS.gentleSpring}
    >
      <motion.h2
        className="text-2xl font-bold mb-6 text-gray-900"
        initial={ANIMATIONS.VARIANTS.fadeDown.initial}
        whileInView={ANIMATIONS.VARIANTS.fadeDown.animate}
        viewport={ANIMATIONS.VIEWPORT}
        transition={{ ...ANIMATIONS.TRANSITIONS.easeOut, delay: 0.1 }}
      >
        Product Details
      </motion.h2>

      <motion.ul
        className="space-y-3 text-gray-700"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start"
          >
            <span className="mr-3 text-primary">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
