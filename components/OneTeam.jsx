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
    <p ref={paraRef} className="lg:text-[24px] text-[20px] leading-relaxed" />
  );
}

const vp1 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Kumar.png";
const vp2 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Shijin.png";
const ceoImg = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/vimal_v2.png";
const liz = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Lyris.png";
const hari = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Hari2.png";
const binoj = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Binoj.png";
const rajesh = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Rajesh 1.png";
const michel= "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Michelle_v4.png";
const suja= "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Shuja.png";
const stalin= "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Stalin 1.png";
const  suru= "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Suresh 1.png";
const vincent= "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Vincent.png";
const christopher= "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Christopher Moccia.png";
const jaclyn= "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Jaclyn_v2.png";
const colin= "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Colin_v2.png";
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
        width="64" height="64" rx="10"
        fill={hovered ? "#E1251B" : "#0A66C2"}
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
const logo2 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo2v2.png";
const logo3 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Berline_chemie.png";
const logo4 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/celltrion.png";
const logo5 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo5v2.png";
const logo6 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo6v2.png";
const logo7 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo7.png";
const logo8 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo8.png";
const logo9 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/nestlelogo.png";
const logo10 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo10.png";
const logo11 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo11.png";
const logo12 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/stemlinelogo.png";
const logo13 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo11v2.png";
const logo14 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo12v2.png";

const   awd1 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd1.png";
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

const leadershipData = [
  { img: vp2, name: "Shijin Pulikkotil", role: "Chief Operating Officer", linkedin: "https://www.linkedin.com/in/shijin-pulikkotil-85139332/" },
  { img: vp1, name: "Kumar Badampudi", role: "Chief Innovation Officer", linkedin: "https://www.linkedin.com/in/kumar-badampudi-71812826/" },
];

const coreTeamData = [
  { img: liz, name: "Lyris Lazar", role: "Director - US Operations", linkedin: "https://www.linkedin.com/in/lyris-lazar-4a1121234/" },
  { img: hari, name: "Hari Prabhakaran", role: "VP - Client Partnerships", linkedin: "https://www.linkedin.com/in/hari-prabhakaran-90724a2/" },
  { img: binoj, name: "Binoj Krishnan", role: "VP - Finance and Administration", linkedin: "https://www.linkedin.com/in/binoj-krishnan-89588915/" },
  { img: vincent, name: "Vincent Morella", role: "US Operations Administrator", linkedin: "https://www.linkedin.com/in/vincent-morella-389b714/" },
  { img: rajesh, name: "Dr Rajesh Hariharan", role: "Medical Director", linkedin: "https://www.linkedin.com/in/dr-rajesh-h-2a182849/" },
  { img: suru, name: "Suresh Waghmore", role: "Associate VP - Creative", linkedin: "https://www.linkedin.com/in/suresh-waghmore-99442510/" },
  { img: suja, name: "Dr Shuja Jacob", role: "Medical Director", linkedin: "https://www.linkedin.com/in/dr-shuja-jacob-810a03124/?isSelfProfile=false" },
  { img: stalin, name: "Stalin Blazy", role: "Technical Lead", linkedin: "https://www.linkedin.com/in/stalin-blazy-8290a631/" },
];

const accountsTeamData = [
  { img: christopher, name: "Christopher Moccia", role: "VP - Client Partnerships", linkedin: "https://www.linkedin.com/in/christopher-moccia-a176901b/" },
  { img: michel, name: "Michelle Trussell", role: "Account Director", linkedin: "https://www.linkedin.com/in/michelle-trussell-44068747/" },
  
  { img: jaclyn, name: "Jaclyn Pallotti", role: "Account Director" },
  { img: colin, name: "Colin Lewandowski", role: "Account Executive", linkedin: "https://www.linkedin.com/in/colin-lewandowski-7b5910329/" },
];

