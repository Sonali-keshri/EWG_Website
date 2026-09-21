"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useRef } from "react";
import type { PointerEvent, MouseEvent } from "react";
import { ArrowCursor } from "@/components/ui/ArrowCursor";
import { Button } from "@/components/ui/Button";
import { alignToContainer } from "@/lib/carousel";
import { caseStudies } from "@/lib/content";

export function CaseStudies() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: alignToContainer, duration: 32 },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const pressOrigin = useRef({ x: 0, y: 0 });

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    pressOrigin.current = { x: event.clientX, y: event.clientY };
  }

  // Click advances, unless the pointer travelled far enough to count as a drag.
  function handleClick(event: MouseEvent<HTMLDivElement>) {
    const movedX = Math.abs(event.clientX - pressOrigin.current.x);
    const movedY = Math.abs(event.clientY - pressOrigin.current.y);
    if (movedX > 6 || movedY > 6) return;
    emblaApi?.scrollNext();
  }

  return (
    <section
      id="case-studies"
      className="text-navy"
      style={{ backgroundImage: "var(--ewg-gradient-case)" }}
    >
      <ArrowCursor>
        <div className="ewg-container pt-20 lg:pt-28">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="ewg-eyebrow text-orange">{caseStudies.eyebrow}</p>
              <h2 className="mt-4 font-headline text-[2.1rem] leading-[1.14] font-bold tracking-tight sm:text-[2.6rem] lg:text-[3rem]">
                <span className="ewg-heading-ink">{caseStudies.headerLead}</span>{" "}
                <span>{caseStudies.headerRest}</span>
              </h2>
            </div>
            <Button href={caseStudies.cta.href} variant="light" className="shrink-0">
              {caseStudies.cta.label}
            </Button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden pb-20 lg:mt-14 lg:pb-28" ref={emblaRef}>
          {/* Gaps live as slide padding rather than `gap`, otherwise the
              loop drops the space between the last and first slide. */}
          <div
            className="-ml-6 flex touch-pan-y lg:-ml-8"
            onPointerDown={handlePointerDown}
            onClick={handleClick}
          >
            {caseStudies.items.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="group min-w-0 shrink-0 grow-0 basis-[88%] pl-6 sm:basis-[66%] lg:basis-[56%] lg:pl-8"
              >
                <div className="relative aspect-video overflow-hidden rounded-3xl lg:aspect-2/1">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 56vw, 88vw"
                    quality={90}
                    className="ewg-zoom-image object-cover"
                  />
                </div>
                <h3 className="mt-7 max-w-lg font-headline text-2xl leading-snug font-bold lg:text-[1.75rem]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-xl leading-7 text-navy/70">{item.body}</p>
                <p className="mt-5 text-sm font-bold italic">{item.metrics}</p>
              </article>
            ))}
          </div>
        </div>
      </ArrowCursor>
    </section>
  );
}
