"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorkCard from "@/components/WorkCard";
import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/Data/project";
import { useState } from "react";

const filters = [
  "COMMERCIAL SOLUTIONS",
  "MEDICAL AFFAIRS",
  "DIGITAL INNOVATION",
  "STRATEGY AND CONSULTING",
];

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 },
  }),
  exit: { opacity: 0, y: -24, transition: { duration: 0.25 } },
};

function WorkPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get("project");

  const [active, setActive] = useState("COMMERCIAL SOLUTIONS");

  const selectedProject = projectId
    ? projects.find((p) => p.id === projectId) ?? null
    : null;

  function openProject(project) {
    router.push(`/our-work?project=${project.id}`, { scroll: false });
  }

  function goBack() {
    router.push("/our-work", { scroll: false });
  }

  // ── Detail view ────────────────────────────────────────────────────────────
  if (selectedProject) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <ProjectDetail project={selectedProject} onBack={goBack} />
      </motion.div>
    );
  }

  // ── List view ──────────────────────────────────────────────────────────────
  const filtered = projects.filter(
    (p) => p.category.toUpperCase() === active
  );

  return (
    <section className="w-[90%] md:w-[80%] mx-auto py-20">

      {/* FILTER TABS */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex gap-3 mb-14 flex-wrap"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
              active === filter
                ? "text-white"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
            }`}
          >
            {active === filter && (
              <motion.span
                layoutId="active-pill"
                className="absolute inset-0 bg-red-500 rounded-full z-0"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">{filter}</span>
          </button>
        ))}
      </motion.div>

      {/* PROJECT CARDS */}
      <AnimatePresence mode="wait">
        <motion.div key={active}>
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <WorkCard
                project={project}
                onExplore={() => openProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

    </section>
  );
}

export default function WorkPage() {
  return (
    <Suspense>
      <WorkPageInner />
    </Suspense>
  );
}
