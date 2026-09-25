"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/cn";

const SHOW_DURATION_MS = 2800;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hovered, setHovered] = useState(false);
  const lastY = useRef(0);
  const hideTimer = useRef<number | null>(null);
  const hoveredRef = useRef(false);
  const openRef = useRef(false);

  hoveredRef.current = hovered;
  openRef.current = open;

  useEffect(() => {
    lastY.current = window.scrollY;

    const clearHideTimer = () => {
      if (hideTimer.current !== null) {
        window.clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }
    };

    const scheduleHide = () => {
      clearHideTimer();
      hideTimer.current = window.setTimeout(() => {
        if (window.scrollY > 24 && !openRef.current && !hoveredRef.current) {
          setHidden(true);
        }
      }, SHOW_DURATION_MS);
    };

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      if (y < 24 || openRef.current) {
        setHidden(false);
        clearHideTimer();
        lastY.current = y;
        return;
      }

      if (delta > 8) {
        setHidden(true);
        clearHideTimer();
      } else if (delta < -8) {
        setHidden(false);
        scheduleHide();
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearHideTimer();
    };
  }, []);

  useEffect(() => {
    if (hovered || open) {
      setHidden(false);
    }
  }, [hovered, open]);

  return (
    <header
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "fixed top-0 right-0 left-0 z-300 px-4 py-3 text-white transition-transform duration-500 ease-out lg:px-16 lg:py-4",
        hidden && !open && !hovered ? "-translate-y-[calc(100%+1.5rem)]" : "translate-y-0",
      )}
    >
      <div className="bg-black/55 backdrop-blur-md">
        <div className="ewg-nav-inner flex h-16 items-center justify-between gap-6 lg:h-[4.25rem]">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-lime"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="inline-flex items-center justify-center p-1 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className={cn("h-0.5 w-5 bg-white transition", open && "translate-y-2 rotate-45")} />
              <span className={cn("h-0.5 w-5 bg-white transition", open && "opacity-0")} />
              <span className={cn("h-0.5 w-5 bg-white transition", open && "-translate-y-2 -rotate-45")} />
            </span>
          </button>
        </div>
        {open ? (
          <div className="border-t border-white/10 bg-shade/80 lg:hidden">
            <nav className="ewg-nav-inner flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl py-3 text-base text-white/90 hover:bg-white/5 hover:text-lime"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
