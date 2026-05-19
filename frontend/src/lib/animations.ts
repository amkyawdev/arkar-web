/**
 * Shared Animation Variants & Utilities for ARKAR Portfolio
 * 
 * This file exports reusable Framer Motion variants for consistent animations
 * across all portfolio components. Import these in individual components to
 * maintain animation consistency without code duplication.
 */

import { Variants } from 'framer-motion';

// ============================================================================
// CONTAINER ANIMATIONS
// ============================================================================

/**
 * Staggered container animation
 * Use on parent elements to stagger children animations
 * 
 * @example
 * <motion.div variants={containerVariants} initial="hidden" animate="visible">
 *   <motion.div variants={itemVariants}>Item 1</motion.div>
 *   <motion.div variants={itemVariants}>Item 2</motion.div>
 * </motion.div>
 */
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Fade in up animation with stagger
 * Slightly slower stagger for dramatic effect
 */
export const containerVariantsSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// ============================================================================
// ITEM ANIMATIONS
// ============================================================================

/**
 * Standard fade-in up animation for items
 * Works well for text, cards, and general content
 */
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

/**
 * Fade in from left animation
 * Great for left-aligned content
 */
export const itemVariantsLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

/**
 * Fade in from right animation
 * Great for right-aligned content
 */
export const itemVariantsRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

/**
 * Scale-up with fade animation
 * Creates a "pop-in" effect, good for badges and small elements
 */
export const itemVariantsScale: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

/**
 * Rotate-in animation (for icons)
 * Adds a rotational element to fade-in
 */
export const itemVariantsRotate: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// ============================================================================
// FLOATING & CONTINUOUS ANIMATIONS
// ============================================================================

/**
 * Floating animation - gentle up/down motion
 * Use for accent elements, avatars, or decorative elements
 */
export const floatingVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/**
 * Subtle floating animation - more delicate
 */
export const floatingVariantsSubtle: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/**
 * Floating with rotation
 * Creates a more dynamic effect
 */
export const floatingRotateVariants: Variants = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/**
 * Pulsing/breathing animation
 * Good for attention-grabbing CTAs or status indicators
 */
export const pulseVariants: Variants = {
  initial: { scale: 1, opacity: 1 },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/**
 * Glow animation (opacity pulse)
 * Good for neon/glow effects
 */
export const glowVariants: Variants = {
  initial: { opacity: 0.4 },
  animate: {
    opacity: [0.4, 0.8, 0.4],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ============================================================================
// PAGE LOAD ANIMATIONS
// ============================================================================

/**
 * Hero section entrance animation
 * Combines fade with scale and rotation
 */
export const heroEntranceVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1], // Spring-like easing
    },
  },
};

/**
 * Page section entrance (scroll-triggered)
 */
export const sectionEntranceVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

// ============================================================================
// INTERACTIVE ANIMATIONS
// ============================================================================

/**
 * Hover animation for cards
 * Use with whileHover
 */
export const cardHoverVariants: Variants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -8,
    transition: { duration: 0.3 },
  },
};

/**
 * Hover animation for buttons
 */
export const buttonHoverVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

/**
 * Hover animation for icons (bounce effect)
 */
export const iconHoverVariants: Variants = {
  initial: { scale: 1, rotate: 0 },
  hover: { scale: 1.2, rotate: 10 },
  tap: { scale: 0.9 },
};

// ============================================================================
// TRANSITION PRESETS
// ============================================================================

export const transitions = {
  fast: { duration: 0.2, ease: 'easeOut' },
  normal: { duration: 0.3, ease: 'easeOut' },
  slow: { duration: 0.5, ease: 'easeOut' },
  verySlow: { duration: 0.8, ease: 'easeOut' },
  spring: { type: 'spring', stiffness: 300, damping: 30 },
  gentleSpring: { type: 'spring', stiffness: 100, damping: 20 },
};

// ============================================================================
// VIEWPORT ANIMATIONS
// ============================================================================

/**
 * Configuration for whileInView prop
 * Use to trigger animations when elements come into view
 */
