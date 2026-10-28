import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import SectionTitle from "@/app/components/SectionTitle";
import projectData from "@/app/data/projects.json";

type Project = {
  title: string;
  summary: string;
  flow?: string[][];
  highlights: { lead: string; text: string; href?: string }[];
  tags: string[];
  href?: string;
};

const projects: Project[] = projectData;

// A project with `href` is one clickable card; without it, each highlight carries its own link.
export default function ProjectsSection() {
  return (
    <div className="flex flex-col w-full space-y-6">
      <SectionTitle>Projects</SectionTitle>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`group relative flex flex-col gap-4 border border-zinc-800 bg-zinc-950/60 p-5 transition-colors duration-200 ${
              project.href ? "hover:border-red-500 focus-within:border-red-500" : ""
            }`}
          >
            <div>
              <div className="text-lg font-bold text-zinc-100">
                {project.title}
              </div>
              <div className="text-zinc-400">{project.summary}</div>
            </div>
            {project.flow && (
              <div className="flex flex-wrap items-center gap-2 border border-zinc-800 bg-zinc-900/60 p-3 font-mono text-xs text-zinc-300">
                {project.flow.map((stage, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {i > 0 && <IconArrowRight size={14} className="text-red-500" />}
                    <div className="flex flex-col gap-1">
                      {stage.map((node) => (
                        <span key={node} className="border border-zinc-700 px-2 py-1">
                          {node}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            )}
            <div className="flex flex-col gap-2">
              {project.highlights.map((item) => {
                const body = (
                  <>
                    <span
                      className={`font-semibold text-zinc-200 ${item.href ? "font-mono" : ""}`}
                    >
                      {item.lead}
                    </span>{" "}
                    {item.text}
                  </>
                );
                return (
                  <div key={item.lead} className="flex">
                    <span className="mr-2 font-mono text-red-600">&gt;</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-zinc-400 transition-colors hover:text-red-500 focus-visible:text-red-500 focus-visible:outline-none"
                      >
                        {body}
                        <IconArrowUpRight size={16} className="ml-1 inline" />
                      </a>
                    ) : (
                      <span className="flex-1 text-zinc-400">{body}</span>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-xs text-zinc-400">
              {project.tags.map((tag) => (
                <span key={tag} className="border border-zinc-700 px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-mono text-sm text-red-500 after:absolute after:inset-0 focus-visible:outline-none"
              >
                View on GitHub
                <IconArrowUpRight size={16} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
