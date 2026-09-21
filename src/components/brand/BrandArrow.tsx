import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

export type ArrowTone = "lime" | "orange" | "pattern" | "ice" | "navy";

type BrandArrowProps = {
  size?: number;
  tone?: ArrowTone;
  animate?: boolean;
  className?: string;
};

/** Drop these on any SVG to drive the shared dual-tone arrow classes. */
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
  size = 20,
  tone = "lime",
  animate = false,
  className,
}: BrandArrowProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={cn("shrink-0 transition-transform duration-300", animate && "ewg-arrow-animated", className)}
      style={arrowToneVars[tone]}
      aria-hidden="true"
    >
      <path className="ewg-arrow-dark" d="M22 6h32v32H44V16H22V6Z" />
      <path className="ewg-arrow-light" d="M10 18h32v32H32V28H10V18Z" />
    </svg>
  );
}
