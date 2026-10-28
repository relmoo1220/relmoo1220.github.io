export default function SectionTitle({ children }: { children: string }) {
  return (
    <div className="flex w-full items-center gap-4">
      <h2 className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-red-500">
        {children}
      </h2>
      <div className="h-px flex-1 bg-red-900" />
    </div>
  );
}
