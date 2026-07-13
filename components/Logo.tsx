import Link from "next/link";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className ?? ""}`}>
      <Image
        src="/logo.png"
        alt="KritRaj Nexera logo"
        width={1535}
        height={1024}
        className="h-10 w-auto shrink-0 transition-transform group-hover:scale-105"
        priority
      />
      <span className="flex flex-col leading-tight">
        <span className="text-base font-semibold tracking-tight text-ink">
          KritRaj Nexera
        </span>
        <span className="text-[11px] font-medium tracking-wider text-ink-muted uppercase">
          Build. Automate. Scale.
        </span>
      </span>
    </Link>
  );
}
