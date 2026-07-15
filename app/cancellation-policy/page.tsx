import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description:
    "Terms governing cancellation of services and projects with KritRaj Nexera.",
};

export default function CancellationPolicyPage() {
  return (
    <>
      <Section>
        <Container className="py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Cancellation Policy
            </h1>
            <p className="mt-2 text-sm text-ink-muted">
              Last updated: July 2026
            </p>
            <p className="mt-6 text-ink-muted leading-relaxed">
              This Cancellation Policy governs the terms under which you may
              cancel projects or services engaged with KritRaj Nexera.
            </p>

            <div className="mt-12 space-y-10">
              <div>
                <h2 className="text-lg font-semibold text-ink">
                  Project Cancellation by Client
                </h2>
                <p className="mt-2 text-ink-muted leading-relaxed">
                  Clients may cancel a project at any time by providing written
                  notice via email. The effective cancellation date will be the
                  date we receive your notice. Any payments made for work
                  already completed up to the cancellation date are
                  non-refundable. Outstanding payments for completed milestones
                  remain due.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-ink">
                  Project Cancellation by KritRaj Nexera
                </h2>
                <p className="mt-2 text-ink-muted leading-relaxed">
                  We reserve the right to cancel a project if the client fails
                  to meet payment obligations, provide required materials or
                  feedback in a timely manner, or violates any terms of our
                  agreement. In such cases, the client will be billed for work
                  completed up to the cancellation date.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-ink">
                  Subscription Cancellation
                </h2>
                <p className="mt-2 text-ink-muted leading-relaxed">
                  Maintenance and support subscriptions can be cancelled with 30
                  days&apos; written notice. Services will continue during the
                  notice period. Upon cancellation, all prepaid amounts for the
                  period beyond the effective cancellation date will be refunded
                  on a pro-rata basis.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-ink">
                  Effect of Cancellation
                </h2>
                <p className="mt-2 text-ink-muted leading-relaxed">
                  Upon cancellation, your access to any deliverables not yet
                  fully paid for may be revoked. Deliverables for which full
                  payment has been received prior to cancellation will be
                  transferred to you in their current state.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-ink">
                  How to Cancel
                </h2>
                <p className="mt-2 text-ink-muted leading-relaxed">
                  To cancel a project or subscription, please send a written
                  cancellation request to{" "}
                  <a
                    href="mailto:kritrajnexera@gmail.com"
                    className="text-brand-400 hover:underline"
                  >
                    kritrajnexera@gmail.com
                  </a>{" "}
                  with your name, project details, and reason for cancellation
                  (optional). We will acknowledge receipt within 2 business days
                  and provide confirmation of the cancellation terms applicable
                  to your engagement.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
