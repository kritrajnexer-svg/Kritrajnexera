"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Zap,
  MessageCircle,
  Mail,
  CheckCircle2,
} from "lucide-react";

/*
 * "System in motion" — the hero's right-column centerpiece.
 * Shows a lead flowing: form capture → automation routes it →
 * WhatsApp + email alerts fire. Staggered looping motion signals
 * "this is actually working," not a static mockup.
 *
 * Reduced-motion users see the same cards, fully visible, no loop.
 */

const easeOut = [0.25, 1, 0.5, 1] as const;

function FlowCard({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: easeOut, delay }}
      className={`rounded-2xl glass-card p-4 shadow-sm shadow-brand-900/5 ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

/** A single animated pulse traveling down the connector line. */
function FlowPulse({ delay }: { delay: number }) {
  return (
    <motion.span
      className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-brand-500 shadow-[0_0_8px_2px_var(--color-brand-400)]"
      initial={{ top: "0%", opacity: 0 }}
      animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
      transition={{
        duration: 1.4,
        ease: easeOut,
        delay,
        repeat: Infinity,
        repeatDelay: 1.8,
      }}
    />
  );
}

export default function SystemInMotion() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
      className="relative"
    >
      {/* Ambient glow in brand blue — reads on dark, not a generic blob */}
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-brand-500/15"
      />

      <div className="flex flex-col items-stretch gap-0">
        {/* Step 1 — Enquiry captured */}
        <FlowCard delay={0.2} className="w-full">
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-ink-muted">
            <ClipboardList className="h-3.5 w-3.5 text-brand-500" />
            New enquiry captured
          </div>
          <div className="space-y-1.5">
            <div className="h-2 w-3/4 rounded-full bg-black/5" />
            <div className="h-2 w-1/2 rounded-full bg-black/5" />
          </div>
          <div className="mt-2.5 inline-flex items-center gap-1 rounded-md bg-brand-500/15 px-2 py-0.5 text-xs font-medium text-brand-600">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-brand-500"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: easeOut }}
            />
            Just now
          </div>
        </FlowCard>

        {/* Connector with traveling pulse */}
        <div className="relative mx-auto h-10 w-px bg-line">
          <FlowPulse delay={0.8} />
        </div>

        {/* Step 2 — Automation routes it */}
        <FlowCard delay={0.35} className="w-full">
          <div className="mb-2.5 flex items-center gap-2 text-xs font-medium text-ink-muted">
            <Zap className="h-3.5 w-3.5 text-brand-500" />
            Automation routes it
          </div>
          <div className="space-y-1.5">
            {[
              "Notify team",
              "Add to CRM",
              "Schedule follow-up",
            ].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 2,
                  ease: easeOut,
                  delay: i * 0.4,
                  repeat: Infinity,
                }}
                className="flex items-center gap-2 text-xs text-ink"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-500" />
                {step}
              </motion.div>
            ))}
          </div>
        </FlowCard>

        {/* Connector */}
        <div className="relative mx-auto h-10 w-px bg-line">
          <FlowPulse delay={1.4} />
        </div>

        {/* Step 3 — Alerts fire (two branches) */}
        <div className="grid grid-cols-2 gap-3">
          <FlowCard delay={0.5}>
            <div className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-ink">
              <MessageCircle className="h-3.5 w-3.5 text-brand-500" />
              WhatsApp
            </div>
            <motion.div
              className="h-2 rounded-full bg-brand-400"
              animate={{ width: ["20%", "90%", "20%"] }}
              transition={{ duration: 2.4, ease: easeOut, repeat: Infinity }}
            />
            <p className="mt-1.5 text-xs text-ink-muted">Alert sent</p>
          </FlowCard>

          <FlowCard delay={0.6}>
            <div className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-ink">
              <Mail className="h-3.5 w-3.5 text-brand-500" />
              Email
            </div>
            <motion.div
              className="h-2 rounded-full bg-brand-400"
              animate={{ width: ["30%", "100%", "30%"] }}
              transition={{
                duration: 2.4,
                ease: easeOut,
                repeat: Infinity,
                delay: 0.5,
              }}
            />
            <p className="mt-1.5 text-xs text-ink-muted">Delivered</p>
          </FlowCard>
        </div>
      </div>
    </motion.div>
  );
}
