import { BrandArrow, type ArrowTone } from "@/components/brand/BrandArrow";
import { cn } from "@/lib/cn";

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
        "group flex h-24 w-24 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-40 lg:h-16 lg:w-16",
        surfaceClass[surface],
        className,
      )}
    >
      <BrandArrow
        size={28}
        tone={tone}
        animate
        className={cn("transition-transform duration-300", direction === "prev" && "-rotate-135",  direction === "next" && "rotate-45")}
      />
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
