'use client';

import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger);

/* ── Data ─────────────────────────────────────────────────────────────────── */
const features = [
  {
    no: "01",
    img: "/ai1.png",
    title: "Using AI to simplify repetitive tasks",
    desc: "Quantitative and qualitative evaluation of alignment with pre-approved documents, claims, use-cases, variations for modular content etc.",
    video: "https://d218mh3sadleh5.cloudfront.net/Clients/Gen_AI/assets/Video_1.mp4",
    bg: "bg-white/95",
    reverse: false,
  },
  {
    no: "02",
    img: "/ai2.png",
    title: "AI built specifically with approved documents",
    desc: "A system that works strictly off of role-specific pre-approved knowledge base for Medical Affairs, Brand Teams, Legal, and Regulatory functions.",
    video: "https://d218mh3sadleh5.cloudfront.net/Clients/Gen_AI/assets/Video_2.mp4",
    bg: "bg-zinc-900",
    reverse: true,
  },
  {
    no: "03",
    img: "/ai3.png",
    title: "AI-driven accuracy assessment",
    desc: "Multi-modal AI evaluates text, images, tables, and videos for review accuracy using validated statistical techniques.",
    video: "https://d218mh3sadleh5.cloudfront.net/Clients/Gen_AI/assets/Video_3.mp4",
    bg: "bg-white",
    reverse: false,
  },
];

const advantages = [
  {
    img: "/adv1.png",
    title: "Reducing the time required for all steps of review",
    desc: "LLM enabled linking of source documentation and highlights for the specific part of the source document optimizes review time.",
  },
  {
    img: "/adv2.png",
    title: "Mitigating effects of personnel changes",
    desc: "Machine learning components ensure that knowledge of every reviewer is captured and incorporated into the tool continuously.",
  },
  {
    img: "/adv3.png",
    title: "Suggestions for improvement of content",
    desc: "Carefully engineered prompts ensure that the AI generates accurate suggestions for improvement of content.",
  },
  {
    img: "/adv4.png",
    title: "Enabling reviewers to focus their intelligence",
    desc: "Reviewers queries based on their expert knowledge included by a feature that allows them to send well-defined queries to the AI.",
  },
  {
    img: "/adv5.png",
    title: "Accuracy evaluation guided by human intelligence",
    desc: "Enables the reviewer to pose a user-defined query to enable the expert reviewer guide/direct the accuracy evaluation.",
  },
  {
    img: "/adv6.png",
    title: "Veeva integration and firewalled knowledge base",
    desc: "Every user has access to files as defined by their role. Integration with Veeva to access and modify files in Veeva.",
  },
];

