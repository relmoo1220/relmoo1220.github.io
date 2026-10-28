"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export default function Nav() {
  const pathname = usePathname().replace(/(.)\/$/, "$1");

  return (
    <nav className="sticky top-0 z-20 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-3xl items-center gap-6 px-6 font-mono text-sm uppercase tracking-widest">
        {items.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            aria-current={pathname === href ? "page" : undefined}
            className={
              pathname === href
                ? "text-red-500"
                : "text-zinc-500 transition-colors hover:text-zinc-200"
            }
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
