'use client'

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

const FULL_TEXT = "“We believe great outcomes are built by great teams. Our strength lies in our people and the way we come together as one to solve complex challenges, support one another, and deliver meaningful impact for our clients.”";
const RED_WORD = "one";

function TypingQuote({ onDone }) {
  const paraRef = useRef(null);

  useEffect(() => {
    const el = paraRef.current;
    if (!el) return;

    // Split into segments: before "one", "one", after "one"
    const idx = FULL_TEXT.indexOf(RED_WORD);
    const before = FULL_TEXT.slice(0, idx);
    const after = FULL_TEXT.slice(idx + RED_WORD.length);

    // Build char spans
    const makeSpans = (text, className = '') =>
      text.split('').map(ch => {
        const s = document.createElement('span');
        s.textContent = ch;
        s.style.opacity = '0';
        if (className) s.className = className;
        return s;
      });

    const beforeSpans = makeSpans(before);
    const redSpans = makeSpans(RED_WORD, 'text-[#FF2F2F]');
    const afterSpans = makeSpans(after);
    const allSpans = [...beforeSpans, ...redSpans, ...afterSpans];

    el.innerHTML = '';
    allSpans.forEach(s => el.appendChild(s));

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        once: true,
      },
    });

    tl.to(allSpans, {
      opacity: 1,
      duration: 0.01,
      stagger: 0.018,
      ease: 'none',
      onComplete: onDone,
    });

    return () => tl.kill();
  }, []);

  return (
    <p ref={paraRef} className="lg:text-[30px] text-[22px] leading-relaxed" />
  );
}
const vp1 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/vp1.png";
const vp2 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/vp2.png";
const vp3 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/vp3.png";
const vp4 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/vp4.png";
const ceoImg = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/ceo.png";
const linkedinImg = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/linkdin.png";

/* ── LinkedIn SVG icon — bg changes to red on hover ── */
let _liIconCount = 0;
function LinkedInIcon({ className = "w-12 h-12", hovered = false }) {
  const id = useRef(`li-${_liIconCount++}`);
  const filterId = `filter-${id.current}`;
  const gradientId = `gradient-${id.current}`;
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* background circle */}
      <rect
        width="64" height="64" rx="32"
        fill={hovered ? "#E1251B" : "#272727"}
        style={{ transition: "fill 0.25s ease" }}
      />
      {/* "IN" logo mark — always white */}
      <path
        d="M24.8165 20.2832C23.392 20.2832 22.2363 21.4369 22.2363 22.8615C22.2363 24.2861 23.391 25.4665 24.8146 25.4665C26.2382 25.4665 27.3948 24.2861 27.3948 22.8615C27.3948 21.4379 26.2411 20.2832 24.8165 20.2832ZM37.4047 27.118C35.2381 27.118 33.9985 28.251 33.4038 29.3778H33.3409V27.4212H29.0711V41.7639H33.5202V34.664C33.5202 32.7933 33.6614 30.9854 35.9764 30.9854C38.2582 30.9854 38.2915 33.1185 38.2915 34.7823V41.7639H42.7349V33.886C42.7349 30.0312 41.9118 27.118 37.4047 27.118ZM22.591 27.4212V41.7639H27.0439V27.4212H22.591Z"
        fill="white"
      />
    </svg>
  );
}

