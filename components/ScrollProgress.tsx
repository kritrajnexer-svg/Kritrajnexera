"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

export default function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll();
  const scaleX = prefersReducedMotion
    ? scrollYProgress
    : useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
      });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-0.5 origin-left bg-brand-500"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
