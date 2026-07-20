"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  ArrowRight,
  RotateCcw,
  AlertCircle,
  Terminal,
  MessageCircle,
  Mail,
  Database,
  Brain,
} from "lucide-react";
import Button from "@/components/Button";

const ease = [0.25, 1, 0.5, 1] as const;

const steps = [
  { id: "captured", label: "Lead Captured", log: "Lead received" },
  { id: "webhook", label: "Webhook Triggered", log: "Webhook triggered" },
  { id: "validated", label: "Lead Validated", log: "Data validated" },
  { id: "sheets", label: "Google Sheets Updated", log: "Google Sheets updated" },
  { id: "crm", label: "CRM Record Created", log: "CRM record created" },
  { id: "score", label: "AI Lead Score Generated", log: "AI Lead Score generated" },
  { id: "email", label: "Email Confirmation Sent", log: "Email confirmation sent" },
  { id: "notified", label: "Sales Team Notified", log: "Sales team notified" },
  { id: "followup", label: "Follow-up Scheduled", log: "Follow-up scheduled" },
  { id: "complete", label: "Workflow Completed", log: "Workflow completed" },
];

const successSummary = [
  "CRM Updated",
  "Google Sheets Updated",
  "AI Lead Score Generated",
  "Email Sent",
  "Sales Team Notified",
  "Follow-up Scheduled",
];

// Map step indices → which output cards to show
// steps: 0=captured 1=webhook 2=validated 3=sheets 4=crm 5=score 6=email 7=notified 8=followup 9=complete
const OUTPUT_TRIGGERS = {
  crm: 4, // CRM Record Created
  score: 5, // AI Lead Score Generated
  email: 6, // Email Confirmation Sent
  whatsapp: 7, // Sales Team Notified (WhatsApp alert)
} as const;

type Status = "idle" | "running" | "completed" | "error";

type AutomationTimelineProps = {
  status: Status;
  onStatusChange: (status: Status) => void;
  leadData?: {
    name?: string;
    businessName?: string;
    email?: string;
    phone?: string;
    businessType?: string;
    message?: string;
    budget?: string;
    timeline?: string;
    role?: string;
    teamSize?: string;
  };
};

function getLeadScore(data: AutomationTimelineProps["leadData"]): number {
  if (!data) return 0;
  let score = 0;

  if (data.name?.trim()) score += 5;
  if (data.businessName?.trim()) score += 5;
  if (data.email?.trim()) score += 5;

  const phone = (data.phone ?? "").replace(/\s/g, "");
  if (phone.length >= 10) score += 10;

  const budgetScores: Record<string, number> = {
    "₹5L+": 20, "₹3L–₹5L": 16, "₹1.5L–₹3L": 12,
    "₹50K–₹1.5L": 8, "Under ₹50K": 4,
  };
  if (data.budget && budgetScores[data.budget] !== undefined)
    score += budgetScores[data.budget];

  const timelineScores: Record<string, number> = {
    Immediately: 20, "This month": 15, "Next 3 months": 8,
  };
  if (data.timeline && timelineScores[data.timeline] !== undefined)
    score += timelineScores[data.timeline];

  const roleScores: Record<string, number> = {
    "Owner / Founder": 15, "Marketing Head": 12,
    "Operations Head": 10, Manager: 6, Employee: 3,
  };
  if (data.role && roleScores[data.role] !== undefined)
    score += roleScores[data.role];

  const teamScores: Record<string, number> = {
    "50+": 10, "16–50": 8, "6–15": 5, "2–5": 3,
  };
  if (data.teamSize && teamScores[data.teamSize] !== undefined)
    score += teamScores[data.teamSize];

  const msgLen = (data.message ?? "").trim().length;
  if (msgLen > 150) score += 10;
  else if (msgLen > 50) score += 5;

  return Math.min(score, 100);
}

