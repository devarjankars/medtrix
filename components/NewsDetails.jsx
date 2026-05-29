"use client";

import { useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { lenisInstance } from "@/components/LenisProvider";

export default function NewsDetails({ news, onBack }) {
  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <div className="w-full animate-fadeIn">
      {/* Back Button */}
       <motion.button
          onClick={onBack}
          className="group inline-flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
          whileHover={{ x: -3 }}
          transition={{ type: "spring", stiffness: 380, damping: 22 }}
        >
           <motion.span
            className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#2A2A2A] group-hover:border-[#E1251B] transition-colors cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            ←
          </motion.span>
        Back to News & Updates
     </motion.button>

      {/* Title */}
      <h1 className="text-3xl  lg:text-[56px] font-semibold text-white lg:leading-[72px] mb-8">
        {news.title}
      </h1>

      {/* Meta */}
      {/* {(news.date || news.category) && (
        <div className="flex items-center gap-4 mb-8">
          {news.date && (
            <span className="text-xs text-red-500 font-semibold uppercase tracking-widest">
              {news.date}
            </span>
          )}
          {news.category && (
            <span className="text-xs text-gray-500 uppercase tracking-widest border border-[#2a2a2a] px-3 py-1 rounded-full">
              {news.category}
            </span>
          )}
        </div>
      )} */}

      {/* Body paragraphs */}
      {news.body && (
        <div className="space-y-5 text-gray-300 text-sm md:text-base leading-relaxed mb-12">
          {news.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
            {news.link && (
            <p>
              <a href={news.link} target="_blank" rel="noopener noreferrer" className="text-[#E1251B] underline underline-offset-4 hover:opacity-80 transition-opacity">
                Click here
              </a>
              {news.linkLabel && ` ${news.linkLabel}`}
            </p>
          )}
        </div>
      )}

      {/* Image Gallery */}
      {news.images && news.images.length > 0 && (
        <div
          className={`grid gap-4 ${
            news.images.length === 1
              ? "grid-cols-1"
              : news.images.length === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : news.images.length === 3
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2"
          }`}
        >
          {news.images.map((src, i) => {
            // if odd total and this is the last image, span full width
            const isLastOdd =
              news.images.length > 1 &&
              news.images.length % 2 !== 0 &&
              i === news.images.length - 1;

            return (
              <div
                key={i}
                className={`rounded-[14px] overflow-hidden border border-[#2a2a2a] ${
                  isLastOdd ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <img
                  src={src}
                  alt={`${news.title} image ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
