import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

export type ArrowTone = "lime" | "orange" | "pattern" | "ice" | "navy";

type BrandArrowProps = {
  size?: number;
  tone?: ArrowTone;
  animate?: boolean;
  className?: string;
  mark?: "default" | "big";
  colors?: { dark: string; light: string };
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
    "--ewg-arrow-light": "color-mix(in srgb, #0E3749 50%, white)",
    "--ewg-arrow-dark": "#0E3749",
  },
};

export function BrandArrow({
  size = 18,
  tone = "lime",
  animate = false,
  mark = "default",
  className,
  colors,
}: BrandArrowProps) {
  const piece = Math.round(size * 0.7);

  const vars = colors
    ? ({
        "--ewg-arrow-dark": colors.dark,
        "--ewg-arrow-light": colors.light,
      } as CSSProperties & Record<string, string>)
    : arrowToneVars[tone];

  const markClass = cn("ewg-arrow-mark", mark === "big" && "ewg-arrow-mark-big");

  return (
    <span
      aria-hidden="true"
      className={cn("relative inline-block shrink-0", animate && "ewg-arrow-animated", className)}
      style={{ width: size, height: size, ...vars }}
    >
      <span
        className={cn(markClass, "ewg-arrow-dark")}
        style={{ width: piece, height: piece, top: 0, right: 0 }}
      />
      <span
        className={cn(markClass, "ewg-arrow-light")}
        style={{ width: piece, height: piece, bottom: 0, left: 0 }}
      />
    </span>
  );
}
