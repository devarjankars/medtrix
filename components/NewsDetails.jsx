"use client";

import { useEffect } from "react";
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
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-10 group"
      >
        <span className="text-lg group-hover:-translate-x-1 transition-transform duration-200">←</span>
        Back to News
      </button>

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
        </div>
      )}

      {/* Image Gallery */}
      {news.images && news.images.length > 0 && (
        <div className={`grid gap-4 ${news.images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
          {news.images.map((src, i) => (
            <div key={i} className={`rounded-[14px] overflow-hidden border border-[#2a2a2a] ${news.images.length === 1 ? 'w-full' : ''}`}>
              <img
                src={src}
                alt={`${news.title} image ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
