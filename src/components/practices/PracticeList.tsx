"use client";

import { useState } from "react";
import { BrandArrow } from "@/components/brand/BrandArrow";
import { cn } from "@/lib/cn";
import { practices } from "@/lib/content";

export function PracticeList() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3 pb-10">
      {practices.cards.map((card, index) => {
        const isActive = index === active;

        return (
          <div
            key={card.name}
            className={cn(
              "group overflow-hidden rounded-[1.75rem] shadow-[0_10px_18px_-12px_rgba(14,55,73,0.55)] transition-colors duration-500",
              isActive ? "bg-navy" : "bg-white ring-1 ring-navy/10 hover:ring-navy/25",
            )}
            onMouseEnter={() => setActive(index)}
          >
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-out",
                isActive ? "grid-rows-[0fr]" : "grid-rows-[1fr]",
              )}
            >
              <div className="overflow-hidden">
                <button
                  type="button"
                  aria-expanded={isActive}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className="ewg-card-inset flex w-full items-center justify-between gap-3 py-4 text-left lg:gap-6 lg:py-6"
                >
                  <h3 className="font-headline text-[1.15rem] leading-none font-medium tracking-normal group-hover:font-bold sm:text-[1.35rem] lg:text-[1.65rem] lg:group-hover:text-[2rem]">
                    {card.name}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="ewg-gradient-text font-headline text-[2.1rem] leading-none font-medium tracking-normal lg:text-[4rem]"
                  >
                    {index + 1}
                  </span>
                </button>
              </div>
            </div>

            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-out",
                isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="ewg-card-inset grid items-center gap-5 py-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,24rem)_auto] lg:gap-x-14 lg:py-11">
                  <h3 className="ewg-gradient-text font-headline text-[1.45rem] leading-[0.95] font-bold tracking-normal uppercase sm:text-[2.15rem] lg:text-[2.55rem]">
                    {card.name}
                  </h3>
                  <div className="max-w-[46ch]">
                    <p className="font-headline text-[1.05rem] leading-snug font-medium text-white">
                      {card.tagline}
                    </p>
                    <p className="mt-3 text-[0.95rem] leading-6 text-white/80">{card.body}</p>
                  </div>
                  <BrandArrow
                    size={96}
                    tone="ice"
                    mark="big"
                    animate
                    className="hidden justify-self-end lg:block"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
