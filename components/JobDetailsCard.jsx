"use client";

import { useEffect } from "react";
import { lenisInstance } from "@/components/LenisProvider";
import { motion } from "framer-motion";

export default function JobDetailsCard({ job, onBack }) {
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
          Back to life @ medtrix
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

 <h2 className="text-white font-bold text-base mb-3">Apply</h2>
         <p className="text-gray-400 text-m mb-8">
        Interested in this opportunity? Please send your resume to{" "}
        <a href="mailto:hr@medtrixhealthcare.com" className="text-[#E1251B] hover:underline">hr@medtrixhealthcare.com</a>
      </p>


    </div>
  );
}
