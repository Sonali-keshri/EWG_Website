"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { hero } from "@/lib/content";

export function HeroActions() {
  const [active, setActive] = useState<"primary" | "secondary">("primary");

  return (
    <div
      className="mt-6 flex flex-wrap items-center gap-4 lg:mt-10 lg:gap-10"
      onMouseLeave={() => setActive("primary")}
    >
      <Button
        href={hero.primaryCta.href}
        active={active === "primary"}
        onMouseEnter={() => setActive("primary")}
        onFocus={() => setActive("primary")}
      >
        {hero.primaryCta.label}
      </Button>
      <Button
        href={hero.secondaryCta.href}
        active={active === "secondary"}
        onMouseEnter={() => setActive("secondary")}
        onFocus={() => setActive("secondary")}
      >
        {hero.secondaryCta.label}
      </Button>
    </div>
  );
}
