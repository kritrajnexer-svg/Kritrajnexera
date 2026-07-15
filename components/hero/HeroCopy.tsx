"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Button from "@/components/Button";

/**
 * Left column of the hero — asymmetric layout anchor.
 * Headline uses brand blue solid on the second clause (no gradient text).
 */
const easeOut = [0.25, 1, 0.5, 1] as const;

const phrases = [
  "n8n workflow automations",
  "web development with AI integration",
];

function TypeWriter() {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[idx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (display.length < current.length) {
          setDisplay(current.slice(0, display.length + 1));
        } else {
          setDeleting(true);
        }
      } else {
        if (display.length > 0) {
          setDisplay(display.slice(0, -1));
        } else {
          setDeleting(false);
          setIdx((prev) => (prev + 1) % phrases.length);
        }
      }
    }, deleting ? 25 : display.length === current.length ? 2000 : 55);
    return () => clearTimeout(timeout);
  }, [display, deleting, idx]);

  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut, delay: 0.15 }}
      className="mt-4 text-lg leading-relaxed text-ink"
      aria-live="polite"
    >
      We build{" "}
      <span className="text-brand-500">{display}</span>
      <span className="inline-block w-[2px] h-[1em] bg-brand-500 ml-0.5 align-text-bottom animate-pulse" />
    </motion.p>
  );
}

export default function HeroCopy() {
  return (
    <div className="flex flex-col justify-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeOut }}
        className="mb-5 text-sm font-medium text-brand-600"
      >
        Growth systems for service businesses
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
        className="text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[1.05] tracking-tight text-ink"
      >
        We Don&apos;t Build Sites.
        <br />
        <span className="text-brand-500">We Build Sales Engines.</span>
      </motion.h1>

      <TypeWriter />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
        className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
      >
        A website that captures qualified leads, wired to automation that routes,
        notifies, and follows up — so prospects get a response in seconds, not
        days, and more of them turn into closed sales.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeOut, delay: 0.3 }}
        className="mt-8 flex flex-wrap items-center gap-3"
      >
        <Button href="/contact" className="group">
          Book a Free Strategy Call
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
        <Button href="/demo" variant="secondary" className="group">
          Try Live Demo
        </Button>
        <Button href="#system" variant="secondary" className="group">
          <Play className="h-3.5 w-3.5 text-brand-500" />
          See the system
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: easeOut, delay: 0.4 }}
        className="mt-10 flex items-center gap-6 text-sm text-ink-muted"
      >
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Lead response under 60 seconds
        </span>
        <span className="hidden h-4 w-px bg-line sm:block" />
        <span className="hidden sm:flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Built on n8n + Next.js
        </span>
      </motion.div>
    </div>
  );
}
