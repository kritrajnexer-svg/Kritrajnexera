import type { Metadata } from "next";
import { Check, ArrowRight, Clock, MessageCircle, Users, TrendingUp, Zap } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TypeInHeading from "@/components/TypeInHeading";

export const metadata: Metadata = {
  title: "Real Estate Website + Automation | KritRaj Nexera",
  description:
    "Lead response systems for real estate firms. Instant WhatsApp routing, automated follow-ups, and CRM sync so you never lose a buyer to a slow reply.",
};

const painPoints = [
  "Enquiries pile up in a shared inbox nobody checks",
  "Buyers book with another agent while yours waits to reply",
  "No system to tag leads by property interest or budget",
  "Follow-ups are manual — most leads go cold",
  "No visibility into which campaigns actually generate leads",
];

const solutions = [
  "Every enquiry reaches an agent within 60 seconds via WhatsApp",
  "Leads are automatically tagged by property, budget, and source",
  "Automated follow-up sequences nurture leads until they convert",
  "CRM integration tracks every interaction from first touch to closing",
  "Performance dashboard shows exactly which campaigns drive tours",
];

const features = [
  "Dynamic property listings with search and filters",
  "Instant WhatsApp lead routing to the right agent",
  "Automated tour booking and confirmation",
  "CRM integration with lead scoring and pipeline tracking",
  "Follow-up sequences for cold leads and past clients",
  "Analytics dashboard — traffic, leads, and conversion by source",
];

export default function RealEstatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <TypeInHeading className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-ink">
                Stop Losing Property Leads to Slow Responses
              </TypeInHeading>
              <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">
                Every minute you delay replying to an enquiry is a minute a
                competitor gets ahead. We build websites wired to instant
                WhatsApp routing, automated follow-ups, and CRM sync — so you
                convert more leads into site visits and sales.
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
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink">
            What You&apos;re Up Against
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
            A Lead Response System That Works While You Sleep
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
            Everything a Real Estate Business Needs
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
              &ldquo;{`+62%`} booked site visits within the first quarter&rdquo;
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              A property firm went from slow email replies to instant WhatsApp
              routing — and tours nearly doubled.
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
            Ready to Capture Every Property Lead?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Let&apos;s map your current lead flow and show you exactly how a
            system would capture, route, and convert more enquiries into
            site visits and sales.
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
