import { Button } from "@/components/ui/Button";

export default function CareersPage() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-navy px-6 pt-36 pb-32 text-center">
      <p className="ewg-eyebrow">Careers</p>
      <h1 className="ewg-heading mt-4 text-white">
        Built for people with grit
      </h1>
      <p className="mt-4 max-w-lg text-muted">
        Roles and openings will live here. Until then, talk to us about the work
        you want to take on.
      </p>
      <Button href="/contact" className="mt-8">
        Talk to our team
      </Button>
    </section>
  );
}
