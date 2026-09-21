import Image from "next/image";
import { partnerLogos } from "@/lib/content";

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex h-14 shrink-0 items-center gap-2.5 px-7">
      <span className="font-headline text-lg font-bold text-orange">{value}</span>
      <span className="text-sm text-white/75">{label}</span>
    </div>
  );
}

function LogoItem({
  name,
  src,
  width,
  height,
}: {
  name: string;
  src: string;
  width: number;
  height: number;
}) {
  return (
    <div className="flex h-14 min-w-[8.5rem] shrink-0 items-center justify-center px-6">
      <Image
        src={src}
        alt={name}
        width={width}
        height={height}
        className="h-8 w-auto max-w-[8.75rem] object-contain"
      />
    </div>
  );
}

function MarqueeSequence({ pass }: { pass: string }) {
  return (
    <>
  
      {partnerLogos.map((logo) => (
        <LogoItem key={`${pass}-${logo.name}`} {...logo} />
      ))}
    </>
  );
}

export function LogoCarousel() {
  return (
    <div className="ewg-container pt-20 pb-2 lg:pt-28">
      <div className="group overflow-hidden rounded-[1.75rem] bg-navy-dark/80 px-4 py-5 lg:px-8 lg:py-6">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="ewg-marquee-track flex w-max items-center">
            <MarqueeSequence pass="a" />
            <MarqueeSequence pass="b" />
          </div>
        </div>
      </div>
    </div>
  );
}
