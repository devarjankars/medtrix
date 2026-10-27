"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1];

const headingWords = [
  { text: "MedTrix—", red: false, noGap: true },
  { text: "Catalyzing\u00A0", red: false },
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
    <section className="relative isolate z-10 px-6 pb-[40px] lg:pb-20 bg-black mt-[50px] lg:mt-[20px] lg:px-0">
      <div className="flex flex-col-reverse  mx-auto w-[90%] md:w-[80%] md:flex-row items-center justify-between gap-0">

        <div className="text-left flex lg:w-[55%] flex-col gap-0  lg:mt-2">
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
                className={`inline-block ${w.noGap ? "mr-0" : "mr-[0.25em]"} ${w.red ? "text-[#FF2F2F]" : ""}`}
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
            className="text-[16px] text-center lg:text-left lg:text-[18px] text-[#d1d5db]  leading-[130%] mt-5"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={paraVariants}
          >
            MedTrix is a growth catalyst for pharmaceutical and life science companies.
            <br className="hidden 2xl:block" />We bring together <b>science, creativity, technology, and strategy</b> to turn your<br className="hidden 2xl:block" /> science, teams, and brands into faster, bigger, and more precise outcomes.
          </motion.p>

          <motion.p
            className="text-[16px]   lg:text-[18px] text-center lg:text-left text-[#d1d5db] mt-3 leading-[130%]"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={paraVariants}
          >
            Across Medical Affairs and Commercial functions, we accelerate compliant, <br className="hidden 2xl:block" />high-impact engagement from launch through the lifecycle. We don’t just <br className="hidden 2xl:block" />support growth—we{" "}<b className="text-[#F2F2F2]">catalyze</b> it.
          </motion.p>
 <motion.p
            className="text-[20px]  lg:text-[30px] text-center lg:text-left text-[#FFFFFF] mt-8"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={paraVariants}
          >
         And now, <span className="text-[#FF2F2F] font-bold">Cipher</span> takes this foundation further.
          </motion.p>
           <motion.p
            className="text-[16px] lg:text-[18px] text-center lg:text-left text-[#d1d5db] mt-3 leading-[130%]"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={paraVariants}
          >
           Cipher is our AI-enabled platform, built to accelerate content creation. It <br className="hidden 2xl:block" />integrates AI specifically suited for content development for pharma and <br className="hidden 2xl:block" />healthcare into content creation, digital production, and review—to<br className="hidden 2xl:block" /> accelerate delivery, improve consistency, and drive efficiency at scale.
          </motion.p>
           <Link href="/cipher" className="self-center lg:self-start">
                        <motion.div
                          whileHover={{ scale: 1.06 }}
                          whileTap={{ scale: 0.97 }}
                          transition={{ type: "spring", stiffness: 380, damping: 22 }}
                          className="relative inline-flex w-fit min-w-[180px] items-center justify-center gap-2 px-8 py-4 mt-8 rounded-full text-[#F2F2F2] font-medium overflow-hidden cursor-pointer"
                          style={{
                            background: "linear-gradient(135deg, #E1251B 0%, #ff4d42 100%)",
                            boxShadow: "0 0 18px rgba(225,37,27,0.45)",
                          }}
                        >
                          <motion.span
                            className="absolute inset-0 rounded-full pointer-events-none"
                            style={{
                              background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)",
                              backgroundSize: "200% 100%",
                            }}
                            animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                            transition={{ duration: 2.5, ease: "linear", repeat: Infinity, repeatDelay: 1.5 }}
                          />
                          <span className="relative z-10">Explore Cipher</span>
                        </motion.div>
                      </Link>
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
