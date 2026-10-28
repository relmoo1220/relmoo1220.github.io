"use client";

import experience from "@/app/data/experience.json";
import Chip from "@/app/components/Chip";
import SectionTitle from "@/app/components/SectionTitle";

export default function ExperienceSection() {
  return (
    <div className="flex flex-col w-full space-y-6">
      <SectionTitle>Experience</SectionTitle>
      <ol className="relative ml-3 border-l-2 border-zinc-800">
        {experience.map((exp, index) => (
          <li key={index} className="relative pl-8 pb-12 last:pb-0">
            <span className="absolute -left-[7px] top-1.5 h-3 w-3 border-2 border-red-500 bg-zinc-950" />
            <div className="font-mono text-sm text-red-500 tracking-widest uppercase">
              {exp.startDate} — {exp.endDate}
            </div>
            <div className="font-bold text-zinc-100 text-xl">{exp.role}</div>
            <div className="text-zinc-500 mb-3">@ {exp.company}</div>
            <div className="flex flex-col space-y-2">
              {exp.description.map((desc, i) => (
                <div key={i} className="flex">
                  <span className="mr-2 text-red-600">&gt;</span>
                  <span className="flex-1 text-zinc-400">{desc}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap w-full gap-2 mt-4">
              {exp.techStack.map((skill) => (
                <Chip key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
