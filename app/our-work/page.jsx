"use client";
import { useState } from "react";
import WorkCard from "@/components/WorkCard";
import { projects } from "@/Data/project";

const filters = [
  "ALL PROJECTS",
  "STRATEGY & CONSULTING",
  "COMMERCIAL SOLUTIONS",
  "MEDICAL AFFAIRS",
  "DIGITAL",
];

export default function WorkPage() {
  const [active, setActive] = useState("ALL PROJECTS");

  const filtered = active === "ALL PROJECTS"
    ? projects
    : projects.filter(p => p.category.toUpperCase() === active);

  return (
    <section className="bg-black min-h-screen px-6 lg:px-24 py-20">

      <p className="text-white uppercase text-sm tracking-[4px] mb-12">Our Work</p>

      <div className="flex gap-3 overflow-x-auto mb-20 pb-2">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-6 py-3 rounded-xl text-sm whitespace-nowrap transition font-medium ${
              active === item
                ? "bg-white text-black"
                : "bg-[#1E1E1E] text-white hover:bg-[#2a2a2a]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {filtered.map(project => (
        <WorkCard key={project.id} project={project} />
      ))}

    </section>
  );
}
