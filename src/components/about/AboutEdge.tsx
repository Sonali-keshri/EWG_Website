import Image from "next/image";
import { aboutEdge } from "@/lib/content";

export function AboutEdge() {
  return (
    <section id="our-edge" className="bg-white text-navy">
      <div className="ewg-container py-20 lg:py-28">
        <p className="ewg-eyebrow text-orange">{aboutEdge.eyebrow}</p>
        <h2 className="mt-5 max-w-xl font-headline text-[2.2rem] leading-[1.14] font-bold tracking-tight sm:text-[2.6rem] lg:text-[3.15rem]">
          <span className="ewg-heading-ink">{aboutEdge.headerLine1}</span>
          <br />
          <span>{aboutEdge.headerLine2}</span>
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {aboutEdge.cards.map((card) => (
            <article
              key={card.title}
              className="ewg-edge-card flex aspect-square flex-col justify-between rounded-[1.875rem] p-8"
            >
              <Image
                src={card.icon}
                alt={card.iconAlt}
                width={80}
                height={80}
                className="h-[4.5rem] w-[4.5rem] object-contain"
              />
              <div>
                <h3 className="font-headline text-[1.15rem] leading-tight font-bold text-orange">
                  {card.title}
                </h3>
                <p className="mt-2 text-[0.9rem] leading-6 text-navy/80">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
