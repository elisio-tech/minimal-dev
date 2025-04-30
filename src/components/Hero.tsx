import { Location } from "iconsax-reactjs";

export default function Hero() {
  return (
    <section className="pt-32 text-zinc-700">
      <div className="max-w-md mx-auto text-center flex flex-col gap-6">
        <h1 className="text-7xl">Hi, I'm Olivier</h1>
        <div className="flex justify-center items-center gap-4">
          <Location variant="Bold" size="24" color="#000" />
          <span>Brooklyn, NY</span>
        </div>
        <p className="text-md ">
          Currently working on nevermind.llc, a prototyping studio making apps
          and websites that are fun to play with.
        </p>
      </div>
    </section>
  );
}
