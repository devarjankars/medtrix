"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import TestimonialSlider from "@/components/TestimonialSlider";
import { lenisInstance } from "@/components/LenisProvider";

const ease = [0.22, 1, 0.36, 1];

// ── Scroll-reveal wrapper ────────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

// ── Word-by-word animated heading ────────────────────────────────────────────
function AnimatedHeading({ text, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const words = text.split(" ");
  return (
    <motion.h1
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: 28, rotateX: -18 },
            visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.55, ease } },
          }}
          style={{ transformOrigin: "bottom center" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

// ── Section pill with animated draw-in line ──────────────────────────────────
function SectionPill({ label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div ref={ref} className="flex items-center gap-4 mb-8">
      {/* line draws in from left */}
      <motion.div
        className="h-px bg-linear-to-r from-[#E1251B] to-transparent"
        initial={{ width: 0, opacity: 0 }}
        animate={inView ? { width: 48, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease }}
      />
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease, delay: 0.2 }}
        className="inline-flex px-6 py-3 rounded-full text-white tracking-[4px] text-sm font-bold uppercase border border-[#2A2525]"
        style={{ background: "linear-gradient(to right, rgba(255,255,255,0.2), rgba(0,0,0,0.4))" }}
      >
        {label}
      </motion.div>
    </div>
  );
}

// ── Animated paragraph — fades in as one smooth block ───────────────────────
function AnimatedParagraph({ text, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.p
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease, delay }}
    >
      {text}
    </motion.p>
  );
}

// ── Glow divider ─────────────────────────────────────────────────────────────
function GlowDivider() {
  return (
    <motion.div
      className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-15 rounded-full"
      initial={{ opacity: 0, scaleX: 0.4 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease }}
      style={{ background: "radial-gradient(ellipse at bottom, rgba(0,106,128,0.45) 0%, transparent 80%)" }}
    />
  );
}

