"use client";

import experience from "@/app/data/experience.json";
import { IconBriefcase } from "@tabler/icons-react";

export default function ExperienceSection() {
  return (
    <div className="flex flex-col w-full space-y-6">
      <div className="flex w-full space-x-2 items-center">
        <IconBriefcase className="text-amber-500" />
        <div className="text-2xl text-amber-500 font-bold">Experiences</div>
      </div>
      <div className="flex flex-col space-y-6">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col w-full rounded-2xl border-amber-600 border-2 p-4 space-y-2 transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_rgba(251,191,36,0.7)] hover:shadow-amber-300/60 hover:border-amber-500"
          >
            <div className="font-semibold text-amber-600 text-xl">
              {exp.role}
            </div>
            <div className="text-amber-400/40">{exp.company}</div>
            <div className="text-amber-400/40">
              {exp.startDate} — {exp.endDate}
            </div>
            <div className="flex flex-col space-y-2">
              {exp.description.map((desc, i) => (
                <div key={i} className="flex">
                  <span className="mr-2">•</span>
                  <span className="flex-1">{desc}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-amber-600 font-semibold">Tech Stack:</div>
              <div className="flex w-full space-x-2">
                {exp.techStack.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-2 border-2 border-amber-600 bg-amber-100 p-2 rounded-xl"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6"
                    />
                    <span className="text-amber-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
