"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { LightArrowCursor } from "@/components/ui/ArrowCursor";
import { Button } from "@/components/ui/Button";
import { industriesPage } from "@/lib/content";

export function IndustriesShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: 32,
    skipSnaps: false,
  });
  const [progress, setProgress] = useState(0);

  const syncProgress = useCallback(() => {
    if (!emblaApi) return;
    setProgress(Math.min(1, Math.max(0, emblaApi.scrollProgress())));
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    syncProgress();
    emblaApi.on("scroll", syncProgress);
    emblaApi.on("reInit", syncProgress);
    emblaApi.on("select", syncProgress);
    return () => {
      emblaApi.off("scroll", syncProgress);
      emblaApi.off("reInit", syncProgress);
      emblaApi.off("select", syncProgress);
    };
  }, [emblaApi, syncProgress]);

  function seek(event: MouseEvent<HTMLButtonElement>) {
    if (!emblaApi) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const t = (event.clientX - rect.left) / rect.width;
    const last = emblaApi.scrollSnapList().length - 1;
    emblaApi.scrollTo(Math.round(t * last));
  }

  return (
    <section
      className="min-h-screen text-white"
      style={{ backgroundImage: "var(--ewg-gradient-industries)" }}
    >
      <div className="ewg-container pt-28 pb-10 lg:pt-32 lg:pb-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-[42rem]">
            <p className="ewg-eyebrow text-orange">{industriesPage.eyebrow}</p>
            <h1 className="mt-4 font-headline text-[2.4rem] leading-[1.09] font-medium tracking-normal sm:text-[3.2rem] lg:text-[4rem] lg:leading-[4.375rem]">
              <span className="ewg-gradient-text">{industriesPage.headerLine1}</span>
              <br />
              <span>{industriesPage.headerLine2}</span>
            </h1>
          </div>
          <p className="max-w-[28rem] text-[0.95rem] leading-[1.7] tracking-normal text-white/80 lg:pb-2">
            {industriesPage.body}
          </p>
        </div>
      </div>

      <LightArrowCursor>
        <div
          className="overflow-hidden"
          style={{
            marginLeft: "var(--ewg-content-start)",
            width: "calc(100% - var(--ewg-content-start))",
          }}
          ref={emblaRef}
        >
          <div
            className="flex touch-pan-y"
            style={{ marginLeft: "calc(var(--ewg-slide-gap) * -1)" }}
          >
            {industriesPage.slides.map((slide) => (
              <article
                key={slide.title}
                className="min-w-0 shrink-0 grow-0 basis-[92%] sm:basis-[78%] lg:basis-[62%]"
                style={{ paddingLeft: "var(--ewg-slide-gap)" }}
              >
                <div className="grid h-full overflow-hidden rounded-[2rem] bg-navy-dark md:grid-cols-[1.08fr_1fr]">
                  <div className="relative aspect-[4/3] min-h-[16rem] md:aspect-auto md:min-h-[24rem] lg:min-h-[26rem]">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      sizes="(min-width: 1024px) 32vw, 90vw"
                      quality={90}
                      className="object-cover grayscale"
                    />
                  </div>
                  <div className="flex flex-col px-7 py-8 lg:px-10 lg:py-10">
                    <p className="ewg-eyebrow text-orange">{slide.eyebrow}</p>
                    <h2 className="ewg-heading-ink mt-4 font-headline text-[1.65rem] leading-[1.15] font-medium tracking-normal lg:text-[2rem]">
                      {slide.title}
                    </h2>
                    <p className="mt-5 max-w-[22rem] text-[0.95rem] leading-[1.65] tracking-normal text-white/80 ">
                      {slide.body}
                    </p>
                    <Button href={slide.href} className="mt-8 w-fit lg:mt-auto">
                      {industriesPage.ctaLabel}
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </LightArrowCursor>

      <div className="ewg-container pt-10 pb-16 lg:pt-12 lg:pb-20">
        <button
          type="button"
          aria-label="Industry slides progress"
          onClick={seek}
          className="relative block h-3.5 w-full overflow-hidden rounded-full border border-navy bg-white"
        >
          <span
            className="absolute inset-y-0 left-0 bg-lime"
            style={{ width: `${progress * 100}%` }}
          />
        </button>
      </div>
    </section>
  );
}
