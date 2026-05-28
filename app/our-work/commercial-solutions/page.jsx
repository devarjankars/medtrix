"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorkCard from "@/components/WorkCard";
import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/Data/project";

const CATEGORY = "COMMERCIAL SOLUTIONS";

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 },
  }),
  exit: { opacity: 0, y: -24, transition: { duration: 0.25 } },
};

function PageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get("project");

  const filtered = projects.filter(
    (p) => p.category.toUpperCase() === CATEGORY
  );

  const selectedProject = projectId
    ? projects.find((p) => p.id === projectId) ?? null
    : null;

  function openProject(project) {
    router.push(`/our-work/commercial-solutions?project=${project.id}`, { scroll: false });
  }

  function goBack() {
    router.push("/our-work/commercial-solutions", { scroll: false });
  }

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

  return (
    <section className="w-[90%] md:w-[80%] mx-auto py-20">
      {/* PAGE HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-14"
      >
        <span className="text-xs uppercase tracking-[3px] text-red-500 font-semibold">
          Our Work
        </span>
        <h1 className="text-white text-4xl md:text-5xl font-medium mt-3 leading-tight">
          Commercial Solutions
        </h1>
      </motion.div>

      {/* PROJECT CARDS */}
      <AnimatePresence mode="wait">
        <motion.div key={CATEGORY}>
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

export default function CommercialSolutionsWorkPage() {
  return (
    <Suspense>
      <PageInner />
    </Suspense>
  );
}
