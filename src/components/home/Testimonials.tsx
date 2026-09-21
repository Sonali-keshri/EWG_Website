"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { arrowToneVars } from "@/components/brand/BrandArrow";
import { alignToContainer } from "@/lib/carousel";
import { cn } from "@/lib/cn";
import { testimonials } from "@/lib/content";

/**
 * Solid chevrons driven by the shared dual-tone arrow classes. The leading
 * chevron takes full-strength orange in both directions, since the 180°
 * rotation carries it across to the other side.
 */
function DoubleChevron({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 28 20"
      aria-hidden="true"
      style={arrowToneVars.orange}
      className={cn("ewg-arrow-animated h-5 w-7", direction === "prev" && "rotate-180")}
    >
      <path className="ewg-arrow-light" d="M0 0L7.5 10L0 20H6L13.5 10L6 0Z" />
      <path className="ewg-arrow-dark" d="M14.5 0L22 10L14.5 20H20.5L28 10L20.5 0Z" />
    </svg>
  );
}

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: alignToContainer, duration: 32 },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );

  return (
    <section
      id="testimonials"
      className="text-white"
      style={{ backgroundImage: "var(--ewg-gradient-industries)" }}
    >
      <div className="ewg-container pt-20 lg:pt-28">
        <div className="flex items-start justify-between gap-8">
          <div>
            <p className="ewg-eyebrow text-orange">{testimonials.eyebrow}</p>
            <h2 className="mt-5 font-headline text-[2.1rem] leading-[1.14] font-bold tracking-tight sm:text-[2.6rem] lg:text-[3rem]">
              <span className="ewg-heading-light">{testimonials.headerLine1}</span>
              <br />
              <span>{testimonials.headerLine2}</span>
            </h2>
          </div>
          <div className="flex shrink-0 gap-3 pt-6 lg:gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => emblaApi?.scrollPrev()}
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-shade/50 transition-colors hover:bg-shade/70 lg:h-16 lg:w-16"
            >
              <DoubleChevron direction="prev" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => emblaApi?.scrollNext()}
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-shade/50 transition-colors hover:bg-shade/70 lg:h-16 lg:w-16"
            >
              <DoubleChevron direction="next" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 overflow-hidden lg:mt-16" ref={emblaRef}>
        {/* Gaps live as slide padding rather than `gap`, otherwise the loop
            drops the space between the last and first slide. */}
        <div className="-ml-6 flex touch-pan-y lg:-ml-8">
          {testimonials.quotes.map((item) => (
            <div
              key={item.quote}
              className="min-w-0 shrink-0 grow-0 basis-[86%] pl-6 sm:basis-[52%] lg:basis-[40%] lg:pl-8"
            >
              <article
                className="flex h-full flex-col rounded-3xl p-7 lg:p-9"
                style={{ backgroundImage: "var(--ewg-gradient-card-dark)" }}
              >
                <p className="ewg-gradient-text w-fit font-headline text-[3.75rem] leading-none font-bold select-none lg:text-[4.5rem]">
                  “
                </p>
                <p className="mt-3 text-[0.95rem] leading-[1.7] text-white">{item.quote}</p>
                <div className="mt-auto pt-8">
                  <p className="font-headline text-sm font-bold text-orange lg:text-lg">
                    {`${item.role},`}
                  </p>
                  <p className="mt-1 text-sm text-white">{item.org}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
      <div className="ewg-container pb-20 lg:pb-28">
        <p className="text-sm text-white/45">{testimonials.note}</p>
      </div>
    </section>
  );
}
