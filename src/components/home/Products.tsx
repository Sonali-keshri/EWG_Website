"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { products } from "@/lib/content";

/* Scroll-driven stacking cards.

   A card's "offset" from the current progress tells us its role:
     offset < 0  -> hasn't arrived yet, sitting below the viewport,
                    sliding up into the front slot as you scroll
     offset == 0 -> currently the front card
     offset > 0  -> was the front before, now recedes into the peeking
                    stack above (lifted up + narrowed), never disappearing
                    until it's gone MAX_DEPTH layers deep */
const BASE_DROP = 42; // how far below center the front card sits
const ENTER_DISTANCE = 560; // how far below the front slot an incoming card starts
const INSET_STEP = 22; // px trimmed off each side, per depth back
const LIFT_STEP = 20; // px raised up, per depth back
const MAX_DEPTH = 2; // how many old cards stay visible as peeks

/* Wheel/touch input nudges a target value; the displayed value glides toward
   it every frame, so it stays smooth however choppy the raw input is. */
const EASE = 0.14;
const SENSITIVITY = 0.0016;

export function Products() {
  const cards = products.cards;
  const total = cards.length;

  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const targetRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [hintVisible, setHintVisible] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let displayed = 0;
    let frame = 0;
    let sectionActive = false;
    let touchStartY: number | null = null;
    let lastActive = -1;
    let lastHint: boolean | null = null;
    const desktopMq = window.matchMedia("(min-width: 1024px)");

    const isDesktop = () => desktopMq.matches;

    const render = (progress: number) => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const offset = progress - index;
        let inset: number;
        let translateY: number;
        let opacity: number;

        if (offset >= 0) {
          const depth = Math.min(offset, MAX_DEPTH + 0.4);
          inset = depth * INSET_STEP;
          translateY = BASE_DROP - depth * LIFT_STEP;
          opacity = depth > MAX_DEPTH ? Math.max(0, (MAX_DEPTH + 0.4 - depth) / 0.4) : 1;
        } else {
          const entering = Math.max(-1, offset);
          inset = 0;
          translateY = BASE_DROP + -entering * ENTER_DISTANCE;
          opacity = 1;
        }

        card.style.left = `${inset}px`;
        card.style.right = `${inset}px`;
        card.style.transform = `translate3d(0, ${translateY}px, 0)`;
        card.style.opacity = `${opacity}`;
        card.style.zIndex = `${100 + index}`;
        card.style.filter = offset > 0.05 ? "brightness(0.97)" : "none";
      });

      const nextActive = Math.max(0, Math.min(total - 1, Math.round(progress)));
      if (nextActive !== lastActive) {
        lastActive = nextActive;
        setActiveIndex(nextActive);
      }

      const nextHint = progress <= 0.05;
      if (nextHint !== lastHint) {
        lastHint = nextHint;
        setHintVisible(nextHint);
      }
    };

    const tick = () => {
      displayed += (targetRef.current - displayed) * EASE;
      if (Math.abs(targetRef.current - displayed) < 0.0008) displayed = targetRef.current;
      render(displayed);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const syncFromPageScroll = () => {
      if (isDesktop()) return;
      const max = section.offsetHeight - window.innerHeight;
      if (max <= 0) {
        targetRef.current = 0;
        return;
      }
      const t = Math.max(0, Math.min(1, -section.getBoundingClientRect().top / max));
      targetRef.current = t * (total - 1);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionActive = entry.intersectionRatio > 0.45;
        });
      },
      { threshold: [0, 0.45, 0.6, 1] },
    );
    observer.observe(section);

    const onWheel = (event: WheelEvent) => {
      if (!isDesktop() || !sectionActive) return;

      const atStart = targetRef.current <= 0;
      const atEnd = targetRef.current >= total - 1;
      const goingDown = event.deltaY > 0;
      const goingUp = event.deltaY < 0;

      if ((atStart && goingUp) || (atEnd && goingDown)) return;

      event.preventDefault();
      targetRef.current = Math.max(
        0,
        Math.min(total - 1, targetRef.current + event.deltaY * SENSITIVITY),
      );
    };

    const onTouchStart = (event: TouchEvent) => {
      if (!isDesktop() || !sectionActive) return;
      touchStartY = event.touches[0].clientY;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!isDesktop() || !sectionActive || touchStartY === null) return;

      const y = event.touches[0].clientY;
      const deltaY = touchStartY - y;
      const atStart = targetRef.current <= 0;
      const atEnd = targetRef.current >= total - 1;

      if ((atStart && deltaY < 0) || (atEnd && deltaY > 0)) {
        touchStartY = y;
        return;
      }

      event.preventDefault();
      targetRef.current = Math.max(
        0,
        Math.min(total - 1, targetRef.current + deltaY * SENSITIVITY * 2.2),
      );
      touchStartY = y;
    };

    const onTouchEnd = () => {
      touchStartY = null;
    };

    window.addEventListener("scroll", syncFromPageScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);
    desktopMq.addEventListener("change", syncFromPageScroll);
    syncFromPageScroll();
    render(0);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", syncFromPageScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      desktopMq.removeEventListener("change", syncFromPageScroll);
    };
  }, [total]);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative max-lg:h-[calc(100svh+((var(--ewg-product-slides)-1)*80svh))] lg:h-screen"
      style={{ ["--ewg-product-slides" as string]: total }}
    >
      <div className="flex flex-col items-center justify-center overflow-hidden py-6 max-lg:sticky max-lg:top-0 max-lg:h-[100svh] lg:h-full lg:py-0">
      {/* Frame carries the navbar-width padding; the cards are absolute, so they
          fill its content box instead of being inset by it. */}
      <div className="ewg-card-frame">
        <div className="relative h-[min(34rem,78svh)] w-full lg:h-[470px]">
          {cards.map((card, index) => (
            <article
              key={card.name}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className="ewg-stack-card ewg-card-inset absolute top-0 right-0 left-0 grid h-full grid-rows-[auto_1fr] gap-4 overflow-hidden rounded-[1.75rem] bg-white py-5 text-navy shadow-[0_30px_60px_-20px_rgba(14,55,73,0.28)] lg:grid-cols-[1.1fr_1fr] lg:grid-rows-1 lg:gap-10 lg:py-12"
            >
              <div className="flex min-w-0 flex-col justify-center">
                <p className="ewg-eyebrow !text-orange">{products.eyebrow}</p>
                <h3 className="mt-3.5 font-headline text-[1.5rem] leading-[1.16] font-medium ewg-gradient-text-dark lg:text-[2rem]">
                  {card.name} — {card.tagline}
                </h3>
                <p className="mt-4 max-w-[46ch] text-[0.92rem] leading-[1.6] text-navy/70 lg:text-[0.97rem]">
                  {card.body}
                </p>
                <p className="mt-5 font-sans text-[0.95rem] font-medium italic text-navy">
                  {card.metrics.join(" · ")}
                </p>
                <Button href={products.cardCta.href} variant="light" className="mt-8 self-start lg:mt-10">
                  {products.cardCta.label}
                </Button>
              </div>
              <div className="relative min-h-[9rem] min-w-0 overflow-hidden rounded-[1.25rem] bg-navy/10">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 520px, 92vw"
                  priority={index === 0}
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="relative z-[200] mt-[26px] flex items-center gap-2">
        {cards.map((card, index) => (
          <button
            key={card.name}
            type="button"
            aria-label={`Show ${card.name}`}
            aria-current={index === activeIndex}
            onClick={() => {
              if (window.matchMedia("(min-width: 1024px)").matches) {
                targetRef.current = index;
                return;
              }
              const section = sectionRef.current;
              if (!section) return;
              const max = section.offsetHeight - window.innerHeight;
              const t = total <= 1 ? 0 : index / (total - 1);
              const top = window.scrollY + section.getBoundingClientRect().top + t * max;
              window.scrollTo({ top, behavior: "smooth" });
            }}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === activeIndex ? "w-[22px] bg-orange" : "w-2 bg-white/25 hover:bg-white/45",
            )}
          />
        ))}
      </div>

      <div
        className="pointer-events-none absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 text-[12px] tracking-normal text-white/70 transition-opacity duration-300"
        style={{ opacity: hintVisible ? 0.8 : 0 }}
        aria-hidden="true"
      >
        <span>SCROLL</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="ewg-hint-bob">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      </div>
    </section>
  );
}
