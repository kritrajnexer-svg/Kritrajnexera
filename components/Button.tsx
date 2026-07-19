import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 shadow-sm relative overflow-hidden before:absolute before:inset-0 before:rounded-xl before:opacity-0 hover:before:opacity-100 before:bg-[radial-gradient(circle_at_50%_0%,var(--color-brand-400),transparent_60%)] before:transition-opacity before:duration-300",
  secondary:
    "border border-line bg-surface text-ink hover:border-brand-300 hover:text-brand-500 hover:shadow-[0_0_20px_-8px_var(--color-brand-400)] transition-all duration-300",
};

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  target?: string;
  rel?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  target,
  rel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3",
        "text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
