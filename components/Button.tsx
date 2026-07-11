import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 shadow-sm shadow-brand-600/20",
  secondary:
    "border border-line bg-surface text-ink hover:border-brand-300 hover:text-brand-600",
};

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
};

/**
 * Minimal link-button. Two variants only — no premature abstraction.
 * Renders a Next.js <Link> so it works for both internal routes and
 * in-page anchors (href="#system").
 */
export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3",
        "text-sm font-medium transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
