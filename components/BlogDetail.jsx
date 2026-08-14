"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { lenisInstance } from "@/components/LenisProvider";

const ease = [0.22, 1, 0.36, 1];

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

// ── Video player with poster thumbnail ───────────────────────────────────────
function VideoBlock({ src, poster, title }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  }

  return (
    <motion.div
      className="relative rounded-[14px] overflow-hidden border border-[#2a2a2a] mb-8 group cursor-pointer"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, ease, delay: 0.08 }}
      onClick={toggle}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster || undefined}
        className="w-full block"
        playsInline
        preload="metadata"
        onEnded={() => setPlaying(false)}
      />
      {/* Play / pause overlay */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors duration-200">
          <div className="w-16 h-16 rounded-full bg-[#E1251B]/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function BlogDetail({ blog, onBack }) {
  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [blog?.id]);

  // Decide hero media: image takes priority, else video
  const hasImage = blog.featuredImage || blog.featuredImageMobi;
  const hasVideo = blog.videoSrc;

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
            {toTitleCase(blog.category)}
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
        {toTitleCase(blog.title)}
      </motion.h1>

      {/* ── LinkedIn teaser ────────────────────────────────────────────── */}
      {blog.LinkedInDescription && (
        <motion.div
          className="border-l-2 border-[#E1251B] pl-5 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease, delay: 0.06 }}
        >
          <p
            className="text-[#A6A6A6] text-[15px] lg:text-[17px] leading-[175%] [&_b]:text-gray-200 [&_b]:font-semibold"
            dangerouslySetInnerHTML={{ __html: blog.LinkedInDescription }}
          />
        </motion.div>
      )}

      {/* ── Hero: image OR video ───────────────────────────────────────── */}
      {hasImage ? (
        <motion.div
          className="rounded-[14px] overflow-hidden border border-[#2a2a2a] mb-8"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease, delay: 0.08 }}
        >
          <img
            src={blog.featuredImageMobi || blog.featuredImage}
            alt={blog.title}
            className="w-full object-cover md:hidden"
          />
          <img
            src={blog.featuredImage || blog.featuredImageMobi}
            alt={blog.title}
            className="w-full object-cover hidden md:block"
          />
        </motion.div>
      ) : hasVideo ? (
        <VideoBlock
          src={blog.videoSrc}
          poster={blog.videosrcThb || ""}
          title={blog.title}
        />
      ) : null}

      {/* ── Intro body paragraphs ──────────────────────────────────────── */}
      {blog.body && blog.body.length > 0 && (
        <div className="space-y-4 text-[#A6A6A6] text-[16px] lg:text-[19px] leading-[160%] mb-8">
          {blog.body.map((para, i) => {
            // Object format: { img, width? }
            if (para && typeof para === "object" && para.img) {
              return (
                <motion.div
                  key={i}
                  className="my-6 flex justify-center"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.03 }}
                >
                  <div
                    className="rounded-[14px] overflow-hidden border border-[#2a2a2a]"
                    style={{ width: para.width || "100%" }}
                  >
                    <img src={para.img} alt="" className="w-full object-contain" />
                  </div>
                </motion.div>
              );
            }
            // Plain URL string (full-width image)
            const isImage = /^https?:\/\/.+\.(png|jpg|jpeg|gif|webp|svg)(\?.*)?$/i.test(para.trim());
            if (isImage) {
              return (
                <motion.div
                  key={i}
                  className="rounded-[14px] overflow-hidden border border-[#2a2a2a] my-6"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.03 }}
                >
                  <img src={para.trim()} alt="" className="w-full object-contain" />
                </motion.div>
              );
            }
            return (
              <motion.p
                key={i}
                className="[&_b]:text-gray-200 [&_b]:font-semibold"
                dangerouslySetInnerHTML={{ __html: typeof para === "string" ? para : "" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease, delay: 0.12 + i * 0.05 }}
              />
            );
          })}
        </div>
      )}

      {/* ── Sectioned content (heading + optional bullets + body) ─────── */}
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
              {section.pointers && section.pointers.length > 0 && (
                <ul className="mb-4 space-y-2 pl-1">
                  {section.pointers.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-[#A6A6A6] text-[16px] lg:text-[19px] leading-[160%] [&_b]:text-gray-200 [&_b]:font-semibold">
                      <span className="mt-2.25 shrink-0 w-1.5 h-1.5 rounded-full bg-[#E1251B]" />
                      <span dangerouslySetInnerHTML={{ __html: point }} />
                    </li>
                  ))}
                </ul>
              )}
              {section.body && (
                <p
                  className="text-[#A6A6A6] text-[16px] lg:text-[19px] leading-[160%] [&_b]:text-gray-200 [&_b]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: section.body }}
                />
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* ── Workflow image ─────────────────────────────────────────────── */}
      {blog.workflowImg && (
        <motion.div
          className="mt-6 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.15 }}
        >
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Workflow</p>
          <div className="rounded-[14px] overflow-hidden border border-[#2a2a2a]">
            <img
              src={blog.workflowImg}
              alt="Workflow diagram"
              className="w-full object-contain"
            />
          </div>
        </motion.div>
      )}

      {/* ── References ────────────────────────────────────────────────── */}
      {blog.References && blog.References.length > 0 && (
        <motion.div
          className="mt-10 pt-8 border-t border-[#1e1e1e]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease, delay: 0.2 }}
        >
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-4">References</p>
          <ol className="space-y-2">
            {blog.References.map((ref, i) => {
              // If the ref looks like a URL, make it a link
              const urlMatch = ref.match(/(https?:\/\/[^\s]+)/);
              return (
                <li key={i} className="flex items-start gap-3 text-[13px] text-gray-600 leading-relaxed">
                  <span className="shrink-0 text-[#E1251B]/60 font-mono">{i + 1}.</span>
                  {urlMatch ? (
                    <span>
                      {ref.replace(urlMatch[0], "").trim()}{" "}
                      <a
                        href={urlMatch[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E1251B]/70 hover:text-[#E1251B] underline underline-offset-2 transition-colors break-all"
                      >
                        {urlMatch[0]}
                      </a>
                    </span>
                  ) : (
                    <span>{ref}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </motion.div>
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
