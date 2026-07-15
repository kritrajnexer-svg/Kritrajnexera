import type { Metadata } from "next";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import TypeInHeading from "@/components/TypeInHeading";
import DemoPageClient from "./DemoPageClient";

export const metadata: Metadata = {
  title: "Live Demo",
  description:
    "Experience a live sales engine in action. Submit a sample inquiry and watch our AI-powered automation pipeline capture, route, and process it in real time.",
};

export default function DemoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-brand-400/20 bg-brand-400/10 px-3 py-1 text-xs font-medium text-brand-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-400" />
                </span>
                Live Demo
              </div>
              <TypeInHeading className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-ink">
                Experience Your Future Sales System
              </TypeInHeading>
              <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">
                Submit a sample inquiry and watch your lead move through a
                complete AI-powered automation workflow in real time.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Demo Section */}
      <section className="py-16 sm:py-20">
        <Container>
          <DemoPageClient />
        </Container>
      </section>
    </>
  );
}
