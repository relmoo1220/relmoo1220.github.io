import Chip from "@/app/components/Chip";
import SectionTitle from "@/app/components/SectionTitle";
import skills from "@/app/data/skills.json";

export default function SkillSection() {
  return (
    <div className="flex flex-col w-full space-y-6">
      <SectionTitle>Skills</SectionTitle>
      <div className="flex flex-col space-y-5">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="flex flex-col gap-2 md:flex-row md:gap-6"
          >
            <div className="font-mono text-sm capitalize text-red-500 md:w-28 md:shrink-0 md:pt-2">
              {category}
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <Chip key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
