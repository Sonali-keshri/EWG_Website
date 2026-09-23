import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "EWG | Engineered With Grit",
  description:
    "EWG takes the engineering discipline proven in Oracle Utilities into enterprise transformation, cloud, automation and intelligent systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-navy font-sans text-white">
        <svg aria-hidden="true" width="0" height="0" className="absolute">
          <filter id="ewg-knock-black" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 1 1 0 0"
            />
          </filter>
          <filter id="ewg-arrow-ice" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.702
                      0 0 0 0 0.894
                      0 0 0 0 0.922
                      0 1.35 1.35 0 -0.45"
            />
          </filter>
        </svg>
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
