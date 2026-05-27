"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import TestimonialSlider from "@/components/TestimonialSlider";

// ── Reusable scroll-reveal wrapper ───────────────────────────────────────────
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

// ── Section label pill ────────────────────────────────────────────────────────
function SectionPill({ label }) {
  return (
    <div
      className="inline-flex px-6 py-3 rounded-full mb-8 text-white tracking-[4px] text-sm font-bold uppercase border border-[#2A2525]"
      style={{ background: "linear-gradient(to right, rgba(255,255,255,0.2), rgba(0,0,0,0.4))" }}
    >
      {label}
    </div>
  );
}

// ── Animated glow divider ─────────────────────────────────────────────────────
function GlowDivider() {
  return (
    <motion.div
      className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-15 rounded-full"
      initial={{ opacity: 0, scaleX: 0.4 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{ background: "radial-gradient(ellipse at bottom, rgba(0,106,128,0.45) 0%, transparent 80%)" }}
    />
  );
}

// ── Inline image slider ───────────────────────────────────────────────────────
function ImageSlider({ images = [] }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

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

  if (!slides.length) return null;

  return (
    <div ref={ref} className="w-full">
      {/* viewport */}
      <div className="relative overflow-hidden rounded-[28px] border border-[#812626] bg-[#090202] h-80 md:h-120">
        <motion.div
          animate={{ x: `-${current * 100}%` }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
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


      </div>

      {/* dots */}
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

      {/* left / right text — animated on slide change */}
      <AnimatePresence mode="wait">
        {(slides[current]?.leftText || slides[current]?.rightText) && (
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row gap-10 mt-10"
          >
            {slides[current]?.leftText && (
              <div className="flex-1">
                <p className="text-gray-300 text-lg leading-[1.9]">{slides[current].leftText}</p>
              </div>
            )}
            {slides[current]?.leftText && slides[current]?.rightText && (
              <div className="hidden md:block w-px bg-[#3C2323]" />
            )}
            {slides[current]?.rightText && (
              <div className="flex-1">
                <p className="text-gray-300 text-lg leading-[1.9]">{slides[current].rightText}</p>
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
        transition={{ duration: 0.35 }}
        className="py-8"
      >
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-4 text-sm text-gray-400 hover:text-white transition"
        >
          <motion.span
            className="inline-block"
            whileHover={{ x: -4 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            ←
          </motion.span>
          Back to Projects
        </button>
      </motion.div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="mb-4 overflow-hidden">
        {/* category pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="relative inline-block rounded-full max-w-fit p-px mb-10"
          style={{ background: "linear-gradient(to right, rgba(225,37,27,0.5), transparent 53%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)" }}
        >
          <span className="inline-block text-[14px] font-bold tracking-[0.15em] uppercase text-white bg-[#0c0606] px-4 py-1.5 rounded-full">
            {project.category}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-3xl md:text-4xl font-medium leading-tight mb-10"
        >
          {project.title}
        </motion.h1>

        {/* hero image with parallax-style reveal */}
        {project.imgfordetail && (
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
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
        <section className="relative py-20">
          <Reveal>
            <SectionPill label="Challenge" />
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-14 items-center  rounded-2xl px-6 md:px-0 py-10">
            {/* image */}
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

            {/* text */}
            <Reveal delay={0.12}>
              <p className="text-[22px] leading-[1.9] text-[#A6A6A6]">
                {project.challenge}
              </p>
            </Reveal>
          </div>

          <GlowDivider />
        </section>
      )}

      {/* ── OUR SOLUTION ─────────────────────────────────────────────────── */}
      {project.solution && (
        <section className="relative py-20">
          <Reveal>
            <SectionPill label="Our Solution" />
          </Reveal>

          {project.slider?.length > 0 && (
            <Reveal delay={0.05} className="mb-10 ">
              <ImageSlider images={project.slider} navigation={false}
 />
            </Reveal>
          )}

          <Reveal delay={0.1}>
            <div className="rounded-2xl px-6 md:px-0 py-10">
              <p className="text-[18px] leading-[1.9] text-[#A6A6A6]">
                {project.solution}
              </p>
            </div>
          </Reveal>

          <GlowDivider />
        </section>
      )}

      {/* ── THE RESULT ───────────────────────────────────────────────────── */}
      {project.result && (
        <section className="relative py-20">
          <Reveal>
            <SectionPill label="The Result" />
          </Reveal>

          <Reveal delay={0.05}>
            <div className="border border-gray-700 rounded-2xl px-6 md:px-12 py-14 flex flex-col gap-10">
              <p className="text-[18px] leading-[1.9] text-[#A6A6A6]">{project.result}</p>

              {project.desc?.length > 0 && (
                <ul className="flex flex-col gap-1">
                  {project.desc.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-start gap-4 text-[#A6A6A6] text-lg"
                    >
                      <span className="mt-2 w-2 h-2 rounded-full bg-[#ad8c8cb6] shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>

          {/* recognitions */}
          {project.recognitions?.length > 0 && (
            <Reveal delay={0.1} className="mt-12">
              <div className="w-full flex justify-center py-8">
                <h5 className="text-white font-semibold text-4xl">
                  <span className="text-red-600">The</span> Recognitions
                </h5>
              </div>
              <div className="flex flex-col gap-10">
                {project.recognitions.map((rec, i) => {
                  const imgs = Array.isArray(rec.img) ? rec.img : typeof rec === "string" ? [rec] : [];
                  const content = rec.content || "";
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
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
        <section className="relative py-20">
          <Reveal>
            <SectionPill label="Client Testimonial" />
          </Reveal>
          <Reveal delay={0.08}>
            <TestimonialSlider items={testimonialItems} autoPlay={true} delay={3000} />
          </Reveal>
          <GlowDivider />
        </section>
      )}

    </div>
  );
}
