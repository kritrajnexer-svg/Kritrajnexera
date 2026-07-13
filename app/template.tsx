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
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: easeOut }}
        className="min-h-screen"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
