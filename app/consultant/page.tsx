import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TypeInHeading from "@/components/TypeInHeading";

export const metadata: Metadata = {
  title: "Consultant Website + Automation | KritRaj Nexera",
  description:
    "AI automation for consultants and lawyers — enquiry capture, CRM integration, and same-day scheduling so no prospect goes cold.",
  alternates: {
    canonical: "/consultant",
  },
};

const painPoints = [
  "Potential clients fill a form and wait days for a reply",
  "No automation to route enquiries by service type or urgency",
  "Follow-ups are manual — prospects go cold while you focus on billable work",
  "No visibility into which channels actually drive qualified enquiries",
  "Your expertise sells itself, but a slow response loses the deal",
];

const solutions = [
  "Every enquiry gets an instant response — day or night",
  "Enquiries are automatically routed by service type, budget, or urgency",
  "Automated follow-up sequences nurture prospects until they book",
  "CRM integration tracks every interaction from first touch to engagement",
  "Dashboard shows which campaigns, channels, and services perform best",
];

const features = [
  "Professional website with service pages and case studies",
  "Intake form with smart routing by practice area",
  "Instant confirmation and follow-up automation",
  "CRM integration with pipeline tracking",
  "Automated appointment scheduling and reminders",
  "Analytics — enquiries by service, source, and conversion rate",
];

export default function ConsultantPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <TypeInHeading className="text-[var(--text-title)] font-semibold leading-[1.1] tracking-tight text-ink">
                Never Lose a Qualified Prospect to a Slow Reply
              </TypeInHeading>
              <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">
                Your expertise speaks for itself — but if prospects wait hours or
                days for a response, they hire someone faster. We build consultant
                websites with smart intake routing, automated follow-ups, and
                scheduling via workflow automation so you capture every opportunity.
                We build it and go live in 3–7 days.
              </p>
            </Reveal>
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
          <h2 className="text-[var(--text-h1)] font-semibold leading-tight text-ink font-display">
            What&apos;s Costing You Clients
          </h2>
        </div>
        <div className="mx-auto grid max-w-2xl gap-4">
          {painPoints.map((point, i) => (
            <Reveal key={point} delay={i * 0.06} direction="left">
              <div className="flex items-start gap-3 rounded-xl border border-red-600/20 bg-red-600/10 px-5 py-4">
                <span className="mt-0.5 text-red-600">✕</span>
                <span className="text-sm text-ink-muted">{point}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Solution */}
      <Section>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-[var(--text-h1)] font-semibold leading-tight text-ink font-display">
            AI Automation That Works While You Advise
          </h2>
        </div>
        <div className="mx-auto grid max-w-2xl gap-4">
          {solutions.map((sol, i) => (
            <Reveal key={sol} delay={i * 0.06} direction="right">
              <div className="flex items-start gap-3 rounded-xl border border-green-600/20 bg-green-600/10 px-5 py-4">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                <span className="text-sm text-ink-muted">{sol}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section muted>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-[var(--text-h1)] font-semibold leading-tight text-ink font-display">
            Everything You Need to Win More Clients
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
          <div className="mx-auto max-w-2xl rounded-3xl glass-card-glow p-8 text-center sm:p-10">
            <p className="mb-2 text-xs font-medium text-brand-400">
              Real result
            </p>
            <p className="text-xl font-semibold text-ink">
              &ldquo;Consultation bookings tripled in 90 days&rdquo;
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              A law firm replaced their broken contact form with smart intake
              routing and same-day scheduling — and went from lost prospects to a
              full pipeline.
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
          <h2 className="text-[var(--text-h1)] font-semibold leading-tight text-ink font-display">
            Ready to Capture Every Enquiry?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Let&apos;s review your current intake process and show you exactly
            how AI automation and CRM integration can help you respond faster,
            nurture better, and close more clients.
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
