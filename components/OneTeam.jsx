'use client'

import { useEffect, useRef, useState } from "react";
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
    const redSpans = makeSpans(RED_WORD, 'text-red-500');
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
const vp1 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/vp1.webp";
const vp2 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/vp2.webp";
const vp3 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/vp3.webp";
const vp4 = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/vp4.webp";
const ceoImg = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/ceo.webp";
const linkedinImg = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/linkdin.png";
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
  return (
    <h2 className="text-[26px] lg:text-[70px] font-bold mb-[30px] lg:mb-16 leading-tight">
      <span className="text-red-500">{red}</span>
      <span className="text-white">{white}</span>
    </h2>
  );
}

function OneTeam() {
  const cardRefs = useRef([]);
  const [quoteDone, setQuoteDone] = useState(false);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(card,
        { opacity: 0, x: 60 },
        {
          opacity: 1, x: 0, duration: 0.5, ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRefs.current[0],
            start: 'top 80%',
            once: true,
          },
          delay: i * 0.2,
        }
      );
    });
  }, []);

  return (
    <>
      {/* CEO Quote Card */}
      <div
        className="flex flex-col lg:flex-row gap-8 p-[30px] border border-white/10 border-t-4 border-t-[rgba(135,135,135,0.22)] rounded-3xl text-white"
        style={cardStyle}
      >
        <div className="shrink-0">
          <img src={ceoImg} alt="Vimal Narayanan" className="max-w-[280px] hover:scale-110 rounded-xl transition-transform duration-400" />
        </div>
        <div className="flex items-start justify-between  lg:justify-center lg:px-10 flex-col gap-10">
          <TypingQuote onDone={() => setQuoteDone(true)} />
          <div className={`flex lg:items-center justify-between w-full lg:w-fit gap-4 transition-opacity duration-700 ${quoteDone ? 'opacity-100' : 'opacity-0'}`}>
            <div>
              <h5 className="lg:text-[28px] text-[22px] font-semibold">Vimal Narayanan</h5>
              <p className="lg:text-[20px] text-[16px] text-gray-300">Founder and CEO</p>
            </div>
            <a href="https://www.linkedin.com/in/vimal-narayanan-01a40b6/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinImg} alt="LinkedIn" className="object-contain w-[60px] h-[60px] lg:w-[48px] lg:h-[48px] cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      {/* VP Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-12 text-white overflow-hidden">
        {vpData.map((vp, index) => (
          <div
            key={index}
            ref={el => cardRefs.current[index] = el}
            className="flex flex-col gap-1 px-5 py-5 pb-4 border border-[#252525] border-t-4 border-t-[rgba(135,135,135,0.22)] rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-1"
            style={{ ...cardStyle, willChange: "opacity, transform", opacity: 0 }}
          >
            <div className="flex justify-center ">
              <img src={vp.img} alt={vp.name} className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex items-start justify-between mt-2">
              <div className="flex-1">
                <h5 className="text-[20px] font-semibold leading-tight">{vp.name}</h5>
                <p className="text-gray-400 mt-1 text-[14px]">{vp.role}</p>
              </div>
              <a href={vp.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={linkedinImg} alt="LinkedIn" className="object-contain w-[60px] h-[60px] lg:w-[48px] lg:h-[48px] cursor-pointer shrink-0" loading="lazy" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* GPTW */}
      <section className="relative">
        <div className="flex items-center justify-center py-[50px] lg:py-[100px]">
          <img src={gptwImg} alt="Great Place to Work" className="w-full hidden lg:block object-contain" loading="lazy" />
          <img src={gptw_mobile} alt="Great Place to Work" className="w-full lg:hidden object-contain" loading="lazy" />

        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[40px]" style={redGlow} />
      </section>

      {/* Client Logos */}
      <section className="bg-black lg:py-[100px] py-[50px] px-6 lg:px-2 relative overflow-hidden">
        <Badge label="One Commitment" />
        <SectionHeading red="Our " white="Clients" />
        <div className="grid grid-cols-3 lg:grid-cols-4 lg:gap-y-14 lg:gap-x-8 gap-2 items-center justify-center ">
          {clientLogos.map((logo, index) => (
            <div key={index} className="w-full h-[70px] border-1 border-[#ffffff56] p-2 rounded-[10px] flex items-center justify-center transition-transform duration-300 hover:scale-105" style={{ willChange: "transform" }}>
              <img src={logo} alt={`client-${index}`} className="max-h-[44px] w-auto object-contain opacity-90" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[40px]" style={redGlow} />
      </section>

      {/* Awards */}
      <section className="pt-[50px] pb-[50px] lg:pt-[100px] lg:pb-[80px] relative lg:overflow-visible">
        <Badge label="One Standard" />
        <SectionHeading red="Excellence " white="Recognized Across the Industry" />
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3   w-full ">
          {awardsData.map((award, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-[10px] border-1 border-[#ffffff56] p-2 transition-transform duration-300 hover:-translate-y-1"
              style={{ willChange: "transform" }}
            >
              <img src={award} alt={`award-${index}`} className="lg:max-w-[200px] object-contain" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[40px]" style={redGlow} />
      </section>
    </>
  );
}

export default OneTeam;
