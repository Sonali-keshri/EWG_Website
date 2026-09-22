import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { footer } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="ewg-container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(13rem,0.9fr)_repeat(4,minmax(0,1fr))] lg:items-start lg:gap-10">
          <div>
            <Logo size="footer" />
            <ul className="mt-8 flex items-center gap-3">
              {footer.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition-opacity hover:opacity-80"
                  >
                    <span
                      aria-hidden="true"
                      className="block h-4 w-4 bg-white"
                      style={{
                        maskImage: `url(${item.src})`,
                        WebkitMaskImage: `url(${item.src})`,
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                      }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-white/40 uppercase">
                {column.title}
              </p>
              <ul className="mt-5 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.92rem] leading-6 text-white/90 transition-colors hover:text-lime"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/15 pt-8 lg:mt-20">
          <p className="text-center text-[0.68rem] tracking-[0.22em] text-white/55 uppercase">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
