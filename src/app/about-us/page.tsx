import type { Metadata } from "next";
import { AboutEdge } from "@/components/about/AboutEdge";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutNextPhase } from "@/components/about/AboutNextPhase";
import { AboutStory } from "@/components/about/AboutStory";
import { ContactCta } from "@/components/home/ContactCta";

export const metadata: Metadata = {
  title: "About Us | EWG",
  description:
    "Same standard. Wider canvas. How EWG earned the engineering standard we work to, and where it's going next.",
};

export default function AboutUsPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutNextPhase />
      <AboutEdge />
    </main>
  );
}
