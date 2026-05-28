"use client";

import { motion } from "framer-motion";

// ── shared easing ────────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1];

// ── stagger container for left column ───────────────────────────────────────
const leftCol = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease } },
};

// ── word-by-word title split ─────────────────────────────────────────────────
// title can be a string OR an array of strings (each item = one desktop line)
function AnimatedTitle({ text }) {
  // normalise to array of lines
  const lines = Array.isArray(text) ? text : [text];

  // flat word list for mobile (single continuous flow)
  const allWords = lines.join(" ").split(" ");

  return (
    <motion.h1
      className="text-4xl lg:text-6xl"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.07, delayChildren: 0 } },
      }}
    >
      {/* ── DESKTOP: render line by line with block breaks ── */}
      <span className="hidden lg:block">
        {lines.map((line, li) => (
          <span key={li} className="block">
            {line.split(" ").map((word, wi) => (
              <motion.span
                key={`${li}-${wi}`}
                className="inline-block mr-[0.25em]"
                variants={{
                  hidden: { opacity: 0, y: 32, rotateX: -20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { duration: 0.6, ease },
                  },
                }}
                style={{ transformOrigin: "bottom center" }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        ))}
      </span>

      {/* ── MOBILE: all words flow naturally, no forced breaks ── */}
      <span className="block lg:hidden">
        {allWords.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.25em]"
            variants={{
              hidden: { opacity: 0, y: 32, rotateX: -20 },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: { duration: 0.6, ease },
              },
            }}
            style={{ transformOrigin: "bottom center" }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </motion.h1>
  );
}

export default function DynamicHeader({
  tagText,
  title,
  paragraphs = [],
  graphicSrc,
  graphicAlt = "",
  desktopBg = "/bg",
  mobileImg = "/mblbg.png",
  statsCards = [],
  desktopImgHeight,
  desktopImgAlign = 'bottom',
}) {
  // accept both imported image objects ({ src: "..." }) and plain strings
  const desktopBgSrc = typeof desktopBg === "string" ? desktopBg : desktopBg?.src;
  const mobileImgSrc = typeof mobileImg === "string" ? mobileImg : mobileImg?.src;
  return (
    <section className="relative overflow-hidden text-white min-h-[50vh] h-auto  flex items-center">

      {/* subtle radial red glow top-left */}
      <motion.div
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(225,37,27,0.08) 0%, transparent 70%)" }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease }}
      />

      {/* ── RIGHT IMAGE — absolute, fills full right 70% top-to-bottom ── */}
      <motion.div
        className="hidden lg:block absolute top-0 right-0 w-full h-full z-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.2 }}
      >
        {/* dark gradient on left edge so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
        <img
          src={desktopBgSrc}
          alt={graphicAlt}
          className="w-full object-cover"
          style={desktopImgHeight
            ? { height: desktopImgHeight, position: 'absolute', [desktopImgAlign]: 0, left: 0 }
            : { height: '100%', objectFit: 'cover' }
          }
        />
      </motion.div>

      {/* ── MAIN GRID ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-[600px_55%] gap-1 items-center py-20  ">

        {/* LEFT COLUMN — 50% */}
        <motion.div
          className="flex flex-col gap-5 "
          variants={leftCol}
          initial="hidden"
          animate="visible"
        >
          {/* Tag badge */}
          <motion.div variants={fadeScale}>
            <div
              className="relative inline-block rounded-full max-w-fit p-px"
              style={{
                background:
                  "linear-gradient(to right, rgba(225,37,27,0.5), transparent 53%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)",
              }}
            >
              <span className="inline-block text-[14px] font-bold tracking-[0.15em] uppercase text-white bg-[#0c0606] px-4 py-1.5 rounded-full">
                {tagText}
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div variants={fadeUp} className="w-full">
            <AnimatedTitle text={title ?? ""} />
          </motion.div>

          {/* Mobile image */}
          {mobileImgSrc && (
            <motion.div className="block lg:hidden" variants={fadeUp}>
              <img src={mobileImgSrc} alt="" className="w-full object-contain rounded-xl" />
            </motion.div>
          )}

          {/* Paragraphs */}
          {paragraphs.map((item, index) => (
            <motion.p
              key={index}
              variants={fadeUp}
              className="text-gray-400 text-[16px] leading-8"
            >
              {item}
            </motion.p>
          ))}

          {/* Stats cards */}
          {statsCards.length > 0 && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {statsCards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -4, borderColor: "rgba(225,37,27,0.5)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="bg-black/30 border border-[#2A2A2A] rounded-2xl p-6 cursor-default"
                >
                  <div className="w-5 h-0.5 bg-red-500 mb-4" />
                  <h3>{card.value}</h3>
                  <p>{card.label}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* right col spacer — keeps grid balanced, image is absolute */}
        <div className="hidden lg:block" />

      </div>

      {/* bottom glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[60px] rounded-full"
        style={{ background: "radial-gradient(ellipse at bottom, rgba(0,106,128,0.4) 0%, transparent 80%)" }}
      />
    </section>
  );
}
