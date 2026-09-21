import { CaseStudies } from "@/components/home/CaseStudies";
import { ContactCta } from "@/components/home/ContactCta";
import { Hero } from "@/components/home/Hero";
import { Industries } from "@/components/home/Industries";
import { Practices } from "@/components/home/Practices";
import { Products } from "@/components/home/Products";
import { Testimonials } from "@/components/home/Testimonials";
import { WhoWeAre } from "@/components/home/WhoWeAre";

export default function Home() {
  return (
    <main>
      <section className="bg-navy pt-[6.5rem] pb-10 lg:pb-14">
        <Hero />
      </section>
      <section className="bg-navy pb-12 lg:pb-16">
        <div className="ewg-container pt-10 lg:pt-14">
          <WhoWeAre />
        </div>
      </section>
      <Products />
      <Practices />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <ContactCta />
    </main>
  );
}
