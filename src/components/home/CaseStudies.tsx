"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useRef } from "react";
import type { PointerEvent, MouseEvent } from "react";
import { DarkArrowCursor } from "@/components/ui/ArrowCursor";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/lib/content";

export function CaseStudies() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", duration: 32 },
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
      <DarkArrowCursor>
        <div className="ewg-container pt-12 lg:pt-28">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="ewg-eyebrow text-orange">{caseStudies.eyebrow}</p>
              <h2
                id="case-studies-heading"
                className="mt-4 font-headline text-[1.75rem] leading-[1.12] font-medium tracking-normal sm:text-[2.2rem] lg:text-[3rem]"
              >
                <span className="ewg-gradient-text-dark">{caseStudies.headerLead} {caseStudies.headerRest}</span>{" "}
              
              </h2>
            </div>
            <Button href={caseStudies.cta.href} variant="light" className="shrink-0">
              {caseStudies.cta.label}
            </Button>
          </div>
        </div>

        {/* Viewport starts on the "Featured Works" line and bleeds right.
            Slide padding is only the gap; the negative track margin cancels
            it so the photo, not the padding, sits on that line. */}
        <div
          id="case-studies-carousel"
          className="mt-8 overflow-hidden pb-14 lg:mt-14 lg:pb-28"
          style={{
            marginLeft: "var(--ewg-content-start)",
            width: "calc(100% - var(--ewg-content-start))",
          }}
          ref={emblaRef}
        >
          <div
            className="flex touch-pan-y"
            style={{ marginLeft: "calc(var(--ewg-slide-gap) * -1)" }}
            onPointerDown={handlePointerDown}
            onClick={handleClick}
          >
            {caseStudies.items.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="group min-w-0 shrink-0 grow-0 basis-[88vw] sm:basis-[66vw] lg:basis-[56vw]"
                style={{ paddingLeft: "var(--ewg-slide-gap)" }}
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
                <div className="mt-5 max-w-xl pl-1 lg:mt-7 lg:pl-12">
                  <h3 className="font-headline text-2xl leading-snug font-medium lg:text-[1.75rem]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-navy/70">{item.body}</p>
                  <p className="mt-5 font-sans text-sm font-medium italic">{item.metrics}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </DarkArrowCursor>
    </section>
  );
}
