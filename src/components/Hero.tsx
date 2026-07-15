import { ArrowLink } from "./ArrowLink";
import { socials } from "@/lib/data";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <h1 className="font-display text-7xl leading-[0.95] tracking-tight text-ink md:text-8xl">
        Krish Dhanuka
      </h1>

      <p className="mt-7 font-body text-xl text-ink/90">
        Student. Software Builder.
      </p>

      <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-muted">
        I build products at the intersection of AI, infrastructure, and
        applied machine learning. I like turning messy problems into small,
        well-made tools.
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-sm">
        <ArrowLink href={socials.github}>GitHub</ArrowLink>
        <ArrowLink href={socials.linkedin}>LinkedIn</ArrowLink>
        <ArrowLink href={socials.email}>Email</ArrowLink>
      </div>
    </section>
  );
}
