import Link from "next/link";
import Image from "next/image";

type Props = {
  className?: string;
  light?: boolean;
};

export default function Logo({ className, light }: Props) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className ?? ""}`}>
      <Image
        src="/logo.png"
        alt="KritRaj Nexera logo"
        width={1535}
        height={1024}
        className="h-10 w-auto shrink-0 transition-transform group-hover:scale-105"
        priority
        sizes="40px"
      />
      <span className="flex flex-col leading-tight">
        <span className={`text-base font-semibold tracking-tight ${light ? "text-[#faf3e0]" : "text-ink"}`}>
          KritRaj Nexera
        </span>
        <span className={`text-xs font-medium tracking-wider uppercase ${light ? "text-[#faf3e0]/60" : "text-ink-muted"}`}>
          Build. Automate. Scale.
        </span>
      </span>
    </Link>
  );
}
