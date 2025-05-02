import { useState } from "react";
import { Link } from "react-router-dom";
export default function Header() {
  const [activeLink, setActiveLink] = useState("Work");

  const navLinks = [
    { title: "Work", path: "/" },
    { title: "Play", path: "/play" },
  ];

  return (
    <header className="fixed z-50 left-0 right-0 top-0">
      <nav className="relative max-w-4xl mx-auto py-8">
        {/* Left: Logo */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Link className="font-[Oswald]" to={"/"}>
            E.
          </Link>
        </div>

        {/* Center: Nav Links */}
        <ul className="flex justify-center items-center gap-12 px-6 py-4 rounded-4xl shadow-md bg-zinc-100 w-fit mx-auto">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={() => setActiveLink(item.title)}
              className={`cursor-pointer ${
                activeLink === item.title
                  ? "text-zinc-800 font-bold"
                  : "text-zinc-700"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </ul>

        {/* Right: Button */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <button className="cursor-pointer transition-all flex justify-center items-center gap-1 flex-col bg-zinc-900 w-12 h-12 rounded-full">
            {[1, 2].map((item) => (
              <div key={item} className="w-6 h-[1px] bg-white" />
            ))}
          </button>
        </div>
      </nav>
    </header>
  );
}
