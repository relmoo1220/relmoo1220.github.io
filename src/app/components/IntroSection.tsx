"use client";

import Link from "next/link";
import {
  IconArrowRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconUser,
} from "@tabler/icons-react";

const links = [
  { label: "email", href: "mailto:angzhencai@gmail.com", Icon: IconMail },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/ang-zhen-cai/",
    Icon: IconBrandLinkedin,
    external: true,
  },
  {
    label: "github",
    href: "https://github.com/relmoo1220",
    Icon: IconBrandGithub,
    external: true,
  },
];

export default function IntroSection() {
  return (
    <div className="flex flex-col w-full h-full justify-center space-y-4">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <img
          src="/gif/l.gif"
          alt="l-gif"
          className="h-28 w-28 shrink-0 border border-zinc-700 object-cover grayscale transition duration-300 hover:grayscale-0 md:h-36 md:w-36"
        />
        <div className="space-y-3 font-mono">
          <div>
            <div className="text-red-500">$ whoami</div>
            <div className="text-4xl text-red-500 font-extrabold">
              <span className="inline-block w-[8ch] overflow-hidden whitespace-nowrap border-r-4 border-red-500 align-bottom animate-typewriter motion-reduce:animate-none">
                Zhen Cai
              </span>
            </div>
          </div>
          <div className="flex flex-col text-gray-500">
            <div className="flex gap-2 text-red-500 items-center">
              <IconUser size={16} />
              <span>Full Stack Software Engineer</span>
            </div>
            <div className="flex gap-2 text-red-500 items-center">
              <IconMapPin size={16} />
              <span>Singapore</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-zinc-400 leading-relaxed">
        I&apos;m a full stack engineer based in Singapore. I care about the parts of software that outlast the first release: clear interfaces, sound data models, and systems that are easy to operate and change. I work best close to both the people who use the product and the people who maintain it.
      </div>
      <div className="text-zinc-400 leading-relaxed">
        Outside of work I brew my own coffee and occasionally roast my own beans.
      </div>
      <div className="text-zinc-400 leading-relaxed">
        The links below are the best way to reach me, and my GitHub has some of my personal projects.
      </div>
      <div className="flex flex-wrap gap-3">
        {links.map(({ label, href, Icon, external }) => (
          <a
            key={label}
            href={href}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            className="group flex items-center gap-2 border border-red-600 bg-zinc-900 px-3 py-2 font-mono text-sm text-zinc-200 transition-colors duration-200 hover:bg-red-600"
          >
            <Icon size={18} className="text-red-500 group-hover:text-zinc-100" />
            <span>
              <span className="text-red-500 group-hover:text-zinc-100">$ </span>
              {label}
            </span>
          </a>
        ))}
        <Link
          href="/projects"
          className="flex items-center gap-2 border border-red-600 bg-red-600 px-3 py-2 font-mono text-sm text-white transition-colors duration-200 hover:bg-red-500"
        >
          view projects
          <IconArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
