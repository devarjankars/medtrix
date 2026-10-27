'use client'

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FULL_TEXT = "\u201cWe believe great outcomes are built by great teams. Our strength lies in our people and the way we come together as one to solve complex challenges, support one another, and deliver meaningful impact for our clients.\u201d";
const RED_BOLD_WORD = "one";

function TypingQuote() {
  const paraRef = useRef(null);
  const redStart = FULL_TEXT.indexOf(RED_BOLD_WORD);
  const redEnd   = redStart + RED_BOLD_WORD.length;

  useEffect(() => {
    const el = paraRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(el.querySelectorAll("[data-quote-character]"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.01,
          stagger: 0.018,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        }
      );
    }, el);

    return () => context.revert();
  }, []);

  // Split into 3 segments: before "one", "one" (red + bold), after "one"
  const before = Array.from(FULL_TEXT.slice(0, redStart));
  const bold   = Array.from(FULL_TEXT.slice(redStart, redEnd));
  const after  = Array.from(FULL_TEXT.slice(redEnd));
  let charIndex = 0;

  return (
    <p ref={paraRef} className="text-lg leading-1.3 md:text-[clamp(24px,1.45vw,44px)] md:leading-[1.9]" aria-label={FULL_TEXT}>
      {before.map((ch) => (
        <span key={charIndex} data-quote-character aria-hidden="true">{(() => { const i = charIndex++; return ch; })()}</span>
      ))}
      <strong className="font-bold text-[#FF2F2F]">
        {bold.map((ch) => (
          <span key={charIndex} data-quote-character aria-hidden="true">{(() => { const i = charIndex++; return ch; })()}</span>
        ))}
      </strong>
      {after.map((ch) => (
        <span key={charIndex} data-quote-character aria-hidden="true">{(() => { const i = charIndex++; return ch; })()}</span>
      ))}
    </p>
  );
}

const vp1 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Kumar_v4.png";
const vp2 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Shijin.png";
const ceoImg = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/vimal_v3.png";
const liz = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Lyris.png";
const hari = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Hari2.png";
const binoj = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Binoj.png";
const rajesh = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Rajesh%201.png";
const michel = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Michelle_v4.png";
const suja = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Shuja.png";
const stalin = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Stalin%201.png";
const suru = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Suresh%201.png";
const vincent = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Vincent.png";
const christopher = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Christopher%20Moccia.png";
const jaclyn = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Jaclyn_v4.png";
const colin = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Colin_v2.png";

const gptwImg = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/gptw.webp";
const gptw_mobile = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/gptw_mobile.png";

const logo1  = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo1.png";
const logo2  = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo2v2.png";
const logo3  = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/BerlinChemie_v2.png";
const logo4  = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/celltrion.png";
const logo5  = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo5v2.png";
const logo6  = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo6v2.png";
const logo7  = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo7.png";
const logo8  = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo8.png";
const logo9  = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/nestlelogo.png";
const logo10 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/PTC_v2.png";
const logo11 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/Sanofi_v2.png";
const logo12 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/stemlinelogo.png";
const logo13 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo11v2.png";
const logo14 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo12v2.png";

const awd1  = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd1.png";
const awd2  = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd2.png";
const awd3  = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd3.png";
const awd4  = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd4.png";
const awd5  = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd5.png";
const awd6  = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd6.png";
const awd7  = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd7.png";
const awd8  = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd8.png";
const awd9  = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd9.png";
const awd10 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd10.png";
const awd11 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd11.png";
const awd12 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/awd12.png";

/* ── LinkedIn icon ─────────────────────────────────────────────────────────── */
function LinkedInIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect width="24" height="24" rx="2" fill="#0A66C2" />
      <path fill="white" d="M5 9h3v10H5V9Zm1.5-4.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM10 9h2.9v1.4h.04C13.35 9.6 14.34 8.8 15.8 8.8c3.06 0 3.7 2.02 3.7 4.65V19h-3v-4.92c0-1.17-.02-2.68-1.64-2.68-1.64 0-1.89 1.28-1.89 2.59V19H10V9Z" />
    </svg>
  );
}

