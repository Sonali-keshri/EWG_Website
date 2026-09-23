"use client";

import { CountUp } from "@/components/ui/CountUp";
import { aboutUs } from "@/lib/content";

export function AboutHero() {
  return (
    <section className="text-white " style={{ backgroundImage: "var(--ewg-gradient-story)" }}>
      <div className="">
        <div className="ewg-container pt-28 pb-16 lg:pt-32 lg:pb-20 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-20">
          <div>
            <p className="ewg-eyebrow text-orange">{aboutUs.eyebrow}</p>
            <h1 className="mt-4 font-headline text-[2.4rem] leading-[1] font-medium tracking-normal sm:text-5xl lg:text-[3.4rem]">
              <span className="ewg-heading-light">{aboutUs.headerLine1}</span>
              <br />
              <span>{aboutUs.headerLine2}</span>
            </h1>
          </div>
          <p className="max-w-md pb-1 text-[1.02rem]  text-white/80">{aboutUs.body}</p>
        </div>

        <div className="ewg-card-frame mt-10 pb-16 lg:mt-16 lg:pb-20">
          <div className="grid grid-cols-2 rounded-[1.75rem] bg-navy-dark sm:grid-cols-3 lg:grid-cols-5">
            {aboutUs.stats.map((stat) => (
              <div key={stat.label} className="px-6 py-8 text-left lg:py-10">
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-headline text-[2.6rem] leading-none font-medium text-orange lg:text-[3.25rem]"
                />
                <p className="mt-3 max-w-[11rem] text-sm leading-5 whitespace-pre-line text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
