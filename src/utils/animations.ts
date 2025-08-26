import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const staggerContainer: Variants = {
  hidden: {},
  show: { 
    transition: { 
      staggerChildren: 0.04 
    } 
  }
};

export const wordAnimation: Variants = {
  hidden: { y: 14, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.45, 
      ease: "easeOut" 
    } 
  }
};

export const scaleFromZero: Variants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut", 
      delay: 0.2 
    }
  }
};

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: i * 0.05
    }
  })
};

export const buttonHover = {
  y: -1,
  transition: { type: "spring", stiffness: 400, damping: 25 }
};

export const buttonTap = {
  scale: 0.98
};

export const imageHover = {
  y: -4,
  rotate: -2,
  transition: { type: "spring", stiffness: 200, damping: 18 }
};

// Animation timing constants
export const ANIMATION_DURATIONS = {
  fast: 0.2,
  medium: 0.4,
  slow: 0.8
} as const;

// Easing functions
export const EASINGS = {
  easeOut: [0.0, 0.0, 0.2, 1],
  easeInOut: [0.4, 0.0, 0.2, 1],
  spring: { type: "spring", stiffness: 260, damping: 20 }
} as const;