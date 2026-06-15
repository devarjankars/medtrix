"use client";

import { useEffect, useState } from "react";
import { lenisInstance } from "@/components/LenisProvider";
import { motion } from "framer-motion";
import ApplyModal from "@/components/ApplyModal";

export default function JobDetailsCard({ job, onBack }) {
  const [applyOpen, setApplyOpen] = useState(false);

  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [job.id]);

  return (
    <div className="w-full animate-fadeIn">

      {/* ── Back button ── */}
      <motion.button
          onClick={onBack}
          className="group inline-flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer mb-6"
          whileHover={{ x: -3 }}
          transition={{ type: "spring", stiffness: 380, damping: 22 }}
        >
          <motion.span
            className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#2A2A2A] group-hover:border-[#E1251B] transition-colors cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            ←
          </motion.span>
          Back to Life @ Medtrix
        </motion.button>

      {/* ── Header ── */}
      <div className="mb-2">
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          {job.title}
        </h1>
      </div>

      {/* ── Meta ── */}
      <div className="flex items-center gap-0 text-gray-400 text-[13px] mb-6">
        <span>Experience : {job.experience}</span>
        <span className="mx-3 text-[#3a3a3a]">|</span>
        <span>{job.workMode}</span>
        <span className="mx-3 text-[#3a3a3a]">|</span>
        <span>{job.location}</span>
        <span className="mx-3 text-[#3a3a3a]">|</span>
        <span>{job.type}</span>
      </div>

      {/* ── Apply Now ── */}
      {/* <button className="px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-colors duration-200 mb-10 cursor-pointer">
        Apply Now
      </button> */}

   {/* ── Interest line ── */}
   
      {/* ── Divider ── */}
      <div className="border-t border-[#1e1e1e] mb-8" />
         <div className="flex items-center gap-4 mt-4 mb-8">
        <motion.button
          onClick={() => setApplyOpen(true)}
          className="relative inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold text-sm overflow-hidden cursor-pointer"
          style={{ background: "linear-gradient(135deg, #E1251B 0%, #ff4d42 100%)", boxShadow: "0 0 18px rgba(225,37,27,0.4)" }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 380, damping: 22 }}
        >
          <motion.span
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)", backgroundSize: "200% 100%" }}
            animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
            transition={{ duration: 2.5, ease: "linear", repeat: Infinity, repeatDelay: 1.5 }}
          />
          <span className="relative z-10">Apply Now</span>
        </motion.button>
        
      </div>
   

      {/* ── Job Summary ── */}
      {job.summary && (
        <div className="mb-8">
          <h2 className="text-white font-bold text-base mb-2">Job Summary</h2>
          <p className="text-gray-400 text-sm leading-relaxed">{job.summary}</p>
        </div>
      )}

      {/* ── Duties and Responsibilities ── */}
      {job.duties && job.duties.length > 0 && (
        <div className="mb-8">
          <h2 className="text-white font-bold text-base mb-3">Duties and Responsibilities</h2>
          <ul className="space-y-2">
            {job.duties.map((item, i) => (
              <li key={i} className="flex gap-2 text-gray-400 text-sm leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ── Experience ── */}
      {job.experienceDetails && job.experienceDetails.length > 0 && (
        <div className="mb-8">
          <h2 className="text-white font-bold text-base mb-3">Experience</h2>
          <ul className="space-y-2">
            {job.experienceDetails.map((item, i) => (
              <li key={i} className="flex gap-2 text-gray-400 text-sm leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ── Qualifications ── */}
      {job.qualifications && job.qualifications.length > 0 && (
        <div className="mb-8">
          <h2 className="text-white font-bold text-base mb-3">Qualifications</h2>
          <ul className="space-y-1">
            {job.qualifications.map((item, i) => (
              <li key={i} className="text-gray-400 text-sm leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>
      )}

{/* apply */}
      

      {applyOpen && <ApplyModal jobTitle={job.title} onClose={() => setApplyOpen(false)} />}


    </div>
  );
}
