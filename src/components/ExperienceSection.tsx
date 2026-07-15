import Image from "next/image";
import { experience } from "@/lib/data";
import { Reveal } from "./Reveal";

export function ExperienceSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <p className="border-b border-hairline pb-4 font-mono text-xs uppercase tracking-[0.15em] text-muted">
        Experience
      </p>

      <Reveal delay={80}>
        <ol className="relative mt-12 ml-1 border-l border-hairline">
          {experience.map((item) => (
            <li
              key={`${item.company}-${item.role}`}
              className="relative py-8 pl-10 first:pt-0 last:pb-0"
            >
              <span className="absolute -left-[5px] top-[3.75rem] h-2.5 w-2.5 rounded-full bg-ink" />
              <div className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-hairline bg-paper">
                  {item.logo ? (
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      width={56}
                      height={56}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="font-mono text-sm text-muted">
                      {item.company.charAt(0)}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className="font-body text-lg font-semibold text-ink">
                        {item.company}
                      </span>
                      <span className="font-body text-base text-muted">
                        {item.role}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-muted">
                      {item.period}
                    </span>
                  </div>
                  <p className="max-w-xl text-base leading-relaxed text-muted">
                    {item.blurb}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
