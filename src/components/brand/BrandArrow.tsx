import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

export type ArrowTone = "lime" | "orange" | "pattern" | "ice" | "navy";

type BrandArrowProps = {
  size?: number;
  tone?: ArrowTone;
  animate?: boolean;
  className?: string;
};

/** Drop these on any host to drive the shared dual-tone arrow classes. */
export const arrowToneVars: Record<ArrowTone, CSSProperties & Record<string, string>> = {
  lime: {
    "--ewg-arrow-light": "var(--ewg-lime-light)",
    "--ewg-arrow-dark": "var(--ewg-lime-dark)",
  },
  orange: {
    "--ewg-arrow-light": "var(--ewg-orange-soft)",
    "--ewg-arrow-dark": "var(--ewg-orange)",
  },
  pattern: {
    "--ewg-arrow-light": "var(--ewg-pattern-light)",
    "--ewg-arrow-dark": "var(--ewg-pattern-dark)",
  },
  ice: {
    "--ewg-arrow-light": "var(--ewg-ice-light)",
    "--ewg-arrow-dark": "var(--ewg-ice-dark)",
  },
  navy: {
    "--ewg-arrow-light": "var(--ewg-navy-soft)",
    "--ewg-arrow-dark": "var(--ewg-navy)",
  },
};

export function BrandArrow({
  size = 18,
  tone = "lime",
  animate = false,
  className,
}: BrandArrowProps) {
  // Marks sit on opposite corners; anything under half the box leaves a diagonal gap.
  const piece = Math.round(size * 0.70);

  return (
    <span
      aria-hidden="true"
      className={cn("relative inline-block shrink-0", animate && "ewg-arrow-animated", className)}
      style={{ width: size, height: size, ...arrowToneVars[tone] }}
    >
      <span
        className="ewg-arrow-mark ewg-arrow-dark"
        style={{ width: piece, height: piece, top: 0, right: 0 }}
      />
      <span
        className="ewg-arrow-mark ewg-arrow-light"
        style={{ width: piece, height: piece, bottom: 0, left: 0 }}
      />
    </span>
  );
}
