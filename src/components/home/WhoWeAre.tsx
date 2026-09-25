import { Button } from "@/components/ui/Button";
import { whoWeAre } from "@/lib/content";

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="relative text-white">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="ewg-eyebrow ewg-eyebrow-loose">{whoWeAre.eyebrow}</p>
          <h2 className="mt-5 font-headline text-[2.25rem] font-[500] leading-[1] tracking-normal sm:text-[3rem] lg:text-[3.2rem]">
            <span className="ewg-gradient-text">{whoWeAre.headerLine1}</span>

            <br />
            {whoWeAre.headerLine2}
          </h2>
        </div>
        <div className="max-w-xl lg:pt-6">
          <p className="pb-6 text-[1rem] leading-[24px] tracking-normal text-white/85 lg:pb-10">
            {whoWeAre.body[0]}
          </p>
          <p className="text-[1rem] leading-[24px] tracking-normal text-white/85">

            {whoWeAre.body[1]}
            <br />
            {whoWeAre.body[2]}
          </p>
          <Button href={whoWeAre.cta.href} className="mt-8 lg:mt-10">
            {whoWeAre.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
