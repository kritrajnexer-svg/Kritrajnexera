"use client";

import { motion } from "framer-motion";
import {
  FileImage,
  XCircle,
  TrendingUp,
  Zap,
  Bell,
  BarChart3,
  Bot,
  CheckCircle2,
  Target,
  RefreshCw,
} from "lucide-react";
import Section from "@/components/Section";
import ParallaxSection from "@/components/ParallaxSection";

const easeOut = [0.25, 1, 0.5, 1] as const;

const brochureFailures = [
  "Enquiries land in an inbox nobody checks till evening",
  "No follow-up — hot prospects go cold by tomorrow",
  "You're the one chasing the lead, not the system.",
  "Site looks nice. Sales stay flat.",
];

const systemWins = [
  { icon: Zap, label: "Instant WhatsApp & Email Alerts" },
  { icon: Target, label: "Automatically assign every enquiry to the right team member" },
  { icon: BarChart3, label: "Track every prospect from first click to closed sale" },
  { icon: RefreshCw, label: "Automated follow-ups so no opportunity is missed" },
];

const workflowSteps = [
  "Enquiry Captured",
  "Validated & Logged to CRM",
  "Team Notified (WhatsApp + Email)",
  "Assigned",
  "Follow-up Started",
];

const bottomCallouts = [
  {
    label: "Real-Time Enquiry Alerts",
    gradient: "linear-gradient(135deg, #f0eeff 0%, #ffffff 50%, #fafaff 100%)",
    accent: "#6655ff",
    Illus: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-6 w-6">
        <path d="M24 8c-6 0-10 4-10 10v4l-2 6h24l-2-6v-4c0-6-4-10-10-10z" stroke="currentColor" strokeWidth={1.5} opacity={0.6} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 30c0 2 2 4 4 4s4-2 4-4" stroke="currentColor" strokeWidth={1.5} opacity={0.5} strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Automated Follow-ups",
    gradient: "linear-gradient(135deg, #ffffff 0%, #f0fdfa 50%, #fafaff 100%)",
    accent: "#2dd4bf",
    Illus: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-6 w-6">
        <path d="M24 12v12l8 4" stroke="currentColor" strokeWidth={1.5} opacity={0.6} strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth={1.5} opacity={0.5}/>
      </svg>
    ),
  },
  {
    label: "One Dashboard, Full Visibility",
    gradient: "linear-gradient(135deg, #fafaff 0%, #ffffff 50%, #f0eeff 100%)",
    accent: "#6655ff",
    Illus: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-6 w-6">
        <rect x="10" y="12" width="28" height="24" rx="3" stroke="currentColor" strokeWidth={1.5} opacity={0.5}/>
        <rect x="14" y="16" width="20" height="4" rx="1" fill="currentColor" opacity={0.2}/>
        <rect x="14" y="22" width="14" height="2" rx="1" fill="currentColor" opacity={0.15}/>
        <rect x="14" y="26" width="18" height="2" rx="1" fill="currentColor" opacity={0.15}/>
      </svg>
    ),
  },
  {
    label: "Insights That Drive Decisions",
    gradient: "linear-gradient(135deg, #ffffff 0%, #f0fdfa 50%, #fafaff 100%)",
    accent: "#2dd4bf",
    Illus: () => (
      <svg viewBox="0 0 48 48" fill="none" className="h-6 w-6">
        <path d="M12 34h24" stroke="currentColor" strokeWidth={1.5} opacity={0.3} strokeLinecap="round"/>
        <rect x="16" y="28" width="4" height="6" rx="1" fill="currentColor" opacity={0.35}/>
        <rect x="22" y="22" width="4" height="12" rx="1" fill="currentColor" opacity={0.4}/>
        <rect x="28" y="18" width="4" height="16" rx="1" fill="currentColor" opacity={0.45}/>
        <path d="M14 30l3-4 5 2 4-6 4 3" stroke="currentColor" strokeWidth={1.2} opacity={0.3} fill="none"/>
      </svg>
    ),
  },
];

