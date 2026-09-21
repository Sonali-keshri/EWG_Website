"use client";

import { CountUp } from "@/components/ui/CountUp";
import { aboutUs } from "@/lib/content";

export function AboutHero() {
  return (
    <section className="text-white" style={{ backgroundImage: "var(--ewg-gradient-intro)" }}>
      <div className="ewg-container pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-20">
          <div>
            <p className="ewg-eyebrow text-orange">{aboutUs.eyebrow}</p>
            <h1 className="mt-5 font-headline text-[2.4rem] leading-[1.12] font-bold tracking-tight sm:text-5xl lg:text-[3.5rem]">
              <span className="ewg-heading-light">{aboutUs.headerLine1}</span>
              <br />
              <span>{aboutUs.headerLine2}</span>
            </h1>
          </div>
          <p className="max-w-md pb-1 text-[1.02rem] leading-8 text-white/80">{aboutUs.body}</p>
        </div>

        <div className="mt-14 grid grid-cols-2 rounded-[1.75rem] bg-navy-dark sm:grid-cols-3 lg:mt-16 lg:grid-cols-5">
          {aboutUs.stats.map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center lg:px-4 lg:py-10">
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                className="font-headline text-[2.6rem] leading-none font-bold text-orange lg:text-[3.25rem]"
              />
              <p className="mx-auto mt-3 max-w-[11rem] text-sm leading-5 whitespace-pre-line text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
