import type { Metadata } from "next";
import { ExternalLink, Monitor, Workflow, Globe } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TypeInHeading from "@/components/TypeInHeading";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Real projects built by KritRaj Nexera — websites with AI workflow automation for real estate, clinics, consultants, and more.",
  alternates: {
    canonical: "/portfolio",
  },
};

const projects = [
  {
    title: "Meera Kapoor — Luxury Real Estate",
    url: "https://meera-realty-site.vercel.app",
    industry: "Real Estate",
    description:
      "A high-end residential property portal for a Bengaluru luxury specialist. Dynamic listings with search and filters, enquiry forms wired to instant WhatsApp alerts, automated tour booking, and a refined brand experience that matches the calibre of the properties.",
    tech: ["Next.js", "Tailwind CSS", "n8n", "WhatsApp API", "Vercel"],
    highlights: [
      "Dynamic property listings with advanced search & filters",
      "Enquiry-to-WhatsApp routing in under 60 seconds",
      "Automated tour booking and confirmation flow",
      "Fully responsive — performs equally well on mobile and desktop",
    ],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-line py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <TypeInHeading className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.1] text-ink">
                Work We&apos;ve Built
              </TypeInHeading>
              <p className="mt-5 text-lg text-ink-muted">
                Every project ships with a custom website plus AI workflow automation
                — lead capture, routing, follow-ups, and analytics.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="mx-auto max-w-4xl space-y-16">
            {projects.map((project) => (
              <Reveal key={project.title}>
                <div className="overflow-hidden rounded-3xl glass-card-glow">
                  <div className="grid md:grid-cols-2">
                    <div className="flex flex-col justify-center p-8 sm:p-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-400/20 bg-brand-400/10 px-3 py-1 text-xs font-medium text-brand-400 w-fit">
                        <Monitor className="h-3 w-3" />
                        {project.industry}
                      </span>
                      <h2 className="mt-4 text-2xl font-semibold leading-tight text-ink sm:text-3xl font-display">
                        {project.title}
                      </h2>
                      <p className="mt-3 leading-relaxed text-ink-muted">
                        {project.description}
                      </p>

                      <div className="mt-6 space-y-3">
                        <p className="text-sm font-semibold text-ink">Key highlights</p>
                        <ul className="space-y-2">
                          {project.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-sm text-ink-muted">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-line bg-black/5 px-2.5 py-1 text-xs font-medium text-ink-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6">
                        <Button
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group"
                        >
                          <Globe className="h-4 w-4" />
                          Visit Live Site
                          <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Button>
                      </div>
                    </div>

                    <div className="relative min-h-[300px] bg-gradient-to-br from-brand-500/5 to-brand-500/20 md:min-h-full">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group absolute inset-0 flex items-center justify-center"
                      >
                        <div className="flex flex-col items-center gap-3 text-center">
                          <Globe className="h-12 w-12 text-brand-400/60 transition-colors group-hover:text-brand-400" />
                          <span className="text-sm font-medium text-brand-400/80 group-hover:text-brand-400">
                            Open live site
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-xl text-center">
            <Reveal>
              <p className="text-ink-muted">
                This project was built for a real client. Want something similar for
                your business?
              </p>
              <div className="mt-4 flex justify-center">
                <Button href="/contact">Book a Free Strategy Call</Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
