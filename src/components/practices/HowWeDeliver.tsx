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

        <div className="mt-14 flex items-center lg:mt-20">
          <CarouselButton
            direction="prev"
            tone="orange"
            surface="ink"
            label="Previous step"
            disabled={active === 0}
            onClick={() => go(-1)}
          />

          <div className="flex min-w-0 flex-1 items-center">
            {steps.map((item, index) => (
              <div key={item.title} className="flex min-w-0 flex-1 items-center">
                <span
                  className={cn("h-2.5 min-w-0 flex-1", index <= active ? "bg-navy" : "bg-frost")}
                />
                <button
                  type="button"
                  aria-label={item.title}
                  aria-current={index === active}
                  onClick={() => setActive(index)}
                  className={cn(
                    "relative z-10 h-[39px] w-[39px] shrink-0 rounded-[10px] transition-colors duration-300",
                    index <= active ? "bg-navy" : "bg-frost",
                  )}
                />
              </div>
            ))}
            <span className={cn("h-2.5 min-w-0 flex-1", active >= last ? "bg-navy" : "bg-frost")} />
          </div>

          <CarouselButton
            direction="next"
            tone="orange"
            surface="ink"
            label="Next step"
            disabled={active === last}
            onClick={() => go(1)}
          />
        </div>

        <article className="ewg-edge-card mt-10 flex items-center justify-between gap-8 rounded-[1.75rem] px-8 py-9 lg:mt-12 lg:px-12 lg:py-11">
          <div className="max-w-xl">
            <h3 className="ewg-heading-card text-orange">{step.title}</h3>
            <p className="mt-3 max-w-lg font-sans text-[1.02rem] leading-7 text-navy">{step.body}</p>
          </div>
          <span
            aria-hidden="true"
            className="font-headline text-[3.5rem] leading-none font-medium text-navy lg:text-[4.75rem]"
          >
            {active + 1}
          </span>
        </article>
      </div>
    </section>
  );
}
