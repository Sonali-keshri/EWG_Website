"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { contactCta } from "@/lib/content";

export function ContactCta() {
  const [active, setActive] = useState<"primary" | "secondary">("primary");

  return (
    <section id="contact" className="overflow-x-clip bg-white text-navy">
      <div className="ewg-container grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* Still PNG and GIF share one box so the animation lights and
            darkens the same arrow positions, matching the Figma field. */}
        <div
          className="pointer-events-none relative mx-auto aspect-[622/608] w-full max-w-[26rem] lg:max-w-[32rem]"
          aria-hidden="true"
        >
          <Image
            src="/EWG_Arrows.png"
            alt=""
            fill
            unoptimized
            sizes="(min-width: 800px) 28rem, 18rem"
            className="ewg-arrow-on-white object-contain opacity-40"
          />
          <Image
            src="/images/EWG_Arrows.gif"
            alt=""
            fill
            unoptimized
            sizes="(min-width: 800px) 28rem, 18rem"
            className="ewg-arrow-on-white object-contain"
          />
        </div>
        <div>
          <p className="ewg-eyebrow text-orange">{contactCta.eyebrow}</p>
          <h2 className="mt-4 font-headline text-[2.1rem] leading-[1.14] font-medium tracking-normal sm:text-[2.5rem] lg:text-[2.85rem]">
            <span className="ewg-heading-ink">{contactCta.headerLine1}</span>
            <br />
            <span>{contactCta.headerLine2}</span>
          </h2>
          <p className="mt-6 max-w-lg leading-7 text-navy/70">{contactCta.body}</p>
          <div
            className="mt-10 flex flex-wrap items-center gap-4"
            onMouseLeave={() => setActive("primary")}
          >
            <Button
              href="/contact"
              variant="light"
              active={active === "primary"}
              onMouseEnter={() => setActive("primary")}
              onFocus={() => setActive("primary")}
            >
              {contactCta.primaryCta.label}
            </Button>
            <Button
              href="/contact"
              variant="light"
              active={active === "secondary"}
              onMouseEnter={() => setActive("secondary")}
              onFocus={() => setActive("secondary")}
            >
              {contactCta.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
