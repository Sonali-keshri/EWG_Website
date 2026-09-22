"use client";

import { useState } from "react";
import { BrandArrow } from "@/components/brand/BrandArrow";
import { cn } from "@/lib/cn";
import { aboutStory } from "@/lib/content";

const TRACK_NODES = 3;

export function AboutStory() {
  const items = aboutStory.milestones;
  const [active, setActive] = useState(2);

  function go(delta: number) {
    setActive((current) => Math.min(items.length - 1, Math.max(0, current + delta)));
  }

  const activeNode = Math.round((active / Math.max(1, items.length - 1)) * (TRACK_NODES - 1));

  return (
    <section id="our-story" className="bg-white text-navy">
      <div className="ewg-container grid items-start gap-14 py-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16 lg:py-28">
        <div className="max-w-xl">
          <p className="ewg-eyebrow text-orange">{aboutStory.eyebrow}</p>
          <h2 className="mt-5 font-headline text-[2.2rem] leading-[1.14] font-bold tracking-tight sm:text-[2.6rem] lg:text-[3.15rem]">
            <span className="ewg-heading-ink">{aboutStory.headerLine1}</span>
            <br />
            <span>{aboutStory.headerLine2}</span>
          </h2>
          <p className="mt-6 leading-8 text-navy/75">{aboutStory.body}</p>
          <p className="mt-6 font-headline text-[1.05rem] leading-8 font-semibold italic">
            {aboutStory.closer}
          </p>
        </div>

        <div className="grid grid-cols-[4rem_minmax(0,1fr)] items-stretch gap-6 lg:gap-8">
          {/* Spine: two nav circles, lime line that fades to white, three squares. */}
          <div className="relative flex flex-col items-center">
            <div
              aria-hidden="true"
              className="absolute top-8 bottom-8 left-1/2 w-1.5 -translate-x-1/2 rounded-full"
              style={{ backgroundImage: "var(--ewg-gradient-timeline)" }}
            />

            <button
              type="button"
              aria-label="Previous milestone"
              disabled={active === 0}
              onClick={() => go(-1)}
              className="group relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-ink-deep disabled:opacity-40"
            >
              <BrandArrow size={22} tone="orange" animate className="-rotate-90" />
            </button>

            <div className="relative z-10 flex flex-1 flex-col items-center justify-evenly py-5">
              {Array.from({ length: TRACK_NODES }, (_, index) => (
                <span
                  key={index}
                  className={cn(
                    "block h-[1.15rem] w-[1.15rem] rounded-[0.4rem] transition-colors duration-300",
                    index === activeNode ? "bg-navy" : "bg-frost",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next milestone"
              disabled={active === items.length - 1}
              onClick={() => go(1)}
              className="group relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-ink-deep disabled:opacity-40"
            >
              <BrandArrow size={22} tone="orange" animate className="rotate-90" />
            </button>
          </div>

          <div className="flex flex-col justify-between py-20">
            {items.map((item, index) => {
              const isActive = index === active;
              return (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setActive(index)}
                  className="grid gap-2 py-2 text-left sm:grid-cols-[9.75rem_minmax(0,1fr)] sm:items-center sm:gap-6"
                >
                  <span
                    className={cn(
                      "transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-30",
                    )}
                  >
                    <span
                      className={cn(
                        "block font-headline text-lg font-bold",
                        isActive ? "text-orange" : "text-navy",
                      )}
                    >
                      {item.year}
                    </span>
                    <span className="block font-headline text-lg font-bold leading-tight">
                      {item.title}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "text-sm leading-6 transition-opacity duration-300",
                      isActive ? "font-semibold text-navy opacity-100" : "text-navy/80 opacity-30",
                    )}
                  >
                    {item.body}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
