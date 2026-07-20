"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

const easeOut = [0.25, 1, 0.5, 1] as const;

const steps = [
  { num: "01", title: "Discovery Call" },
  { num: "02", title: "Automation Strategy" },
  { num: "03", title: "Website Development" },
  { num: "04", title: "Automation Integration" },
  { num: "05", title: "Testing & Quality Assurance" },
  { num: "06", title: "Launch & Optimisation" },
];

export default function ProcessTimeline() {
  return (
    <Section muted>
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink font-display">
          How We Build Your AI Automation
        </h2>
        <p className="mt-4 text-ink-muted">
          A proven process that takes your business from idea to an automated
          lead generation and sales platform.
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 hidden h-full w-px bg-line md:block" />

        <div className="space-y-8 md:space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeOut, delay: i * 0.1 }}
              className="relative pl-16 md:pl-20"
            >
              {/* Step number dot */}
              <div className="absolute left-3 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-brand-500/30 bg-bg text-sm font-bold text-brand-400 md:left-4">
                {step.num}
              </div>

              {/* Content card */}
              <div className="rounded-2xl glass-card p-5">
                <h3 className="font-semibold text-ink">{step.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
