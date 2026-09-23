"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandArrow } from "@/components/brand/BrandArrow";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  type?: "button" | "submit";
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
  type = "button",
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

  const classNames = cn(
    "group inline-flex h-10 cursor-pointer items-center justify-center gap-2.5 rounded-full border px-6 font-sans text-[0.95rem] font-medium tracking-normal transition-colors duration-300",
    isActive
      ? "border-lime bg-lime text-navy"
      : variant === "light"
        ? "border-navy bg-sage text-navy"
        : "border-white/90 bg-transparent text-white",
    className,
  );

  const handlers = {
    onMouseEnter: () => {
      setHovered(true);
      onMouseEnter?.();
    },
    onMouseLeave: () => setHovered(false),
    onFocus: () => {
      setHovered(true);
      onFocus?.();
    },
    onBlur: () => setHovered(false),
  };

  const inner = (
    <>
      <span>{children}</span>
      {showArrow ? (
        <BrandArrow
          size={20}
          tone={isActive ? "navy" : "orange"}
          animate
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classNames} {...handlers}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} className={classNames} {...handlers}>
      {inner}
    </button>
  );
}
