import Nav from "@/app/components/Nav";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-zinc-950 min-h-screen">
      <img
        src="/gif/ryuk-eating.gif"
        alt=""
        className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-30 blur-md grayscale"
        draggable={false}
      />
      <Nav />
      <main className="relative z-10 mx-auto flex max-w-3xl flex-col space-y-16 px-6 py-16">
        {children}
      </main>
    </div>
  );
}
