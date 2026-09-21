import { arrowToneVars, type ArrowTone } from "@/components/brand/BrandArrow";
import { cn } from "@/lib/cn";

function DoubleChevron({ direction, tone }: { direction: "prev" | "next"; tone: ArrowTone }) {
  return (
    <svg
      viewBox="0 0 28 20"
      aria-hidden="true"
      style={arrowToneVars[tone]}
      className={cn("ewg-arrow-animated h-5 w-7", direction === "prev" && "rotate-180")}
    >
      <path
        className={direction === "prev" ? "ewg-arrow-dark" : "ewg-arrow-light"}
        d="M0 0L7.5 10L0 20H6L13.5 10L6 0Z"
      />
      <path
        className={direction === "prev" ? "ewg-arrow-light" : "ewg-arrow-dark"}
        d="M14.5 0L22 10L14.5 20H20.5L28 10L20.5 0Z"
      />
    </svg>
  );
}

type Surface = "light" | "dark" | "ink";

const surfaceClass: Record<Surface, string> = {
  light: "bg-navy hover:bg-navy-mid",
  dark: "bg-shade/50 hover:bg-shade/70",
  ink: "bg-ink-deep hover:bg-navy",
};

type CarouselButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
  tone?: ArrowTone;
  surface?: Surface;
  disabled?: boolean;
  className?: string;
};

export function CarouselButton({
  direction,
  onClick,
  label,
  tone = "orange",
  surface = "dark",
  disabled = false,
  className,
}: CarouselButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "group flex h-14 w-14 shrink-0 items-center justify-center rounded-full transition-colors disabled:opacity-40 lg:h-16 lg:w-16",
        surfaceClass[surface],
        className,
      )}
    >
      <DoubleChevron direction={direction} tone={tone} />
    </button>
  );
}

type CarouselButtonsProps = {
  onPrev: () => void;
  onNext: () => void;
  prevLabel?: string;
  nextLabel?: string;
  prevTone?: ArrowTone;
  nextTone?: ArrowTone;
  surface?: Surface;
  className?: string;
};

export function CarouselButtons({
  onPrev,
  onNext,
  prevLabel = "Previous slide",
  nextLabel = "Next slide",
  prevTone = "orange",
  nextTone = "orange",
  surface = "dark",
  className,
}: CarouselButtonsProps) {
  return (
    <div className={cn("flex shrink-0 gap-3 lg:gap-4", className)}>
      <CarouselButton direction="prev" onClick={onPrev} label={prevLabel} tone={prevTone} surface={surface} />
      <CarouselButton direction="next" onClick={onNext} label={nextLabel} tone={nextTone} surface={surface} />
    </div>
  );
}
