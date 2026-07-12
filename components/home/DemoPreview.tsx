"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Section from "@/components/Section";
import Button from "@/components/Button";

const easeOut = [0.25, 1, 0.5, 1] as const;

const workflowSteps = [
  "Lead Submitted",
  "Webhook Triggered",
  "CRM Updated",
  "Google Sheets Updated",
  "Email Notification",
  "Automation Complete",
];

export default function DemoPreview() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: easeOut }}
        className="mx-auto mb-12 max-w-2xl text-center"
      >
        <p className="mb-3 text-sm font-medium text-brand-400">
          See it in action
        </p>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink">
          See Our Sales Engine in Action
        </h2>
        <p className="mt-4 text-lg text-ink-muted">
          Don&apos;t just read about automation — experience it live. Submit a
          demo lead and watch how our system instantly captures, routes, and
          processes it.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
        className="mx-auto max-w-lg rounded-2xl border border-line bg-surface p-6"
      >
        <div className="mb-4 text-center">
          <p className="text-sm font-semibold text-ink">Automation Workflow</p>
          <p className="text-xs text-ink-muted">
            What happens when a lead comes through
          </p>
        </div>
        <div className="space-y-0">
          {workflowSteps.map((step, i) => (
            <div key={step} className="flex items-center gap-3 py-2.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center">
                {i < workflowSteps.length - 1 ? (
                  <CheckCircle2 className="h-5 w-5 text-brand-500/60" />
                ) : (
                  <div className="h-5 w-5 rounded-full border-2 border-brand-500/60" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm text-ink">{step}</p>
              </div>
              {i < workflowSteps.length - 1 && (
                <div className="text-xs text-ink-muted">
                  <svg
                    className="h-4 w-4 text-brand-500/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
        className="mt-10 text-center"
      >
        <Button href="/demo" className="group">
          Try Live Demo
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </motion.div>
    </Section>
  );
}
