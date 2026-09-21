"use client";

import { useState } from "react";
import { BrandArrow } from "@/components/brand/BrandArrow";
import { cn } from "@/lib/cn";
import { practices } from "@/lib/content";

export function Practices() {
  const [active, setActive] = useState(0);

  return (
    <section id="practices" className="bg-white text-navy">
      <div className="ewg-container py-20 lg:py-28">
        <p className="ewg-eyebrow text-orange">{practices.eyebrow}</p>
        <h2 className="mt-5 font-headline text-[2.1rem] leading-[1.14] font-bold tracking-tight sm:text-[2.6rem] lg:text-[3.25rem]">
          <span className="ewg-heading-ink">{practices.headerLine1}</span>
          <br />
          <span>{practices.headerLine2}</span>
        </h2>
        <div className="mt-5 max-w-xl text-[1.02rem] leading-8 text-navy/70">
          {practices.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="mt-12 space-y-3 lg:mt-16">
          {practices.cards.map((card, index) => {
            const isActive = index === active;

            return (
              <div
                key={card.name}
                className={cn(
                  "overflow-hidden rounded-[1.75rem] shadow-[0_10px_18px_-12px_rgba(14,55,73,0.55)] transition-colors duration-500",
                  isActive ? "bg-navy" : "bg-white ring-1 ring-navy/10 hover:ring-navy/25",
                )}
                onMouseEnter={() => setActive(index)}
              >
                {/* Collapsed row — name on the left, index numeral on the right. */}
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
                      className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left lg:px-12 lg:py-7"
                    >
                      <h3 className="font-headline text-xl font-bold lg:text-[1.55rem]">{card.name}</h3>
                      <span
                        aria-hidden="true"
                        className="ewg-gradient-text font-headline text-[2.5rem] leading-none font-black lg:text-[3.25rem]"
                      >
                        {index + 1}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Expanded panel — the gradient headline only appears here, on hover/focus. */}
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-500 ease-out",
                    isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="group grid gap-6 px-7 py-8 lg:grid-cols-[minmax(0,1fr)_20rem_auto] lg:items-center lg:gap-10 lg:px-12 lg:py-10">
                      <h3 className="ewg-gradient-text font-headline text-[2rem] leading-[0.9] font-black tracking-tight uppercase sm:text-[2.75rem] lg:text-[3.4rem]">
                        {card.name}
                      </h3>
                      <div>
                        <p className="font-headline text-base font-bold text-white">{card.tagline}</p>
                        <p className="mt-2 text-sm leading-6 text-white/75">{card.body}</p>
                      </div>
                      <BrandArrow size={92} tone="ice" animate className="hidden lg:block" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
