"use client";
import { useRef, Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, useInView, AnimatePresence } from "framer-motion";
import DynamicHeader from "@/components/DynamicHeader";
import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/Data/project";
import { lenisInstance } from "@/components/LenisProvider";

const scrollKey = "di-services-scroll";

const ease = [0.22, 1, 0.36, 1];

const cardContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

const strategyParagraphs = [
  "Innovation, for us, has never been just about technology but about solving real problems in meaningful ways. It has been our defining characteristic from the very beginning. It drove us to do more with less and enable novel experiences for clients and patients.",
  "Our strongest partnerships with pharmaceutical companies have been built through innovative solutions to achieve unique objectives and address challenges specific to a particular client or set of circumstances.",
];

// filtered once—only DIGITAL INNOVATION projects
const digitalProjects = projects.filter(
  (p) => p.category.toUpperCase() === "DIGITAL INNOVATION"
);

function DigitalInnovationInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get("project");

  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });

  const pillRef = useRef(null);
  const pillInView = useInView(pillRef, { once: true, amount: 0.5 });

  const selectedProject = projectId
    ? digitalProjects.find((p) => p.id === projectId) ?? null
    : null;

  useEffect(() => {
    if (!selectedProject) {
      const saved = sessionStorage.getItem(scrollKey);
      if (saved) {
        const y = parseInt(saved, 10);
        requestAnimationFrame(() => {
          if (lenisInstance) lenisInstance.scrollTo(y, { immediate: true });
          else window.scrollTo(0, y);
        });
        sessionStorage.removeItem(scrollKey);
      }
    }
  }, [selectedProject]);

  useEffect(() => {
    if (selectedProject) {
      if (lenisInstance) lenisInstance.scrollTo(0, { immediate: true });
      else window.scrollTo(0, 0);
    }
  }, [projectId]);

  function openProject(project) {
    sessionStorage.setItem(scrollKey, String(lenisInstance?.scroll ?? window.scrollY));
    router.push(`/services/digital-innovation?project=${project.id}`, { scroll: false });
  }

  function goBack() {
    router.push("/services/digital-innovation", { scroll: false });
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
  return (
    <main className="relative min-h-screen">
      <DynamicHeader
        tagText="DIGITAL INNOVATION"
        title="Innovation That Creates Meaningful Impact"
        paragraphs={strategyParagraphs}
        desktopBg={"https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/dibgdesk.jpg"}
        mobileImg={"https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/dimobi.png"}
      />

      <section className="relative bg-black py-5 md:py-12  md:px-0 overflow-hidden w-[90%] md:w-[80%] mx-auto">
        <div className="mb-10">

          {/* Section pill */}
          <motion.div
            ref={pillRef}
            className="mb-9 md:12"
            initial={{ opacity: 0, y: 20 }}
            animate={pillInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="relative inline-flex px-4 py-3 rounded-full text-white tracking-[4px] text-xs md:text-sm font-bold uppercase border border-[#2A2525] overflow-hidden"
              style={{ background: "linear-gradient(to right, rgba(255,255,255,0.2), rgba(0,0,0,0.4))" }}
              animate={pillInView ? { borderColor: ["rgba(42,37,37,1)", "rgba(225,37,27,0.5)", "rgba(42,37,37,1)"] } : {}}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
            >
              {/* shimmer sweep on enter */}
              <motion.span
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)" }}
                initial={{ x: "-100%" }}
                animate={pillInView ? { x: "200%" } : {}}
                transition={{ duration: 0.9, ease: "easeInOut", delay: 0.3 }}
              />
              EXPLORE OUR INNOVATION CASE STUDIES
            </motion.div>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full"
            variants={cardContainer}
            initial="hidden"
            animate={gridInView ? "visible" : "hidden"}
          >
            <AnimatePresence>
              {digitalProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardItem}
                  className="bg-[#141414] border border-[#2C2C2C] rounded-2xl overflow-hidden transition-colors duration-300  cursor-pointer"
                  // whileHover={{ y: -5, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 280, damping: 24 }}
                  onClick={() => openProject(project)}
                >
                  <div className="p-4 pb-0">
                    <img
                      src={project.imgforfiltersection}
                      alt={project.title}
                      className="w-full h-70 object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-white text-[22px] font-medium leading-snug">
                      {project.cardTitle || project.title}
                    </h3>
                    {/* tags */}
                    {/* <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="border border-[#3A3A3A] px-3 py-1 rounded-md text-[10px] uppercase tracking-[2px] text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>

        {/* Glow */}
        <motion.div
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-10 rounded-full"
          initial={{ opacity: 0, scaleX: 0.4 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease }}
          style={{
            background:
              "radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)",
          }}
        />
      </section>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense>
      <DigitalInnovationInner />
    </Suspense>
  );
}
