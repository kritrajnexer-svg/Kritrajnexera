"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const waves = [
  { d: "M0,200 C180,280 360,120 540,200 C720,280 900,120 1080,200 C1260,280 1440,120 1440,200 V600 H0 Z", color: "rgba(121,110,255,0.03)", dur: 22, dir: 1 },
  { d: "M0,280 C240,180 480,380 720,280 C960,180 1200,380 1440,280 V600 H0 Z", color: "rgba(121,110,255,0.04)", dur: 18, dir: -1 },
  { d: "M0,360 C360,480 720,240 1080,360 C1260,420 1440,300 1440,360 V600 H0 Z", color: "rgba(121,110,255,0.05)", dur: 14, dir: 1 },
  { d: "M0,440 C200,340 400,540 600,440 C800,340 1000,540 1200,440 C1320,390 1440,490 1440,440 V600 H0 Z", color: "rgba(121,110,255,0.04)", dur: 20, dir: -1 },
  { d: "M0,520 C300,620 600,420 900,520 C1200,620 1500,420 1800,520 V600 H0 Z", color: "rgba(121,110,255,0.03)", dur: 16, dir: 1 },
];

export default function WaveLayer() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 2000], [0, -250]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: -1, y: parallaxY }}
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {waves.map((w, i) => (
          <motion.path
            key={i}
            d={w.d}
            fill={w.color}
            animate={{ x: w.dir === 1 ? [0, -1440, 0] : [-720, 720, -720] }}
            transition={{ duration: w.dur, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