export default function AutomationTimeline({
  status,
  onStatusChange,
  leadData,
}: AutomationTimelineProps) {
  const [currentStep, setCurrentStep] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [activityLog, setActivityLog] = useState<string[]>([]);
  const logEndRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);

  const addLog = useCallback((label: string) => {
    const now = new Date();
    const time = now.toTimeString().slice(0, 8);
    setActivityLog((prev) => [...prev, `${time} ${label}`]);
  }, []);

  useEffect(() => {
    if (status !== "running") {
      if (status === "idle") {
        setCurrentStep(-1);
        setProgress(0);
        setActivityLog([]);
        progressRef.current = 0;
      }
      return;
    }

    setCurrentStep(-1);
    setProgress(0);
    setActivityLog([]);
    progressRef.current = 0;

    let cancelled = false;

    const runSequence = async () => {
      for (let i = 0; i < steps.length; i++) {
        if (cancelled) break;

        setCurrentStep(i);
        addLog(steps[i].log);

        const targetProgress = Math.round(((i + 1) / steps.length) * 100);
        const startProgress = progressRef.current;
        const duration = 300 + Math.random() * 300;
        const startTime = performance.now();

        await new Promise<void>((resolve) => {
          const animate = (now: number) => {
            if (cancelled) { resolve(); return; }
            const elapsed = now - startTime;
            const t = Math.min(elapsed / duration, 1);
            const eased = 1 - (1 - t) * (1 - t);
            progressRef.current = startProgress + (targetProgress - startProgress) * eased;
            setProgress(progressRef.current);
            if (t < 1) requestAnimationFrame(animate);
            else resolve();
          };
          requestAnimationFrame(animate);
        });

        if (cancelled) break;

        if (i < steps.length - 1) {
          await new Promise((r) => setTimeout(r, 200 + Math.random() * 300));
          if (cancelled) break;
        }
      }

      if (!cancelled) {
        await new Promise((r) => setTimeout(r, 300));
        if (!cancelled) {
          progressRef.current = 100;
          setProgress(100);
          onStatusChange("completed");
        }
      }
    };

    runSequence();

    return () => {
      cancelled = true;
    };
  }, [status, addLog, onStatusChange]);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activityLog]);

  function handleReset() {
    onStatusChange("idle");
  }

  function handleRetry() {
    onStatusChange("running");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease, delay: 0.1 }}
      className="space-y-4"
    >
      {/* Pipeline */}
      <div className="rounded-2xl border border-line/50 bg-surface p-5 sm:p-6">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-ink">Automation Pipeline</h3>
          {status === "running" && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-brand-400"
            >
              Processing...
            </motion.span>
          )}
        </div>
        <p className="mb-4 text-xs text-ink-muted">
          Real-time lead processing workflow
        </p>

        {/* Progress Bar */}
        <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-line/40">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-400"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => {
            const isActive = i === currentStep && status === "running";
            const isDone = i < currentStep || (i === currentStep && status === "completed");
            const isPending = i > currentStep && status !== "completed";

            return (
              <motion.div
                key={step.id}
                className="flex items-center gap-3 px-2 py-2"
                animate={
                  isActive
                    ? { backgroundColor: "rgba(37, 99, 235, 0.06)", borderRadius: 8 }
                    : { backgroundColor: "transparent", borderRadius: 8 }
                }
                transition={{ duration: 0.3 }}
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                  {isDone ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                    </motion.div>
                  ) : isActive ? (
                    <Loader2 className="h-4 w-4 animate-spin text-brand-400" />
                  ) : (
                    <div className="h-4 w-4 rounded-full border-2 border-line/60" />
                  )}
                </div>

                <span
                  className={`text-sm transition-colors ${
                    isDone
                      ? "text-green-600"
                      : isActive
                        ? "text-brand-400"
                        : "text-ink-muted/70"
                  }`}
                >
                  {step.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Live Output Cards — personalized to visitor's submission */}
      {(status === "running" || status === "completed") && leadData && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* CRM card */}
          <AnimatePresence>
            {(currentStep >= OUTPUT_TRIGGERS.crm || status === "completed") && (
              <OutputCard
                key="crm"
                icon={Database}
                title="CRM Entry"
                accent="text-brand-400"
                badge="CRM"
                timestamp={true}
              >
                <p className="text-sm font-medium text-ink">{leadData.name}</p>
                <p className="text-xs text-ink-muted">{leadData.businessName}</p>
                <div className="mt-1.5 flex items-center gap-2 text-[11px]">
                  <span className="rounded bg-surface px-1.5 py-0.5 text-ink-muted">
                    {leadData.businessType}
                  </span>
                  <span className="rounded bg-green-600/15 px-1.5 py-0.5 text-green-600">
                    New
                  </span>
                </div>
              </OutputCard>
            )}
          </AnimatePresence>

          {/* Lead score card */}
          <AnimatePresence>
            {(currentStep >= OUTPUT_TRIGGERS.score || status === "completed") && (() => {
              const s = getLeadScore(leadData);
              const label =
                s <= 30 ? "Cold lead" :
                s <= 55 ? "Warm lead" :
                s <= 75 ? "Hot lead" :
                "Very hot lead";
              const desc =
                s <= 30 ? "Low conversion probability" :
                s <= 55 ? "Moderate conversion probability" :
                s <= 75 ? "Good conversion probability" :
                "High conversion probability";
              const color =
                s <= 30 ? "text-zinc-400" :
                s <= 55 ? "text-yellow-400" :
                s <= 75 ? "text-orange-400" :
                "text-purple-400";
              return (
                <OutputCard
                  key="score"
                  icon={Brain}
                  title="AI Lead Score"
                  accent={color}
                  badge="AI"
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-3xl font-bold ${color}`}>{s}</span>
                    <div>
                      <p className={`text-xs font-medium text-ink`}>{label}</p>
                      <p className="text-[11px] text-ink-muted">{desc}</p>
                    </div>
                  </div>
                </OutputCard>
              );
            })()}
          </AnimatePresence>

          {/* Email card */}
          <AnimatePresence>
            {(currentStep >= OUTPUT_TRIGGERS.email || status === "completed") && (
              <OutputCard
                key="email"
                icon={Mail}
                title="Confirmation Email"
                accent="text-brand-400"
                badge="Email"
              >
                <p className="text-xs text-ink-muted">
                  <span className="text-ink">To:</span> {leadData.email}
                </p>
                <p className="mt-1 truncate text-xs text-ink-muted">
                  <span className="text-ink">Subject:</span> Thanks for your enquiry, {leadData.name?.split(" ")[0]}
                </p>
                <p className="mt-1 text-[11px] text-ink-muted">
                  We&apos;ll be in touch within the hour.
                </p>
              </OutputCard>
            )}
          </AnimatePresence>

          {/* WhatsApp card */}
          <AnimatePresence>
            {(currentStep >= OUTPUT_TRIGGERS.whatsapp || status === "completed") && (
              <OutputCard
                key="whatsapp"
                icon={MessageCircle}
                title="WhatsApp Alert"
                accent="text-[#25D366]"
                badge="Alert"
              >
                <div className="rounded-lg rounded-tl-none bg-[#25D366]/10 px-2.5 py-1.5">
                  <p className="text-[11px] text-ink">
                    🔔 New lead from {leadData.businessName}
                  </p>
                  <p className="text-[11px] text-ink-muted">
                    {leadData.name} · {leadData.phone}
                  </p>
                </div>
              </OutputCard>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Activity Log */}
      <div className="rounded-2xl border border-line/50 bg-surface p-5 sm:p-6">
        <div className="mb-1 flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-ink-muted" />
          <h3 className="text-sm font-semibold text-ink">Activity Log</h3>
        </div>
        <p className="mb-3 text-xs text-ink-muted">
          Every action recorded in real time
        </p>

        <div
          className="max-h-[200px] overflow-y-auto font-mono text-xs leading-relaxed"
          role="log"
          aria-live="polite"
          aria-label="Live automation activity log"
        >
          {activityLog.length === 0 && status === "idle" && (
            <p className="text-ink-muted/60">
              Submit the form to see the activity log populate.
            </p>
          )}
          {activityLog.length === 0 && status === "running" && (
            <p className="text-brand-400/80">Waiting for lead data...</p>
          )}
          <AnimatePresence initial={false}>
            {activityLog.map((entry, i) => {
              const isLatest = i === activityLog.length - 1;
              return (
                <motion.div
                  key={`${entry}-${i}`}
                  initial={{ opacity: 0, x: -12, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: "auto" }}
                  transition={{ duration: 0.35, ease }}
                  className={`py-1 ${isLatest ? "text-ink" : "text-ink-muted/70"}`}
                >
                  <span className="text-ink-muted/40">{entry.slice(0, 8)}</span>
                  <span className="text-ink-muted/30"> </span>
                  {isLatest && status === "running" ? (
                    <span className="inline-flex items-center gap-1">
                      {entry.slice(9)}
                      <span className="inline-block h-3.5 w-1.5 animate-pulse bg-brand-400" />
                    </span>
                  ) : (
                    <span>{entry.slice(9)}</span>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
          <div ref={logEndRef} />
        </div>
      </div>

      {/* Success Card */}
      <AnimatePresence>
        {status === "completed" && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.5, ease }}
            className="rounded-2xl border border-green-600/20 bg-green-600/10 p-6 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600/15"
            >
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </motion.div>

            <h3 className="mb-1 text-lg font-semibold text-green-600">
              Automation Completed Successfully
            </h3>
            <p className="mb-5 text-sm text-ink-muted">
              This is exactly how every lead generated by your website is
              automatically captured, routed, and processed.
            </p>

            <div className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
              {successSummary.map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-xs text-ink-muted">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600/80" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/contact" className="group">
                Book a Free Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-brand-300 hover:text-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              >
                <RotateCcw className="h-4 w-4" />
                Run Again
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Card */}
      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.5, ease }}
            className="rounded-2xl border border-red-600/20 bg-red-600/10 p-6 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/15"
            >
              <AlertCircle className="h-6 w-6 text-red-600" />
            </motion.div>

            <h3 className="mb-1 text-lg font-semibold text-red-600">
              Automation Failed
            </h3>
            <p className="mb-5 text-sm text-ink-muted">
              The webhook relay is temporarily unavailable. Your lead was
              simulated in demo mode.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={handleRetry}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-medium text-white shadow-sm shadow-brand-600/20 transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              >
                <RotateCcw className="h-4 w-4" />
                Retry
              </button>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-brand-300 hover:text-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              >
                Start Over
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/** Compact output card that pops in when a pipeline step completes. */
function OutputCard({
  icon: Icon,
  title,
  accent,
  badge,
  timestamp = false,
  children,
}: {
  icon: typeof Mail;
  title: string;
  accent: string;
  badge: string;
  timestamp?: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="rounded-xl border border-line bg-surface p-3.5"
    >
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Icon className={`h-3.5 w-3.5 ${accent}`} />
          <span className="text-xs font-medium text-ink">{title}</span>
        </div>
        <div className="flex items-center gap-1.5">
          {timestamp && (
            <span className="text-[10px] text-ink-muted">
              {new Date().toTimeString().slice(0, 5)}
            </span>
          )}
          <span className={`rounded bg-surface px-1.5 py-0.5 text-[10px] font-medium ${accent}`}>
            {badge}
          </span>
        </div>
      </div>
      {children}
    </motion.div>
  );
}
