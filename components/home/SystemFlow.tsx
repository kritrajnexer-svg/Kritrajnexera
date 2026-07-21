"use client";

import { motion } from "framer-motion";
import { User, Globe, Workflow, Trophy } from "lucide-react";
import Section from "@/components/Section";

const easeOut = [0.25, 1, 0.5, 1] as const;

const steps = [
  {
    icon: User,
    title: "Visitor",
    desc: "A prospect finds you through search, ads, or a referral.",
  },
  {
    icon: Globe,
    title: "Website",
    desc: "Your site captures the enquiry — form, chat, or booking.",
  },
  {
    icon: Workflow,
    title: "Automation",
    desc: "The enquiry is instantly routed, tagged, and notified.",
  },
  {
    icon: Trophy,
    title: "You Close",
    desc: "You step in to close the sale — everything else ran itself.",
  },
];

export default function SystemFlow() {
  return (
    <Section id="system" muted>
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-[var(--text-h1)] font-semibold leading-tight text-ink font-display">
          AI Automation, from click to close
        </h2>
        <p className="mt-4 text-ink-muted">
          Website and workflow automation aren&apos;t two services bolted together.
          They&apos;re one pipeline — the site captures, the automation converts.
          Delivered in 4–6 weeks. You own everything. No lock-in.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeOut, delay: i * 0.1 }}
              className="h-full rounded-2xl glass-card-glow p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400">
                  <Icon className="h-5 w-5" />
                  <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                </span>
              </div>
              <h3 className="mb-2 font-semibold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{desc}</p>
            </motion.div>

            {/* Connector arrow */}
            {i < steps.length - 1 && (
              <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 md:block">
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                  <path
                    d="M1 7H17M17 7L12 2M17 7L12 12"
                    stroke="var(--color-brand-500)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
