import { CaseStudies } from "@/components/home/CaseStudies";
import { ContactCta } from "@/components/home/ContactCta";
import { Hero } from "@/components/home/Hero";
import { Industries } from "@/components/home/Industries";
import { LogoCarousel } from "@/components/home/LogoCarousel";
import { Practices } from "@/components/home/Practices";
import { Products } from "@/components/home/Products";
import { Testimonials } from "@/components/home/Testimonials";
import { WhoWeAre } from "@/components/home/WhoWeAre";

export default function Home() {
  return (
    <main>
      <section className="bg-navy pt-[6.5rem]">
        <Hero />
      </section>
      {/* Story and the product stack: navy, plus the 20% charcoal-to-lime
          wash from the top-left to the bottom-right, fading to white. */}
      <div style={{ background: "var(--ewg-gradient-story)" }}>
     
        <section className="pb-8 ">
          <div className="ewg-container pt-10 lg:pt-14">
            <WhoWeAre />
          </div>
        </section>
        <Products />
      </div>
      <Practices />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <ContactCta />
    </main>
  );
}
