"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 shadow-sm shadow-brand-600/20",
  secondary:
    "border border-line bg-surface text-ink hover:border-brand-300 hover:text-brand-600",
};

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
};

/**
 * Magnetic link-button. On mousemove the button drifts toward the cursor
 * via a spring; on leave it springs back to center. Suppressed for
 * reduced-motion users by the MotionConfig wrapper in layout.
 */
export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(0, { stiffness: 200, damping: 15 });
  const y = useSpring(0, { stiffness: 200, damping: 15 });

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    // Offset of cursor from button center, capped to keep it subtle
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.25);
    y.set(dy * 0.25);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div style={{ x, y }} className="inline-block">
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3",
          "text-sm font-medium transition-colors duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
          variants[variant],
          className,
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}