function ProfileCard({ person, leadership = false }) {
  const imageHeight = leadership ? "h-[220px] sm:h-[250px]" : "h-[145px] sm:h-[160px]";
  const initials = person.name
    .split(" ")
    .filter((part) => part && !["Dr", "Dr."].includes(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <article className="overflow-hidden rounded-2xl border border-[#292929] bg-[#111111]">
      <div className={`${imageHeight} flex items-end justify-center overflow-hidden bg-[#151515]`}>
        {person.img ? (
          <img
            src={person.img}
            alt={person.name}
            loading="lazy"
            className="h-full w-full object-contain object-bottom"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.08),transparent_65%)] text-4xl font-semibold tracking-wide text-white/20">
            {initials}
          </div>
        )}
      </div>

      <div className={`flex min-h-[76px] items-center justify-between gap-2 border-t border-[#424242] bg-black px-3 ${leadership ? "py-4 sm:px-5" : "py-2.5"}`}>
        <div className="min-w-0 flex-1">
          <h4 className={`${leadership ? "text-lg sm:text-xl" : "text-[13px] sm:text-sm"} truncate font-semibold leading-tight text-white`}>
            {person.name}
          </h4>
          <p className={`${leadership ? "text-xs sm:text-sm" : "text-[10px] sm:text-[11px]"} mt-1 leading-snug text-gray-400`}>
            {person.role}
          </p>
        </div>
        {person.linkedin ? (
          <LinkedInButton href={person.linkedin} size={leadership ? "h-6 w-6 shrink-0" : "h-5 w-5 shrink-0"} />
        ) : (
          <LinkedInIcon className={leadership ? "h-6 w-6 shrink-0" : "h-5 w-5 shrink-0"} />
        )}
      </div>
    </article>
  );
}

const clientLogos = [
  logo1, logo2, logo3, logo4, logo5, logo6,
  logo7, logo8, logo9, logo10, logo11, logo12,logo13,logo14,
];

const awardsData = [
  awd1, awd2, awd3, awd4, awd5, awd6,
  awd7, awd8, awd9, awd10, awd11, awd12,
];

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
  const awardsRef = useRef(null);
  const logosRef  = useRef(null);
  const [quoteDone, setQuoteDone] = useState(false);

  useEffect(() => {
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
      {/* CEO quote card */}
      <div className="flex flex-col items-center gap-5 rounded-2xl border border-[#292929] bg-[#101010] p-4 text-white sm:p-6 md:flex-row md:gap-7">
        <div className="h-[230px] w-full shrink-0 overflow-hidden rounded-xl bg-[#151515] md:h-[340px] md:w-[340px]">
          <img src={ceoImg} alt="Vimal Narayanan" className="h-full w-full object-cover object-top" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-5 md:gap-15 md:px-2">
          <TypingQuote onDone={() => setQuoteDone(true)} />
          <div className={`flex items-center justify-between gap-5 border-t border-white/10 pt-4 transition-opacity duration-700 ${quoteDone ? "opacity-100" : "opacity-0"}`}>
            <div>
              <h5 className="text-base font-semibold sm:text-lg">Vimal Narayanan</h5>
              <p className="text-xs text-gray-300 sm:text-sm">Founder and CEO</p>
            </div>
            <LinkedInButton href="https://www.linkedin.com/in/vimal-narayanan-01a40b6/" size="h-6 w-6" />
          </div>
        </div>
      </div>

      <section className="mt-7">
        <h3 className="mb-3 text-lg font-bold text-[#ff3034]">Leadership</h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {leadershipData.map((person) => <ProfileCard key={person.name} person={person} leadership />)}
        </div>
      </section>

      <section className="mt-7">
        <h3 className="mb-3 text-lg font-bold text-[#ff3034]">Core Team</h3>
        <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4 lg:gap-3">
          {coreTeamData.map((person) => <ProfileCard key={person.name} person={person} />)}
        </div>
      </section>

      <section className="mt-7">
        <h3 className="mb-3 text-lg font-bold text-[#ff3034]">Accounts Team</h3>
        <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4 lg:gap-3">
          {accountsTeamData.map((person) => <ProfileCard key={person.name} person={person} />)}
        </div>
      </section>

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
      <section className="bg-black lg:py-[100px] py-[50px]   relative overflow-hidden">
        <Badge label="One Commitment" />
        <SectionHeading red="Our " white="Clients" />
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-y-14 lg:gap-x-8 gap-2 items-center justify-center">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="w-full min-h-[120px] border-1 border-[#ffffff56] p-2 rounded-[10px] flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.08 }}
            >
              <img src={logo} alt={`client-${index}`} className="max-h-[40px] w-auto object-contain opacity-90" loading="lazy" />
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
