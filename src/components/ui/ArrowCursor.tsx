"use client";

import { useState } from "react";
import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { BrandArrow } from "@/components/brand/BrandArrow";
import { cn } from "@/lib/cn";

type ArrowCursorShellProps = {
  children: ReactNode;
  className?: string;
  circleStyle: CSSProperties;
  arrowColors: { dark: string; light: string };
};

function ArrowCursorShell({
  children,
  className,
  circleStyle,
  arrowColors,
}: ArrowCursorShellProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  function track(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    setPosition({ x: event.clientX, y: event.clientY });
    setVisible(true);
  }

  return (
    <div
      className={cn("relative lg:cursor-none", className)}
      onPointerMove={track}
      onPointerLeave={() => setVisible(false)}
    >
      {children}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-250 hidden transition-transform duration-100 ease-out lg:block",
          !visible && "opacity-0",
        )}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      >
        <span
          className={cn(
            "flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-[0_12px_36px_-14px_rgba(0,0,0,0.65)] transition-opacity duration-200",
            visible ? "opacity-100" : "opacity-0",
          )}
          style={circleStyle}
        >
          <BrandArrow
            size={66}
            mark="big"
            animate
            className="ewg-cursor-blink"
            colors={arrowColors}
          />
        </span>
      </div>
    </div>
  );
}

/** Home case studies. Same cursor as before; navy circle + ice arrows. */
export function DarkArrowCursor({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <ArrowCursorShell
      className={className}
      circleStyle={{ backgroundColor: "#0E3749" }}
      arrowColors={{
        dark: "#A5E5EB",
        light: "color-mix(in srgb, #A5E5EB 50%, transparent)",
      }}
    >
      {children}
    </ArrowCursorShell>
  );
}

/** Industries. Same cursor; lime → ice circle + ice arrows. */
export function LightArrowCursor({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <ArrowCursorShell
      className={className}
      circleStyle={{
        backgroundImage: "linear-gradient(to bottom right, #BDCC89 0%, #B3E4EB 100%)",
      }}
      arrowColors={{
        dark: "#0E3749",
        light: "color-mix(in srgb, #0E3749 50%, white)",
      }}
    >
      {children}
    </ArrowCursorShell>
  );
}
