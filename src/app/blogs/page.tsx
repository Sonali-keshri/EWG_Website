import type { Metadata } from "next";
import { BlogsList } from "@/components/blogs/BlogsList";

export const metadata: Metadata = {
  title: "Blogs | EWG",
  description:
    "Stories from the field. Essential systems, four practices, and the work behind them.",
};

export default function BlogsPage() {
  return (
    <main>
      <BlogsList />
    </main>
  );
}
