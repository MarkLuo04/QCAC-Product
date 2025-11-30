import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATIONS } from '../utils/constants.js';
import hanfuLinko from '../images/hanfu_linko.webp';
import shinobu from '../images/shinobu.webp';
import sodaPop from '../images/soda_pop.webp';
import spyFamily from '../images/spy_family.webp';
import klee from '../images/klee.webp';
import rujinu from '../images/rujinu.webp';

// Related products
const relatedProducts = [
  {
    id: 1,
    name: "Hanfu Linko Art Print",
    price: 10.00,
    image: hanfuLinko
  },
  {
    id: 2,
    name: "Shinobu Kochou (Demon Slayer) Print",
    price: 10.00,
    image: shinobu
  },
  {
    id: 3,
    name: "Saja Boys Soda Pop (KPop Demon Hunters) Holographic Vinyl Sticker",
    price: 3.50,
    image: sodaPop
  },
  {
    id: 4,
    name: "Spy x Family Print",
    price: 10.00,
    image: spyFamily
  },
  {
    id: 5,
    name: "Klee (Genshin Impact) Matte Vinyl Sticker",
    price: 3.50,
    image: klee
  },
  {
    id: 6,
    name: "Rujinu (KPop Demon Hunters) Matte Vinyl Sticker",
    price: 3.50,
    image: rujinu
  }
];

export default function RelatedProducts() {

  // Product grid container
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

  // Individual product card animation
  const itemVariants = {
    hidden: ANIMATIONS.VARIANTS.fadeUp.initial,
    visible: {
      ...ANIMATIONS.VARIANTS.fadeUp.animate,
      transition: ANIMATIONS.TRANSITIONS.gentleSpring
    }
  };

  return (
    <motion.section
      className="max-w-6xl mx-auto px-8 py-12"
      initial={ANIMATIONS.VARIANTS.fadeUp.initial}
      whileInView={ANIMATIONS.VARIANTS.fadeUp.animate}
      viewport={ANIMATIONS.VIEWPORT}
      transition={ANIMATIONS.TRANSITIONS.gentleSpring}
    >
      <motion.h2
        className="text-2xl font-bold mb-8 text-gray-900 text-center"
        initial={ANIMATIONS.VARIANTS.fadeDown.initial}
        whileInView={ANIMATIONS.VARIANTS.fadeDown.animate}
        viewport={ANIMATIONS.VIEWPORT}
        transition={{ ...ANIMATIONS.TRANSITIONS.easeOut, delay: 0.1 }}
      >
        You May Also Like
      </motion.h2>

      {/* Horizontal Carousel */}
      <div className="overflow-x-auto">
        <motion.div
          className="flex gap-6 pb-4 min-w-max"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={ANIMATIONS.VIEWPORT}
        >
          {relatedProducts.map((product) => (
            <motion.div
              key={product.id}
              className="cursor-pointer flex-shrink-0 w-64"
              variants={itemVariants}
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3 border border-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="font-medium text-gray-900 text-sm mb-1 transition-colors hover:text-primary"
              >
                {product.name}
              </h3>
              <p
                className="font-semibold text-primary"
              >
                ${product.price.toFixed(2)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

