"use client";

import { useState } from "react";
import type { PointerEvent, ReactNode } from "react";
import { BrandArrow } from "@/components/brand/BrandArrow";
import { cn } from "@/lib/cn";

type ArrowCursorProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Swaps the pointer for the blinking brand arrow while it sits inside this
 * region. Mouse only — touch and pen keep the native behaviour, and the
 * follower is suppressed below `lg` where there is no pointer to replace.
 */
export function ArrowCursor({ children, className }: ArrowCursorProps) {
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
            "flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy shadow-[0_12px_36px_-14px_rgba(0,0,0,0.65)] transition-opacity duration-200",
            visible ? "opacity-100" : "opacity-0",
          )}
        >
          <BrandArrow size={66} tone="ice" animate className="ewg-cursor-blink" />
        </span>
      </div>
    </div>
  );
}
