"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Button from "@/components/Button";
import Field from "@/components/forms/Field";

type Status = "idle" | "loading" | "success" | "error";
type FieldErrors = Partial<Record<string, string>>;

const budgets = [
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "₹2,00,000+",
  "Not sure yet",
];

function validate(data: Record<string, string>): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name?.trim()) errors.name = "Name is required";
  if (!data.email?.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email address";
  if (!data.message?.trim()) errors.message = "Message is required";
  else if (data.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters";
  return errors;
}

export default function ContactForm() {
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
      email: (formData.get("email") as string) ?? "",
      company: (formData.get("company") as string) ?? "",
      budget: (formData.get("budget") as string) ?? "",
      message: (formData.get("message") as string) ?? "",
    };

    const errors = validate(payload);
    setFieldErrors(errors);
    setTouched(new Set(["name", "email", "message"]));

    if (Object.keys(errors).length > 0) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <CheckCircle2 className="mb-4 h-12 w-12 text-brand-400" />
        <h3 className="mb-2 text-lg font-semibold text-ink">
          Message sent
        </h3>
        <p className="mb-6 max-w-sm text-sm text-ink-muted">
          Thanks for reaching out. We&apos;ll review your business and get back
          within one business day.
        </p>
        <Button href="/" variant="secondary">
          Back to home
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          required
          placeholder="Your name"
          error={touched.has("name") ? fieldErrors.name : undefined}
          onBlur={() => markTouched("name")}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          error={touched.has("email") ? fieldErrors.email : undefined}
          onBlur={() => markTouched("email")}
        />
      </div>

      <Field label="Company" name="company" placeholder="Your business" />

      <div>
        <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-ink">
          Budget
        </label>
        <select
          id="budget"
          name="budget"
          defaultValue=""
          className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink transition-colors focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
        >
          <option value="" disabled>Select a range</option>
          {budgets.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us how prospects reach you today, and what you'd want the automation to do."
          onBlur={() => markTouched("message")}
          className={`w-full resize-none rounded-xl border bg-bg px-4 py-3 text-sm text-ink transition-colors placeholder:text-ink-muted/80 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400 ${
            touched.has("message") && fieldErrors.message ? "border-red-600/50" : "border-line"
          }`}
        />
        {touched.has("message") && fieldErrors.message && (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.message}</p>
        )}
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-muted">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-line bg-bg text-brand-500 focus:ring-brand-400"
        />
        <span>
          I agree to the{" "}
          <Link href="/privacy-policy" className="text-brand-400 hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms-and-conditions" className="text-brand-400 hover:underline">
            Terms &amp; Conditions
          </Link>
          .
        </span>
      </label>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-red-600/30 bg-red-600/10 px-4 py-3 text-sm text-red-600">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-600 active:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  );
}
