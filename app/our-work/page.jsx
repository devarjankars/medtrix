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

const ease = [0.22, 1, 0.36, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 },
  }),
  exit: { opacity: 0, y: -24, transition: { duration: 0.25 } },
};

const filterRow = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const filterBtn = {
  hidden: { opacity: 0, y: -16, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease } },
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

      {/* PAGE HEADING */}
      <div
            className="relative inline-block rounded-full max-w-fit p-[1px] mb-10"
            style={{
              background:
                "linear-gradient(to right, rgba(225,37,27,0.5), transparent 43%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)",
            }}
          >
            <span className="inline-block text-[14px] font-bold uppercase text-[#FFF] bg-[#0c0606] px-5 py-2 rounded-full">
              our work
            </span>
          </div>
      <motion.div
        variants={filterRow}
        initial="hidden"
        animate="visible"
        className="flex gap-3 mb-14 flex-wrap"
      >
        {filters.map((filter) => {
          const isActive = active === filter;
          const count = projects.filter(
            (p) => p.category.toUpperCase() === filter
          ).length;

          return (
            <motion.button
              key={filter}
              variants={filterBtn}
              onClick={() => setActive(filter)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium overflow-hidden flex items-center gap-2 ${
                isActive
                  ? "text-white"
                  : "bg-zinc-800 text-zinc-400 hover:text-white"
              }`}
            >
              {/* sliding red background pill */}
              {isActive && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full z-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #E1251B 0%, #ff4d42 100%)",
                    boxShadow: "0 0 18px rgba(225,37,27,0.45)",
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}

              {/* shimmer sweep on active */}
              {isActive && (
                <motion.span
                  className="absolute inset-0 rounded-full z-1 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                  transition={{
                    duration: 2.5,
                    ease: "linear",
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              )}

              <span className="relative z-10">{filter}</span>

              {/* count badge */}
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${filter}-${count}`}
                  className={`relative z-10 text-[11px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-zinc-700 text-zinc-400"
                  }`}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.25 }}
                >
                  {count}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          );
        })}
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
