"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-display text-xl tracking-tight text-ink">
          Krish Dhanuka
        </Link>
        <nav className="flex items-center gap-8 font-body text-sm">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-ink ${
                  active ? "text-ink" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
