import Link from "next/link";
import dynamic from "next/dynamic";
import { Check, Star, ArrowRight, Monitor, Zap, Search, Shield, BarChart3, Globe, BookOpen, Headphones, Building2, Stethoscope, Briefcase } from "lucide-react";
import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TypeInHeading from "@/components/TypeInHeading";

const ProcessTimeline = dynamic(() => import("@/components/services/ProcessTimeline"));
const FAQAccordion = dynamic(() => import("@/components/services/FAQAccordion"));

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI automation agency with website development, n8n, CRM integration, WhatsApp automation, and lead generation — capture enquiries and close more sales.",
  alternates: {
    canonical: "/services",
  },
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
    name: "Starter Automation",
    tagline:
      "Launch with a website that works for your business — not just your brand. Perfect for businesses taking their first step online. Capture every enquiry and receive instant WhatsApp and email notifications so you never miss a potential customer.",
    bestFor:
      "Startups, freelancers, local businesses, and service providers receiving up to 30 enquiries per month.",
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
    name: "Growth Automation",
    tagline:
      "Turn every enquiry into a structured sales process. This platform automatically captures, routes, tracks, and follows up with prospects while keeping your CRM and team perfectly in sync.",
    bestFor:
      "Growing businesses that need faster response times, CRM integration, and automated enquiry management.",
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
    name: "Premium Automation",
    tagline:
      "Build a complete growth engine that scales with your business. From enquiry capture and customer communication to payments, reporting, and internal operations, everything works together through AI automation.",
    bestFor:
      "Established businesses ready to automate sales, operations, and customer management across multiple teams.",
    features: [
      "Full CMS-managed site your team can update",
      "End-to-end workflow automation (custom API + database)",
      "Payment gateway integration",
      "Multi-user roles and permissions",
      "Error monitoring and alerting",
      "Team training on the entire platform",
    ],
  },
];

const includedItems = [
  { icon: Monitor, label: "Mobile Responsive Design" },
  { icon: Zap, label: "Performance Optimisation" },
  { icon: Search, label: "SEO & Lead Generation Setup" },
  { icon: Shield, label: "SSL & Security" },
  { icon: BarChart3, label: "Analytics & Conversion Tracking" },
  { icon: Globe, label: "Deployment on Your Domain" },
  { icon: BookOpen, label: "Training & Complete Handover" },
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
            <Reveal>
              <TypeInHeading className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.1] text-ink">
                Choose the Right AI Automation for Your Business
              </TypeInHeading>
              <p className="mt-5 text-lg text-ink-muted">
                Every business loses opportunities differently — slow replies,
                manual follow-ups, enquiries that fall through the cracks. We
                build automation around how yours actually works.
              </p>
              <p className="mt-4 text-sm text-ink-muted">
                This isn&apos;t a template. It&apos;s built around how your
                business actually runs — and how much of it you want automated.
                And we go live in 3–7 days — not the months a big agency will
                quote you.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Industry pages */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Reveal>
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight text-ink font-display">
                See AI Automation Built for Your Industry
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                href: "/real-estate",
                icon: Building2,
                label: "Real Estate",
                desc: "Never miss a hot lead — routed, scheduled, and synced instantly.",
              },
              {
                href: "/clinic",
                icon: Stethoscope,
                label: "Clinics & Dental",
                desc: "Patients book themselves. Reminders go out. No front-desk chase.",
              },
              {
                href: "/consultant",
                icon: Briefcase,
                label: "Consultants",
                desc: "Qualify, route, and follow up with every enquiry — automatically.",
              },
            ].map(({ href, icon: Icon, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="group rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/20 hover:shadow-lg hover:shadow-brand-500/5"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 transition-colors group-hover:bg-brand-500/20">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mb-1 font-semibold text-ink">{label}</h3>
                <p className="text-sm text-ink-muted">{desc}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Tiers */}
      <section className="border-t border-line py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1}>
                <div
                  className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/20 hover:shadow-lg hover:shadow-brand-500/5 ${
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

                  <div className="mt-4 rounded-xl border border-line bg-surface px-4 py-3">
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
              </Reveal>
            ))}
          </div>

          {/* Recurring care plan teaser */}
          <Reveal delay={0.2}>
            <div className="mt-16 rounded-3xl border border-line bg-surface/50 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/20 hover:shadow-lg hover:shadow-brand-500/5 sm:p-10">
            <h3 className="text-lg font-semibold text-ink">Recurring Care Plan</h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-ink-muted">
              Your business keeps evolving, and your automation should evolve
              with it. We continuously improve workflows, monitor performance,
              resolve issues, and introduce new automations to keep your
              platform performing at its best.
            </p>
            <Button href="/contact" variant="secondary" className="mt-6">
              Ask about ongoing support
            </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Every Automation Comes Ready for Growth */}
      <Section muted>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink font-display">
            Every Project Comes Ready for Growth
          </h2>
          <p className="mt-4 text-ink-muted">
            Every project follows the same high standards for performance,
            security, scalability, and long-term reliability.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {includedItems.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05} direction={i % 2 === 0 ? "up" : "down"} distance={16}>
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/20 hover:shadow-md hover:shadow-brand-500/5"
              >
                <item.icon className="h-5 w-5 shrink-0 text-brand-400" />
                <span className="text-sm text-ink">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <ProcessTimeline />

      {/* Tech Stack */}
      <Section>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink font-display">
            Built With Modern Technologies
          </h2>
          <p className="mt-4 text-ink-muted">
            Reliable tools that power fast, scalable, and automation-ready platforms.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech, i) => (
            <Reveal key={tech} delay={i * 0.04} direction="up" distance={16}>
              <div className="rounded-xl border border-line bg-surface px-5 py-3 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/30 hover:shadow-md hover:shadow-brand-500/5">
                {tech}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <FAQAccordion />

      {/* Final CTA */}
      <Section className="relative overflow-hidden text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[400px] w-[400px] rounded-full bg-brand-500/10" />
        </div>
        <Reveal>
          <div className="relative">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink font-display">
              Ready to Build Your AI Automation?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-muted">
              Let&apos;s map your current sales process and show you exactly how
              n8n automation and web design can help you capture more
              enquiries, respond faster, and grow with confidence.
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
        </Reveal>
      </Section>
    </>
  );
}
