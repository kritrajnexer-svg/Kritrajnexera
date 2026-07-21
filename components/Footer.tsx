"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react";
import Container from "./Container";
import Logo from "./Logo";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] as const } },
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.03] bg-gradient-to-b from-black to-[#2d1a5e]">
      <Container className="py-14">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]"
        >
          <motion.div variants={item}>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#faf3e0]/60">
              We don&apos;t build websites. We build sales engines — automation that
              catches, qualifies, and closes leads while you sleep.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <h4 className="mb-3 text-xs font-semibold text-[#faf3e0]/40">
              Navigate
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-[#faf3e0]/80 hover:text-[#faf3e0]">Home</Link></li>
              <li><Link href="/services" className="text-[#faf3e0]/80 hover:text-[#faf3e0]">Services</Link></li>
              <li><Link href="/portfolio" className="text-[#faf3e0]/80 hover:text-[#faf3e0]">Portfolio</Link></li>
              <li><Link href="/about" className="text-[#faf3e0]/80 hover:text-[#faf3e0]">About</Link></li>
              <li><Link href="/demo" className="text-[#faf3e0]/80 hover:text-[#faf3e0]">Live Demo</Link></li>
              <li><Link href="/contact" className="text-[#faf3e0]/80 hover:text-[#faf3e0]">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h4 className="mb-3 text-xs font-semibold text-[#faf3e0]/40">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:kritrajnexer@gmail.com" className="inline-flex items-center gap-2 text-[#faf3e0]/80 hover:text-[#faf3e0]">
                  <Mail className="h-4 w-4" /> kritrajnexer@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kritraj.nexera/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#faf3e0]/80 hover:text-[#faf3e0]">
                  Instagram ↗
                </a>
              </li>

            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <p className="text-xs text-[#faf3e0]/40">
              &copy; {new Date().getFullYear()} KritRaj Nexera. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#faf3e0]/40">
              <Link href="/privacy-policy" className="hover:text-[#faf3e0] transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-[#faf3e0] transition-colors">Terms</Link>
              <Link href="/cookie-policy" className="hover:text-[#faf3e0] transition-colors">Cookies</Link>
              <Link href="/refund-policy" className="hover:text-[#faf3e0] transition-colors">Refunds</Link>
              <Link href="/cancellation-policy" className="hover:text-[#faf3e0] transition-colors">Cancellations</Link>
              <Link href="/disclaimer" className="hover:text-[#faf3e0] transition-colors">Disclaimer</Link>
            </div>
          </div>
          <p className="text-xs text-[#faf3e0]/40">
            Built with Next.js + n8n — the system in action.
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}
