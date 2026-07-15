import Link from "next/link";

export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center gap-1 text-ink/80 transition-colors hover:text-ink ${className}`}
    >
      {children}
      <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </span>
    </Link>
  );
}
