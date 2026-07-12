"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import Button from "@/components/Button";

const easeOut = [0.25, 1, 0.5, 1] as const;

const steps = [
  { id: "received", label: "Lead Received" },
  { id: "webhook", label: "Webhook Triggered" },
  { id: "saved", label: "Lead Saved" },
  { id: "sheets", label: "Google Sheets Updated" },
  { id: "crm", label: "CRM Updated" },
  { id: "email", label: "Email Notification Sent" },
  { id: "notified", label: "Sales Team Notified" },
  { id: "complete", label: "Automation Completed" },
];

type AutomationTimelineProps = {
  running: boolean;
  submissionData: Record<string, string> | null;
  onReset: () => void;
};

export default function AutomationTimeline({
  running,
  submissionData,
  onReset,
}: AutomationTimelineProps) {
  const [currentStep, setCurrentStep] = useState(-1);
  const [completed, setCompleted] = useState(false);
  const [activityLog, setActivityLog] = useState<string[]>([]);
  const logEndRef = useRef<HTMLDivElement>(null);

  const addLog = useCallback((label: string) => {
    const now = new Date();
    const time = now.toTimeString().slice(0, 8);
    setActivityLog((prev) => [...prev, `${time} ${label}`]);
  }, []);

  useEffect(() => {
    if (!running) {
      setCurrentStep(-1);
      setCompleted(false);
      setActivityLog([]);
      return;
    }

    setCurrentStep(-1);
    setCompleted(false);
    setActivityLog([]);

    let cancelled = false;

    const runSequence = async () => {
      for (let i = 0; i < steps.length; i++) {
        if (cancelled) break;
        await new Promise((r) => setTimeout(r, i === 0 ? 500 : 600 + Math.random() * 400));
        if (cancelled) break;
        setCurrentStep(i);
        addLog(steps[i].label);
      }
      if (!cancelled) {
        await new Promise((r) => setTimeout(r, 400));
        if (!cancelled) setCompleted(true);
      }
    };

    runSequence();

    return () => {
      cancelled = true;
    };
  }, [running, addLog]);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activityLog]);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeOut }}
        className="rounded-2xl border border-line bg-surface p-6"
      >
        <h3 className="mb-1 text-sm font-semibold text-ink">
          Automation Pipeline
        </h3>
        <p className="mb-5 text-xs text-ink-muted">
          Real-time lead processing workflow
        </p>

        <div className="space-y-0">
          {steps.map((step, i) => {
            const isActive = i === currentStep;
            const isDone = i < currentStep;
            const isPending = i > currentStep;

            return (
              <motion.div
                key={step.id}
                className="flex items-center gap-3 py-2.5"
                animate={
                  isActive
                    ? { backgroundColor: "rgba(37, 99, 235, 0.05)", borderRadius: 8 }
                    : { backgroundColor: "transparent", borderRadius: 8 }
                }
                transition={{ duration: 0.3 }}
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center">
                  {isDone ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                    </motion.div>
                  ) : isActive ? (
                    <Loader2 className="h-5 w-5 animate-spin text-brand-400" />
                  ) : (
                    <div className="h-5 w-5 rounded-full border-2 border-line" />
                  )}
                </div>

                <div className="flex-1">
                  <p
                    className={`text-sm transition-colors ${
                      isDone
                        ? "text-green-400"
                        : isActive
                          ? "text-brand-400"
                          : "text-ink-muted"
                    }`}
                  >
                    {step.label}
                  </p>
                </div>

                {isDone && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-green-400/70"
                  >
                    {new Date().toTimeString().slice(0, 8)}
                  </motion.span>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Live Activity Log */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
        className="rounded-2xl border border-line bg-surface p-6"
      >
        <h3 className="mb-1 text-sm font-semibold text-ink">
          Live Activity Log
        </h3>
        <p className="mb-4 text-xs text-ink-muted">
          Every action recorded in real time
        </p>

        <div
          className="max-h-[260px] overflow-y-auto font-mono text-xs leading-relaxed"
          role="log"
          aria-live="polite"
          aria-label="Live automation activity log"
        >
          {activityLog.length === 0 && !running && (
            <p className="text-ink-muted">
              Submit the form to see the activity log populate.
            </p>
          )}
          {activityLog.length === 0 && running && (
            <p className="text-brand-400">Waiting for lead data...</p>
          )}
          <AnimatePresence>
            {activityLog.map((entry, i) => (
              <motion.div
                key={`${entry}-${i}`}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: easeOut }}
                className="py-1 text-ink-muted"
              >
                <span className="text-ink/40">{entry.slice(0, 8)}</span>
                <span className="text-ink/60"> </span>
                <span>{entry.slice(9)}</span>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={logEndRef} />
        </div>
      </motion.div>

      {/* Success Card */}
      <AnimatePresence>
        {completed && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="rounded-2xl border border-green-400/30 bg-green-400/5 p-6 text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-400/10">
              <CheckCircle2 className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-green-400">
              Automation Completed Successfully
            </h3>
            <p className="mb-6 text-sm text-ink-muted">
              This is exactly how every lead generated by your website is
              automatically captured, routed, tracked, and delivered to your
              sales team in real time.
            </p>
            <Button
              href="/contact"
              className="group"
            >
              Book a Free Strategy Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
