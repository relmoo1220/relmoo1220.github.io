import localFont from "next/font/local";

const cloisterBlack = localFont({
  src: "../fonts/CloisterBlack.ttf",
  display: "swap",
});
export default function Secret() {
  return (
    <div
      className={`relative flex w-full h-screen bg-black items-center justify-center ${cloisterBlack.className}`}
    >
      <img
        src="/gif/kira.gif"
        alt="kira-gif"
        className="absolute inset-0 w-full h-full object-cover opacity-30 blur-md grayscale"
      />
      <div className="relative z-10 text-center text-white text-2xl md:text-6xl">
        Your Name Has Been Written
      </div>
    </div>
  );
}