export const viewportAnimationConfig = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.3 },
};

/**
 * Configuration for scroll-triggered animations (with repeat)
 */
export const viewportAnimationRepeat = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: false, amount: 0.3 },
};

// ============================================================================
// UTILITY ANIMATION HOOKS
// ============================================================================

/**
 * Hook to handle scroll-triggered animations
 * 
 * @example
 * const animationProps = useScrollAnimation();
 * <motion.div {...animationProps} variants={itemVariants}>
 */
export function getScrollAnimationProps() {
  return {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount: 0.3 },
  };
}

/**
 * Delay animation helper
 * Creates a variant with delayed animation
 * 
 * @param index - Item index for stagger calculation
 * @param baseDelay - Base delay in seconds
 * @param delayPerItem - Additional delay per item
 * @returns Variants with calculated delay
 */
export function getDelayedVariants(
  index: number,
  baseDelay = 0.2,
  delayPerItem = 0.1
): Variants {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: baseDelay + index * delayPerItem,
        ease: 'easeOut',
      },
    },
  };
}

// ============================================================================
// PRESET ANIMATION COMBINATIONS
// ============================================================================

/**
 * Light appearing animation
 * Great for glassmorphic elements
 */
export const appearVariants: Variants = {
  hidden: { opacity: 0, backdropFilter: 'blur(0px)' },
  visible: {
    opacity: 1,
    backdropFilter: 'blur(10px)',
    transition: { duration: 0.6 },
  },
};

/**
 * Shimmer/loading animation
 * For skeleton screens or loading states
 */
export const shimmerVariants: Variants = {
  initial: { backgroundPosition: '-1000px 0' },
  animate: {
    backgroundPosition: '1000px 0',
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

/**
 * Wiggle animation (for attention)
 * Use sparingly for important CTAs
 */
export const wiggleVariants: Variants = {
  initial: { x: 0 },
  animate: {
    x: [-5, 5, -5, 5, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 3,
    },
  },
};

// ============================================================================
// TAB/NAVIGATION ANIMATIONS
// ============================================================================

/**
 * Sliding animation for active tab indicator
 */
export const tabIndicatorVariants: Variants = {
  initial: { scaleX: 0, opacity: 0 },
  animate: { scaleX: 1, opacity: 1 },
  exit: { scaleX: 0, opacity: 0 },
};

/**
 * Bottom navigation tab animation
 */
export const navTabVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

// ============================================================================
// MODAL/DIALOG ANIMATIONS
// ============================================================================

/**
 * Modal entrance animation
 */
export const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: { duration: 0.2 },
  },
};

/**
 * Backdrop animation
 */
export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// ============================================================================
// EXPORT DEFAULT
// ============================================================================

export default {
  containers: {
    standard: containerVariants,
    slow: containerVariantsSlow,
  },
  items: {
    standard: itemVariants,
    left: itemVariantsLeft,
    right: itemVariantsRight,
    scale: itemVariantsScale,
    rotate: itemVariantsRotate,
  },
  floating: {
    standard: floatingVariants,
    subtle: floatingVariantsSubtle,
    rotate: floatingRotateVariants,
  },
  continuous: {
    pulse: pulseVariants,
    glow: glowVariants,
  },
  page: {
    heroEntrance: heroEntranceVariants,
    sectionEntrance: sectionEntranceVariants,
  },
  interactive: {
    card: cardHoverVariants,
    button: buttonHoverVariants,
    icon: iconHoverVariants,
  },
  transitions,
  viewport: {
    animation: viewportAnimationConfig,
    animationRepeat: viewportAnimationRepeat,
  },
  utilities: {
    getScrollAnimationProps,
    getDelayedVariants,
  },
  presets: {
    appear: appearVariants,
    shimmer: shimmerVariants,
    wiggle: wiggleVariants,
  },
  navigation: {
    tabIndicator: tabIndicatorVariants,
    navTab: navTabVariants,
  },
  modal: {
    modal: modalVariants,
    backdrop: backdropVariants,
  },
};
