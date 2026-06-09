'use client';

import { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ease = [0.22, 1, 0.36, 1];

/* ── Data ─────────────────────────────────────────────────────────────────── */
const features = [
  {
    no: "01",
    img: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/ai1.png",
    title: "Using AI to Simplify Repetitive Tasks",
    desc: "Quantitative and qualitative evaluation of alignment with pre-approved documents, claims, use-cases, variations for modular content etc.",
    video: "https://d218mh3sadleh5.cloudfront.net/Clients/Gen_AI/assets/Video_1.mp4",
    bg: "bg-white/95",
    reverse: false,
  },
  {
    no: "02",
    img: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/ai2.png",
    title: "AI Built Specifically With Approved Documents",
    desc: "A system that works strictly off of role-specific, pre-approved knowledge base for Medical Affairs, Brand Teams, Legal, and Regulatory functions.",
    video: "https://d218mh3sadleh5.cloudfront.net/Clients/Gen_AI/assets/Video_2.mp4",
    bg: "bg-zinc-900",
    reverse: true,
  },
  {
    no: "03",
    img: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/ai3.png",
    title: "AI-Driven Accuracy Assessment",
    desc: "Multi-modal AI evaluates text, images, tables, and videos for review accuracy using validated statistical techniques.",
    video: "https://d218mh3sadleh5.cloudfront.net/Clients/Gen_AI/assets/Video_3.mp4",
    bg: "bg-white",
    reverse: false,
  },
];

const advantages = [
  {
    img: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/adv1.png",
    title: "Reducing the Time Required for All Steps of Review",
    desc: "LLM-enabled, optimize linking of source documentation and highlights for the specific part of the source document optimizes review time.",
  },
  {
    img: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/adv2.png",
    title: "Mitigating Effects of Personnel Changes",
    desc: "Machine learning components ensure that knowledge of every reviewer is captured and incorporated into the tool continuously.",
  },
  {
    img: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/adv3.png",
    title: "Suggestions for Improvement of Content",
    desc: "Carefully engineered prompts ensure that the AI generates accurate suggestions for improvement of content.",
  },
  {
    img: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/adv4.png",
    title: "Enabling Reviewers to Focus Their Intelligence",
    desc: "Reviewers queries based on their expert knowledge included by a feature that allows them to send well-defined queries to the AI.",
  },
  {
    img: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/adv5.png",
    title: "Accuracy Evaluation Guided by Human Intelligence",
    desc: "Enables the reviewer to pose a user-defined query that guides the expert reviewer in conducting the accuracy evaluation",
  },
  {
    img: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/adv6.png",
    title: "Veeva Integration and Secured Knowledge Base/Role-Based Knowledge Access",
    desc: "Veeva integration allows users to view and update content within the Veeva platform. Users are granted access to files according to their role. ",
  },
];

/* ── Shimmer button ───────────────────────────────────────────────────────── */
function ShimmerBtn({ label, href }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
        className="relative inline-flex w-fit items-center gap-2 px-7 py-2 rounded-full text-white font-medium overflow-hidden cursor-pointer"
        style={{ background: "linear-gradient(135deg, #E1251B 0%, #ff4d42 100%)", boxShadow: "0 0 18px rgba(225,37,27,0.45)" }}
      >
        <motion.span className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)", backgroundSize: "200% 100%" }}
          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
          transition={{ duration: 2.5, ease: "linear", repeat: Infinity, repeatDelay: 1.5 }}
        />
        <span className="relative z-10 ">{label}</span>
      </motion.div>
    </Link>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function MlrCatalyst() {
  const router     = useRouter();
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.1 });
  const advRef     = useRef(null);
  const advInView  = useInView(advRef, { once: true, amount: 0.1 });

  return (
    <div className='w-full overflow-hidden'>

      {/* ── Back button ── */}
      <div className="w-[90%] md:w-[80%] mx-auto pt-[50px] pb-2">
        <motion.button
          onClick={() => router.push("/services/ai-catalysts")}
          className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
          whileHover={{ x: -3 }}
          transition={{ type: "spring", stiffness: 380, damping: 22 }}
        >
          <motion.span
            className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[#2A2A2A] group-hover:border-[#E1251B] transition-colors text-xs"
            whileHover={{ scale: 1.1 }}
          >
            ←
          </motion.span>
          Back
        </motion.button>
      </div>

      {/* ── DARK SECTION ── */}
      <section className="text-white selection:bg-red-600 selection:text-white">
        <div className="w-[90%] md:w-[80%] mx-auto py-5">

          {/* Hero */}
          <div className="text-center flex flex-col items-center mb-24">

            {/* Shimmer pill title */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <motion.h1
                className="relative inline-flex text-3xl md:text-5xl font-bold tracking-tight text-white px-6 py-3 rounded-2xl overflow-hidden "
                transition={{ duration: 2, ease: "easeInOut", delay: 0.6, repeat: Infinity, repeatDelay: 3 }}
              >
                {/* shimmer sweep */}
                <motion.span
                  className="absolute inset-0 pointer-events-none"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                />
                The MLR Catalyst
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-[24px] font-medium text-gray-300 mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.15 }}
            >
              The Latest in a Legacy of AI Implementation in Healthcare and Pharma Communication
            </motion.p>

            <motion.p
              className="text-sm text-gray-400 w-full md:max-w-4xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.25 }}
            >
              We are now implementing retrieval-augmented generative AI to allow implementation of AI in
              the tightly regulated Pharma milieu. <br/>This AI-powered MLR review tool is aimed at drastically
              reducing the time and effort needed for MLR review.
            </motion.p>

            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.35 }}
            >
              <ShimmerBtn label="Book a Demo" href="/contact?subject=Book%20a%20Demo" />
            </motion.div>

            {/* Hero video */}
            <motion.div
              className="relative w-full max-w-2xl aspect-16/10 rounded-xl p-px shadow-2xl border border-zinc-800/50 group"
              style={{ background: "linear-gradient(135deg, #3f3f3f, #1a1a1a)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.45 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl blur-sm" />
              <div className="w-full h-full bg-[#121212] rounded-[10px] overflow-hidden border-1 border-gray-50">
                <video src="https://d218mh3sadleh5.cloudfront.net/Clients/Gen_AI/assets/Video_4.mp4"
                  className="w-full h-full object-cover" autoPlay muted loop playsInline />
              </div>
            </motion.div>

            <div className="flex items-center w-full bg-black px-8 pt-[75px] pb-16 md:pb-20">
              <div className="flex-grow border-t border-[#4C4C4C]" />
              <img src="https://d218mh3sadleh5.cloudfront.net/Clients/Gen_AI/assets/bolt_icon.svg" alt="Divider Icon" className="mx-4 h-6 w-6 object-contain" />
              <div className="flex-grow border-t border-[#4C4C4C]" />
            </div>
          </div>

          {/* Feature rows */}
          <div ref={featuresRef} className="space-y-24">
            {features.map((f, i) => (
              <div key={f.no}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${f.reverse ? "md:flex-row-reverse" : ""}`}>
                <motion.div
                  className="w-full md:w-1/2 aspect-4/3 rounded-2xl flex items-center justify-center relative overflow-hidden group"
                  style={{ background: "linear-gradient(135deg, rgba(39,39,42,0.4), rgba(9,9,11,1))" }}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                  animate={featuresInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, ease, delay: i * 0.1 }}
                >
                  <div className={`w-full h-full ${f.bg} overflow-hidden shadow-md transform group-hover:scale-[1.02] transition-transform duration-300`}>
                    <video src={f.video} className="w-full h-full object-cover" autoPlay muted loop playsInline />
                  </div>
                </motion.div>
                <motion.div
                  className="w-full md:w-1/2 space-y-3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease, delay: i * 0.1 + 0.15 }}
                >
                  <img src={f.img} alt={f.title} className="h-6 w-6 object-contain" />
                  <h3 className="text-xl md:text-2xl  font-medium tracking-tight text-white">{f.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">{f.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>

        </div>

        <motion.div
          className="relative h-32 w-full overflow-hidden"
          initial={{ opacity: 0, scaleX: 0.4 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 rounded-full"
            style={{ background: "radial-gradient(ellipse at bottom, rgba(225,37,27,0.45) 0%, transparent 70%)", filter: "blur(8px)" }} />
        </motion.div>
      </section>

      {/* ── ADVANTAGES SECTION ── */}
      <section className="text-[#FFF] antialiased selection:bg-red-100 selection:text-red-700">
        <div className="w-[90%] md:w-[80%] mx-auto py-20">
          <div className="flex flex-col items-center justify-center h-48 mb-10">
            <div className="w-px flex-grow bg-gray-300" />
            <img alt="icon" className="my-4 w-6 h-6 object-contain" src="https://d218mh3sadleh5.cloudfront.net/Clients/Gen_AI/assets/bolt_icon.svg" />
            <div className="w-px flex-grow bg-gray-300" />
          </div>

          <div ref={advRef} className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-16">
            {advantages.map((a, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-start space-y-3"
                initial={{ opacity: 0, y: 50 }}
                animate={advInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              >
                <img src={a.img} alt={a.title} className="h-6 w-6 object-contain" />
                <h4 className="text-[24px] font-medium tracking-tight text-[#FFF] leading-snug">{a.title}</h4>
                <p className="text-sm text-zinc-300 leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="relative h-32 w-full overflow-hidden"
          initial={{ opacity: 0, scaleX: 0.4 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 rounded-full"
            style={{ background: "radial-gradient(ellipse at bottom, rgba(225,37,27,0.45) 0%, transparent 70%)", filter: "blur(8px)" }} />
        </motion.div>
      </section>
    </div>
  );
}
