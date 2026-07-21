"use client";

import { motion } from "framer-motion";
import { Search, Layers, Workflow, Rocket } from "lucide-react";
import Section from "@/components/Section";
import ParallaxSection from "@/components/ParallaxSection";

const easeOut = [0.25, 1, 0.5, 1] as const;

const steps = [
  {
    icon: Search,
    title: "Understand your funnel",
    desc: "We map how enquiries currently reach you — and where they slip through.",
  },
  {
    icon: Layers,
    title: "Design the system",
    desc: "Site structure and workflow automation flows, designed around one goal: more closed sales.",
  },
  {
    icon: Workflow,
    title: "Build & wire it together",
    desc: "Web design, Next.js development, and n8n integrations built and connected into one pipeline.",
  },
  {
    icon: Rocket,
    title: "Launch & refine",
    desc: "We go live, monitor what converts, and tune the system to perform better. Includes 30 days of hands-on post-launch support.",
  },
];

export default function Process() {
  return (
    <Section>
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-[var(--text-h1)] font-semibold leading-tight text-ink font-display">
          Four steps to business automation that sells
        </h2>
      </div>

      <ParallaxSection speed={1}>
      <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut, delay: i * 0.1 }}
            className="relative"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-2xl font-semibold text-teal-400">0{i + 1}</span>
            </div>
            <h3 className="mb-2 font-semibold text-ink">{title}</h3>
            <p className="text-sm leading-relaxed text-ink-muted">{desc}</p>
          </motion.div>
        ))}
      </div>
      </ParallaxSection>
    </Section>
  );
}
