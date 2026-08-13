"use client";

import { motion } from "framer-motion";

export default function BlogRow({ blog, onClick, index }) {
  // Use LinkedInDescription as the preview text if no excerpt field
  const preview = blog.excerpt || blog.LinkedInDescription || "";

  return (
    <motion.div
      onClick={() => onClick(blog)}
      className="group flex items-start gap-4 md:gap-6 cursor-pointer border-b border-[#1e1e1e] py-5 hover:bg-[#111] transition-colors duration-200 px-3 rounded-lg -mx-3"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
    >
      {/* Thumbnail — shown only when thumbnail URL is present */}
      {blog.thumbnail && (
        <div className="shrink-0 w-20 h-15 md:w-27.5 md:h-19 rounded-xl overflow-hidden bg-[#1a1a1a]">
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-6">
          {/* Left: category + title + date */}
          <div className="flex-1 min-w-0">
            {blog.category && (
              <span className="text-[11px] uppercase tracking-widest text-[#E1251B] font-medium block mb-1">
                {blog.category}
              </span>
            )}
            <h3 className="text-[15px] md:text-[17px] font-semibold text-[#d1d5db] group-hover:text-white transition-colors leading-snug line-clamp-2">
              {blog.title}
            </h3>
            {blog.date && (
              <p className="text-[12px] text-gray-500 mt-1">{blog.date}</p>
            )}
          </div>

          {/* Right: preview text (desktop only) */}
          {preview && (
            <p className="hidden md:block text-[13px] text-gray-500 leading-relaxed line-clamp-3 max-w-sm shrink-0">
              {preview}
            </p>
          )}
        </div>

        {/* Preview text on mobile */}
        {preview && (
          <p className="md:hidden text-[13px] text-gray-500 leading-relaxed line-clamp-2 mt-2">
            {preview}
          </p>
        )}
      </div>

      {/* Arrow */}
      <div className="shrink-0 self-center text-gray-600 group-hover:text-[#E1251B] transition-colors duration-200 ml-1">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </motion.div>
  );
}
