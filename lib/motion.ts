import type { Transition, Variants } from "framer-motion";

/** The export's own spring — damping 70, stiffness 200, mass 1. */
export const spring: Transition = { type: "spring", damping: 70, stiffness: 200, mass: 1 };

/** Long ease used for the hero image scale (bounce 0, duration 3). */
export const glide: Transition = { type: "spring", bounce: 0, duration: 3 };

export const revealUp: Variants = {
  hidden: { opacity: 0.001, y: 24 },
  shown: { opacity: 1, y: 0, transition: spring },
};

export const fade: Variants = {
  hidden: { opacity: 0.001 },
  shown: { opacity: 1, transition: spring },
};

export const viewport = { once: true, amount: 0.15 } as const;
