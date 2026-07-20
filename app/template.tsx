"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const easeOut = [0.25, 1, 0.5, 1] as const;

/**
 * Page transition wrapper. Next.js re-mounts template.tsx on every
 * route change (unlike layout.tsx), giving us the key change that
 * drives AnimatePresence's enter/exit animations.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{ y: 12, scale: 0.99 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: -12, scale: 0.99 }}
        transition={{ duration: 0.35, ease: easeOut }}
        className="min-h-screen"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
