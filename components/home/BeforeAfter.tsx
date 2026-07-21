"use client";

import { motion } from "framer-motion";
import { Inbox, AlertCircle, TrendingDown, Zap, Clock, TrendingUp } from "lucide-react";
import Section from "@/components/Section";

const easeOut = [0.25, 1, 0.5, 1] as const;

const manual = [
  { icon: Inbox, text: "Enquiries sit buried in an overflowing inbox" },
  { icon: Clock, text: "First response takes hours — sometimes days" },
  { icon: TrendingDown, text: "Hot prospects cool off and quietly disappear" },
];

const withAutomation = [
  { icon: Zap, text: "Instant alert the moment an enquiry lands" },
  { icon: Clock, text: "Response in under 60 seconds, every time" },
  { icon: TrendingUp, text: "More follow-ups landed, more deals closed" },
];

export default function BeforeAfter() {
  return (
    <Section>
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-[var(--text-h1)] font-semibold leading-tight text-ink font-display">
          The same enquiries. Different outcome.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="rounded-3xl glass-card-glow p-8"
        >
          <div className="mb-6 flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-rose-500" />
            <h3 className="font-semibold text-ink-muted">Manual process</h3>
          </div>
          <ul className="space-y-4">
            {manual.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" />
                <span className="text-ink-muted">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
          className="rounded-3xl glass-card-glow p-8"
        >
          <div className="mb-6 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-500">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <h3 className="font-semibold text-ink">With n8n automation</h3>
          </div>
          <ul className="space-y-4">
            {withAutomation.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                <span className="text-ink">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
