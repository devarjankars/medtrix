"use client";

import { motion } from "framer-motion";

// Picks a subtle gradient per index so each row has its own accent
const gradients = [
  "from-[#E1251B]/20 to-[#1a0505]",
  "from-[#1a2a4a] to-[#0a0e1a]",
  "from-[#1a3a2a] to-[#080f0a]",
  "from-[#2a1a3a] to-[#0a080f]",
  "from-[#2a2510] to-[#0f0e07]",
];

export default function BlogRow({ blog, onClick, index }) {
  const grad = gradients[index % gradients.length];

  return (
    <motion.div
      onClick={() => onClick(blog)}
      className="group flex items-center gap-5 md:gap-7 cursor-pointer border-b border-[#1a1a1a] py-6 hover:border-[#2a2a2a] transition-all duration-300 px-4 rounded-xl -mx-4 hover:bg-[#0e0e0e]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
    >
      {/* Decorative index tile — replaces thumbnail */}
      <div
        className={`shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${grad} border border-white/5 flex flex-col items-center justify-center gap-0.5 group-hover:border-[#E1251B]/30 transition-all duration-300`}
      >
        <span className="text-[18px] md:text-[22px] font-bold text-white/20 group-hover:text-[#E1251B]/60 transition-colors duration-300 leading-none font-mono">
          {String(index + 1).padStart(2, "0")}
        </span>
        {/* Small category initial */}
        {blog.category && (
          <span className="text-[8px] uppercase tracking-[0.2em] text-white/20 group-hover:text-[#E1251B]/50 transition-colors duration-300 leading-none">
            {blog.category.split(" ")[0]}
          </span>
        )}
      </div>

      {/* Text block */}
      <div className="flex-1 min-w-0">
        {blog.category && (
          <span className="text-[11px] uppercase tracking-widest text-[#E1251B] font-medium block mb-1.5">
            {blog.category}
          </span>
        )}
        <h3 className="text-[16px] lg:text-[19px] font-semibold text-[#d1d5db] group-hover:text-white transition-colors duration-200 leading-normal line-clamp-2">
          {blog.title}
        </h3>
        {blog.date && (
          <p className="text-xs text-gray-600 uppercase tracking-widest mt-1.5">{blog.date}</p>
        )}
      </div>

      {/* Arrow circle */}
      <div className="shrink-0 w-8 h-8 rounded-full border border-[#2a2a2a] group-hover:border-[#E1251B] flex items-center justify-center text-gray-600 group-hover:text-[#E1251B] transition-all duration-300 ml-1">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </motion.div>
  );
}
