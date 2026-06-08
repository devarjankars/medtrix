"use client";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const headingWords = [
  { text: "MedTrix", red: false },
  { text: "-", red: false },
  { text: "Catalyzing", red: false },
  { text: "Healthcare", red: true },
];

const paraVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease, delay: i * 0.15 + 0.5 },
  }),
};

export default function Landing() {
  return (
    <section className="relative isolate z-10 px-6 pb-[40px] lg:pb-20 bg-black mt-[50px] lg:mt-[50px] lg:px-0">
      <div className="flex flex-col-reverse  mx-auto w-[90%] md:w-[80%] md:flex-row items-center justify-between gap-0">

        <div className="text-left flex lg:w-[55%] flex-col gap-0">
          <motion.h1
            className="text-[26px] text-center lg:text-left lg:text-[65px] font-bold leading-[1.2] text-[#F2F2F2]"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
          >
            {headingWords.map((w, i) => (
              <motion.span
                key={i}
                className={`inline-block mr-[0.25em] ${w.red ? "text-[#FF2F2F]" : ""}`}
                variants={{
                  hidden: { opacity: 0, y: 36, rotateX: -20 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease } },
                }}
                style={{ transformOrigin: "bottom center" }}
              >
                {w.text}
              </motion.span>
            ))}
          </motion.h1>

          {/* Mobile image */}
          <div className="w-full lg:hidden block">
            <motion.img
              src="https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/tablet.png"
              alt=""
              className="items-center min-w-70 md:w-full lg:ml-8"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Paragraphs — slide up sequentially */}
          <motion.p
            className="text-[14px] text-center lg:text-left lg:text-[19px] text-[#7f818B] leading-relaxed mt-5"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={paraVariants}
          >
            MedTrix is a growth catalyst for pharmaceutical and life science companies.
            We work with the science you&apos;ve built, the teams you&apos;ve assembled, and the brands you&apos;ve invested in,
            to drive outcomes that are faster, bigger, and precise.
          </motion.p>

          <motion.p
            className="text-[14px] lg:text-[19px] text-center lg:text-left text-[#7f818B] mt-3 leading-relaxed"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={paraVariants}
          >
            Our proven mix of science, creativity, technology, and strategy accelerates compliant,
            high-impact engagement across Medical Affairs and Commercial functions—exponentially.
            From launch through the lifecycle, we don&apos;t just support your growth. We{" "}
            <b className="text-[#F2F2F2]">Catalyze</b> it.
          </motion.p>

        </div>

        {/* RIGHT — desktop image */}
        <div className="w-1/2 hidden lg:block">
          <motion.img
            src="https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/tablet.png"
            alt=""
            className="items-center min-w-70 md:w-full lg:ml-8"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[20px] lg:h-[60px] rounded-full"
        style={{ background: "radial-gradient(ellipse at bottom, rgba(0,106,128,0.4) 0%, transparent 80%)" }}
      />
    </section>
  );
}