function LinkedInButton({ href, name = "LinkedIn", iconClass = "w-4 h-4", positionClass = "right-3 bottom-3" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} on LinkedIn`}
      className={`absolute ${positionClass} block transition-opacity duration-200 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2`}
    >
      <LinkedInIcon className={iconClass} />
    </a>
  );
}

/* ── Data ──────────────────────────────────────────────────────────────────── */
const leadershipData = [
  { img: vp2, name: "Shijin Pulikkotil", role: "Chief Operating Officer", linkedin: "https://www.linkedin.com/in/shijin-pulikkotil-85139332/" },
  { img: vp1, name: "Kumar Badampudi",   role: "Chief Innovation Officer", linkedin: "https://www.linkedin.com/in/kumar-badampudi-71812826/" },
];

const coreTeamData = [
  { img: liz,      name: "Lyris Lazar",          role: "Director - US Operations",          linkedin: "https://www.linkedin.com/in/lyris-lazar-4a1121234/" },
  { img: hari,     name: "Hari Prabhakaran",      role: "VP - Client Partnerships",          linkedin: "https://www.linkedin.com/in/hari-prabhakaran-90724a2/" },
  { img: binoj,    name: "Binoj Krishnan",         role: "VP - Finance and Administration",   linkedin: "https://www.linkedin.com/in/binoj-krishnan-89588915/" },
  { img: vincent,  name: "Vincent Morella",        role: "US Operations Administrator",       linkedin: "https://www.linkedin.com/in/vincent-morella-389b714/" },
  { img: rajesh,   name: "Dr Rajesh Hariharan",    role: "Medical Director",                  linkedin: "https://www.linkedin.com/in/dr-rajesh-h-2a182849/" },
  { img: suru,     name: "Suresh Waghmore",        role: "Associate VP - Creative",           linkedin: "https://www.linkedin.com/in/suresh-waghmore-99442510/" },
  { img: suja,     name: "Dr Shuja Jacob",          role: "Medical Director",                  linkedin: "https://www.linkedin.com/in/dr-shuja-jacob-810a03124/" },
  { img: stalin,   name: "Stalin Blazy",            role: "Technical Lead",                    linkedin: "https://www.linkedin.com/in/stalin-blazy-8290a631/" },
];

const accountsTeamData = [
  { img: christopher, name: "Christopher Moccia", role: "VP - Client Partnerships", linkedin: "https://www.linkedin.com/in/christopher-moccia-a176901b/" },
  { img: michel,      name: "Michelle Trussell",  role: "Account Director",         linkedin: "https://www.linkedin.com/in/michelle-trussell-44068747/" },
  { img: jaclyn,      name: "Jaclyn Pallotti",    role: "Account Director" },
  { img: colin,       name: "Colin Lewandowski",  role: "Account Executive",        linkedin: "https://www.linkedin.com/in/colin-lewandowski-7b5910329/" },
];

const clientLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14];
const awardsData  = [awd1, awd2, awd3, awd4, awd5, awd6, awd7, awd8, awd9, awd10, awd11, awd12];

const redGlow = {
  background: "radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)",
};

/* ── Profile Card ──────────────────────────────────────────────────────────── */
function ProfileCard({ person, leadership = false }) {
  return (
    <article className={`group flex min-w-0 flex-col overflow-hidden border border-[#303030] bg-[#111] ${leadership ? "rounded-2xl" : "rounded-xl"}`}>
      {/* Portrait */}
      <div className={`flex items-end justify-center overflow-hidden ${leadership ? "" : "[aspect-ratio:1.35]"}`}>
        <img
          src={person.img.trim()}
          alt={person.name}
          loading="lazy"
          className="w-full h-full object-contain object-bottom transition-[filter] duration-300 group-hover:grayscale group-focus-within:grayscale"
        />
      </div>

      {/* Info */}
      {leadership ? (
        /* Leadership — name/role on left, LinkedIn on right, same row */
        <div className="flex items-center justify-between gap-3 border-t border-[#666] bg-black px-4 pt-4 pb-6 md:px-5 md:pt-5 md:pb-7">
          <div className="min-w-0">
            <h4 className="text-white font-semibold leading-tight text-[15px] md:text-[clamp(16px,1.6vw,24px)] transition-colors duration-200 group-hover:text-[#E1251B]">
              {person.name}
            </h4>
            <p className="mt-1 text-[#c5c5c5] leading-snug text-[12px] md:text-[clamp(11px,1vw,15px)]">
              {person.role}
            </p>
          </div>
          {person.linkedin ? (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${person.name} on LinkedIn`}
              className="shrink-0 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              <LinkedInIcon className="w-[26px] h-[26px]" />
            </a>
          ) : (
            <span className="shrink-0 w-[26px] h-[26px]"><LinkedInIcon className="w-full h-full" /></span>
          )}
        </div>
      ) : (
        /* Core / Accounts — original absolute positioned layout */
        <div className="relative min-h-[74px] border-t border-[#666] bg-black px-[10px] pt-[7px] pb-8 pr-8">
          <h4 className="text-white font-semibold leading-tight text-[clamp(13px,1.3vw,20px)] transition-colors duration-200 group-hover:text-[#E1251B]">
            {person.name}
          </h4>
          <p className="mt-1 text-[#c5c5c5] leading-snug text-[clamp(9px,0.8vw,13px)]">
            {person.role}
          </p>
          {person.linkedin ? (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${person.name} on LinkedIn`}
              className="absolute right-3 bottom-3 block transition-opacity hover:opacity-70"
            >
              <LinkedInIcon className="w-[18px] h-[18px]" />
            </a>
          ) : (
            <span className="absolute right-3 bottom-3 block w-[18px] h-[18px]">
              <LinkedInIcon className="w-full h-full" />
            </span>
          )}
        </div>
      )}
    </article>
  );
}

