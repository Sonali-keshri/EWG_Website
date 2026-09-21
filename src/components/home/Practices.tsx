import { PracticeList } from "@/components/practices/PracticeList";
import { practices } from "@/lib/content";

type PracticesProps = {
  id?: string;
  showBody?: boolean;
};

export function Practices({ id = "practices", showBody = true }: PracticesProps) {
  return (
    <section id={id} className="bg-white text-navy">
      <div className="ewg-container py-20 lg:py-28">
        <p className="ewg-eyebrow text-orange">{practices.eyebrow}</p>
        <h2 className="mt-5 font-headline text-[2.1rem] leading-[1.14] font-bold tracking-tight sm:text-[2.6rem] lg:text-[3.25rem]">
          <span className="ewg-heading-ink">{practices.headerLine1}</span>
          <br />
          <span>{practices.headerLine2}</span>
        </h2>
        {showBody ? (
          <div className="mt-5 max-w-xl text-[1.02rem] leading-8 text-navy/70">
            {practices.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ) : null}

        <div className="mt-12 lg:mt-16">
          <PracticeList />
        </div>
      </div>
    </section>
  );
}
