"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { QuoteMarks } from "@/components/brand/QuoteMarks";
import { CarouselButtons } from "@/components/ui/CarouselButtons";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", duration: 32 },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  // Two quotes repeated so the loop can show the next card peeking in.
  const slides = [...testimonials.quotes, ...testimonials.quotes];

  return (
    <section
      id="testimonials"
      className="overflow-x-clip pb-14 text-white lg:pb-28"
      style={{ backgroundImage: "var(--ewg-gradient-industries)" }}
    >
      <div className="ewg-container pt-12 lg:pt-24">
        <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div>
            <p className="ewg-eyebrow text-orange">{testimonials.eyebrow}</p>
            <h2
              id="testimonials-heading"
              className="mt-4 font-headline text-[1.75rem] leading-[1.12] font-[500] tracking-normal sm:text-[2.2rem] lg:mt-5 lg:text-[3.5rem]"
            >
              <span className="ewg-heading-light">{testimonials.headerLine1}</span>
              <br />
              <span>{testimonials.headerLine2}</span>
            </h2>
          </div>
          <CarouselButtons
            surface="ink"
            buttonClassName="h-9 w-9 lg:h-16 lg:w-16"
            onPrev={() => emblaApi?.scrollPrev()}
            onNext={() => emblaApi?.scrollNext()}
            prevLabel="Previous testimonial"
            nextLabel="Next testimonial"
          />
        </div>
      </div>

      <div
        id="testimonials-carousel"
        className="mt-8 overflow-hidden lg:mt-14"
        ref={emblaRef}
        style={{
          marginLeft: "var(--ewg-content-start)",
          width: "calc(100% - var(--ewg-content-start))",
        }}
      >
        <div className="flex items-stretch touch-pan-y" style={{ marginLeft: "calc(var(--ewg-slide-gap) * -1)" }}>
          {slides.map((item, index) => (
            <div
              key={`${item.role}-${index}`}
              className="flex min-w-0 shrink-0 grow-0 basis-[86%] sm:basis-[58%] lg:basis-[42%]"
              style={{ paddingLeft: "var(--ewg-slide-gap)" }}
            >
              <article
                className="flex h-full min-h-[17.5rem] w-full flex-col rounded-[1.5rem] px-5 py-5 sm:rounded-[50px] sm:px-10 sm:py-8 lg:min-h-0 lg:px-12 lg:py-10"
                style={{ backgroundImage: "var(--ewg-gradient-card-dark)" }}
              >
                <QuoteMarks className="h-10 w-[2.75rem] shrink-0 lg:h-16 lg:w-[3.55rem]" />
                <div className="mt-3 flex min-h-0 flex-1 flex-col pl-0 lg:mt-6 lg:pl-12">
                  <p className="max-w-[34rem] text-[0.9rem] leading-[1.5] text-white lg:text-base">
                    {item.quote}
                  </p>
                  <div className="mt-auto pt-6 lg:pt-12">
                    <p className="font-headline text-[0.95rem] font-medium tracking-normal text-orange lg:text-lg">
                      {`${item.role},`}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-white">{item.org}</p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
