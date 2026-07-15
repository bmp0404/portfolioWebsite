import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { ProjectsSection } from "@/components/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects — Krish Dhanuka",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1 pb-20">
        <ProjectsSection />
      </main>
    </div>
  );
}
