"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  animate,
  useTransform,
} from "framer-motion";
import Container from "@/components/Container";

const easeOut = [0.25, 1, 0.5, 1] as const;

type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
};

const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Automations Delivered" },
  { value: 200, suffix: "+", label: "Enquiries Captured Monthly" },
  { value: 60, prefix: "<", suffix: "s", label: "Average Response Time" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Uptime Guaranteed" },
];

/** Animated number that counts up to target when scrolled into view. */
function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));

  // Kick off the animation once when in view
  if (inView && count.get() === 0) {
    animate(count, value, {
      duration: 1.6,
      ease: easeOut,
    });
  }

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function TrustBadge() {
  return (
    <section className="relative border-y border-line/60 bg-surface/30">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-24 w-[600px] rounded-full bg-brand-500/5" />
      </div>
      <Container>
        <div className="relative grid grid-cols-2 gap-6 py-10 sm:py-12 md:grid-cols-4">
          {stats.map(({ value, prefix, suffix, decimals, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: easeOut, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="text-2xl font-semibold text-brand-400 sm:text-3xl">
                <CountUp
                  value={value}
                  prefix={prefix}
                  suffix={suffix}
                  decimals={decimals}
                />
              </p>
              <p className="mt-1 text-xs text-ink-muted sm:text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