// ── Inline image slider ───────────────────────────────────────────────────────
function ImageSlider({ images = [] }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const dragStartX = useRef(null);

  const slides = images.map((item) =>
    typeof item === "string"
      ? { image: item, leftText: "", rightText: "" }
      : item
  );

  useEffect(() => {
    if (!isInView || slides.length <= 1) return;
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 3500);
    return () => clearInterval(t);
  }, [isInView, slides.length]);

  function prev() { setCurrent((p) => (p - 1 + slides.length) % slides.length); }
  function next() { setCurrent((p) => (p + 1) % slides.length); }

  function onTouchStart(e) { dragStartX.current = e.touches[0].clientX; }
  function onTouchEnd(e) {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    dragStartX.current = null;
  }

  if (!slides.length) return null;

  return (
    <div ref={ref} className="w-full">
      <div
        className="relative overflow-hidden rounded-2xl md:rounded-[28px] border border-[#812626] bg-[#090202] h-52 sm:h-72 md:h-96 lg:h-120"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <motion.div
          animate={{ x: `-${current * 100}%` }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-full"
        >
          {slides.map((slide, i) => (
            <div key={i} className="min-w-full h-full shrink-0">
              <img
                src={slide.image}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </motion.div>

        {/* arrows removed */}
      </div>

      {slides.length > 1 && (
        <div className="flex justify-center gap-3 mt-5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === i ? "w-10 bg-white" : "w-2 bg-gray-600"
              }`}
            />
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {(slides[current]?.leftText || slides[current]?.rightText) && (
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row gap-8 md:gap-10 mt-8 md:mt-10"
          >
            {slides[current]?.leftText && (
              <div className="flex-1">
                <p className="text-gray-300 text-base md:text-lg leading-8 md:leading-[1.9]">
                  {slides[current].leftText}
                </p>
              </div>
            )}
            {slides[current]?.leftText && slides[current]?.rightText && (
              <div className="hidden md:block w-px bg-[#3C2323]" />
            )}
            {slides[current]?.rightText && (
              <div className="flex-1">
                <p className="text-gray-300 text-base md:text-lg leading-8 md:leading-[1.9]">
                  {slides[current].rightText}
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ProjectDetail({ project, onBack }) {
  /* Scroll to top via Lenis (bypasses native scroll which Lenis intercepts) */
  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const testimonialItems = Array.isArray(project.testimonials)
    ? project.testimonials
        .filter((t) => t.quote)
        .map((t) => ({ text: t.quote, role: t.author, location: project.category }))
    : project.testimonial?.quote
    ? [{ text: project.testimonial.quote, role: project.testimonial.author, location: project.category }]
    : [];

  return (
    <div className="w-[90%] md:w-[80%] mx-auto text-white">

      {/* ── BACK ─────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, ease }}
        className="py-8"
      >
        <motion.button
          onClick={onBack}
          className="group inline-flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
          whileHover={{ x: -3 }}
          transition={{ type: "spring", stiffness: 380, damping: 22 }}
        >
          <motion.span
            className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#2A2A2A] group-hover:border-[#E1251B] transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            ←
          </motion.span>
          Back to Projects
        </motion.button>
      </motion.div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="mb-4 overflow-hidden">

        {/* category pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease, delay: 0.05 }}
          className="relative inline-block rounded-full max-w-fit p-px mb-6"
          style={{ background: "linear-gradient(to right, rgba(225,37,27,0.5), transparent 53%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)" }}
        >
          <span className="inline-block text-[14px] font-bold tracking-[0.15em] uppercase text-white bg-[#0c0606] px-4 py-1.5 rounded-full">
            {project.category}
          </span>
        </motion.div>

        {/* title — word by word */}
        <AnimatedHeading
          text={project.title}
          className="text-3xl md:text-4xl font-medium leading-tight mb-6"
        />

        {/* tags */}
        {project.tags?.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-2 mb-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07, delayChildren: 0.35 } },
            }}
          >
            {project.tags.map((tag, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 8 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease } },
                }}
                className="px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#676767] text-[#ededed]"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        )}

        {/* meta row — engagement model + timeline */}
        {(project.engagementModel || project.timeline) && (
          <motion.div
            className="flex flex-wrap gap-6 mb-10 pb-10 border-b border-[#2e2d2d]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.5 }}
          >
            {project.engagementModel && (
              <div className="flex flex-col gap-1">
                <span className="text-[11px] tracking-[3px] uppercase text-[#e7e7e7]">Engagement Model</span>
                <span className="text-sm text-[#8d8c8c]">{project.engagementModel}</span>
              </div>
            )}
            {project.timeline && (
              <div className="flex flex-col gap-1">
                <span className="text-[11px] tracking-[3px] uppercase text-[#e7e7e7]">Timeline</span>
                <span className="text-sm text-[#8d8c8c]">{project.timeline}</span>
              </div>
            )}
          </motion.div>
        )}

        {/* hero image — Ken Burns zoom */}
        {project.imgfordetail && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="overflow-hidden rounded-[22px]"
          >
            <img
              src={project.imgfordetail}
              alt={project.title}
              className="w-full object-cover"
            />
          </motion.div>
        )}
      </section>

      {/* ── CHALLENGE ────────────────────────────────────────────────────── */}
      {project.challenge && (
        <section className="lg:py-[100px] py-[50px] relative">
          <SectionPill label="Challenge" />

          <div className="grid lg:grid-cols-2 gap-14 items-center rounded-2xl px-6 md:px-0 py-10">
            {project.challengeImg ? (
              <Reveal delay={0.05}>
                <div className="rounded-2xl overflow-hidden">
                  <motion.img
                    src={project.challengeImg}
                    alt="Challenge"
                    className="w-full h-full object-cover rounded-2xl"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </Reveal>
            ) : (
              <div className="hidden lg:block" />
            )}

            <AnimatedParagraph
              text={project.challenge}
              className="text-[20px] leading-[1.9] text-[#A6A6A6]"
              delay={0.1}
            />
          </div>

          <GlowDivider />
        </section>
      )}

      {/* ── OUR SOLUTION ─────────────────────────────────────────────────── */}
      {project.solution && (
        <section className="lg:py-[100px] py-[50px] relative">
          <SectionPill label="Our Solution" />

          {project.slider?.length > 0 && (
            <Reveal delay={0.05} className="mb-10">
              <ImageSlider images={project.slider} />
            </Reveal>
          )}

          <AnimatedParagraph
            text={project.solution}
            className="text-[18px] leading-[1.9] text-[#A6A6A6] px-6 md:px-0 py-0"
            delay={0.1}
          />

          <GlowDivider />
        </section>
      )}

      {/* ── THE RESULT ───────────────────────────────────────────────────── */}
      {project.result && (
        <section className="lg:py-[100px] py-[50px] relative">
          <SectionPill label="The Result" />

          <Reveal delay={0.05}>
            <div className="border border-[#1f1f1f] rounded-2xl px-6 md:px-12 py-14 flex flex-col gap-10">
              <AnimatedParagraph
                text={project.result}
                className="text-[18px] leading-[1.9] text-[#A6A6A6]"
              />

              {project.desc?.length > 0 && (
                <motion.ul
                  className="flex flex-col gap-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                >
                  {project.desc.map((item, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: -24 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
                      }}
                      className="flex items-start gap-4 text-[#A6A6A6] text-lg"
                    >
                      {/* animated dot */}
                      <motion.span
                        className="mt-2.5 w-2 h-2 rounded-full bg-[#705c5b] shrink-0"
                        variants={{
                          hidden: { scale: 0 },
                          visible: { scale: 1, transition: { duration: 0.3, ease } },
                        }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </div>
          </Reveal>

          {/* recognitions — only render if at least one item has images */}
          {project.recognitions?.length > 0 &&
            project.recognitions.some((rec) => {
              const imgs = Array.isArray(rec.img) ? rec.img : typeof rec === "string" ? [rec] : [];
              return imgs.length > 0;
            }) && (
            <Reveal delay={0.1} className="py-10">
              <div className="w-full flex justify-center py-8">
                <motion.h5
                  className="text-white font-semibold text-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease }}
                >
                  <span className="text-red-600">The</span> Recognitions
                </motion.h5>
              </div>
              <div className="flex flex-col gap-10">
                {project.recognitions.map((rec, i) => {
                  const imgs = Array.isArray(rec.img) ? rec.img : typeof rec === "string" ? [rec] : [];
                  const content = rec.content || "";
                  if (!imgs.length && !content) return null;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                      className="flex flex-col items-center gap-6"
                    >
                      {imgs.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-6">
                          {imgs.map((src, j) => (
                            <motion.img
                              key={j}
                              src={src}
                              alt={`Recognition ${i + 1}`}
                              className="h-28 object-contain"
                              whileHover={{ scale: 1.06 }}
                              transition={{ duration: 0.3 }}
                            />
                          ))}
                        </div>
                      )}
                      {content && (
                        <p className="text-[#A6A6A6] text-lg leading-relaxed text-center max-w-2xl">
                          {content}
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </Reveal>
          )}

          <GlowDivider />
        </section>
      )}

      {/* ── CLIENT TESTIMONIAL ───────────────────────────────────────────── */}
      {testimonialItems.length > 0 && (
        <section className="lg:py-[100px] py-[50px] relative">
          <SectionPill label="Client Testimonial" />
          <Reveal delay={0.08}>
            <TestimonialSlider items={testimonialItems} autoPlay={true} delay={3000} />
          </Reveal>
          <GlowDivider />
        </section>
      )}

    </div>
  );
}
