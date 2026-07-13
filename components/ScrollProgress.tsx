"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Scroll progress bar — fixed at the very top of the viewport.
 * Tracks page scroll position via useScroll and smooths it with a spring.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
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
