import { projects } from "@/lib/data";
import { ProjectRow } from "./ProjectRow";
import { Reveal } from "./Reveal";

export function ProjectsSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <p className="border-b border-hairline pb-4 font-mono text-xs uppercase tracking-[0.15em] text-muted">
        Selected Projects
      </p>

      <div className="divide-y divide-hairline">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 60}>
            <ProjectRow project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
