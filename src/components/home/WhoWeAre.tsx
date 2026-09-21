import { Button } from "@/components/ui/Button";
import { whoWeAre } from "@/lib/content";

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="relative text-white">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="ewg-eyebrow">{whoWeAre.eyebrow}</p>
          <h2 className="mt-4 font-headline text-[2.4rem] font-semibold leading-[1.12] tracking-tight text-lime sm:text-5xl lg:text-[3.35rem]">
            {whoWeAre.headerLine1}
            <br />
            {whoWeAre.headerLine2}
          </h2>
        </div>
        <div className="max-w-xl lg:pt-6">
          <p className="text-[1.02rem] leading-8 text-white/85">
            {whoWeAre.body[0]}
            <br />
            {whoWeAre.body[1]}
            <br />
            {whoWeAre.body[2]}
          </p>
          <Button href={whoWeAre.cta.href} className="mt-10">
            {whoWeAre.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
