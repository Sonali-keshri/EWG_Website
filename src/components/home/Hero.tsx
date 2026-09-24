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
            <p className="ewg-eyebrow text-orange pl-1">
              {hero.eyebrow}
            </p>
            <h1 className="mt-5 font-headline text-[2.25rem] font-medium leading-[1] tracking-normal sm:text-[3rem] lg:text-[3.8rem]">
              <span className="ewg-gradient-text">{hero.headerLine1}</span>
              <br />
              <span className="text-white">{hero.headerLine2}</span>
            </h1>
            <p className="mt-6 mb-8 font-sans text-[1rem] font-medium leading-[24px] tracking-normal text-white lg:mt-10 lg:mb-14">
              {hero.body}
            </p>
            <HeroActions />
          </div>
          <div className="mx-auto w-full max-w-[18rem] md:max-w-none">
            <ArrowField />
          </div>
        </div>
      </div>
      <LogoCarousel />

    </div>
  );
}
