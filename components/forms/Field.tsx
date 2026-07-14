"use client";

import { motion } from "framer-motion";

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
  onBlur?: () => void;
};

export default function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  error,
  onBlur,
}: FieldProps) {
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
        onBlur={onBlur}
        className={`w-full rounded-xl border bg-bg px-4 py-3 text-sm text-ink transition-colors placeholder:text-ink-muted/70 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400 ${
          error ? "border-red-400/50" : "border-line"
        }`}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-xs text-red-400"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
