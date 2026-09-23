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
      <div className="ewg-container grid items-start gap-12 py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-x-10 lg:py-20">
        <div className="max-w-[38rem]">
          <p className="ewg-eyebrow text-orange">{aboutStory.eyebrow}</p>
          <h2 className="mt-4 font-headline text-[2.15rem] leading-[1.08] font-medium tracking-normal sm:text-[2.55rem] lg:text-[2.85rem]">
            <span className="ewg-heading-ink">{aboutStory.headerLine1}</span>
            <br />
            <span>{aboutStory.headerLine2}</span>
          </h2>
          <p className="mt-6 text-[0.95rem] leading-[1.55] text-navy">{aboutStory.body}</p>
          <p className="mt-5 font-sans text-[0.95rem] leading-[1.45] font-medium italic text-navy">
            {aboutStory.closer}
          </p>
        </div>

        <div className="grid min-h-[28rem] grid-cols-[4.5rem_minmax(0,1fr)] items-stretch gap-8 lg:min-h-[32rem] lg:gap-10">
          <div className="relative flex flex-col items-center">
            <div
              aria-hidden="true"
              className="absolute top-10 bottom-10 left-1/2 w-1.5 -translate-x-1/2 rounded-full"
              style={{ backgroundImage: "var(--ewg-gradient-timeline)" }}
            />

            <button
              type="button"
              aria-label="Previous milestone"
              disabled={active === 0}
              onClick={() => go(-1)}
              className="group relative z-10 flex h-[4.25rem] w-[4.25rem] shrink-0 items-center justify-center rounded-full bg-ink-deep disabled:opacity-40"
            >
              <BrandArrow size={22} tone="orange" animate className="-rotate-90" />
            </button>

            <div className="relative z-10 flex flex-1 flex-col items-center justify-evenly py-3">
              {Array.from({ length: TRACK_NODES }, (_, index) => (
                <span
                  key={index}
                  className={cn(
                    "block h-4 w-4 rounded-[0.28rem] transition-colors duration-300",
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
              className="group relative z-10 flex h-[4.25rem] w-[4.25rem] shrink-0 items-center justify-center rounded-full bg-ink-deep disabled:opacity-40"
            >
              <BrandArrow size={22} tone="orange" animate className="rotate-90" />
            </button>
          </div>

          <div className="flex flex-col justify-between py-1">
            {items.map((item, index) => {
              const isActive = index === active;
              const isEdge = index === 0 || index === items.length - 1;
              return (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setActive(index)}
                  className="grid gap-1 py-1 text-left sm:grid-cols-[10.5rem_minmax(0,1fr)] sm:items-start sm:gap-8"
                >
                  <span>
                    <span
                      className={cn(
                        "block font-headline text-[1.05rem] leading-none transition-colors duration-300",
                        isActive
                          ? "font-medium text-orange"
                          : isEdge
                            ? "font-medium text-orange/20"
                            : "font-medium text-orange/45",
                      )}
                    >
                      {item.year}
                    </span>
                    <span
                      className={cn(
                        "mt-1 block font-headline text-[1.05rem] leading-tight transition-colors duration-300",
                        isActive
                          ? "font-medium text-navy"
                          : isEdge
                            ? "font-medium text-navy/15"
                            : "font-medium text-navy/40",
                      )}
                    >
                      {item.title}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "text-[0.92rem] leading-[1.45] transition-colors duration-300",
                      isActive
                        ? "font-medium text-navy"
                        : isEdge
                          ? "text-navy/15"
                          : "text-navy/40",
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
