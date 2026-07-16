import Image from "next/image";
import { ArrowLink } from "./ArrowLink";
import { socials } from "@/lib/data";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="flex flex-col-reverse gap-12 md:flex-row md:items-center md:justify-between md:gap-16">
        <div className="max-w-xl">
          <h1 className="font-display text-7xl leading-[0.95] tracking-tight text-ink md:text-8xl">
            Krish Dhanuka
          </h1>

          <p className="mt-7 font-body text-xl text-ink/90">
            Student. Software Builder.
          </p>

          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-muted">
            I like building applied ML and software that helps people.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-sm">
            <ArrowLink href={socials.github}>GitHub</ArrowLink>
            <ArrowLink href={socials.linkedin}>LinkedIn</ArrowLink>
            <ArrowLink href={socials.email}>Email</ArrowLink>
          </div>
        </div>

        <div className="w-full max-w-xs shrink-0 md:max-w-sm">
          <div className="aspect-[4/5] overflow-hidden rounded-xl border border-hairline bg-panel">
            <Image
              src="/portrait.jpg"
              alt="Krish Dhanuka"
              width={480}
              height={600}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
