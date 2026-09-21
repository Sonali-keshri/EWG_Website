import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  size?: "nav" | "footer";
};

const sizeClass = {
  nav: "h-9 w-auto md:h-10",
  footer: "h-12 w-auto md:h-14",
};

export function Logo({ className, size = "nav" }: LogoProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center", className)} aria-label="EWG home">
      <Image
        src="/images/EWG_Logos.png"
        alt="EWG — Engineered with grit"
        width={240}
        height={52}
        className={sizeClass[size]}
        preload
      />
    </Link>
  );
}
