import Image from "next/image";
import { howWeEngage } from "@/lib/content";

export function HowWeEngage() {
  const { project, talent } = howWeEngage;

  return (
    <section id="how-we-engage" className="bg-white text-navy">
      <div className="ewg-container pb-20 lg:pb-28">
        <p className="ewg-eyebrow text-orange">{howWeEngage.eyebrow}</p>
        <h2 className="mt-4 font-headline text-[1.75rem] leading-[1.12] font-medium tracking-normal sm:text-[2.2rem] lg:mt-5 lg:text-[3.15rem]">
          <span className="ewg-heading-ink">{howWeEngage.headerLine1}</span>{" "}
          <span>{howWeEngage.headerLine2}</span>
        </h2>

        <div className="mt-12 grid items-start gap-5 lg:mt-16 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1.05fr)] lg:gap-6">
          <article className="relative isolate overflow-hidden rounded-[2rem] bg-navy text-white">
            <div
              className="pointer-events-none absolute top-1/2 right-[-14%] z-0 hidden h-[160%] w-[72%] -translate-y-1/2 lg:block"
              aria-hidden="true"
            >
              <Image
                src="/EWG_Arrows.png"
                alt=""
                fill
                unoptimized
                sizes="20vw"
                className="object-contain object-right mix-blend-screen opacity-55"
              />
              <Image
                src="/images/EWG_Arrows.gif"
                alt=""
                fill
                unoptimized
                sizes="20vw"
                className="object-contain object-right mix-blend-screen"
              />
            </div>

            <div className="relative z-10 grid gap-8 px-8 py-10 sm:grid-cols-[minmax(0,1.05fr)_auto_minmax(0,0.95fr)] sm:items-center sm:gap-8 lg:px-12 lg:py-12 lg:pr-10">
              <div>
                <p className="ewg-eyebrow text-orange">{project.eyebrow}</p>
                <h3 className="mt-4 font-headline text-[1.65rem] leading-[1.08] font-medium tracking-normal uppercase sm:text-[1.85rem] lg:text-[2.05rem]">
                  <span className="ewg-gradient-text">{project.headerLine1}</span>
                  <br />
                  <span className="ewg-gradient-text">{project.headerLine2}</span>
                </h3>
                <p className="mt-3 max-w-[18.5rem] font-sans text-[0.95rem] leading-[1.4] font-medium text-white italic lg:mt-5">
                  {project.body}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="hidden h-[70%] min-h-32 w-px self-center bg-white/35 sm:block"
              />

              <ul className="space-y-3.5 font-sans text-[0.92rem] leading-[1.4] text-white">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-white"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article
            className="flex flex-col justify-center rounded-[2rem] border border-navy px-8 py-6 lg:px-10 lg:py-7"
            style={{ backgroundImage: "linear-gradient(90deg, #BDCC89 0%, #B3E4EB 100%)" }}
          >
            <p className="ewg-eyebrow text-white">{talent.eyebrow}</p>
            <h3 className="mt-4 font-headline text-[1.65rem] leading-[1.08] font-medium tracking-normal text-navy uppercase sm:text-[1.85rem] lg:text-[2rem]">
              {talent.headerLine1}
              <br />
              {talent.headerLine2}
            </h3>
          </article>
        </div>
      </div>
    </section>
  );
}
