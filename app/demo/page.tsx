import type { Metadata } from "next";
import Container from "@/components/Container";
import DemoPageClient from "./DemoPageClient";

export const metadata: Metadata = {
  title: "Live Demo",
  description:
    "Experience a live sales engine in action. Submit a demo lead and watch our automation pipeline capture, route, and process it in real time.",
};

export default function DemoPage() {
  return (
    <>
      <section className="border-b border-line py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium text-brand-400">Live Demo</p>
            <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.1] text-ink">
              Experience a Live Sales Engine
            </h1>
            <p className="mt-5 text-lg text-ink-muted">
              Fill out the form below and watch your lead move through a real
              automation workflow in seconds.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <DemoPageClient />
        </Container>
      </section>
    </>
  );
}
