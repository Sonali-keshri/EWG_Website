import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | EWG",
  description:
    "Have a project in mind, exploring a new idea, or simply want to know more? Get in touch with EWG.",
};

export default function ContactUsPage() {
  return (
    <main>
      <ContactPage />
    </main>
  );
}
