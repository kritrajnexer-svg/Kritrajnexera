import type { Metadata } from "next";
import Image from "next/image";
import { Zap, Workflow, Code, TrendingUp } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "KritRaj Nexera was founded on a simple frustration: businesses were paying for beautiful websites that did nothing. We build the systems that actually grow them.",
};

const values = [
  {
    icon: Code,
    title: "Built to last, not to impress",
    desc: "Clean, maintainable code and automation you can hand off without us. No black boxes.",
  },
  {
    icon: Workflow,
    title: "Automation is the product",
    desc: "A site without the automation layer is unfinished. We don't ship half a system.",
  },
  {
    icon: TrendingUp,
    title: "Measured by your results",
    desc: "We define success in leads captured, response times, and deals closed — not pixels.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium text-brand-400">About us</p>
            <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.1] text-ink">
              We started KritRaj Nexera because &quot;just a website&quot; was
              never enough.
            </h1>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl space-y-6 text-lg leading-relaxed text-ink-muted">
            <p>
              Most agencies sell you a website. It launches, it looks good, and
              then nothing happens. The form submissions sit in an inbox. The
              follow-ups never go out. The leads quietly disappear.
            </p>
            <p>
              We saw this happen again and again — to clinics, real estate
              firms, retailers, service businesses of every kind. They weren&apos;t
              short on leads. They were short on a system to catch them.
            </p>
            <p>
              So we built KritRaj Nexera around a different idea: a website is
              only useful if it&apos;s wired to the automation that captures,
              routes, and follows up on every enquiry — automatically. That&apos;s
              the whole offer. Not design. Not pages.{" "}
              <span className="font-medium text-ink">
                A system that brings in business while you focus on running it.
              </span>
            </p>
          </div>
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
                />
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-brand-400">
                Founder
              </p>
              <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
                Rajnish Singh
              </h2>
              <p className="mb-5 text-ink-muted">Founder, KritRaj Nexera</p>

              <div className="space-y-4 leading-relaxed text-ink-muted">
                <p>
                  Rajnish spent years building websites and automation workflows
                  for businesses that kept hitting the same wall: traffic was
                  coming, but leads were vanishing between the contact form and
                  the first reply. He saw great products lose to slower
                  competitors simply because the faster competitor responded
                  first.
                </p>
                <p>
                  That gap — between an enquiry landing and a business actually
                  acting on it — is where most revenue leaks out. Rajnish
                  founded KritRaj Nexera to close it for good: pairing the sites
                  he builds with the n8n automation that makes them work.
                </p>
                <p className="border-l-2 border-brand-500 pl-4 italic text-ink">
                  &ldquo;I got tired of watching businesses pay for a website
                  that looked alive but did nothing. A real system should be
                  out there working — capturing leads, routing them, following
                  up — even at 2am. That&apos;s what we build.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight text-ink">
              What we stand for
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-line bg-surface p-8"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mb-3 font-semibold text-ink">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2 text-ink-muted">
              <Zap className="h-4 w-4 text-brand-400" />
              <span className="text-sm">
                Ready to see what a system can do for your business?
              </span>
            </div>
            <Button href="/contact">Get a Quote</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
