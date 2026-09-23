import { Button } from "@/components/ui/Button";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { proof } from "@/lib/content";

export function Proof() {
  return (
    <section id="proof" className="bg-surface text-navy">
      <div className="ewg-container grid items-center gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
        <SectionIntro eyebrow={proof.eyebrow} header={proof.header}>
          <p>{proof.body}</p>
          <Button href={proof.cta.href} variant="light" className="mt-8">
            {proof.cta.label}
          </Button>
        </SectionIntro>
        <div className="space-y-4">
          {proof.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl bg-navy px-7 py-6 text-white"
            >
              <p className="font-headline text-3xl font-medium text-orange">
                {metric.value}
              </p>
              <p className="mt-1 text-sm text-white/70">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
