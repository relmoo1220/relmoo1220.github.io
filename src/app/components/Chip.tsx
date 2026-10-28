export default function Chip({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex cursor-default select-none items-center gap-2 border border-zinc-400 bg-zinc-300 px-2.5 py-1.5 text-sm text-zinc-900 transition-colors duration-200 hover:border-red-500">
      <img src={icon} alt="" className="h-5 w-5" draggable={false} />
      <span>{name}</span>
    </div>
  );
}
