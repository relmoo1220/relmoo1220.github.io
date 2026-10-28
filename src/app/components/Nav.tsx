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
      <div className="mx-auto flex h-14 max-w-3xl items-stretch px-6 font-mono">
        <div className="flex items-stretch gap-8 text-sm uppercase tracking-widest">
          {items.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={`-mb-px flex items-center border-b-2 transition-colors ${
                pathname === href
                  ? "border-red-500 text-red-500"
                  : "border-transparent text-zinc-300 hover:border-zinc-500 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
