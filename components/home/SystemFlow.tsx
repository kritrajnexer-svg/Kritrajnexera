"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

const easeOut = [0.25, 1, 0.5, 1] as const;

function VisitorIllus() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <circle cx="60" cy="28" r="14" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <path d="M30 70c0-16 14-30 30-30s30 14 30 30" stroke="currentColor" strokeWidth={1.2} opacity={0.45} fill="none" strokeLinecap="round" />
      <path d="M44 40c4-4 10-6 16-6s12 2 16 6" stroke="currentColor" strokeWidth={0.8} opacity={0.3} fill="none" />
    </svg>
  );
}

function WebIllus() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <rect x="24" y="18" width="72" height="50" rx="6" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <rect x="24" y="18" width="72" height="10" rx="6" stroke="currentColor" strokeWidth={0.5} opacity={0.2} />
      <circle cx="31" cy="23" r="2" fill="currentColor" opacity={0.3} />
      <circle cx="38" cy="23" r="2" fill="currentColor" opacity={0.25} />
      <circle cx="45" cy="23" r="2" fill="currentColor" opacity={0.2} />
      <rect x="32" y="36" width="56" height="2" rx="1" fill="currentColor" opacity={0.15} />
      <rect x="32" y="42" width="44" height="2" rx="1" fill="currentColor" opacity={0.12} />
      <rect x="32" y="48" width="50" height="2" rx="1" fill="currentColor" opacity={0.15} />
      <rect x="32" y="54" width="36" height="2" rx="1" fill="currentColor" opacity={0.12} />
    </svg>
  );
}

function AutoIllus() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <circle cx="60" cy="40" r="22" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
      <circle cx="60" cy="40" r="12" stroke="currentColor" strokeWidth={0.6} opacity={0.3} />
      <circle cx="60" cy="40" r="4" fill="currentColor" opacity={0.35} />
      <path d="M38 28c8-8 20-12 34-8" stroke="currentColor" strokeWidth={1.2} opacity={0.4} strokeLinecap="round" />
      <path d="M82 52c-8 8-20 12-34 8" stroke="currentColor" strokeWidth={1.2} opacity={0.4} strokeLinecap="round" />
      <circle cx="38" cy="28" r="3" fill="currentColor" opacity={0.3} />
      <circle cx="82" cy="52" r="3" fill="currentColor" opacity={0.3} />
    </svg>
  );
}

function TrophyIllus() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="h-full w-full">
      <path d="M48 24h24v8c0 8-5 16-12 18-7-2-12-10-12-18v-8z" stroke="currentColor" strokeWidth={1.2} opacity={0.5} fill="none" />
      <path d="M48 28H38c-4 0-6-2-6-4s2-4 6-4h10M72 28h10c4 0 6-2 6-4s-2-4-6-4H72" stroke="currentColor" strokeWidth={1} opacity={0.35} strokeLinecap="round" />
      <path d="M56 50v8M64 50v8M52 58h16" stroke="currentColor" strokeWidth={1} opacity={0.35} strokeLinecap="round" />
      <path d="M54 24c6-4 14-4 20 0" stroke="currentColor" strokeWidth={0.8} opacity={0.25} fill="none" />
    </svg>
  );
}

const steps = [
  {
    Illustration: VisitorIllus,
    title: "Visitor",
    desc: "A prospect finds you through search, ads, or a referral.",
    gradient: "linear-gradient(135deg, #f0eeff 0%, #ffffff 50%, #fafaff 100%)",
    accent: "#6655ff",
  },
  {
    Illustration: WebIllus,
    title: "Website",
    desc: "Your site captures the enquiry — form, chat, or booking.",
    gradient: "linear-gradient(135deg, #fafaff 0%, #ffffff 50%, #f0eeff 100%)",
    accent: "#6655ff",
  },
  {
    Illustration: AutoIllus,
    title: "Automation",
    desc: "The enquiry is instantly routed, tagged, and notified.",
    gradient: "linear-gradient(135deg, #ffffff 0%, #f0fdfa 50%, #fafaff 100%)",
    accent: "#2dd4bf",
  },
  {
    Illustration: TrophyIllus,
    title: "You Close",
    desc: "You step in to close the sale — everything else ran itself.",
    gradient: "linear-gradient(135deg, #fafaff 0%, #ffffff 50%, #f0eeff 100%)",
    accent: "#6655ff",
  },
];

export default function SystemFlow() {
  return (
    <Section id="system" muted>
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink font-display">
          AI Automation, from click to close
        </h2>
        <p className="mt-4 text-ink-muted">
          Website and workflow automation aren&apos;t two services bolted together.
          They&apos;re one pipeline — the site captures, the automation converts.
          Delivered in 4–6 weeks. You own everything. No lock-in.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {steps.map(({ Illustration, title, desc, gradient, accent }, i) => (
          <div key={title} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeOut, delay: i * 0.1 }}
              className="premium-card h-full p-6"
              style={{ background: gradient }}
            >
              <div className="relative mb-4">
                <div
                  className="flex h-20 w-full items-center justify-center rounded-xl"
                  style={{ color: accent, background: `${accent}08` }}
                >
                  <Illustration />
                </div>
                <span
                  className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold text-white"
                  style={{ background: accent }}
                >
                  {i + 1}
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
                    stroke={accent}
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
