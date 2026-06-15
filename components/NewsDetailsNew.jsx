"use client";

import { useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { lenisInstance } from "@/components/LenisProvider";

export default function NewsDetailsNew({ news, onBack }) {
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
          className="group inline-flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer mb-2"
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

      {/* Title */}
      <h1 className="text-3xl  lg:text-5xl font-normal text-white lg:leading-[51px] mb-4 mt-4 md:mt-10">
        {news.title}
      </h1>

      

      {/* Body paragraphs */}
      {news.body && (
        <div className="space-y-4 text-[#d1d5db] text-[16px] lg:text-[19px] leading-relaxed mb-12  ">
          {news.body.map((para, i) => (
            <p className="text-[16px] lg:text-[19px]" key={i}>{para}</p>
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
          {news.images.map((img, i) => {
            const desktopSrc = typeof img === "string" ? img : img.desktop;
            const mobileSrc = typeof img === "string" ? img : (img.mobile || img.desktop);
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
                <img src={mobileSrc} alt={`${news.title} image ${i + 1}`} className="w-full object-contain md:hidden" />
                <img src={desktopSrc} alt={`${news.title} image ${i + 1}`} className="w-full object-contain hidden md:block" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
