"use client";

import useEmblaCarousel from "embla-carousel-react";
import { stackIcons } from "@/components/practices/stackIcons";
import { CarouselButtons } from "@/components/ui/CarouselButtons";
import { EdgeCard } from "@/components/ui/EdgeCard";
import { alignToContainer } from "@/lib/carousel";
import { oracleStack } from "@/lib/content";

export function OracleStack() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: alignToContainer,
    duration: 32,
  });

  return (
    <section id="what-we-cover" className="bg-white text-navy">
      <div className="ewg-container ">
        <div className="flex items-start justify-between gap-8">
          <div>
            <p className="ewg-eyebrow text-orange">{oracleStack.eyebrow}</p>
            <h2 className="mt-5 font-headline text-[2.1rem] leading-[1.14] font-bold tracking-tight sm:text-[2.6rem] lg:text-[3.15rem]">
              <span className="ewg-heading-ink">{oracleStack.headerLine1}</span>
              <br />
              <span>{oracleStack.headerLine2}</span>
            </h2>
          </div>
          <CarouselButtons
            className="pt-6"
            surface="light"
            prevTone="orange"
            nextTone="orange"
            onPrev={() => emblaApi?.scrollPrev()}
            onNext={() => emblaApi?.scrollNext()}
            prevLabel="Previous stack"
            nextLabel="Next stack"
          />
        </div>
      </div>

      <div className="mt-12 overflow-hidden pb-20 lg:mt-16 lg:pb-28 px-10" ref={emblaRef}>
        <div className="-ml-5 flex touch-pan-y lg:-ml-6">
          {oracleStack.cards.map((card) => (
            <div
              key={card.title}
              className="min-w-0 shrink-0 grow-0 basis-[78%] pl-5 sm:basis-[48%] lg:basis-[23%] lg:pl-6"
            >
              <EdgeCard title={card.title} body={card.body} icon={stackIcons[card.icon]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
