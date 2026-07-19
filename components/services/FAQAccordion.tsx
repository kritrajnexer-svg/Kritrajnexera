"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Section from "@/components/Section";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most projects take 4–6 weeks from kickoff to launch. Discovery and strategy take about a week, web design and Next.js development take 2–3 weeks, and workflow automation integration plus testing takes the remaining time. Timelines depend on complexity — we'll give you a clear estimate during your strategy call.",
  },
  {
    q: "Do I own the website and automation after launch?",
    a: "100%. You own everything — the website code, the n8n automation workflows, and all integrations. We transfer full access to you after launch. No lock-in, no recurring licensing fees.",
  },
  {
    q: "Can you integrate my existing CRM or business tools?",
    a: "We integrate with virtually any tool that has an API: Salesforce, HubSpot, Zoho, Google Sheets, Airtable, Calendly, Stripe, and many more. During the strategy phase, we map all your existing tools and design the CRM integration and workflow automation around them.",
  },
  {
    q: "Can you automate WhatsApp, Email, and lead follow-ups?",
    a: "Yes — WhatsApp automation, email sequences, and automated follow-ups are core features of every project. Enquiries trigger instant WhatsApp alerts to your team, and automated email sequences engage prospects who don't convert immediately.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Every project includes 30 days of post-launch support. After that, we offer a recurring care plan that covers updates, workflow tweaks, performance monitoring, and priority support — so your platform stays sharp as your business evolves.",
  },
  {
    q: "Can the system grow as my business grows?",
    a: "Absolutely. We build on scalable infrastructure with Next.js development, n8n automation, and PostgreSQL. Adding new pages, workflow flows, or integrations is straightforward. The Growth and Premium tiers include headroom for expansion, and we're always a call away when you're ready to scale.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Section>
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink font-display">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-2xl border border-line bg-surface overflow-hidden"
          >
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between p-5 text-left text-sm font-medium text-ink transition-colors hover:text-brand-400"
              aria-expanded={openIndex === i}
            >
              <span>{faq.q}</span>
              <motion.div
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-4 w-4 shrink-0 text-ink-muted" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-line px-5 pb-5 pt-4">
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
}
