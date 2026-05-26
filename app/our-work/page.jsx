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
      {filtered.map((project) => (
        <WorkCard
          key={project.id}
          project={project}
        />
      ))}
    </section>
  );
}