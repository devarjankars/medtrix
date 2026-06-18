"use client";

import { useEffect, useState, useRef } from "react";
import { lenisInstance } from "@/components/LenisProvider";
import { motion, useInView } from "framer-motion";
import ApplyModal from "@/components/ApplyModal";

const ease = [0.22, 1, 0.36, 1];

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function JobDetailsCard({ job, onBack }) {
  const [applyOpen, setApplyOpen] = useState(false);

  useEffect(() => {
    if (lenisInstance) lenisInstance.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [job.id]);

  return (
    <div className="w-full">

      {/* Back button */}
      <motion.button
        onClick={onBack}
        className="group inline-flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease }}
        whileHover={{ x: -3 }}
      >
        <motion.span
          className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#2A2A2A] group-hover:border-[#E1251B] transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          ←
        </motion.span>
        Back to Life @ Medtrix
      </motion.button>

      {/* Title */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease, delay: 0.1 }}
      >
        {job.title}
      </motion.h1>

      {/* Meta + Apply button */}
      <motion.div
        className="flex flex-wrap items-center gap-2 text-[#d1d5db] text-[15px] mb-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.18 }}
      >
        <span>Experience: {job.experience}</span>
        <span className="text-[#3a3a3a]">|</span>
        <span>{job.workMode}</span>
        <span className="text-[#3a3a3a]">|</span>
        <span>{job.location}</span>
        <span className="text-[#3a3a3a]">|</span>
        <span>{job.type}</span>

        <motion.button
          onClick={() => setApplyOpen(true)}
          className="relative inline-flex items-center gap-2 ml-2 px-8 py-2.5 rounded-full text-white font-semibold text-sm overflow-hidden cursor-pointer"
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
      </motion.div>

      {/* Divider draw-in */}
      <motion.div
        className="border-t border-[#1e1e1e] mb-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease, delay: 0.25 }}
        style={{ transformOrigin: "left" }}
      />

      {/* About */}
      <FadeUp delay={0.05}>
        <div className="text-[#d1d5db] text-[16px] lg:text-[18px] space-y-1 mb-8">
          <p>For over 14 years, MedTrix has helped leading pharmaceutical and biotechnology companies bring complex science to life through impactful medical communications and engagement solutions. As a medical communications and digital enablement partner, we combine scientific expertise, creative excellence, and technology-driven solutions to create meaningful experiences for global healthcare audiences.</p>
          <p>At MedTrix, you will contribute to innovative healthcare communication initiatives while collaborating with some of the world’s most recognized pharmaceutical brands.Our collaborative and agile environment brings together a dynamic team of talented professionals who are passionate about learning, innovation, and delivering meaningful impact.</p>
          <p>If you enjoy working with an energetic, ambitious, and growth-oriented team where your ideas and contributions are valued, we invite you to explore a career with us.</p>
        </div>
      </FadeUp>

      {/* Job Summary */}
      {job.summary && (
        <FadeUp delay={0.05} className="mb-8">
          <h2 className="text-white font-bold text-base mb-2">Job Summary</h2>
          <p className="text-[#d1d5db] text-[15px] lg:text-[17px] leading-relaxed">{job.summary}</p>
        </FadeUp>
      )}

      {/* Duties */}
      {job.duties?.length > 0 && (
        <FadeUp delay={0.05} className="mb-8">
          <h2 className="text-white font-bold text-base mb-3">Duties and Responsibilities</h2>
          <ul className="space-y-2">
            {job.duties.map((item, i) => (
              <motion.li
                key={i}
                className="flex gap-2 text-[#d1d5db] text-[15px] lg:text-[17px] leading-[130%]"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, ease, delay: i * 0.06 }}
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#E1251B] shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </FadeUp>
      )}

      {/* Experience */}
     

      {/* Qualifications */}
      {job.qualifications?.length > 0 && (
        <FadeUp delay={0.05} className="mb-8">
          <h2 className="text-white font-bold text-base mb-3">  Qualifications & Experience</h2>
          <ul className="space-y-2">
            {job.qualifications.map((item, i) => (
              <motion.li
                key={i}
                className="flex gap-2 text-[#d1d5db] text-[15px] lg:text-[17px] leading-[130%]"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, ease, delay: i * 0.06 }}
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#E1251B] shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </FadeUp>
      )}

      {applyOpen && <ApplyModal jobTitle={job.title} onClose={() => setApplyOpen(false)} />}
    </div>
  );
}
