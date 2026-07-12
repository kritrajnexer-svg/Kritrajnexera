"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

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

type Status = "idle" | "loading" | "error";

type DemoFormProps = {
  onSuccess: (data: Record<string, string>) => void;
};

export default function DemoForm({ onSuccess }: DemoFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);

    const honeypot = formData.get("website") as string;
    if (honeypot) {
      setStatus("idle");
      return;
    }

    const payload = {
      name: formData.get("name") as string,
      businessName: formData.get("businessName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      businessType: formData.get("businessType") as string,
      message: formData.get("message") as string,
    };

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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
    >
      <h2 className="mb-1 text-lg font-semibold text-ink">Submit a Demo Lead</h2>
      <p className="mb-6 text-sm text-ink-muted">
        Fill this in as a real prospect would. Watch the automation timeline on
        the right process it live.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" name="name" required placeholder="Your name" />
          <Field label="Business Name" name="businessName" required placeholder="Your business" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
          <Field label="Phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
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
            className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink transition-colors focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
          >
            <option value="" disabled>Select your business type</option>
            {businessTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
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
            className="w-full resize-none rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink transition-colors placeholder:text-ink-muted/60 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
          />
        </div>

        {status === "error" && (
          <div className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-400">
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Processing Demo...
            </>
          ) : (
            "Run Live Demo"
          )}
        </button>
      </form>
    </motion.div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink transition-colors placeholder:text-ink-muted/60 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
      />
    </div>
  );
}
