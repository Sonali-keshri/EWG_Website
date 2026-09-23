"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
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
      className="overflow-x-clip pb-20 text-white lg:pb-28"
      style={{ backgroundImage: "var(--ewg-gradient-industries)" }}
    >
      <div className="ewg-container pt-16 lg:pt-24">
        <div className="flex items-center justify-between gap-8">
          <div>
            <p className="ewg-eyebrow text-orange">{testimonials.eyebrow}</p>
            <h2
              id="testimonials-heading"
              className="mt-5 font-headline text-[2.1rem] leading-[1.08] font-[500] tracking-normal sm:text-[2.6rem] lg:text-[3.5rem]"
            >
              <span className="ewg-heading-light">{testimonials.headerLine1}</span>
              <br />
              <span>{testimonials.headerLine2}</span>
            </h2>
          </div>
          <CarouselButtons
            surface="ink"
            className="pt-2"
            onPrev={() => emblaApi?.scrollPrev()}
            onNext={() => emblaApi?.scrollNext()}
            prevLabel="Previous testimonial"
            nextLabel="Next testimonial"
          />
        </div>
      </div>

      <div
        id="testimonials-carousel"
        className="mt-12 overflow-hidden lg:mt-14"
        style={{
          marginLeft: "var(--ewg-content-start)",
          width: "calc(100% - var(--ewg-content-start))",
        }}
        ref={emblaRef}
      >
        <div className="flex touch-pan-y" style={{ marginLeft: "calc(var(--ewg-slide-gap) * -1)" }}>
          {slides.map((item, index) => (
            <div
              key={`${item.role}-${index}`}
              className="flex min-w-0 shrink-0 grow-0 basis-[86%] sm:basis-[58%] lg:basis-[42%]"
              style={{ paddingLeft: "var(--ewg-slide-gap)" }}
            >
              <article
                className="flex w-full flex-col rounded-[50px] px-8 py-7 sm:px-10 sm:py-8 lg:px-12 lg:py-10"
                style={{ backgroundImage: "var(--ewg-gradient-card-dark)" }}
              >
                <Image
                  src="/images/quoteIcon.png"
                  alt=""
                  width={60}
                  height={64}
                 
                />
                <div className="mt-5 flex min-h-0 flex-1 flex-col pl-8 lg:mt-6 lg:pl-12">
                  <p className="max-w-[34rem] text-[0.95rem] leading-[1.55] text-white lg:text-base">
                    {item.quote}
                  </p>
                  <div className="mt-auto pt-12">
                    <p className="font-headline text-base font-medium tracking-normal text-orange lg:text-lg">
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
