"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { contactCta } from "@/lib/content";

export function ContactCta() {
  const [active, setActive] = useState<"primary" | "secondary">("primary");

  return (
    <section id="contact" className="overflow-x-clip bg-white text-navy">
      <div className="ewg-container flex flex-col-reverse items-center gap-10 py-14 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
        <div className="pointer-events-none relative mx-auto hidden aspect-[622/608] w-full max-w-[32rem] lg:block"
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
            className="ewg-gif-knock-black object-contain"
          />
        </div>
        <div className="w-full">
          <p className="ewg-eyebrow text-orange">{contactCta.eyebrow}</p>
          <h2 className="mt-4 font-headline text-[2.1rem] leading-[1.14] font-medium tracking-normal sm:text-[2.5rem] lg:text-[2.85rem]">
            <span className="ewg-heading-ink">{contactCta.headerLine1}</span>
            <br />
            <span>{contactCta.headerLine2}</span>
          </h2>
          <p className="mt-6 max-w-lg leading-7 text-navy/70">{contactCta.body}</p>
          <div
            className="ewg-cta-row"
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
