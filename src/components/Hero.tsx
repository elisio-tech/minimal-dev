import { Location } from "iconsax-reactjs";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import {
  RiFirebaseFill,
  RiVuejsFill,
  RiNextjsFill,
} from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

export default function Hero() {
  return (
    <section className="py-32 text-zinc-700 relative overflow-hidden max-w-4xl mx-auto">
      <div className="max-w-md mx-auto text-center flex flex-col gap-8 z-10 relative">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          Hi, I'm Olivier
        </h1>
        <div className="flex justify-center items-center gap-x-4">
          <Location  size="24" color="#000" />
          <span>Brooklyn, NY</span>
        </div>
        <p className="text-md">
          Currently working on nevermind.llc, a prototyping studio making apps
          and websites that are fun to play with.
        </p>
      </div>

      {/* Tech Icons Around the Text */}
      <div className="absolute top-20 left-[10%]">
        <FaHtml5 size={28} color="#e34c26" />
      </div>

      <div className="absolute top-[40%] left-[20%]">
        <SiTailwindcss size={24} color="#38bdf8" />
      </div>

      <div className="absolute top-10 right-[20%]">
        <RiNextjsFill size={36} color="#000" />
      </div>

      <div className="absolute top-[80%] right-[20%]">
        <RiFirebaseFill size={30} color="#f58220" />
      </div>

      <div className="absolute bottom-[10%] left-12">
        <RiVuejsFill size={28} color="#42b883" />
      </div>

      <div className="absolute bottom-44 right-24">
        <BiLogoTypescript size={32} color="#3178c6" />
      </div>
    </section>
  );
}
