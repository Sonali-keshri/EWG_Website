import { ArrowField } from "@/components/home/ArrowField";
import { HeroActions } from "@/components/home/HeroActions";
import { LogoCarousel } from "@/components/home/LogoCarousel";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <div className="relative text-white">
      <div className="ewg-container relative pt-10 lg:pt-14">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)] lg:gap-8">
          <div className="max-w-2xl">
            <p className="ewg-eyebrow">{hero.eyebrow}</p>
            <h1 className="mt-5 font-headline text-[2.35rem] font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.65rem]">
              <span className="text-lime">{hero.headerLine1}</span>
              <br />
              <span className="text-white">{hero.headerLine2}</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-8 text-white/75">
              {hero.body}
            </p>
            <HeroActions />
          </div>
          <div className="hidden md:block lg:pl-6">
            <ArrowField />
          </div>
        </div>
      </div>
      <LogoCarousel />
    </div>
  );
}
