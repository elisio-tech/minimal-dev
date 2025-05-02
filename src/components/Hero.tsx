import { Location } from "iconsax-reactjs";

export default function Hero() {
  return (
    <section className="h-[calc(100vh-96px)] pt-24 flex items-center justify-center text-zinc-700 relative max-w-4xl mx-auto">
      <div className="text-center grid justify-center items-center gap-8 z-10 relative max-w-md">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-zinc-300 to-zinc-900 bg-clip-text text-transparent">
          Hi, I'm Olivier
        </h1>
        <div className="flex justify-center items-center gap-x-4">
          <Location size="24" color="#393E46" />
          <span>Brooklyn, NY</span>
        </div>
        <p className="text-md">
          Currently working on nevermind.llc, a prototyping studio making apps
          and websites that are fun to play with.
        </p>
      </div>
    </section>
  );
}
