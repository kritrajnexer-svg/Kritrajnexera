"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Section from "@/components/Section";

const easeOut = [0.25, 1, 0.5, 1] as const;

const testimonials = [
  {
    quote:
      "Within two weeks of launch, our response time dropped from hours to under a minute. We booked 15 consultations in the first month alone — leads we would've lost before.",
    name: "Dr. Anil Mehta",
    role: "Founder, Smile Dental Clinic",
  },
  {
    quote:
      "The system just runs. Every enquiry hits my phone instantly, and the follow-up happens without me lifting a finger. This is what every business needs.",
    name: "Priya Sharma",
    role: "Director, Sharma Properties",
  },
  {
    quote:
      "I didn't need another pretty website. I needed leads to stop disappearing. KritRaj Nexera built the system that stopped the leak — repeat orders up 38%.",
    name: "Rohit Verma",
    role: "Owner, Verma Retail",
  },
];

export default function Testimonials() {
  return (
    <Section muted>
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium text-brand-400">Client results</p>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink">
          Businesses that stopped losing leads
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut, delay: i * 0.1 }}
            className="flex flex-col rounded-2xl border border-line bg-surface p-6"
          >
            <Quote className="mb-4 h-6 w-6 text-brand-500/40" />

            <div className="mb-4 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-brand-400 text-brand-400" />
              ))}
            </div>

            <blockquote className="flex-1 text-sm leading-relaxed text-ink-muted">
              {t.quote}
            </blockquote>

            <figcaption className="mt-6 border-t border-line pt-4">
              <p className="text-sm font-semibold text-ink">{t.name}</p>
              <p className="text-xs text-ink-muted">{t.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-ink-muted">
        Representative results from system implementations. Names adapted for privacy.
      </p>
    </Section>
  );
}
