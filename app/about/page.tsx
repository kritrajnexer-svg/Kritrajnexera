import type { Metadata } from "next";
import Image from "next/image";
import { Zap, Workflow, Code, TrendingUp, Clock, Bot, BarChart3, Handshake } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TypeInHeading from "@/components/TypeInHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Business automation and AI automation agency — modern websites with intelligent workflows that grow your business and capture more clients.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    icon: TrendingUp,
    title: "Build for Business Growth",
    desc: "Every decision we make is focused on improving lead generation, response speed, and customer conversion — not simply building attractive websites.",
  },
  {
    icon: Workflow,
    title: "Automation Comes First",
    desc: "A website without workflow automation is incomplete. Every platform we build is designed to reduce manual work, improve efficiency, and create a better customer experience.",
  },
  {
    icon: Code,
    title: "Built to Scale",
    desc: "Our solutions are designed to grow alongside your business with clean architecture, maintainable Next.js development, and flexible n8n automation that adapts as your business evolves.",
  },
];

const trustCards = [
  {
    icon: Clock,
    title: "Faster Enquiry Response",
    desc: "Respond to prospects in seconds instead of hours.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Reduce repetitive work and streamline everyday operations with intelligent workflows.",
  },
  {
    icon: BarChart3,
    title: "Built for Growth",
    desc: "Scalable web design and business automation designed for long-term growth.",
  },
  {
    icon: Handshake,
    title: "Transparent Partnership",
    desc: "Clear communication, clean code, and solutions your team can confidently manage.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <TypeInHeading className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.1] text-ink">
                We Believe a Website Should Generate Business — Not Just Exist.
              </TypeInHeading>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl space-y-6 text-lg leading-relaxed text-ink-muted">
            <p>
              Most businesses don&apos;t lose customers because of poor marketing.
              They lose them because enquiries go unanswered, follow-ups are
              delayed, and manual processes create friction at every step.
            </p>
            <p>
              A website brings traffic. But without workflow automation behind it,
              that traffic rarely turns into revenue. The contact form submits to
              an inbox nobody checks. The hot prospect waits hours for a reply.
              The opportunity quietly disappears.
            </p>
            <p>
              KritRaj Nexera was created to solve that problem. We combine
              website development with AI automation — so every enquiry is
              captured, routed, and followed up on automatically. We don&apos;t
              build websites that sit there.{" "}
              <span className="font-medium text-ink">
                We build AI-powered automation that generates business.
              </span>
            </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Founder */}
      <section className="border-y border-line bg-surface/40 py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_2fr]">
            {/* Founder photo */}
            <div className="mx-auto w-full max-w-xs">
              <div className="overflow-hidden rounded-3xl border border-line">
                <Image
                  src="/founder.webp"
                  alt="Rajnish Singh — Founder of KritRaj Nexera"
                  width={800}
                  height={800}
                  className="aspect-square object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
              </div>
            </div>

            <div>
              <Reveal>
                <p className="mb-2 text-sm font-medium text-brand-400">
                  Founder
                </p>
                <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
                  Rajnish Singh
                </h2>
                <p className="mb-5 text-ink-muted">Founder, KritRaj Nexera</p>
              </Reveal>

              <Reveal>
              <div className="space-y-4 leading-relaxed text-ink-muted">
                <p>
                  Rajnish founded KritRaj Nexera after recognising a common
                  problem across service businesses: companies invested in
                  websites but still lost customers because there was no
                  automation behind the website.
                </p>
                <p>
                  A website alone generates traffic. But enquiries, follow-ups,
                  and client management still depend on manual effort — and that
                  effort has limits. People get busy. Messages get missed.
                  Responses come too late.
                </p>
                <p>
                  KritRaj Nexera exists to solve that gap. We combine websites,
                  AI automation, CRM integration, and intelligent workflows into
                  one complete platform — so your business captures every
                  opportunity, responds instantly, and never loses a prospect to a
                  slow reply.
                </p>
                <p className="border-l-2 border-brand-500 pl-4 italic text-ink">
                  &ldquo;A website shouldn&apos;t stop working when your office
                  closes. It should continue capturing opportunities, responding
                  instantly through AI chatbots, and supporting your business
                  around the clock. That&apos;s the standard we build for.&rdquo;
                </p>
              </div>
            </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Why We Exist */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink font-display">
            Why We Exist
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Every missed enquiry is a missed opportunity.
          </p>
          <p className="mt-4 text-ink-muted">
            Most businesses invest in websites to attract customers but rely on
            manual processes to manage them. We built KritRaj Nexera to bridge
            that gap by combining modern web design with AI automation,
            helping businesses respond faster, work smarter, and
            grow with confidence.
          </p>
        </div>
        </Reveal>
      </Section>

      {/* Values */}
      <section className="border-y border-line bg-surface/40 py-20 sm:py-28">
        <Container>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight text-ink font-display">
              What we stand for
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.1} direction={i % 2 === 0 ? "up" : "down"}>
                <div className="rounded-2xl glass-card-glow p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/5">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mb-3 font-semibold text-ink">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Businesses Choose KritRaj Nexera */}
      <Section>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight text-ink font-display">
            Why Businesses Choose KritRaj Nexera
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustCards.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.08} direction={i % 2 === 0 ? "up" : "down"}>
                <div className="rounded-2xl glass-card-glow p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/5">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mb-2 font-semibold text-ink">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{desc}</p>
                </div>
              </Reveal>
            ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="relative overflow-hidden text-center">
        <Reveal>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[400px] w-[400px] rounded-full bg-brand-500/10" />
        </div>
        <div className="relative">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink font-display">
            Ready to Build Your AI Automation?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Let&apos;s explore how website development powered by n8n automation
            can help your business capture more enquiries, respond faster, and
            convert more opportunities into customers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" className="group">
              Book a Free Strategy Call
              <Zap className="h-4 w-4" />
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
