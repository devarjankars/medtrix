"use client";

import { motion } from "framer-motion";

const LOWER = new Set(["a","an","the","and","but","or","for","nor","on","at","to","by","in","of","up","as","is","it"]);

function toTitleCase(str) {
  if (!str) return "";
  return str
    .split(" ")
    .map((word, i) => {
      if (!word) return word;
      if (i !== 0 && LOWER.has(word.toLowerCase())) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

const rowVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

export default function BlogRow({ blog, onClick, index }) {
  return (
    <motion.article
      onClick={() => onClick(blog)}
      className="group relative cursor-pointer"
      custom={index}
      variants={rowVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hover background */}
      <motion.div
        className="absolute inset-0 -mx-5 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        style={{ background: "linear-gradient(105deg, #0f0f0f 0%, #110808 100%)" }}
      />

      {/* Sliding red left border on hover */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-[#E1251B] origin-bottom"
        initial={{ scaleY: 0, opacity: 0 }}
        whileHover={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Main row content */}
      <div className="relative border-b border-[#161616] group-hover:border-[#252525] transition-colors duration-400 py-7 pl-5 pr-1 flex items-center gap-5 md:gap-8">

        {/* Index number */}
        <div className="shrink-0 w-6 text-right select-none">
          <motion.span
            className="block text-[11px] font-mono text-[#2e2e2e] group-hover:text-[#E1251B]/50 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.08 + 0.2 }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          {/* Category tag */}
          {blog.category && (
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] font-semibold text-[#E1251B]/70 group-hover:text-[#E1251B] transition-colors duration-300">
                <span className="w-3 h-px bg-[#E1251B]/50 group-hover:w-5 group-hover:bg-[#E1251B] transition-all duration-400 inline-block" />
                {toTitleCase(blog.category)}
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-[16px] lg:text-[19px] font-semibold text-[#b8b8b8] group-hover:text-white transition-colors duration-250 leading-[1.45] line-clamp-2 pr-2">
            {toTitleCase(blog.title)}
          </h3>

          {/* Date */}
          {blog.date && (
            <p className="text-[10px] text-[#333] uppercase tracking-widest mt-2.5 group-hover:text-[#555] transition-colors duration-300">
              {blog.date}
            </p>
          )}
        </div>

        {/* Right: Read label + animated arrow */}
        <div className="shrink-0 flex items-center gap-3">
          <motion.span
            className="hidden md:block text-[10px] uppercase tracking-[0.18em] text-transparent group-hover:text-[#666] transition-colors duration-300 font-medium whitespace-nowrap"
            initial={false}
          >
            Read Article
          </motion.span>

          {/* Arrow circle */}
          <motion.div
            className="relative w-9 h-9 rounded-full border border-[#232323] group-hover:border-[#E1251B]/50 flex items-center justify-center overflow-hidden"
            whileHover={{ scale: 1.12 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {/* Fill on hover */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#E1251B]/10 scale-0 group-hover:scale-100 transition-transform duration-300"
            />
            {/* Arrow icon */}
            <motion.svg
              width="13" height="13"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
              className="relative text-[#444] group-hover:text-[#E1251B] transition-colors duration-300"
              animate={{ x: 0 }}
              whileHover={{ x: 1 }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.div>
        </div>

      </div>
    </motion.article>
  );
}
