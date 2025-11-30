import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { ANIMATIONS } from '../utils/constants.js';
import linkoBanner from '../images/linkobanner.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation item animation
  const navItemVariants = {
    hidden: ANIMATIONS.VARIANTS.fadeDown.initial,
    visible: {
      ...ANIMATIONS.VARIANTS.fadeDown.animate,
      transition: ANIMATIONS.TRANSITIONS.easeOut
    }
  };

  // Logo entrance animation
  const logoVariants = {
    hidden: ANIMATIONS.VARIANTS.scaleIn.initial,
    visible: {
      ...ANIMATIONS.VARIANTS.scaleIn.animate,
      transition: ANIMATIONS.TRANSITIONS.gentleSpring
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b shadow-sm bg-header border-header-hover">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20 lg:h-[100px]">
        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white/90 hover:text-white hover:bg-white/20 rounded-lg transition-all cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Desktop Nav Links */}
        <motion.div
          className="hidden lg:flex gap-8"
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: ANIMATIONS.STAGGERS.fast,
            delayChildren: 0.3,
            ...ANIMATIONS.TRANSITIONS.easeOut
          }}
        >
          {['Home', 'Catalog', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
            href="#" 
              variants={navItemVariants}
              transition={{ duration: 0.4 }}
            className="text-white/90 hover:text-white font-medium transition-all relative group"
          >
              {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
        </motion.div>

        {/* Banner Logo */}
        <motion.img
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          src={linkoBanner} 
          alt="Linko Art" 
          className="absolute left-1/2 -translate-x-1/2 h-full max-w-[180px] sm:max-w-md"
          style={{ objectFit: 'contain' }} 
        />

        {/* Icons */}
        <motion.div
          className="flex gap-3 sm:gap-6 items-center"
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: ANIMATIONS.STAGGERS.fast,
            delayChildren: 0.5,
            ...ANIMATIONS.TRANSITIONS.easeOut
          }}
        >
          <motion.button
            variants={navItemVariants}
            transition={{ duration: 0.4 }}
            className="p-2 text-white/90 hover:text-white hover:bg-white/20 rounded-lg transition-all cursor-pointer hidden sm:flex" 
            aria-label="Search"
          >
            <Search size={20} />
          </motion.button>
          <motion.button
            variants={navItemVariants}
            transition={{ duration: 0.4 }}
            className="p-2 text-white/90 hover:text-white hover:bg-white/20 rounded-lg transition-all cursor-pointer" 
            aria-label="Login"
          >
            <User size={20} />
          </motion.button>
          <motion.button
            variants={navItemVariants}
            transition={{ duration: 0.4 }}
            className="p-2 text-white/90 hover:text-white hover:bg-white/20 rounded-lg transition-all cursor-pointer" 
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden border-t border-header-hover bg-header overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={ANIMATIONS.TRANSITIONS.easeOut}
          >
            <motion.div
              className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
            >
            {['Home', 'Catalog', 'Contact'].map((item) => (
              <motion.a
                key={item}
              href="#" 
                variants={navItemVariants}
                transition={{ duration: 0.3 }}
              className="text-white/90 hover:text-white font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
                {item}
              </motion.a>
            ))}
            <motion.button
              variants={navItemVariants}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors py-2 text-left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Search size={20} />
              Search
            </motion.button>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
}
