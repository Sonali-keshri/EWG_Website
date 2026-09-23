import type { Metadata } from "next";
import { Practices } from "@/components/home/Practices";
import { ContactCta } from "@/components/home/ContactCta";
import { HowWeDeliver } from "@/components/practices/HowWeDeliver";
import { HowWeEngage } from "@/components/practices/HowWeEngage";
import { OracleStack } from "@/components/practices/OracleStack";
import { PracticesHero } from "@/components/practices/PracticesHero";

export const metadata: Metadata = {
  title: "Practices | EWG",
  description:
    "One standard. Four practices. Choose the EWG practice that fits your challenge, and bring in the wider team when the work calls for it.",
};

export default function PracticesPage() {
  return (
    <main>
      <PracticesHero />
      <Practices showBody={false} />
      <OracleStack />
      <HowWeEngage />
      <HowWeDeliver />
      <ContactCta />
    </main>
  );
}
