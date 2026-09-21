import Image from "next/image";
import { howWeEngage } from "@/lib/content";

export function HowWeEngage() {
  const { project, talent } = howWeEngage;

  return (
    <section id="how-we-engage" className="bg-white text-navy">
      <div className="ewg-container pb-20 lg:pb-28">
        <p className="ewg-eyebrow text-orange">{howWeEngage.eyebrow}</p>
        <h2 className="mt-5 font-headline text-[2.2rem] leading-[1.14] font-bold tracking-tight sm:text-[2.6rem] lg:text-[3.15rem]">
          <span className="ewg-heading-ink">{howWeEngage.headerLine1}</span>{" "}
          <span>{howWeEngage.headerLine2}</span>
        </h2>

        <div className="mt-12 grid items-center gap-5 lg:mt-16 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.7fr)] lg:gap-6">
          <article className="relative isolate overflow-hidden rounded-[1.75rem] bg-navy text-white">
            <div
              className="pointer-events-none absolute top-1/2 right-4 z-0 w-[38%] max-w-[13.5rem] -translate-y-1/2 [mask-image:linear-gradient(to_right,transparent_0%,black_22%,black_100%)]"
              aria-hidden="true"
            >
              <Image
                src="/images/EWG_Arrows.gif"
                alt=""
                width={622}
                height={608}
                unoptimized
                className="h-auto w-full object-contain mix-blend-screen opacity-[0.18]"
              />
            </div>

            <div className="relative z-10 grid gap-8 px-8 py-10 mix-blend-normal sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,0.95fr)] sm:items-center sm:gap-10 lg:px-12 lg:py-12">
              <div>
                <p className="ewg-eyebrow text-orange">{project.eyebrow}</p>
                <h3 className="mt-5 font-headline text-[1.65rem] leading-[1.08] font-bold tracking-tight uppercase sm:text-[1.9rem] lg:text-[2.15rem]">
                  <span className="ewg-heading-light">{project.headerLine1}</span>
                  <br />
                  <span className="ewg-gradient-text">{project.headerLine2}</span>
                </h3>
                <p className="mt-5 max-w-sm font-sans text-[0.98rem] leading-7 font-medium text-white italic">
                  {project.body}
                </p>
              </div>

              <span aria-hidden="true" className="hidden h-full min-h-40 w-px bg-white/25 sm:block" />

              <ul className="space-y-4 font-sans text-[0.95rem] leading-7 text-white">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article
            className="flex min-h-[13.5rem] flex-col justify-center rounded-[1.75rem] px-8 py-10 lg:min-h-[16rem] lg:px-10"
            style={{ backgroundImage: "var(--ewg-gradient-brand)" }}
          >
            <p className="ewg-eyebrow !text-white">{talent.eyebrow}</p>
            <h3 className="mt-5 font-headline text-[1.65rem] leading-[1.08] font-bold tracking-tight text-navy uppercase sm:text-[1.9rem] lg:text-[2.05rem]">
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
