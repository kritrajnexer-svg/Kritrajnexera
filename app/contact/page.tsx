import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Mail, Calendar, Clock, Zap } from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import TypeInHeading from "@/components/TypeInHeading";

const CalEmbed = dynamic(() => import("@/components/CalEmbed"));
const ContactForm = dynamic(() => import("./ContactForm"));

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us how prospects reach you. We'll show how AI and workflow automation would capture, route, and convert them. Free quote — no obligation.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <TypeInHeading className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.1] text-ink">
                Let&apos;s build your automation
              </TypeInHeading>
              <p className="mt-5 text-lg text-ink-muted">
                Tell us a bit about your business. We&apos;ll get back with how
                website development plus AI automation would fit — and what
                it&apos;d be worth to you. Most businesses lose enquiries to slow
                replies — we fix it and go live in 3–7 days.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            {/* Form */}
            <Reveal direction="left" >
              <div className="rounded-3xl border border-line bg-surface p-8 sm:p-10">
                <ContactForm />
              </div>
            </Reveal>

            {/* Sidebar */}
            <div className="space-y-8">
              <Reveal direction="right" >
                <div>
                  <h2 className="mb-4 text-lg font-semibold text-ink">
                    Prefer to reach out directly?
                  </h2>
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="mailto:kritrajnexera@gmail.com"
                      className="flex items-start gap-3 text-ink hover:text-brand-400"
                    >
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                      <span>
                        kritrajnexera@gmail.com
                        <span className="block text-xs text-ink-muted">
                          We reply within one business day
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cal.com/kritraj-nexera-hs8mlq/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-ink hover:text-brand-400"
                    >
                      <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                      <span>
                        Book a 20-min strategy call
                        <span className="block text-xs text-ink-muted">
                          Opens in Cal.com
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
                </div>
              </Reveal>

              <Reveal direction="right"  delay={0.1}>
                <div className="rounded-2xl border border-brand-500/20 bg-brand-500/[0.05] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-500/5">
                <div className="mb-3 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-brand-400" />
                  <span className="text-sm font-semibold text-ink">
                    What happens next
                  </span>
                </div>
                <ul className="space-y-2.5 text-sm text-ink-muted">
                  <li className="flex items-start gap-2">
                    <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-400" />
                    We review your current enquiry flow — and your system ships in
                    3–7 days
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-400" />
                    We map where AI automation would capture more opportunities
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-400" />
                    You get a clear quote — no pressure, no jargon
                  </li>
                </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Cal.com booking embed */}
      <section className="border-t border-line py-14 sm:py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Reveal>
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight text-ink font-display">
                Pick a time that works for you
              </h2>
              <p className="mt-4 text-ink-muted">
                30-minute strategy call. No pitch — we map where workflow automation
                would capture more prospects for your business.
              </p>
            </Reveal>
          </div>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-line bg-surface p-0.5">
            <CalEmbed />
          </div>
          <p className="mx-auto mt-4 max-w-md text-center text-xs text-ink-muted">
            Calendar loading issue?{" "}
            <a
              href="https://cal.com/kritraj-nexera-hs8mlq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:underline"
            >
              Open booking page in a new tab →
            </a>
          </p>
        </Container>
      </section>
    </>
  );
}
