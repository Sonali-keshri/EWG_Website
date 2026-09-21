"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { CarouselButtons } from "@/components/ui/CarouselButtons";
import { alignToContainer } from "@/lib/carousel";
import { testimonials } from "@/lib/content";

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
          <CarouselButtons
            className="pt-6"
            onPrev={() => emblaApi?.scrollPrev()}
            onNext={() => emblaApi?.scrollNext()}
            prevLabel="Previous testimonial"
            nextLabel="Next testimonial"
          />
        </div>
      </div>

      <div className="mt-12 mx-20 overflow-hidden lg:mt-16" ref={emblaRef}>
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
