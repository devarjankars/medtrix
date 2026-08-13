"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { lenisInstance } from "@/components/LenisProvider";

const ease = [0.22, 1, 0.36, 1];

export default function BlogDetail({ blog, onBack }) {
  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [blog?.id]);

  return (
    <div className="w-full animate-fadeIn">

      {/* ── Back Button ───────────────────────────────────────────────── */}
      <motion.button
        onClick={onBack}
        className="group inline-flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer mb-10"
        whileHover={{ x: -3 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
      >
        <motion.span
          className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#2A2A2A] group-hover:border-[#E1251B] transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          ←
        </motion.span>
        Back to Blogs
      </motion.button>

      {/* ── Date + Category pills ──────────────────────────────────────── */}
      <div className="flex items-center gap-3 mb-6">
        {blog.date && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <div
              className="relative inline-block rounded-full max-w-fit p-px"
              style={{
                background:
                  "linear-gradient(to right, rgba(225,37,27,0.5), transparent 53%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)",
              }}
            >
              <span className="inline-block text-[14px] font-light tracking-[0.15em] uppercase text-white bg-[#0c0606] px-3 py-1 rounded-full">
                {blog.date}
              </span>
            </div>
          </motion.div>
        )}

        {blog.category && (
          <span className="text-xs text-gray-500 uppercase tracking-widest border border-[#2a2a2a] px-3 py-1 rounded-full">
            {blog.category}
          </span>
        )}
      </div>

      {/* ── Title ─────────────────────────────────────────────────────── */}
      <motion.h1
        className="text-[28px] leading-[1.2] lg:text-5xl font-normal text-gray-200 lg:leading-[1.15] mb-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.05 }}
      >
        {blog.title}
      </motion.h1>

      {/* ── Featured Image ─────────────────────────────────────────────── */}
      {blog.featuredImage && (
        <motion.div
          className="rounded-[14px] overflow-hidden border border-[#2a2a2a] mb-8"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease, delay: 0.08 }}
        >
          <img
            src={blog.featuredImage}
            alt={blog.title}
            className="w-full object-cover"
          />
        </motion.div>
      )}

      {/* ── Intro body paragraphs ──────────────────────────────────────── */}
      {blog.body && blog.body.length > 0 && (
        <div className="space-y-4 text-[#A6A6A6] text-[16px] lg:text-[19px] leading-[160%] mb-8">
          {blog.body.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease, delay: 0.12 + i * 0.05 }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      )}

      {/* ── Sectioned content (heading + body pairs) ───────────────────── */}
      {blog.content1 && blog.content1.length > 0 && (
        <div className="space-y-8 mb-10">
          {blog.content1.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease, delay: 0.1 + i * 0.08 }}
            >
              {section.heading && (
                <h2 className="text-[20px] lg:text-[26px] font-semibold text-gray-100 mb-3 leading-snug">
                  {section.heading}
                </h2>
              )}
              {section.body && (
                <p className="text-[#A6A6A6] text-[16px] lg:text-[19px] leading-[160%]">
                  {section.body}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* ── LinkedIn description teaser (if present + no fullArticleLink) ── */}
      {blog.LinkedInDescription && !blog.fullArticleLink && (
        <div className="border-l-2 border-[#E1251B] pl-5 mt-8">
          <p className="text-[#A6A6A6] text-[15px] lg:text-[17px] leading-[160%] italic">
            {blog.LinkedInDescription}
          </p>
        </div>
      )}

      {/* ── Full article external link ─────────────────────────────────── */}
      {blog.fullArticleLink && (
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease, delay: 0.3 }}
        >
          <a
            href={blog.fullArticleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#E1251B] text-[15px] font-medium underline underline-offset-4 hover:opacity-75 transition-opacity"
          >
            Read the full article
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </motion.div>
      )}

    </div>
  );
}