/* ── Hover LinkedIn button — bg turns red, size stays fixed ── */
function LinkedInButton({ href, size = "w-12 h-12" }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`shrink-0 block ${size}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <LinkedInIcon className="w-full h-full" hovered={hovered} />
    </a>
  );
}
const gptwImg = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/gptw.webp";
const gptw_mobile = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/gptw_mobile.png";

const logo1 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo1.png";
const logo2 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo2.png";
const logo3 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo3.png";
const logo4 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo4.png";
const logo5 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo5.png";
const logo6 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo6.png";
const logo7 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo7.png";
const logo8 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo8.png";
const logo9 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo9.png";
const logo10 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo10.png";
const logo11 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo11.png";
const logo12 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo12.png";

const awd1 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd1.png";
const awd2 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd2.png";
const awd3 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd3.png";
const awd4 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd4.png";
const awd5 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd5.png";
const awd6 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd6.png";
const awd7 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd7.png";
const awd8 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd8.png";
const awd9 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd9.png";
const awd10 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd10.png";
const awd11 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd11.png";
const awd12 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd12.png";

const vpData = [
  { img: vp1, name: "Kumar Badampudi", role: "VP - Medical Affairs & Strategy", linkedin: "https://www.linkedin.com/in/kumar-badampudi-71812826/" },
  { img: vp2, name: "Shijin Pulikkotil", role: "VP - Head of Operations", linkedin: "https://www.linkedin.com/in/shijin-pulikkotil-85139332/" },
  { img: vp3, name: "Hari Prabhakaran", role: "VP - Business Development", linkedin: "https://www.linkedin.com/in/hari-prabhakaran-90724a2/" },
  { img: vp4, name: "Vincent Morella", role: "US Operations Admin", linkedin: "https://www.linkedin.com/in/vincent-morella-389b714/" },
];

const clientLogos = [
  logo1, logo2, logo3, logo4, logo5, logo6,
  logo7, logo8, logo9, logo10, logo11, logo12,
];

const awardsData = [
  awd1, awd2, awd3, awd4, awd5, awd6,
  awd7, awd8, awd9, awd10, awd11, awd12,
];

const cardStyle = {
  background: "radial-gradient(circle at 20% 0%, rgba(255,255,255,0.12) 0%, rgba(24,24,27,0.2) 35%, rgba(0,0,0,1) 100%)",
};

const redGlow = {
  background: "radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)",
};

function Badge({ label }) {
  return (
    <div className="inline-flex px-8 py-3 rounded-full mb-10 border border-[#2A2525] bg-[linear-gradient(to_right,_rgba(255,255,255,0.15),_rgba(0,0,0,0.4))]">
      <span className="text-white tracking-[4px] text-sm font-semibold uppercase">{label}</span>
    </div>
  );
}

function SectionHeading({ red, white }) {
  const ref = useRef(null);
  const words = `${red}${white}`.split(" ");
  const redCount = red.trim().split(" ").length;

  return (
    <motion.h2
      ref={ref}
      className="text-[26px] lg:text-[65px] font-bold mb-[30px] lg:mb-16 leading-tight"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block mr-[0.25em] ${i < redCount ? "text-[#FF2F2F]" : "text-white"}`}
          variants={{
            hidden: { opacity: 0, y: 32, rotateX: -20 },
            visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
          }}
          style={{ transformOrigin: "bottom center" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
}

function GptwImage({ src, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.img
      ref={ref}
      src={src}
      alt="Great Place to Work"
      className={className}
      loading="lazy"
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

function OneTeam() {
  const cardRefs  = useRef([]);
  const gridRef   = useRef(null);
  const awardsRef = useRef(null);
  const logosRef  = useRef(null);
  const [quoteDone, setQuoteDone] = useState(false);

  useEffect(() => {
    // VP cards slide in from right
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(card,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out", delay: i * 0.15,
          scrollTrigger: { trigger: gridRef.current || card, start: "top 80%", once: true } }
      );
    });

    // Client logos pop in with stagger
    if (logosRef.current) {
      gsap.fromTo(
        logosRef.current.querySelectorAll(".logo-card"),
        { opacity: 0, scale: 0.85, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.45, stagger: 0.05, ease: "back.out(1.4)",
          scrollTrigger: { trigger: logosRef.current, start: "top 80%", once: true } }
      );
    }

    // Award cards slide up with stagger
    if (awardsRef.current) {
      gsap.fromTo(
        awardsRef.current.querySelectorAll(".award-card"),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power3.out",
          scrollTrigger: { trigger: awardsRef.current, start: "top 80%", once: true } }
      );
    }
  }, []);

  return (
    <>
      {/* CEO Quote Card */}
      <div
        className="flex flex-col lg:flex-row items-center gap-8 p-[30px] border border-white/10 border-t-4 border-t-[rgba(135,135,135,0.22)] rounded-3xl text-white"
        style={cardStyle}
      >
        <div className="shrink-0">
          <img src={ceoImg} alt="Vimal Narayanan" className="max-w-full md:max-w-[280px] hover:scale-105 rounded-xl transition-transform duration-400 border-1 border-transparent transition-colors duration-300 hover:border-red-500 bg-[#1a1a1a] group" />
        </div>
        <div className="flex items-start justify-between  lg:justify-center lg:px-10 flex-col gap-10">
          <TypingQuote onDone={() => setQuoteDone(true)} />
          <div className={`flex lg:items-center justify-between w-full lg:w-fit gap-4 transition-opacity duration-700 ${quoteDone ? 'opacity-100' : 'opacity-0'}`}>
            <div>
              <h5 className="lg:text-[28px] text-[22px] font-semibold">Vimal Narayanan</h5>
              <p className="lg:text-[20px] text-[16px] text-gray-300">Founder and CEO</p>
            </div>
            <LinkedInButton href="https://www.linkedin.com/in/vimal-narayanan-01a40b6/" size="w-[60px] h-[60px] lg:w-[60px] lg:h-[60px]" />
          </div>
        </div>
      </div>

      {/* VP Cards */}
       <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-12 text-white overflow-hidden">
  {vpData.map((vp, index) => (
    <div
      key={index}
      ref={el => cardRefs.current[index] = el}
      className="flex flex-col justify-between gap-4 px-5 py-5 pb-4 border border-[#252525] border-t-4 border-t-[rgba(135,135,135,0.22)] rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-1 h-full "
      style={{ ...cardStyle,  }}
    >
      {/* 1. Container gets the uniform rounded shape, hidden overflow, and the hover trigger */}
<div className="flex items-center justify-center h-48 w-full overflow-hidden rounded-xl border-2 border-transparent transition-colors duration-300 hover:border-red-500 bg-[#1a1a1a] group">
  <img 
    src={vp.img} 
    alt={vp.name} 
    
    className="max-w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[102%]" 
  />
</div>

      {/* Text and LinkedIn section */}
      <div className="flex items-center justify-between gap-3 mt-auto">
        <div className="flex-1 min-w-0">
          <h5 className="text-[18px] font-semibold leading-tight truncate">{vp.name}</h5>
          <p className="text-gray-400 text-[13px] leading-snug mt-1">{vp.role}</p>
        </div>
        <LinkedInButton href={vp.linkedin} size="w-10 h-10 shrink-0" />
      </div>
    </div>
  ))}
</div>

      {/* GPTW */}
      <section className="relative">
        <div className="flex items-center justify-center py-[50px] lg:py-[100px]">
          <GptwImage src={gptwImg} className="w-full hidden lg:block object-contain" />
          <GptwImage src={gptw_mobile} className="w-full lg:hidden object-contain rounded-xl border-[1px] border-gray-600" />
        </div>
        <motion.div
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[40px]"
          style={redGlow}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        />
      </section>

      {/* Client Logos */}
      <section className="bg-black lg:py-[100px] py-[50px] px-6 lg:px-0 relative overflow-hidden">
        <Badge label="One Commitment" />
        <SectionHeading red="Our " white="Clients" />
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-y-14 lg:gap-x-8 gap-2 items-center justify-center">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="w-full min-h-[125px] border-1 border-[#ffffff56] p-2 rounded-[10px] flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.08 }}
            >
              <img src={logo} alt={`client-${index}`} className="max-h-[44px] w-auto object-contain opacity-90" loading="lazy" />
            </motion.div>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[40px]" style={redGlow} />
      </section>

      {/* Awards */}
      <section className="pt-[50px] pb-[50px] lg:pt-[100px] lg:pb-[80px] relative lg:overflow-visible">
        <Badge label="One Standard" />
        <SectionHeading red="Excellence " white="Recognized Across the Industry" />
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
          {awardsData.map((award, index) => (
            <motion.div
              key={index}
              className="flex items-center max-h-[125px] justify-center rounded-[10px] border-1 border-[#ffffff56] p-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.08 }}
            >
              <img src={award} alt={`award-${index}`} className="lg:max-w-[200px] object-contain" loading="lazy" />
            </motion.div>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[40px]" style={redGlow} />
      </section>
    </>
  );
}

export default OneTeam;
