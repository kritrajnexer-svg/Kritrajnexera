"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  distance?: number;
}>;

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
  distance = 24,
}: Props) {
  const offsets = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, ease: [0.25, 1, 0.5, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
