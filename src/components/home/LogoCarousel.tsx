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
    <div className="ewg-card-frame pt-20 pb-12 lg:pt-28 lg:pb-16">
      <div className="ewg-card-inset group overflow-hidden rounded-[1.75rem] bg-black/50 py-5 lg:py-12">
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
