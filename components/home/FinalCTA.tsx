"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function FinalCTA() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="relative overflow-hidden rounded-3xl border border-brand-500/20 bg-brand-500/[0.06] px-8 py-16 text-center sm:px-16 sm:py-20"
      >
        <div
          aria-hidden
          className="absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-500/20"
        />
        <h2 className="mx-auto max-w-2xl text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight text-ink font-display">
          Your competitors aren&apos;t waiting. Neither should you.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-muted">
          Most businesses lose enquiries to slow replies. We fix it and go live in
          3–7 days. Book a free call — we&apos;ll map exactly where you&apos;re
          leaking leads and what it&apos;s worth to you.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/contact" className="group">
            Book a Free Strategy Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
