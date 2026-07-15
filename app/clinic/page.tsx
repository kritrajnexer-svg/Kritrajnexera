import type { Metadata } from "next";
import { Check, ArrowRight, Clock, Calendar, Phone, TrendingUp, Zap } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Clinic Website + Automation | KritRaj Nexera",
  description:
    "Patient intake and retention systems for clinics and dental practices. Online booking, automated reminders, and no-show reduction so your front desk can focus on patients.",
};

const painPoints = [
  "Front desk spends hours on phone calls, reminders, and rescheduling",
  "No-show rates eat into revenue every single day",
  "New patients wait days for a slot — and go elsewhere",
  "Manual follow-ups fall through the cracks",
  "No system to track which marketing channels drive bookings",
];

const solutions = [
  "Online booking that lets patients schedule 24/7 without a phone call",
  "Automated reminders via WhatsApp and email cut no-shows drastically",
  "Same-day booking slots — respond to enquiries in minutes, not days",
  "Automated intake forms reduce front desk paperwork",
  "Performance dashboard shows exactly which campaigns drive patients",
];

const features = [
  "Online booking with real-time availability",
  "Automated appointment reminders (WhatsApp + Email)",
  "Digital intake forms — patients complete before arrival",
  "No-show follow-up and rescheduling automation",
  "CRM integration for patient history and recall",
  "Analytics dashboard — bookings, no-shows, and revenue by source",
];

export default function ClinicPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              Eliminate No-Shows and Streamline Patient Intake
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">
              Your front desk shouldn&apos;t spend half the day on the phone. We
              build clinic websites with online booking, automated reminders,
              and digital intake — so your team focuses on patients, not
              paperwork, and fewer slots go empty.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact" className="group">
                Book a Free Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href="/demo" variant="secondary">
                Try Live Demo
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Pain Points */}
      <Section muted>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink">
            What Your Practice Faces Daily
          </h2>
        </div>
        <div className="mx-auto grid max-w-2xl gap-4">
          {painPoints.map((point, i) => (
            <Reveal key={point} delay={i * 0.06} direction="left">
              <div className="flex items-start gap-3 rounded-xl border border-red-400/15 bg-red-400/5 px-5 py-4">
                <span className="mt-0.5 text-red-400">✕</span>
                <span className="text-sm text-ink-muted">{point}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Solution */}
      <Section>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink">
            A Patient Management System That Never Drops a Ball
          </h2>
        </div>
        <div className="mx-auto grid max-w-2xl gap-4">
          {solutions.map((sol, i) => (
            <Reveal key={sol} delay={i * 0.06} direction="right">
              <div className="flex items-start gap-3 rounded-xl border border-green-400/15 bg-green-400/5 px-5 py-4">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                <span className="text-sm text-ink-muted">{sol}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section muted>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink">
            Everything a Clinic Needs to Run Smoothly
          </h2>
        </div>
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {features.map((f, i) => (
            <Reveal key={f} delay={i * 0.05}>
              <div className="flex items-start gap-3 rounded-xl border border-line bg-surface px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/20 hover:shadow-md hover:shadow-brand-500/5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span className="text-sm text-ink">{f}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Case study */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-surface p-8 text-center sm:p-10">
            <p className="mb-2 text-xs font-medium text-brand-400">
              Real result
            </p>
            <p className="text-xl font-semibold text-ink">
              &ldquo;Response time dropped from 3 hours to 4 minutes&rdquo;
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              A dental practice replaced phone-tag scheduling with online booking
              and automated reminders — and filled more slots than ever.
            </p>
            <Button href="/contact" variant="secondary" className="mt-6">
              Book a discovery call
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section className="relative overflow-hidden text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[400px] w-[400px] rounded-full bg-brand-500/10" />
        </div>
        <Reveal>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink">
            Ready to Fill More Slots and Reduce No-Shows?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Let&apos;s review your current patient intake process and show you
            exactly how automation can free up your team and grow your practice.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" className="group">
              Book a Free Strategy Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="/demo" variant="secondary">
              Try Live Demo
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
