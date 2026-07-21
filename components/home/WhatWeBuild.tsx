import { Building2, Stethoscope, Package } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";

const items = [
  {
    icon: Building2,
    label: "Real Estate",
    desc: "Enquiry-to-tour automation: dynamic listings site wired to WhatsApp automation, so every enquiry reaches an agent fast.",
  },
  {
    icon: Stethoscope,
    label: "Clinic",
    desc: "Appointment system: booking site with automated reminders, rescheduling, and no-show follow-ups.",
  },
  {
    icon: Package,
    label: "E-commerce",
    desc: "Catalog + sales automation: filterable product site feeding orders into inventory, dispatch, and customer win-back flows.",
  },
];

export default function WhatWeBuild() {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-[clamp(1.75rem,3vw,2rem)] font-semibold leading-tight text-ink font-display">
            What we build
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {items.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="rounded-2xl glass-card-glow p-6"
            >
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mb-1 font-semibold text-ink">{label}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-ink-muted">
          These describe what we build, not completed client results.
        </p>
      </Container>
    </Section>
  );
}
