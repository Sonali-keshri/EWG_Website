import type { Metadata } from "next";
import { IndustriesShowcase } from "@/components/industries/IndustriesShowcase";

export const metadata: Metadata = {
  title: "Industries | EWG",
  description:
    "Essential systems, four practices. Choose the EWG practice that fits your challenge, and bring in the wider team when the work calls for it.",
};

export default function IndustriesPage() {
  return (
    <main>
      <IndustriesShowcase />
    </main>
  );
}
