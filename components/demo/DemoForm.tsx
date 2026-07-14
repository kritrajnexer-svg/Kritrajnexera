"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import Field from "@/components/forms/Field";

const businessTypes = [
  "Real Estate",
  "Healthcare / Dental",
  "E-commerce / Retail",
  "Legal / Consulting",
  "Education / Coaching",
  "Home Services",
  "Software / SaaS",
  "Other",
];

const budgetRanges = [
  "Not sure",
  "Under ₹50K",
  "₹50K–₹1.5L",
  "₹1.5L–₹3L",
  "₹3L–₹5L",
  "₹5L+",
];

const timelines = ["Just exploring", "Next 3 months", "This month", "Immediately"];

const roles = [
  "Owner / Founder",
  "Marketing Head",
  "Operations Head",
  "Manager",
  "Employee",
  "Other",
];

const teamSizes = ["Just me", "2–5", "6–15", "16–50", "50+"];

type FieldErrors = Partial<Record<string, string>>;

type Status = "idle" | "loading" | "error";

type DemoFormProps = {
  onSuccess: (data: Record<string, string>) => void;
  disabled?: boolean;
};

function validate(data: Record<string, string>): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name?.trim()) errors.name = "Name is required";
  if (!data.businessName?.trim()) errors.businessName = "Business name is required";
  if (!data.email?.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email address";
  if (!data.phone?.trim()) errors.phone = "Phone is required";
  else if (data.phone.replace(/\s/g, "").length < 10)
    errors.phone = "Enter a valid phone number";
  if (!data.businessType) errors.businessType = "Select a business type";
  return errors;
}

export default function DemoForm({ onSuccess, disabled = false }: DemoFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());

  function markTouched(name: string) {
    setTouched((prev) => new Set(prev).add(name));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);

    const honeypot = formData.get("website") as string;
    if (honeypot) return;

    const payload = {
      name: (formData.get("name") as string) ?? "",
      businessName: (formData.get("businessName") as string) ?? "",
      email: (formData.get("email") as string) ?? "",
      phone: (formData.get("phone") as string) ?? "",
      businessType: (formData.get("businessType") as string) ?? "",
      budget: (formData.get("budget") as string) ?? "",
      timeline: (formData.get("timeline") as string) ?? "",
      role: (formData.get("role") as string) ?? "",
      teamSize: (formData.get("teamSize") as string) ?? "",
      message: (formData.get("message") as string) ?? "",
    };

    const errors = validate(payload);
    setFieldErrors(errors);
    setTouched(new Set(["name", "businessName", "email", "phone", "businessType"]));

    if (Object.keys(errors).length > 0) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }

      onSuccess(payload);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to submit");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className="rounded-2xl border border-line/50 bg-surface p-6 sm:p-8"
    >
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-ink">Submit a Sample Inquiry</h2>
        <p className="mt-1 text-sm text-ink-muted">
          Fill this in as a real prospect would. Watch our AI-powered automation
          pipeline process it live.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Full Name"
            name="name"
            required
            placeholder="Your name"
            error={touched.has("name") ? fieldErrors.name : undefined}
            onBlur={() => markTouched("name")}
          />
          <Field
            label="Business Name"
            name="businessName"
            required
            placeholder="Your business"
            error={touched.has("businessName") ? fieldErrors.businessName : undefined}
            onBlur={() => markTouched("businessName")}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            error={touched.has("email") ? fieldErrors.email : undefined}
            onBlur={() => markTouched("email")}
          />
          <Field
            label="Phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
            error={touched.has("phone") ? fieldErrors.phone : undefined}
            onBlur={() => markTouched("phone")}
          />
        </div>

        <div>
          <label htmlFor="businessType" className="mb-1.5 block text-sm font-medium text-ink">
            Business Type
          </label>
          <select
            id="businessType"
            name="businessType"
            required
            defaultValue=""
            onChange={() => markTouched("businessType")}
            onBlur={() => markTouched("businessType")}
            className={`w-full rounded-xl border bg-bg px-4 py-3 text-sm text-ink transition-colors focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400 ${
              touched.has("businessType") && fieldErrors.businessType
                ? "border-red-400/50"
                : "border-line"
            }`}
          >
            <option value="" disabled>Select your business type</option>
            {businessTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {touched.has("businessType") && fieldErrors.businessType && (
            <p className="mt-1 text-xs text-red-400">{fieldErrors.businessType}</p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-ink">
              Budget Range <span className="text-ink-muted">(optional)</span>
            </label>
            <select
              id="budget"
              name="budget"
              defaultValue=""
              className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink transition-colors focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
            >
              <option value="">Select budget range</option>
              {budgetRanges.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="timeline" className="mb-1.5 block text-sm font-medium text-ink">
              Timeline <span className="text-ink-muted">(optional)</span>
            </label>
            <select
              id="timeline"
              name="timeline"
              defaultValue=""
              className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink transition-colors focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
            >
              <option value="">Select timeline</option>
              {timelines.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="role" className="mb-1.5 block text-sm font-medium text-ink">
              Your Role <span className="text-ink-muted">(optional)</span>
            </label>
            <select
              id="role"
              name="role"
              defaultValue=""
              className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink transition-colors focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
            >
              <option value="">Select your role</option>
              {roles.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="teamSize" className="mb-1.5 block text-sm font-medium text-ink">
              Team Size <span className="text-ink-muted">(optional)</span>
            </label>
            <select
              id="teamSize"
              name="teamSize"
              defaultValue=""
              className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink transition-colors focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
            >
              <option value="">Select team size</option>
              {teamSizes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
            Message <span className="text-ink-muted">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Any specific question or scenario you'd like to see?"
            className="w-full resize-none rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink transition-colors placeholder:text-ink-muted/70 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
          />
        </div>

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-400"
          >
            {errorMsg}
          </motion.div>
        )}

        <button
          type="submit"
          disabled={status === "loading" || disabled}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-medium text-white shadow-sm shadow-brand-600/20 transition-all hover:bg-brand-600 active:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Processing Demo...
            </>
          ) : (
            <>
              Run Live Automation
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
