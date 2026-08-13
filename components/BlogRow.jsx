"use client";

import { motion } from "framer-motion";

export default function BlogRow({ blog, onClick, index }) {
  return (
    <motion.div
      onClick={() => onClick(blog)}
      className="group flex items-center gap-5 md:gap-7 cursor-pointer border-b border-[#1a1a1a] py-6 hover:border-[#2a2a2a] transition-all duration-300 px-4 rounded-xl -mx-4 hover:bg-[#0e0e0e]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
    >
      {/* Index number */}
      <span className="shrink-0 text-[13px] text-gray-700 group-hover:text-[#E1251B] transition-colors duration-300 w-5 text-right font-mono select-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Thumbnail — only if URL present */}
      {blog.thumbnail ? (
        <div className="shrink-0 w-18 h-13 md:w-24 md:h-16 rounded-xl overflow-hidden bg-[#1a1a1a]">
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        /* Placeholder block when no image */
        <div className="shrink-0 w-18 h-13 md:w-24 md:h-16 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3a3a3a" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      )}

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

      {/* Arrow */}
      <div className="shrink-0 w-8 h-8 rounded-full border border-[#2a2a2a] group-hover:border-[#E1251B] flex items-center justify-center text-gray-600 group-hover:text-[#E1251B] transition-all duration-300 ml-1">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </motion.div>
  );
}
