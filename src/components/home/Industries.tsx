import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { industries } from "@/lib/content";

export function Industries() {
  return (
    <section
      id="industries"
      className="text-white"
      style={{ backgroundImage: "var(--ewg-gradient-industries)" }}
    >
      <div className="ewg-container py-20 lg:py-28">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="ewg-eyebrow text-orange">{industries.eyebrow}</p>
            <h2 className="mt-5 font-headline text-[2.1rem] leading-[1.14] font-bold tracking-tight sm:text-[2.6rem] lg:text-[3.25rem]">
              <span className="ewg-heading-light">{industries.headerLine1}</span>
              <br />
              <span>{industries.headerLine2}</span>
            </h2>
            <p className="mt-6 max-w-md leading-7 text-white/75">
              {industries.sectors.join(" · ")}
            </p>
          </div>
          <Button href={industries.cta.href} className="shrink-0">
            {industries.cta.label}
          </Button>
        </div>

        {/* Two columns, with the left one dropped so the cards stagger. */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {[0, 1].map((column) => (
            <div key={column} className={cn("space-y-6 lg:space-y-8", column === 0 && "lg:pt-24")}>
              {industries.cards
                .filter((_, index) => index % 2 === column)
                .map((card) => (
                  <article
                    key={card.name}
                    className="group overflow-hidden rounded-3xl bg-navy-dark shadow-[0_18px_40px_-24px_rgba(0,0,0,0.75)]"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.name}
                        fill
                        sizes="(min-width: 1024px) 40vw, 92vw"
                        quality={90}
                        className="ewg-zoom-image object-cover"
                      />
                    </div>
                    <div className="px-7 py-6 lg:px-8">
                      <h3 className="font-headline text-xl font-bold lg:text-[1.35rem]">
                        {card.name}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-white/65">{card.description}</p>
                    </div>
                  </article>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
