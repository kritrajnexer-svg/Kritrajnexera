import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How KritRaj Nexera uses cookies and similar tracking technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Section>
        <Container className="py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Cookie Policy
            </h1>
            <p className="mt-2 text-sm text-ink-muted">
              Last updated: July 2026
            </p>
            <p className="mt-6 text-ink-muted leading-relaxed">
              This Cookie Policy explains what cookies are, how KritRaj Nexera
              uses them on our website, and your choices regarding their use.
            </p>

            <div className="mt-12 space-y-10">
              <div>
                <h2 className="text-lg font-semibold text-ink">
                  What Are Cookies
                </h2>
                <p className="mt-2 text-ink-muted leading-relaxed">
                  Cookies are small text files stored on your device by your web
                  browser. They help websites remember your preferences,
                  understand how you interact with the site, and improve your
                  overall browsing experience.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-ink">
                  How We Use Cookies
                </h2>
                <p className="mt-2 text-ink-muted leading-relaxed">
                  We use cookies for the following purposes:
                </p>
                <ul className="mt-3 space-y-2 text-ink-muted leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-brand-400 shrink-0">&bull;</span>
                    <span>
                      <strong className="text-ink">Essential Cookies:</strong>{" "}
                      Required for the website to function properly. These
                      enable basic features like page navigation and access to
                      secure areas.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-400 shrink-0">&bull;</span>
                    <span>
                      <strong className="text-ink">Analytics Cookies:</strong>{" "}
                      Help us understand how visitors interact with our website
                      by collecting anonymised data on page visits, time spent,
                      and navigation patterns. We use this to improve our site.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-400 shrink-0">&bull;</span>
                    <span>
                      <strong className="text-ink">Functional Cookies:</strong>{" "}
                      Remember your preferences and choices to provide a more
                      personalised experience.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-ink">
                  Third-Party Cookies
                </h2>
                <p className="mt-2 text-ink-muted leading-relaxed">
                  We may use third-party services (such as analytics providers)
                  that set their own cookies on our website. We do not control
                  these cookies. Please review the privacy and cookie policies
                  of these third parties for more information.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-ink">
                  Your Cookie Choices
                </h2>
                <p className="mt-2 text-ink-muted leading-relaxed">
                  Most web browsers allow you to control cookies through their
                  settings. You can choose to block all cookies, delete existing
                  ones, or receive a notification when a new cookie is set.
                  Please note that disabling certain cookies may affect the
                  functionality and performance of our website.
                </p>
                <p className="mt-3 text-ink-muted leading-relaxed">
                  To learn how to manage cookies in your browser, visit the help
                  section of your browser or refer to websites such as
                  aboutcookies.org.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-ink">
                  Updates to This Policy
                </h2>
                <p className="mt-2 text-ink-muted leading-relaxed">
                  We may update this Cookie Policy from time to time. Any
                  changes will be posted on this page with an updated effective
                  date.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-ink">Contact</h2>
                <p className="mt-2 text-ink-muted leading-relaxed">
                  If you have questions about our use of cookies, please contact
                  us at{" "}
                  <a
                    href="mailto:kritrajnexera@gmail.com"
                    className="text-brand-400 hover:underline"
                  >
                    kritrajnexera@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
