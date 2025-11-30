// Application constants

// Image Upload
export const IMAGE_UPLOAD = {
  MAX_COUNT: 2,
  MAX_SIZE_MB: 2,
  MAX_SIZE_BYTES: 2 * 1024 * 1024,
  ACCEPTED_TYPES: 'image/*'
};

// Rating System
export const RATING = {
  MIN: 1,
  MAX: 5,
  DEFAULT: 5
};

// Messages
export const MESSAGES = {
  IMAGE_LIMIT: 'You can upload a maximum of 2 images',
  IMAGE_SIZE: 'Each image must be less than 2MB',
  FORM_REQUIRED: 'Please fill in all fields',
  SUBSCRIBE_SUCCESS: 'Thanks for subscribing!'
};

// Form Validation
export const VALIDATION = {
  MAX_IMAGES: 2,
  MAX_IMAGE_SIZE: 2 * 1024 * 1024
};

// Animation Configurations
export const ANIMATIONS = {
  TRANSITIONS: {
    spring: { // Responsive spring animation
      type: "spring",
      stiffness: 120,
      damping: 20,
      mass: 1
    },
    gentleSpring: { // Subtle spring for content
      type: "spring",
      stiffness: 150,
      damping: 25,
      mass: 0.8
    },
    easeOut: {
      type: "tween",
      ease: "easeOut",
      duration: 0.4
    },
    easeInOut: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.3
    }
  },

  VARIANTS: {
    fadeUp: {
      initial: { opacity: 0, y: 15 },
      animate: { opacity: 1, y: 0 }
    },
    fadeDown: {
      initial: { opacity: 0, y: -12 },
      animate: { opacity: 1, y: 0 }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.92 },
      animate: { opacity: 1, scale: 1 }
    },
    slideLeft: {
      initial: { opacity: 0, x: -18 },
      animate: { opacity: 1, x: 0 }
    },
    slideRight: {
      initial: { opacity: 0, x: 18 },
      animate: { opacity: 1, x: 0 }
    }
  },

  STAGGERS: {
    fast: 0.06,
    medium: 0.08,
    slow: 0.12
  },

  VIEWPORT: {
    once: true,
    margin: "-80px"
  }
};

