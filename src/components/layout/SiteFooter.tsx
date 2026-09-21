import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { footer } from "@/lib/content";

const socialPaths = {
  facebook:
    "M15 8.5h-2.1V7.2c0-.5.4-.6.7-.6H15V4.3h-2.3C10.4 4.3 9.5 5.6 9.5 7.1v1.4H8v2.5h1.5V20h3.4v-9h2.2l.4-2.5Z",
  x: "M17.6 4.5h2.3L14.7 11l6 8.5h-4.7l-3.7-4.8-4.2 4.8H5.7l5.6-6.9L5.5 4.5h4.8l3.3 4.4 4-4.4Zm-.8 13.4h1.3L8.3 5.8H6.9l9.9 12.1Z",
  linkedin:
    "M7.5 9.2H5V19h2.5V9.2ZM6.2 5C5.4 5 4.7 5.7 4.7 6.5S5.4 8 6.2 8s1.6-.7 1.6-1.5S7.1 5 6.2 5ZM19 19h-2.5v-5.2c0-1.6-.6-2.2-1.5-2.2s-1.7.8-1.7 2.3V19H11V9.2h2.4v1.3c.5-.8 1.6-1.6 3.1-1.6 2.2 0 3.5 1.3 3.5 4.2V19Z",
  instagram:
    "M12 7.4A4.6 4.6 0 1 0 16.6 12 4.6 4.6 0 0 0 12 7.4Zm0 7.6A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm5.8-8.5a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1ZM19.5 7.3a5.3 5.3 0 0 0-1.4-3.7 5.3 5.3 0 0 0-3.7-1.4H9.6A5.3 5.3 0 0 0 5.9 3.6 5.3 5.3 0 0 0 4.5 7.3v6.8a5.3 5.3 0 0 0 1.4 3.7 5.3 5.3 0 0 0 3.7 1.4h6.8a5.3 5.3 0 0 0 3.7-1.4 5.3 5.3 0 0 0 1.4-3.7ZM18 14.1a3.7 3.7 0 0 1-1 2.6 3.7 3.7 0 0 1-2.6 1H9.6a3.7 3.7 0 0 1-2.6-1 3.7 3.7 0 0 1-1-2.6V7.3a3.7 3.7 0 0 1 1-2.6 3.7 3.7 0 0 1 2.6-1h6.8a3.7 3.7 0 0 1 2.6 1 3.7 3.7 0 0 1 1 2.6Z",
} as const;

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="ewg-container grid gap-12 py-16 lg:grid-cols-[minmax(0,1.15fr)_repeat(4,minmax(0,1fr))] lg:gap-8 lg:py-20">
        <div>
          <Logo size="footer" />
          <ul className="mt-8 flex gap-3">
            {footer.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white transition-colors hover:bg-black/70"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                    <path d={socialPaths[item.icon]} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {footer.columns.map((column) => (
          <div key={column.title}>
            <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-white/45 uppercase">
              {column.title}
            </p>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/85 transition-colors hover:text-lime"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
