import { Button } from "@/components/ui/Button";

export default function BlogsPage() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-navy px-6 pt-36 pb-32 text-center">
      <p className="ewg-eyebrow">Blogs</p>
      <h1 className="mt-4 font-headline text-4xl font-semibold text-white md:text-5xl">
        Stories from the field
      </h1>
      <p className="mt-4 max-w-lg text-muted">
        This section is coming next. In the meantime, see how we work across
        utilities, enterprise, cloud and labs.
      </p>
      <Button href="/" className="mt-8">
        Back to home
      </Button>
    </section>
  );
}
