import { Check, Star, ArrowRight, Monitor, Zap, Search, Shield, BarChart3, Globe, BookOpen, Headphones } from "lucide-react";
import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Section from "@/components/Section";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import FAQAccordion from "@/components/services/FAQAccordion";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Every system combines a high-performance website with intelligent automation to capture leads, eliminate manual work, and help your team close more business.",
};

type Tier = {
  name: string;
  tagline: string;
  bestFor: string;
  popular?: boolean;
  features: string[];
};

const tiers: Tier[] = [
  {
    name: "Starter System",
    tagline: "Stop losing leads to a form nobody watches.",
    bestFor:
      "Startups, freelancers, and local service businesses receiving up to 30 enquiries per month.",
    features: [
      "Mobile-responsive website with core pages",
      "Click-to-chat WhatsApp button",
      "One automation: form submission → instant WhatsApp + email alert",
      "Basic contact form with spam protection",
      "1 round of revisions",
      "Launch on your domain",
    ],
  },
  {
    name: "Growth System",
    tagline: "Turn enquiries into a pipeline that moves itself.",
    bestFor:
      "Growing businesses that need CRM integration, automated lead routing, and faster follow-ups.",
    popular: true,
    features: [
      "Dynamic site: filterable listings, booking, or catalog",
      "Multi-step automation (3–5 actions, up to 5 app integrations)",
      "CRM, Google Sheets, WhatsApp, and Email integrations",
      "Real-time lead routing via webhook",
      "Basic SEO setup + performance baseline",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Premium System",
    tagline: "A full growth engine that runs your business end-to-end.",
    bestFor:
      "Businesses ready to automate their complete sales and operational workflow across multiple teams.",
    features: [
      "Full CMS-managed site your team can update",
      "End-to-end interconnected automation (custom API + database)",
      "Payment gateway integration",
      "Multi-user roles and permissions",
      "Error monitoring and alerting",
      "Team training on the entire system",
    ],
  },
];

const includedItems = [
  { icon: Monitor, label: "Mobile Responsive Design" },
  { icon: Zap, label: "Performance Optimisation" },
  { icon: Search, label: "Basic SEO Setup" },
  { icon: Shield, label: "SSL & Security Configuration" },
  { icon: BarChart3, label: "Analytics Integration" },
  { icon: Globe, label: "Deployment on Your Domain" },
  { icon: BookOpen, label: "Training & Handover" },
  { icon: Headphones, label: "30 Days Post-Launch Support" },
];

const techStack = [
  "Next.js", "React", "n8n", "Supabase", "PostgreSQL",
  "OpenAI", "Google Workspace", "Meta WhatsApp API", "Stripe", "Vercel",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium text-brand-400">Services</p>
            <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.1] text-ink">
              Choose the Right Sales Engine for Your Business
            </h1>
            <p className="mt-5 text-lg text-ink-muted">
              Every system combines a high-performance website with intelligent
              automation to capture leads, eliminate manual work, and help your
              team respond faster, follow up automatically, and close more
              business.
            </p>
          </div>
        </Container>
      </section>

      {/* Tiers */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-3xl border p-8 ${
                  tier.popular
                    ? "border-brand-500/40 bg-brand-500/[0.06]"
                    : "border-line bg-surface"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                    <Star className="mr-1 inline h-3 w-3 fill-white" />
                    Most Popular
                  </span>
                )}
                <h2 className="text-xl font-semibold text-ink">{tier.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {tier.tagline}
                </p>

                <div className="mt-4 rounded-xl border border-line bg-bg/50 px-4 py-3">
                  <p className="text-xs font-medium text-brand-400">Best For</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                    {tier.bestFor}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button href="/contact" className="mt-8 w-full" variant={tier.popular ? "primary" : "secondary"}>
                  Book a Free Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          {/* Recurring care plan teaser */}
          <div className="mt-16 rounded-3xl border border-line bg-surface/50 p-8 text-center sm:p-10">
            <h3 className="text-lg font-semibold text-ink">Recurring Care Plan</h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-ink-muted">
              Once your system is live, it needs keeping sharp — updates,
              automation tweaks, and performance tuning month over month. Ongoing
              support keeps your pipeline flowing.
            </p>
            <Button href="/contact" variant="secondary" className="mt-6">
              Ask about ongoing support
            </Button>
          </div>
        </Container>
      </section>

      {/* Everything Included */}
      <Section muted>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-brand-400">What you get</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink">
            Everything Included in Every Project
          </h2>
          <p className="mt-4 text-ink-muted">
            Every system we build follows the same quality standards — regardless
            of the package you choose.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {includedItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-4"
            >
              <item.icon className="h-5 w-5 shrink-0 text-brand-400" />
              <span className="text-sm text-ink">{item.label}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <ProcessTimeline />

      {/* Tech Stack */}
      <Section>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium text-brand-400">Technology</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink">
            Built With Modern Technologies
          </h2>
          <p className="mt-4 text-ink-muted">
            Reliable tools that power fast, scalable, and automation-ready systems.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="rounded-xl border border-line bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-brand-500/30"
            >
              {tech}
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <FAQAccordion />

      {/* Final CTA */}
      <Section className="relative overflow-hidden text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[400px] w-[400px] rounded-full bg-brand-500/10 blur-[120px]" />
        </div>
        <div className="relative">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink">
            Ready to Build a Sales Engine?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Let&apos;s map your current sales process and show you exactly how a
            website powered by intelligent automation can help you capture more
            leads, respond instantly, and scale your business.
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
      </Section>
    </>
  );
}
