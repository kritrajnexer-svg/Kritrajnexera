"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Button from "@/components/Button";

/**
 * Left column of the hero — asymmetric layout anchor.
 * Headline uses brand blue solid on the second clause (no gradient text).
 */
export default function HeroCopy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className="flex flex-col justify-center"
    >
      {/* Outcome-first eyebrow, not a generic "innovation" tag */}
      <p className="mb-5 text-sm font-medium text-brand-600">
        Growth systems for service businesses
      </p>

      <h1 className="text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[1.05] tracking-tight text-ink">
        We Don&apos;t Build Sites.
        <br />
        <span className="text-brand-500">We Build Sales Engines.</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
        A website that captures qualified leads, wired to automation that routes,
        notifies, and follows up — so prospects get a response in seconds, not
        days, and more of them turn into closed sales.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button href="/contact" className="group">
          Get a Quote
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
        <Button href="#system" variant="secondary" className="group">
          <Play className="h-3.5 w-3.5 text-brand-500" />
          See the system
        </Button>
      </div>

      {/* Trust row — concrete, not a logo strip of fake clients */}
      <div className="mt-10 flex items-center gap-6 text-sm text-ink-muted">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Lead response under 60 seconds
        </span>
        <span className="hidden h-4 w-px bg-line sm:block" />
        <span className="hidden sm:flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Built on n8n + Next.js
        </span>
      </div>
    </motion.div>
  );
}
