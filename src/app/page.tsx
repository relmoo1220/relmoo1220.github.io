import IntroSection from "@/app/components/IntroSection";
import ExperienceSection from "@/app/components/ExperienceSection";
import SkillSection from "@/app/components/SkillSection";
import { IconMoodSmile } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="relative bg-zinc-950 flex flex-col items-start justify-center p-6 md:px-36">
      <img
        src="/gif/ryuk-eating.gif"
        alt="kira-gif"
        className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-30 blur-md grayscale"
        draggable={false}
      />
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
        <IntroSection />
        <SkillSection />
        <ExperienceSection />
        <div className="flex items-center justify-center w-full space-x-2">
          <IconMoodSmile />
          <a href="/secret">Click Here For A Secret</a>
          <IconMoodSmile />
        </div>
      </div>
    </div>
  );
}
