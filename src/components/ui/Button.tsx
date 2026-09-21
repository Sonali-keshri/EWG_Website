"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandArrow } from "@/components/brand/BrandArrow";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  variant?: "dark" | "light";
  showArrow?: boolean;
  className?: string;
  onMouseEnter?: () => void;
  onFocus?: () => void;
};

export function Button({
  href,
  children,
  active,
  variant = "dark",
  showArrow = true,
  className,
  onMouseEnter,
  onFocus,
}: ButtonProps) {
  const [hovered, setHovered] = useState(false);
  const isActive = active ?? hovered;

  return (
    <Link
      href={href}
      onMouseEnter={() => {
        setHovered(true);
        onMouseEnter?.();
      }}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => {
        setHovered(true);
        onFocus?.();
      }}
      onBlur={() => setHovered(false)}
      className={cn(
        "group inline-flex h-12 items-center justify-center gap-2.5 rounded-full border px-6 text-[0.95rem] font-medium tracking-tight transition-colors duration-300",
        isActive
          ? "border-lime bg-lime text-navy"
          : variant === "light"
            ? "border-navy bg-sage text-navy"
            : "border-white/90 bg-transparent text-white",
        className,
      )}
    >
      <span>{children}</span>
      {showArrow ? (
        <BrandArrow
          size={16}
          tone={isActive ? "navy" : "orange"}
          animate
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      ) : null}
    </Link>
  );
}
