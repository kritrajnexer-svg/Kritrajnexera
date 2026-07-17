import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 shadow-sm",
  secondary:
    "border border-line bg-surface text-ink hover:border-brand-300 hover:text-brand-500",
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