/* ── Shimmer button ───────────────────────────────────────────────────────── */
function ShimmerBtn({ label, href }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
        className="relative inline-flex w-fit items-center gap-2 px-8 py-4 rounded-full text-white font-medium overflow-hidden cursor-pointer"
        style={{ background: "linear-gradient(135deg, #E1251B 0%, #ff4d42 100%)", boxShadow: "0 0 18px rgba(225,37,27,0.45)" }}
      >
        <motion.span className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)", backgroundSize: "200% 100%" }}
          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
          transition={{ duration: 2.5, ease: "linear", repeat: Infinity, repeatDelay: 1.5 }}
        />
        <span className="relative z-10">{label}</span>
      </motion.div>
    </Link>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function MlrCatalyst() {
  const heroRef     = useRef(null);
  const featuresRef = useRef(null);
  const glowRef     = useRef(null);
  const glow2Ref    = useRef(null);
  const advRef      = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* Hero — stagger children in */
      gsap.fromTo(
        heroRef.current?.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out", delay: 0.1 }
      );

      /* Feature rows — video slides in, text fades up separately */
      const rows = featuresRef.current?.querySelectorAll(".feature-row");
      rows?.forEach((row, i) => {
        const videoEl = row.querySelector(".feature-video");
        const textEl  = row.querySelector(".feature-text");
        const fromX   = i % 2 === 0 ? -60 : 60;

        gsap.fromTo(videoEl,
          { opacity: 0, x: fromX, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 80%", once: true } }
        );
        gsap.fromTo(textEl,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.75, ease: "power3.out", delay: 0.2,
            scrollTrigger: { trigger: row, start: "top 80%", once: true } }
        );
      });

      /* Glow 1 — bottom of dark section */
      gsap.fromTo(glowRef.current,
        { opacity: 0, scaleX: 0.4 },
        { opacity: 1, scaleX: 1, duration: 1.4, ease: "power2.out",
          scrollTrigger: { trigger: glowRef.current, start: "top 95%", once: true } }
      );

      /* Glow 2 — bottom of white section */
      gsap.fromTo(glow2Ref.current,
        { opacity: 0, scaleX: 0.4 },
        { opacity: 1, scaleX: 1, duration: 1.4, ease: "power2.out",
          scrollTrigger: { trigger: glow2Ref.current, start: "top 95%", once: true } }
      );

      /* Advantage cards — stagger with title and desc separately */
      advRef.current?.querySelectorAll(".adv-card").forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: i * 0.08,
            scrollTrigger: { trigger: advRef.current, start: "top 80%", once: true } }
        );
      });

    });
    return () => ctx.revert();
  }, []);

  return (
    <div className='w-full overflow-hidden'>
      {/* ── DARK SECTION ── */}
      <section className="bg-black text-white selection:bg-red-600 selection:text-white">
        <div className="w-[90%] md:w-[80%] mx-auto py-20">

          {/* Hero */}
          <div ref={heroRef} className=" text-center flex flex-col items-center mb-24">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 opacity-0">
              The MLR Catalyst
            </h1>
            <p className="text-lg font-medium text-gray-300  mb-4 leading-relaxed opacity-0">
              The Latest in a Legacy of AI Implementation in Healthcare and Pharma Communication.
            </p>
            <p className="text-sm text-gray-400 max-w-3xl mb-8 leading-relaxed opacity-0">
              Today we are implementing retrieval-augmented generative AI to allow implementation of AI in
              the tightly regulated Pharma milieu. This AI-powered MLR review tool is aimed at drastically
              reducing the time and effort needed for MLR review.
            </p>

            <div className="opacity-0 mb-10">
              <ShimmerBtn label="Book a demo" href="/contact?subject=Book%20a%20Demo" />
            </div>

            {/* Hero video */}
            <div className="opacity-0 relative w-full max-w-2xl aspect-16/10 rounded-xl p-px shadow-2xl border border-zinc-800/50 group"
              style={{ background: "linear-gradient(135deg, #3f3f3f, #1a1a1a)" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl blur-sm" />
              <div className="w-full h-full bg-[#121212] rounded-[10px] overflow-hidden border-1 border-gray-50">

                <video src="https://d218mh3sadleh5.cloudfront.net/Clients/Gen_AI/assets/Video_4.mp4"
                  className="w-full h-full object-cover" autoPlay muted loop playsInline />
              </div>
            </div>
                      <div className="flex items-center w-full bg-black px-8 pt-[75px] pb-16 md:pb-20">
                          <div className="flex-grow border-t border-[#4C4C4C]" />
                          <img
                              src="https://d218mh3sadleh5.cloudfront.net/Clients/Gen_AI/assets/bolt_icon.svg"
                              alt="Divider Icon"
                              className="mx-4 h-6 w-6 object-contain"
                          />
                          <div className="flex-grow border-t border-[#4C4C4C]" />
                      </div>

                  </div>

          {/* Feature rows */}
          <div ref={featuresRef} className="space-y-24">
            {features.map((f) => (
              <div key={f.no}
                className={`feature-row flex flex-col md:flex-row items-center gap-8 md:gap-16 ${f.reverse ? "md:flex-row-reverse" : ""}`}>

                {/* Video card */}
                <div className="feature-video opacity-0 w-full md:w-1/2 aspect-4/3 rounded-2xl flex items-center justify-center relative overflow-hidden group"
                  style={{ background: "linear-gradient(135deg, rgba(39,39,42,0.4), rgba(9,9,11,1))" }}>
                  <div className={`w-full h-full ${f.bg} overflow-hidden shadow-md transform group-hover:scale-[1.02] transition-transform duration-300`}>
                    <video src={f.video} className="w-full h-full object-cover" autoPlay muted loop playsInline />
                  </div>
                </div>

                {/* Text */}
                <div className="feature-text opacity-0 w-full md:w-1/2 space-y-3">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="h-6 w-6 object-contain"
                  />
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">{f.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>


        <div ref={glowRef} className="relative h-32 w-full overflow-hidden opacity-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 rounded-full"
            style={{ background: "radial-gradient(ellipse at bottom, rgba(225,37,27,0.45) 0%, transparent 70%)", filter: "blur(8px)" }} />
        </div>
      </section>

      {/* ── WHITE SECTION ── */}
      <section className=" text-[#FFF] antialiased selection:bg-red-100 selection:text-red-700">
        <div ref={advRef} className="w-[90%] md:w-[80%] mx-auto py-20">

          {/* Connector */}
          <div className="flex flex-col items-center justify-center h-48 mb-10">
  {/* Top Vertical Divider Segment */}
  <div className="w-px flex-grow bg-gray-300"></div>
  
  {/* Centered Logo Asset */}
  <img 
    alt="icon" 
    className="my-4 w-6 h-6 object-contain" 
    src="https://d218mh3sadleh5.cloudfront.net/Clients/Gen_AI/assets/bolt_icon.svg"
  />
  
  {/* Bottom Vertical Divider Segment */}
  <div className="w-px flex-grow bg-gray-300"></div>
</div>

          {/* Advantages grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-16">
            {advantages.map((a, i) => (
              <div key={i} className="adv-card opacity-0 flex flex-col items-start space-y-3">
                <img
                  src={a.img}
                  alt={a.title}
                  className="h-6 w-6 object-contain"
                />
                <h4 className="text-[19px] font-bold tracking-tight text-[#FFF] leading-snug">{a.title}</h4>
                <p className="text-sm text-zinc-300 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>

        </div>
         <div ref={glow2Ref} className="relative h-32 w-full overflow-hidden opacity-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 rounded-full"
            style={{ background: "radial-gradient(ellipse at bottom, rgba(225,37,27,0.45) 0%, transparent 70%)", filter: "blur(8px)" }} />
        </div>
      </section>
    </div>
  );
}
