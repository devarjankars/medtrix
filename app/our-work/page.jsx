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

  const filtered =
    active === "ALL PROJECTS"
      ? projects
      : projects.filter(
          (p) => p.category.toUpperCase() === active
        );

  return (
    <section className="w-[90%] md:w-[80%] mx-auto py-20">
      <div className="flex gap-3 mb-10 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              active === filter
                ? "bg-red-500 text-white"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      {filtered.map((project) => (
        <WorkCard
          key={project.id}
          project={project}
        />
      ))}
    </section>
  );
}