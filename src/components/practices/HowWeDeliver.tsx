"use client";

import { useState } from "react";
import { CarouselButton } from "@/components/ui/CarouselButtons";
import { cn } from "@/lib/cn";
import { howWeDeliver } from "@/lib/content";

export function HowWeDeliver() {
  const steps = howWeDeliver.steps;
  const last = steps.length - 1;
  const [active, setActive] = useState(2);
  const step = steps[active];

  function go(delta: number) {
    setActive((current) => Math.min(last, Math.max(0, current + delta)));
  }

  return (
    <section id="how-we-deliver" className="bg-white text-navy">
      <div className="ewg-container pb-20 lg:pb-28">
        <p className="ewg-eyebrow text-orange">{howWeDeliver.eyebrow}</p>
        <h2 className="ewg-heading mt-5">
          <span className="ewg-heading-ink">{howWeDeliver.headerLine1}</span>{" "}
          <span>{howWeDeliver.headerLine2}</span>
        </h2>

        <div className="mt-8 flex items-center lg:mt-20">
          <CarouselButton
            direction="prev"
            tone="orange"
            surface="ink"
            label="Previous step"
            disabled={active === 0}
            onClick={() => go(-1)}
            className="h-6 w-6 overflow-hidden [&>span]:scale-50 lg:h-16 lg:w-16 lg:overflow-visible lg:[&>span]:scale-100"
          />

          <div className="flex min-w-0 flex-1 items-center">
            {steps.map((item, index) => (
              <div key={item.title} className="flex min-w-0 flex-1 items-center">
                <span
                  className={cn(
                    "h-1.5 min-w-0 flex-1 lg:h-2.5",
                    index <= active ? "bg-navy" : "bg-frost",
                  )}
                />
                <button
                  type="button"
                  aria-label={item.title}
                  aria-current={index === active}
                  onClick={() => setActive(index)}
                  className={cn(
                    "relative z-10 h-5 w-5 shrink-0 rounded-[5px] transition-colors duration-300 lg:h-[39px] lg:w-[39px] lg:rounded-[10px]",
                    index <= active ? "bg-navy" : "bg-frost",
                  )}
                />
              </div>
            ))}
            <span
              className={cn(
                "h-1.5 min-w-0 flex-1 lg:h-2.5",
                active >= last ? "bg-navy" : "bg-frost",
              )}
            />
          </div>

          <CarouselButton
            direction="next"
            tone="orange"
            surface="ink"
            label="Next step"
            disabled={active === last}
            onClick={() => go(1)}
            className="h-6 w-6 overflow-hidden [&>span]:scale-50 lg:h-16 lg:w-16 lg:overflow-visible lg:[&>span]:scale-100"
          />
        </div>

        <article className="ewg-edge-card mt-6 flex items-center justify-between gap-4 rounded-[1.25rem] px-4 py-5 lg:mt-12 lg:gap-8 lg:rounded-[1.75rem] lg:px-12 lg:py-11">
          <div className="max-w-xl">
            <h3 className="ewg-heading-card text-orange">{step.title}</h3>
            <p className="mt-2 max-w-lg font-sans text-[0.9rem] leading-6 text-navy lg:mt-3 lg:text-[1.02rem] lg:leading-7">
              {step.body}
            </p>
          </div>
          <span
            aria-hidden="true"
            className="font-headline text-[2.25rem] leading-none font-medium text-navy lg:text-[4.75rem]"
          >
            {active + 1}
          </span>
        </article>
      </div>
    </section>
  );
}
