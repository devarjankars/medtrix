"use client";

import { motion } from "framer-motion";

export default function WorkCard({ project, onExplore }) {
  return (
    <motion.div
      className="grid lg:grid-cols-2 gap-8 mb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {/* LEFT IMAGE */}
      <motion.div
        className="rounded-[22px] overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={project.imgforfiltersection || project.image}
          alt={project.title}
          className="w-full h-full object-contain rounded-[22px]"
        />
      </motion.div>

      {/* RIGHT */}
      <div className="text-white flex flex-col">

        <h2 className=" text-3xl  lg:text-[36px]  leading-tight  font-medium  mb-6"
        >
          {project.title}
        </h2>

        {/* TAGS */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className=" border  border-[#3A3A3A]   px-4 py-2 rounded-md text-[11px] uppercase tracking-[2px]" >
              {tag}
            </span>
          ))}
        </div>

        {/* STACK + TIMELINE */}
        <div className="  border-y  border-[#252525]  py-6  mb-8  grid lg:grid-cols-2 gap-8 " >
          {/* LEFT */}
          <div>
            <p className="text-xs uppercase text-gray-400 mb-3 tracking-[2px]">
              Engagement Model:
            </p>

            <p className="text-white text-lg">
              {project.engagementModel}
            </p>
          </div>

          {/* RIGHT */}
          <div className="lg:border-l border-[#252525] lg:pl-8">
            <p className="text-xs uppercase text-gray-400 mb-3 tracking-[2px]">
              Timeline / Status
            </p>

            <p className="text-white text-lg">
              {project.timeline}
            </p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="space-y-3 text-gray-300 mb-10">
          {project.desc.map((item) => (
            <p key={item} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#E1251B] shrink-0" />
              {item}
            </p>
          ))}
        </div>

        <motion.button
          onClick={onExplore}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 380, damping: 22 }}
          className="relative inline-flex w-fit items-center gap-2 px-8 py-4 rounded-full text-white font-medium overflow-hidden  cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #E1251B 0%, #ff4d42 100%)",
            boxShadow: "0 0 18px rgba(225,37,27,0.45)",
          }}
        >
          {/* shimmer sweep */}
          <motion.span
            className="absolute inset-0 rounded-full "
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
              repeatDelay: 1.5,
            }}
          />
          <span className="relative z-10">EXPLORE</span>
          <motion.span
            className="relative z-10"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.button>
      </div>

    </motion.div>
  );
}