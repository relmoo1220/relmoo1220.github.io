import IntroSection from "@/app/components/IntroSection";
import ExperienceSection from "@/app/components/ExperienceSection";
import PageShell from "@/app/components/PageShell";
import SkillSection from "@/app/components/SkillSection";

export default function Home() {
  return (
    <PageShell>
      <IntroSection />
      <SkillSection />
      <ExperienceSection />
      <footer className="border-t border-zinc-800 pt-6 font-mono text-sm text-zinc-500">
        <a href="/secret" className="transition-colors hover:text-red-500">
          &gt; click here for a secret
        </a>
      </footer>
    </PageShell>
  );
}
