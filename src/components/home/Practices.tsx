import { PracticeList } from "@/components/practices/PracticeList";
import { practices } from "@/lib/content";

type PracticesProps = {
  id?: string;
  showBody?: boolean;
};

export function Practices({ id = "practices", showBody = true }: PracticesProps) {
  return (
    <section id={id} className="bg-white text-navy">
      <div className="ewg-container pt-20 lg:pt-28">
        <p className="ewg-eyebrow text-orange">{practices.eyebrow}</p>
        <h2 className="mt-5 font-headline text-[2.25rem] font-medium leading-[1] tracking-normal sm:text-[3rem] lg:text-[3.8rem]">
          <span className="ewg-heading-ink">{practices.headerLine1}</span>
          <br />
          <span>{practices.headerLine2}</span>
        </h2>
      </div>

      {/* Cards share the navbar bar's edges. Copy inside sits on the logo line. */}
      <div className="ewg-card-frame mt-12 pb-20 lg:mt-16 lg:pb-28">
        <PracticeList />
      </div>
    </section>
  );
}
