import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { aboutNextPhase } from "@/lib/content";

export function AboutNextPhase() {
  return (
    <section id="next-phase" className="overflow-hidden bg-navy text-white">
      <div className="ewg-container grid items-center gap-10 py-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.7fr)] lg:gap-8 lg:py-20">
        <div className="max-w-xl">
          <p className="ewg-eyebrow text-orange">{aboutNextPhase.eyebrow}</p>
          <h2 className="mt-5 font-headline text-[2.2rem] leading-[1.14] font-bold tracking-tight sm:text-[2.6rem] lg:text-[3.15rem]">
            <span className="ewg-heading-light">{aboutNextPhase.headerLine1}</span>
            <br />
            <span>{aboutNextPhase.headerLine2}</span>
          </h2>
          <p className="mt-6 max-w-md leading-8 text-white/75">{aboutNextPhase.body}</p>
          <Button href={aboutNextPhase.cta.href} className="mt-10">
            {aboutNextPhase.cta.label}
          </Button>
        </div>

        <div
          className="pointer-events-none relative mx-auto w-full max-w-[16rem] lg:ml-auto lg:max-w-[18rem]"
          aria-hidden="true"
        >
          <Image
            src="/images/EWG_Arrows.gif"
            alt=""
            width={622}
            height={608}
            unoptimized
            className="h-auto w-full object-contain mix-blend-screen"
          />
        </div>
      </div>
    </section>
  );
}
