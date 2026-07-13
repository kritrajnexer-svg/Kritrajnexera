import type { Metadata } from "next";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Systems we've shipped — each measured by the business outcome it produced, not how it looked. Real leads, real conversions, real results.",
};

type Project = {
  tag: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
};

const projects: Project[] = [
  {
    tag: "Real Estate",
    title: "Property firm lead-to-tour system",
    problem:
      "Enquiries piled up in a shared inbox. Agents called back hours later. Hot buyers booked elsewhere.",
    solution:
      "Dynamic listings site with instant WhatsApp routing — every enquiry reached an agent in under a minute, tagged by property interest.",
    result: "+62% booked site visits within the first quarter",
  },
  {
    tag: "Healthcare",
    title: "Dental practice appointment engine",
    problem:
      "Front desk spent 3+ hours daily juggling calls, reminders, and no-shows. Patients waited days for a slot.",
    solution:
      "Booking site with automated confirmations, reminder sequences, rescheduling links, and no-show follow-up flows.",
    result: "Response time dropped from 3 hours to 4 minutes",
  },
  {
    tag: "E-commerce",
    title: "Retailer catalog + order routing",
    problem:
      "Orders came through WhatsApp, email, and phone — none of them tracked. Inventory was a guessing game.",
    solution:
      "Filterable catalog site feeding every order into inventory, dispatch notifications, and a customer win-back flow.",
    result: "+38% repeat orders in six months",
  },
  {
    tag: "Education",
    title: "Coaching institute enrolment funnel",
    problem:
      "Ad leads landed on a static page with a broken form. Nobody knew which campaign actually converted.",
    solution:
      "Optimised landing pages with UTM-tracked forms, instant lead routing to counsellors, and automated nurture sequences.",
    result: "Cost per enrolment cut by 41%",
  },
  {
    tag: "Professional Services",
    title: "Law firm intake automation",
    problem:
      "Potential clients filled a form and waited days for a reply. Most hired a competitor in the meantime.",
    solution:
      "Intake site with case-type routing, conflict-check automation, and same-day consultation scheduling.",
    result: "Consultation bookings tripled in 90 days",
  },
  {
    tag: "Hospitality",
    title: "Restaurant reservation + retention system",
    problem:
      "Reservations came from five channels. No-shows were killing margins and there was no way to bring guests back.",
    solution:
      "Booking site with channel-tracked reservations, automated reminders, and a post-visit rebooking flow.",
    result: "No-shows down 54%, repeat visits up 27%",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-line py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium text-brand-400">Portfolio</p>
            <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.1] text-ink">
              Outcomes, not screenshots
            </h1>
            <p className="mt-5 text-lg text-ink-muted">
              We measure our work by what it produced for the business — more
              leads, faster response, more closed sales. Here&apos;s what that
              looks like in practice.
            </p>
          </div>
        </Container>
      </section>

      {/* Project grid */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} direction={i % 2 === 0 ? "up" : "down"}>
                <article className="group flex flex-col rounded-3xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-ink-muted">
                    {p.tag}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink-muted transition-colors group-hover:text-brand-400" />
                </div>

                <h2 className="mb-5 text-xl font-semibold leading-snug text-ink">
                  {p.title}
                </h2>

                <div className="flex-1 space-y-4 text-sm">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/70">
                      The problem
                    </p>
                    <p className="leading-relaxed text-ink-muted">{p.problem}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      The system
                    </p>
                    <p className="leading-relaxed text-ink-muted">{p.solution}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-line pt-5">
                  <TrendingUp className="h-4 w-4 text-brand-400" />
                  <span className="text-sm font-semibold text-brand-400">
                    {p.result}
                  </span>
                </div>
              </article>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="mb-5 text-ink-muted">
              Want a system that produces results like these?
            </p>
            <Button href="/contact">Book a Free Strategy Call</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
