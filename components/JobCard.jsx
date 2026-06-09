"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function JobCard({ job, onClick }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");
    setSaved(savedJobs.includes(job.id));
  }, [job.id]);

  return (
    <div className="flex flex-col  md:gap-2 bg-[#111111] border border-[#2a2a2a] rounded-[16px] p-6 hover:border-[#3a3a3a] transition-colors duration-300">

      {/* Title row with saved indicator */}
      {/* <div className="flex items-start justify-between gap-2">
        <h3 className="text-white text-lg font-semibold leading-snug">{job.title}</h3>
        {saved && (
          <span className="flex-shrink-0 mt-0.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </span>
        )}
      </div> */}

      {/* Meta */}
      <p className="font-medium text-white">{job.title}</p>
      <div className="flex items-center  text-gray-400 text-[13px]">
        <span>Experience : {job.experience}</span><span className="mx-1 text-[#3a3a3a]">|</span>
        <span>{job.location}</span>
        <span className="mx-1 text-[#3a3a3a]">|</span>
        <span>{job.type}</span>
      </div>

      {/* CTA */}
      <div>
        <motion.button
          onClick={() => onClick?.(job)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 380, damping: 22 }}
          className="relative inline-flex items-center gap-1 px-4 py-1.5  mt-2 rounded-full text-white text-xs  overflow-hidden cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #E1251B 0%, #ff4d42 100%)",
            boxShadow: "0 0 14px rgba(225,37,27,0.35)",
          }}
        >
          <motion.span
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)",
              backgroundSize: "200% 100%",
            }}
            animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
            transition={{ duration: 2.5, ease: "linear", repeat: Infinity, repeatDelay: 1.5 }}
          />
          <span className="relative z-10 font-normal">Read More</span>
        </motion.button>
      </div>

    </div>
  );
}
