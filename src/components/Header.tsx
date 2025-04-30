import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [activeLink, setActiveLink] = useState("Work");

  const navLinks = [
    { title: "Work", path: "/" },
    { title: "Play", path: "/play" },
  ];

  return (
    <header>
      <nav className="max-w-4xl py-8 mx-4 sm:mx-auto flex justify-between items-center">
        <Link className="font-[Oswald]" to={"/"}>E.</Link>

        <ul className="flex justify-center items-center gap-12 rounded-4xl px-6 py-4 shadow-4xl shadow-gray-600 bg-zinc-200">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={() => setActiveLink(item.title)}
              className={`cursor-pointer ${
                activeLink === item.title ? "text-zinc-800 font-bold" : "text-zinc-700"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </ul>

        <button className="cursor-pointer transition-all flex justify-center items-center gap-1 flex-col bg-zinc-900 w-12 h-12 rounded-full">
          {[1, 2].map((item) => (
            <div key={item} className="w-6 h-[1px] bg-white" />
          ))}
        </button>
      </nav>
    </header>
  );
}
