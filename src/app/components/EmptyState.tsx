import PageShell from "@/app/components/PageShell";
import SectionTitle from "@/app/components/SectionTitle";

export default function EmptyState({ title }: { title: string }) {
  return (
    <PageShell>
      <div className="flex flex-col space-y-6">
        <SectionTitle>{title}</SectionTitle>
        <div className="font-mono text-zinc-400">
          <span className="text-red-500">$ </span>ls {title.toLowerCase()}/
          <div className="text-zinc-500">nothing here yet. check back soon.</div>
        </div>
      </div>
    </PageShell>
  );
}
