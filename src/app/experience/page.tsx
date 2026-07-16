import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { ExperienceSection } from "@/components/ExperienceSection";

export const metadata: Metadata = {
  title: "Experience - Krish Dhanuka",
};

export default function ExperiencePage() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1 pb-20">
        <ExperienceSection />
      </main>
    </div>
  );
}
