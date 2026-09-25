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
        "group flex shrink-0 cursor-pointer items-center justify-center overflow-visible rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-40",
        className ?? "h-9 w-9 lg:h-16 lg:w-16",
        surfaceClass[surface],
      )}
    >
      <BrandArrow
        size={16}
        tone={tone}
        animate
        className={cn(
          "origin-center lg:scale-[1.75]",
          direction === "prev" && "-rotate-135",
          direction === "next" && "rotate-45",
        )}
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
  buttonClassName?: string;
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
  buttonClassName,
}: CarouselButtonsProps) {
  return (
    <div className={cn("flex shrink-0 items-center gap-2.5 lg:gap-4", className)}>
      <CarouselButton
        direction="prev"
        onClick={onPrev}
        label={prevLabel}
        tone={prevTone}
        surface={surface}
        className={buttonClassName}
      />
      <CarouselButton
        direction="next"
        onClick={onNext}
        label={nextLabel}
        tone={nextTone}
        surface={surface}
        className={buttonClassName}
      />
    </div>
  );
}
