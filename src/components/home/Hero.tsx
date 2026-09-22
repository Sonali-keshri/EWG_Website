import { ArrowField } from "@/components/home/ArrowField";
import { HeroActions } from "@/components/home/HeroActions";
import { LogoCarousel } from "@/components/home/LogoCarousel";

import { hero } from "@/lib/content";

export function Hero() {
  return (
    <div className="relative text-white">
      <div className="ewg-container relative pt-10 lg:pt-12">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.8fr)] lg:gap-6">
          <div className="max-w-[44rem]">
            <p className="font-sans text-[13px] pl-1 leading-[1px] font-medium tracking-[0.25em] text-orange uppercase">
              {hero.eyebrow}
            </p>
            <h1 className="mt-5 font-headline text-[2.25rem] font-[900px] leading-[1] tracking-tighter sm:text-[3rem] lg:text-[3.8rem]">
              <span className="ewg-gradient-text">{hero.headerLine1}</span>
              <br />
              <span className="text-white">{hero.headerLine2}</span>
            </h1>
            <p className="mt-10 mb-14 font-sans text-[1rem] font-[600px] leading-[24px] tracking-normal text-white">
              {hero.body}
            </p>
            <HeroActions />
          </div>
          <div className="hidden md:block">
            <ArrowField />
          </div>
        </div>
      </div>
      <LogoCarousel />

    </div>
  );
}
