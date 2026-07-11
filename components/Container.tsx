import { cn } from "@/lib/utils";

/**
 * Centered max-width wrapper with responsive horizontal padding.
 * Keeps content from going edge-to-edge on large screens while
 * staying roomy on mobile.
 */
export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}
