import { Link } from "react-router-dom";
import { works } from "./data/work";

export default function Work() {
  return (
    <section className="mx-auto max-w-3xl pt-32 px-4">
      <div className="space-y-20">
        {works.map((work, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            {/* Text content */}
            <div className="flex flex-col gap-4">
              <div className="mb-2">{work.icon}</div>
              <h1 className="text-3xl md:text-4xl font-bold text-zinc-600">{work.title}</h1>
              <span className="text-sm text-gray-500 uppercase">{work.subText}</span>
              <p className="text-base text-gray-700">{work.text}</p>
              <Link
                to={work.link}
                className="mt-2 text-blue-600 underline hover:text-blue-800"
              >
                View live
              </Link>
            </div>

            {/* Image */}
            <div>
              <img
                src={work.img}
                alt={work.text}
                className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
