import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";
import Container from "./Container";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line/60 bg-bg">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              We don&apos;t build websites. We build sales engines — sites wired
              to automation that captures, routes, and converts leads while you
              sleep.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Navigate
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-ink hover:text-brand-400">Home</Link></li>
              <li><Link href="/services" className="text-ink hover:text-brand-400">Services</Link></li>
              <li><Link href="/portfolio" className="text-ink hover:text-brand-400">Portfolio</Link></li>
              <li><Link href="/about" className="text-ink hover:text-brand-400">About</Link></li>
              <li><Link href="/demo" className="text-ink hover:text-brand-400">Live Demo</Link></li>
              <li><Link href="/contact" className="text-ink hover:text-brand-400">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:hello@kritrajnexera.com" className="inline-flex items-center gap-2 text-ink hover:text-brand-400">
                  <Mail className="h-4 w-4" /> hello@kritrajnexera.com
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 text-ink hover:text-brand-400">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 text-ink hover:text-brand-400">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line/60 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} KritRaj Nexera. All rights reserved.
          </p>
          <p className="text-xs text-ink-muted">
            Built with Next.js + n8n — the system in action.
          </p>
        </div>
      </Container>
    </footer>
  );
}
