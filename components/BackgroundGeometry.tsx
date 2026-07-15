"use client";

import { motion } from "framer-motion";

type ShapeDef = {
  type: "circle" | "square" | "triangle";
  x: number;
  y: number;
  size: number;
  driftX: number;
  driftY: number;
  duration: number;
  delay: number;
};

const shapes: ShapeDef[] = [
  { type: "circle", x: 8, y: 18, size: 44, driftX: 24, driftY: -18, duration: 19, delay: 0 },
  { type: "circle", x: 88, y: 12, size: 28, driftX: -18, driftY: 28, duration: 23, delay: 2.5 },
  { type: "circle", x: 78, y: 72, size: 36, driftX: 12, driftY: -24, duration: 17, delay: 1.2 },
  { type: "square", x: 48, y: 28, size: 40, driftX: -22, driftY: 12, duration: 21, delay: 3.5 },
  { type: "square", x: 18, y: 78, size: 30, driftX: 18, driftY: 22, duration: 20, delay: 0.8 },
  { type: "square", x: 92, y: 52, size: 22, driftX: -12, driftY: -18, duration: 25, delay: 4.2 },
  { type: "triangle", x: 32, y: 55, size: 34, driftX: 14, driftY: 20, duration: 18, delay: 2.8 },
  { type: "triangle", x: 65, y: 85, size: 24, driftX: -20, driftY: -14, duration: 22, delay: 1.8 },
  { type: "triangle", x: 12, y: 48, size: 20, driftX: 26, driftY: 16, duration: 24, delay: 3.8 },
  { type: "circle", x: 55, y: 8, size: 16, driftX: -8, driftY: 32, duration: 26, delay: 5 },
  { type: "square", x: 42, y: 90, size: 18, driftX: 16, driftY: -10, duration: 28, delay: 4.5 },
  { type: "triangle", x: 72, y: 38, size: 14, driftX: -14, driftY: 8, duration: 30, delay: 6 },
];

function ShapeIcon({ type, size }: { type: ShapeDef["type"]; size: number }) {
  if (type === "circle") {
    return (
      <div
        className="rounded-full border border-brand-400/20 bg-brand-400/[0.06]"
        style={{ width: size, height: size }}
      />
    );
  }
  if (type === "square") {
    return (
      <div
        className="border border-brand-400/20 bg-brand-400/[0.06]"
        style={{ width: size, height: size, borderRadius: size * 0.15 }}
      />
    );
  }
  return (
    <div
      style={{
        width: size,
        height: size,
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        background: "transparent",
        border: "none",
      }}
      className="relative"
    >
      <div
        className="absolute inset-0 bg-brand-400/[0.06]"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          border: "1px solid",
          borderColor: "rgba(121, 110, 255, 0.2)",
        }}
      />
    </div>
  );
}

export default function BackgroundGeometry() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
          animate={{
            x: [0, s.driftX * 0.5, s.driftX, s.driftX * 0.5, 0],
            y: [0, s.driftY * 0.5, s.driftY, s.driftY * 0.5, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
        >
          <ShapeIcon type={s.type} size={s.size} />
        </motion.div>
      ))}
    </div>
  );
}