/* ── Shared UI ─────────────────────────────────────────────────────────────── */
function Badge({ label }) {
  return (
    <div className="inline-flex px-8 py-3 rounded-full mb-10 border border-[#2A2525] bg-[linear-gradient(to_right,rgba(255,255,255,0.15),rgba(0,0,0,0.4))]">
      <span className="text-white tracking-[4px] text-sm font-semibold uppercase">{label}</span>
    </div>
  );
}

function SectionHeading({ red, white }) {
  const words = `${red}${white}`.split(" ");
  const redCount = red.trim().split(" ").length;

  return (
    <motion.h2
      className="text-[26px] lg:text-[65px] font-bold mb-8 lg:mb-16 leading-tight"
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

/* ── Main Component ────────────────────────────────────────────────────────── */
function OneTeam() {
  const awardsRef = useRef(null);
  const logosRef  = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      gsap.fromTo(
        logosRef.current.querySelectorAll(".logo-card"),
        { opacity: 0, scale: 0.85, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.45, stagger: 0.05, ease: "back.out(1.4)",
          scrollTrigger: { trigger: logosRef.current, start: "top 80%", once: true } }
      );
    }
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
      {/* ── CEO Quote Card ── */}
      <div className="group/ceo flex flex-col md:flex-row items-center gap-5 md:gap-[3.5%] rounded-2xl border border-[#292929] bg-[radial-gradient(ellipse_at_top,#1b1b1b,#090909_75%)] p-4 md:p-[3%] text-white">
        <div className="w-[100%] md:w-1/4 aspect-[188/224] shrink-0 overflow-hidden rounded-xl bg-[#151515]">
          <img src={ceoImg} alt="Vimal Narayanan" className="h-full w-full object-cover object-center transition-[filter] duration-300 group-hover/ceo:grayscale" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-7">
          <TypingQuote />
          <div className="flex items-center gap-5 border-t border-white/10 pt-7 justify-between md:justify-normal">
            <div>
              <h5 className="text-lg md:text-2xl font-semibold transition-colors group-hover/ceo:text-[#E1251B]">Vimal Narayanan</h5>
              <p className="text-md md:text-lg text-gray-300">Founder and CEO</p>
            </div>
            <a
              href="https://www.linkedin.com/in/vimal-narayanan-01a40b6/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vimal Narayanan on LinkedIn"
              className="transition-opacity hover:opacity-70"
            >
              <LinkedInIcon className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Leadership ── */}
      <section className="mt-10 md:mt-30">
        <h3 className="mb-4 text-[#ff3034] text-lg md:text-3xl font-bold mb-5">Leadership</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {leadershipData.map((person) => (
            <ProfileCard key={person.name} person={person} leadership />
          ))}
        </div>
      </section>

      {/* ── Core Team ── */}
      <section className="mt-10 md:mt-30">
        <h3 className="mb-4 text-[#ff3034] text-xl font-bold md:text-3xl font-bold mb-5">Core Team</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {coreTeamData.map((person) => (
            <ProfileCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      {/* ── Accounts Team ── */}
      <section className="mt-10 md:mt-30">
        <h3 className="mb-4 text-[#ff3034] text-xl font-bold md:text-3xl font-bold mb-5">Accounts Team</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {accountsTeamData.map((person) => (
            <ProfileCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      {/* ── GPTW ── */}
      <section className="relative">
        <div className="flex items-center justify-center pt-11 pb-16 lg:pb-24">
          <GptwImage src={gptwImg}      className="w-full hidden lg:block object-contain rounded-xl border border-[#292929]" />
          <GptwImage src={gptw_mobile}  className="w-full lg:hidden object-contain rounded-xl border border-gray-600" />
        </div>
        <motion.div
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-10"
          style={redGlow}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        />
      </section>

      {/* ── Client Logos ── */}
      <section className="bg-black lg:py-24 py-12 relative overflow-hidden">
        <Badge label="One Commitment" />
        <SectionHeading red="Our " white="Clients" />
        <div ref={logosRef} className="grid grid-cols-2 lg:grid-cols-4 lg:gap-y-4 lg:gap-x-4 gap-2 items-center justify-center">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="logo-card w-full min-h-[120px] border border-[#ffffff56] p-2 rounded-[10px] flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.08 }}
            >
              <img
                src={logo}
                alt={`client-${index}`}
                className="block w-full max-w-[180px] h-16 object-contain object-center opacity-90"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-10" style={redGlow} />
      </section>

      {/* ── Awards ── */}
      <section ref={awardsRef} className="pt-12 pb-12 lg:pt-24 lg:pb-20 relative lg:overflow-visible">
        <Badge label="One Standard" />
        <SectionHeading red="Excellence " white="Recognized Across the Industry" />
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {awardsData.map((award, index) => (
            <motion.div
              key={index}
              className="award-card flex items-center max-h-[125px] justify-center rounded-[10px] border border-[#ffffff56] p-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.08 }}
            >
              <img src={award} alt={`award-${index}`} className="lg:max-w-[200px] object-contain" loading="lazy" />
            </motion.div>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-10" style={redGlow} />
      </section>
    </>
  );
}

export default OneTeam;
