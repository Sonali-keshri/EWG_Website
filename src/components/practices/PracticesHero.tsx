import { practicesPage } from "@/lib/content";

export function PracticesHero() {
  return (
    <section className="text-white" style={{ backgroundImage: "var(--ewg-gradient-hero)" }}>
      <div className="ewg-container pt-36 pb-16 lg:pt-44 lg:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <p className="ewg-eyebrow text-orange">{practicesPage.eyebrow}</p>
            <h1 className="ewg-heading mt-5">
              <span className="ewg-heading-light">{practicesPage.headerLine1}</span>
              <br />
              <span>{practicesPage.headerLine2}</span>
            </h1>
          </div>
          <p className="max-w-md text-[1.02rem] leading-8 text-white/80 lg:ml-auto">
            {practicesPage.body}
          </p>
        </div>
      </div>
    </section>
  );
}
