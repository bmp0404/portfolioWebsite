import type { Project } from "@/lib/data";
import { ArrowLink } from "./ArrowLink";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-1 gap-3 py-10 md:grid-cols-[100px_1fr] md:gap-8">
      <p className="font-mono text-xs text-muted">{project.year}</p>

      <div className="flex flex-col gap-4">
        <h3 className="font-display text-4xl text-ink">{project.title}</h3>
        <p className="max-w-xl text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-hairline px-3 py-1 font-mono text-[11px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="mt-1 flex gap-6 font-mono text-xs">
            {project.links.map((link) => (
              <ArrowLink key={link.label} href={link.href}>
                {link.label}
              </ArrowLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
