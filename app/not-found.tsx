import Link from "next/link";
import { Home, MessageCircle } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <p className="mb-3 text-7xl font-bold text-brand-500/20">404</p>
          <h1 className="text-[var(--text-h2)] font-semibold text-ink font-display">
            This page took a wrong turn
          </h1>
          <p className="mt-4 text-ink-muted">
            The page you&apos;re looking for doesn&apos;t exist — or maybe it
            moved to a better system. Let&apos;s get you back on track.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/">
              <Home className="h-4 w-4" />
              Back to home
            </Button>
            <Button href="/contact" variant="secondary">
              <MessageCircle className="h-4 w-4" />
              Talk to us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
