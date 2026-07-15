import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TypeInHeading from "@/components/TypeInHeading";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund and cancellation policy for services provided by KritRaj Nexera.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <Section>
        <Container className="py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <TypeInHeading className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Refund Policy
              </TypeInHeading>
              <p className="mt-2 text-sm text-ink-muted">
                Last updated: July 2026
              </p>
              <p className="mt-6 text-ink-muted leading-relaxed">
                At KritRaj Nexera, we are committed to delivering high-quality web
                development and automation solutions. This Refund Policy outlines
                the terms under which refunds may be issued for our services.
              </p>
            </Reveal>

            <div className="mt-12 space-y-10">
              <Reveal delay={0.1}>
                <div>
                  <h2 className="text-lg font-semibold text-ink">
                    Digital Services &amp; Custom Development
                  </h2>
                  <p className="mt-2 text-ink-muted leading-relaxed">
                    Since our services involve custom work tailored to each
                    client&apos;s requirements, all payments for website
                    development, automation setup, and consulting are generally
                    non-refundable once work has commenced. We encourage clients
                    to review project scopes thoroughly before engagement.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div>
                  <h2 className="text-lg font-semibold text-ink">
                    Project Cancellation Before Commencement
                  </h2>
                  <p className="mt-2 text-ink-muted leading-relaxed">
                    If a project is cancelled before any work has begun, a full
                    refund of any advance payment will be issued within 7 business
                    days, minus any applicable payment gateway or transaction fees.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div>
                  <h2 className="text-lg font-semibold text-ink">
                    Partial Work Completed
                  </h2>
                  <p className="mt-2 text-ink-muted leading-relaxed">
                    If work has commenced and the client wishes to cancel, the
                    refund will be calculated based on the proportion of work
                    completed. Any advance payment exceeding the value of work
                    completed will be refunded. Work completed is assessed at our
                    standard hourly or milestone rates as defined in the project
                    agreement.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div>
                  <h2 className="text-lg font-semibold text-ink">
                    Dissatisfaction with Deliverables
                  </h2>
                  <p className="mt-2 text-ink-muted leading-relaxed">
                    We strive to meet or exceed client expectations. If you are
                    unsatisfied with a deliverable, we will work with you through
                    up to two revision rounds at no additional cost. If a
                    satisfactory resolution cannot be reached, refunds will be
                    assessed on a case-by-case basis.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div>
                  <h2 className="text-lg font-semibold text-ink">
                    Subscription &amp; Maintenance Plans
                  </h2>
                  <p className="mt-2 text-ink-muted leading-relaxed">
                    Monthly or annual maintenance and support subscriptions may be
                    cancelled at any time. Refunds for unused portions of
                    prepaid subscriptions will be provided on a pro-rata basis,
                    excluding any services already rendered during the billing
                    period.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.35}>
                <div>
                  <h2 className="text-lg font-semibold text-ink">
                    Chargebacks &amp; Disputes
                  </h2>
                  <p className="mt-2 text-ink-muted leading-relaxed">
                    We encourage clients to contact us directly before initiating
                    a chargeback or payment dispute. Most issues can be resolved
                    amicably. Unresolved disputes may result in suspension of
                    services and a permanent block from future engagements.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div>
                  <h2 className="text-lg font-semibold text-ink">Contact</h2>
                  <p className="mt-2 text-ink-muted leading-relaxed">
                    To request a refund or discuss any concerns, please contact us
                    at{" "}
                    <a
                      href="mailto:kritrajnexera@gmail.com"
                      className="text-brand-400 hover:underline"
                    >
                      kritrajnexera@gmail.com
                    </a>
                    . We aim to respond within 2 business days.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
