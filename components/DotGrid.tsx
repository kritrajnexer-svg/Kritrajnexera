"use client";

import { motion, useScroll, useTransform } from "framer-motion";

function sd(seed: number) {
  const x = Math.sin(seed * 1.618) * 10000;
  return x - Math.floor(x);
}

const dots = Array.from({ length: 20 }, (_, i) => ({
  x: sd(i) * 100,
  y: sd(i + 50) * 100,
  size: 2 + sd(i + 100) * 4,
  driftX: (sd(i + 150) - 0.5) * 60,
  driftY: (sd(i + 200) - 0.5) * 60,
  duration: 10 + sd(i + 250) * 10,
}));

export default function DotGrid() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 2000], [0, -300]);
  const parallaxX = useTransform(scrollY, [0, 2000], [0, 100]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: -1, y: parallaxY, x: parallaxX }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(121, 110, 255, 0.12) 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }}
      />
      {dots.map((d, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-brand-400/40"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
          }}
          animate={{
            x: [0, d.driftX * 0.5, d.driftX, d.driftX * 0.5, 0],
            y: [0, d.driftY * 0.5, d.driftY, d.driftY * 0.5, 0],
          }}
          transition={{
            duration: d.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: sd(i + 300) * 3,
          }}
        />
      ))}
    </motion.div>
  );
}
