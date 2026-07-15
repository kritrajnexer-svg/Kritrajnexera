"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import Section from "@/components/Section";

const easeOut = [0.25, 1, 0.5, 1] as const;

const projects = [
  {
    tag: "Real Estate",
    title: "Lead-to-tour automation for a property firm",
    result: "+62% booked site visits",
    desc: "Dynamic listings site wired to instant WhatsApp routing — every enquiry reached an agent in under a minute.",
  },
  {
    tag: "Clinic",
    title: "Appointment system for a dental practice",
    result: "3hrs → 4min response time",
    desc: "Booking site with automated reminders, rescheduling, and no-show follow-ups. Front desk reclaimed their day.",
  },
  {
    tag: "E-commerce",
    title: "Catalog + order routing for a retailer",
    result: "+38% repeat orders",
    desc: "Filterable product site feeding orders into inventory, dispatch, and customer win-back flows.",
  },
];

export default function FeaturedWork() {
  return (
    <Section muted>
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink">
            Systems we&apos;ve shipped
          </h2>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 hover:text-brand-300"
        >
          View all services <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut, delay: i * 0.1 }}
            className="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-brand-500/30"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted">
                {p.tag}
              </span>
              <ArrowUpRight className="h-4 w-4 text-ink-muted transition-colors group-hover:text-brand-400" />
            </div>
            <h3 className="mb-3 font-semibold leading-snug text-ink">{p.title}</h3>
            <p className="mb-5 flex-1 text-sm leading-relaxed text-ink-muted">
              {p.desc}
            </p>
            <div className="flex items-center gap-2 border-t border-line pt-4">
              <TrendingUp className="h-4 w-4 text-brand-400" />
              <span className="text-sm font-semibold text-brand-400">{p.result}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
