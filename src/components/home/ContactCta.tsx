"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { contactCta } from "@/lib/content";

export function ContactCta() {
  const [active, setActive] = useState<"primary" | "secondary">("primary");

  return (
    <section id="contact" className="overflow-hidden bg-white text-navy">
      <div className="ewg-container grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* Black in the GIF is treated as transparent via an SVG luminance
            filter, so the ice arrows keep their authored colour on white. */}
        <Image
          src="/images/EWG_Arrows.gif"
          alt=""
          width={622}
          height={608}
          unoptimized
          aria-hidden="true"
          className="ewg-gif-knock-black mx-auto h-auto w-full max-w-[16rem] lg:max-w-[18rem]"
        />
        <div>
          <p className="ewg-eyebrow text-orange">{contactCta.eyebrow}</p>
          <h2 className="mt-4 font-headline text-[2.1rem] leading-[1.14] font-bold tracking-tight sm:text-[2.5rem] lg:text-[2.85rem]">
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
              href={contactCta.primaryCta.href}
              variant="light"
              active={active === "primary"}
              onMouseEnter={() => setActive("primary")}
              onFocus={() => setActive("primary")}
            >
              {contactCta.primaryCta.label}
            </Button>
            <Button
              href={contactCta.secondaryCta.href}
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
