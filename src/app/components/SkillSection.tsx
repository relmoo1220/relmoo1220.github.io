"use client";

import { useState } from "react";
import { IconTools } from "@tabler/icons-react";
import skills from "@/app/data/skills.json";

export default function SkillSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof skills>("languages");

  const tabs = Object.keys(skills) as (keyof typeof skills)[];

  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Header */}
      <div className="flex w-full space-x-2 items-center">
        <IconTools className="text-amber-500" />
        <div className="text-2xl text-amber-500 font-bold">Skills</div>
      </div>

      {/* Menu Bar */}
      <div className="flex space-x-4 border-b border-amber-400/40">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 capitalize text-xl ${
              activeTab === tab
                ? "text-amber-500 border-b-2 border-amber-500"
                : "text-amber-400/40 hover:text-amber-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skill Display */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills[activeTab].map((skill) => (
          <div
            key={skill.name}
            className="flex items-center space-x-2 border-2 border-amber-600 bg-amber-100 p-2 rounded-xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_rgba(251,191,36,0.7)] hover:shadow-amber-300/60 hover:border-amber-500"
          >
            <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
            <span className="text-amber-700">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