export default function DifferenceSplit() {
  return (
    <Section id="difference">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink font-display">
          A brochure sits there.
          <br />
          A workflow does the work.
        </h2>
      </div>

      {/* Split comparison */}
      <ParallaxSection speed={0.8}>
      <div className="grid items-stretch gap-0 overflow-hidden rounded-3xl border border-line lg:grid-cols-2">
        {/* LEFT — Other agencies / brochure site */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="relative border-b border-line p-8 lg:border-b-0 lg:border-r"
        >
          {/* Desaturated mock browser */}
          <div className="mb-6 rounded-xl glass-card p-1 opacity-60">
            <div className="flex gap-1.5 px-2 py-1.5">
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-line" />
            </div>
            <div className="space-y-2 p-4">
              <div className="h-6 w-1/2 rounded bg-line/70" />
              <div className="h-3 w-3/4 rounded bg-line/50" />
              <div className="mt-3 h-20 w-full rounded bg-line/30" />
              <div className="h-7 w-24 rounded bg-line/60" />
            </div>
          </div>

          <div className="mb-4 flex items-center gap-2">
            <FileImage className="h-5 w-5 text-ink-muted" />
            <h3 className="text-lg font-semibold text-ink-muted">
              Other Agencies
            </h3>
          </div>

          <ul className="space-y-3">
            {brochureFailures.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-ink-muted">
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
                {f}
              </li>
            ))}
          </ul>

          <p className="mt-6 border-t border-line pt-4 text-sm italic text-ink-muted">
            A website alone is a brochure. It looks good but doesn&apos;t generate
            business.
          </p>
        </motion.div>

        {/* RIGHT — KritRaj Nexera system */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="relative bg-brand-500/[0.04] p-8"
        >
          {/* Premium stat cards */}
          <div className="mb-4 grid grid-cols-2 gap-3">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: easeOut, delay: 0.1 }}
              className="rounded-xl glass-card p-4"
            >
              <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium text-brand-400">
                <Zap className="h-3.5 w-3.5" /> AI Chatbot
              </div>
              <p className="text-2xl font-semibold text-ink">&lt; 60 sec</p>
              <p className="mt-0.5 text-[10px] text-ink-muted">
                Average Response Time
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: easeOut, delay: 0.15 }}
              className="rounded-xl glass-card p-4"
            >
              <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium text-brand-400">
                <Bot className="h-3.5 w-3.5" /> Automation Status
              </div>
              <p className="text-2xl font-semibold text-ink">24/7</p>
              <p className="mt-0.5 text-[10px] text-ink-muted">Always Active</p>
            </motion.div>
          </div>

          {/* Live Sales Engine workflow */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: easeOut, delay: 0.2 }}
            className="mb-6 rounded-xl glass-card p-4"
          >
            <div className="mb-3 flex items-center gap-2 text-[11px] font-medium text-brand-400">
              <Bot className="h-3.5 w-3.5" /> Live Sales Engine
            </div>
            <div className="relative">
              {/* Persistent vertical connecting line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: easeOut, delay: 0.3 }}
                className="absolute left-[11px] top-1 w-px bg-brand-500/30"
              />
              <div className="space-y-5">
                {workflowSteps.map((step, i) => (
                  <div key={step} className="relative flex items-center gap-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, ease: easeOut, delay: 0.25 + i * 0.08 }}
                      className="relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-teal-500" />
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0, x: -4 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, ease: easeOut, delay: 0.3 + i * 0.08 }}
                      className="text-xs text-ink"
                    >
                      {step}
                    </motion.span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-500">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-ink">KritRaj Nexera</h3>
          </div>

          <ul className="space-y-3">
            {systemWins.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-start gap-2.5 text-sm text-ink">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {label}
              </li>
            ))}
          </ul>

          <p className="mt-6 border-t border-line pt-4 text-sm italic text-ink">
            Your automation captures, routes, follows up, and tracks every prospect
            automatically — even while you sleep. You own everything, and we
            include 30 days of post-launch support.
          </p>
        </motion.div>
      </div>
      </ParallaxSection>

      {/* Bottom callouts */}
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {bottomCallouts.map(({ label, gradient, accent, Illus }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: easeOut, delay: i * 0.08 }}
            className="flex flex-col items-center gap-3 rounded-2xl glass-card p-5 text-center"
            style={{ background: gradient }}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg" style={{color: accent, background: `${accent}10`}}>
              <Illus />
            </span>
            <span className="text-sm font-medium text-ink">{label}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
