import { EdgeCard } from "@/components/ui/EdgeCard";
import { aboutEdge } from "@/lib/content";

export function AboutEdge() {
  return (
    <section id="our-edge" className="bg-white text-navy">
      <div className="ewg-container py-20 lg:py-28">
        <p className="ewg-eyebrow text-orange">{aboutEdge.eyebrow}</p>
        <h2 className="ewg-heading mt-5 max-w-xl">
          <span className="ewg-heading-ink">{aboutEdge.headerLine1}</span>
          <br />
          <span>{aboutEdge.headerLine2}</span>
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {aboutEdge.cards.map((card) => (
            <EdgeCard
              key={card.title}
              title={card.title}
              body={card.body}
              iconSrc={card.icon}
              iconAlt={card.iconAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
