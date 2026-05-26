'use client'

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import Image from "next/image";

import vp1 from "../public/vp1.webp";
import vp2 from "../public/vp2.webp";
import vp3 from "../public/vp3.webp";
import vp4 from "../public/vp4.webp";
import ceoImg from "../public/ceo.webp";
import linkedinImg from "../public/linkdin.png";
import mapImg from "../public/map.png";
import gptwImg from "../public/gptw.webp";
import gptwMobileImg from "../public/gptw_mobile.png";
import logo1 from "../public/logo1.png";
import logo2 from "../public/logo2.png";
import logo3 from "../public/logo3.png";
import logo4 from "../public/logo4.png";
import logo5 from "../public/logo5.png";
import logo6 from "../public/logo6.png";
import logo7 from "../public/logo7.png";
import logo8 from "../public/logo8.png";
import logo9 from "../public/logo9.png";
import logo10 from "../public/logo10.png";
import logo11 from "../public/logo11.png";
import logo12 from "../public/logo12.png";
// import s2 from "../public/s2.jpg";
// import s3 from "../public/s3.jpg";
import awd1 from "../public/awd1.png";
import awd2 from "../public/awd2.png";
import awd3 from "../public/awd3.png";
import awd4 from "../public/awd4.png";
import awd5 from "../public/awd5.png";
import awd6 from "../public/awd6.png";
import awd7 from "../public/awd7.png";
import awd8 from "../public/awd8.png";
import awd9 from "../public/awd9.png";
import awd10 from "../public/awd10.png";
import awd11 from "../public/awd11.png";
import awd12 from "../public/awd12.png";
import mobile_map from "../public/mobile_map.png";
// added something here to test the commit and push functionality of git
gsap.registerPlugin(ScrollTrigger);

const vpData = [
  { img: vp1, name: "Kumar Badampudi", role: "VP - Medical Affairs & Strategy" },
  { img: vp2, name: "Shijin Pulikkotil", role: "VP - Head of Operations" },
  { img: vp3, name: "Hari Prabhakaran", role: "VP - Business Development" },
  { img: vp4, name: "Vincent Morella", role: "US Operations Admin" },
];

const clientLogos = [
  logo1, logo2, logo3, logo4, logo5, logo6,
  logo7, logo8, logo9, logo10, logo11, logo12
];

const awardsData = [
  awd1, awd2, awd3,
  awd4, awd5, awd6,awd7,awd8, awd9, awd10, awd11, awd12
];

// const stackCards = [
//   { id: 1, image: s1 },
//   { id: 2, image: s2 },
//   { id: 3, image: s3 },
// ];

// function StickyCards() {
//   const container = useRef(null);
//   const imageRefs = useRef([]);

//   useGSAP(
//     () => {
//       const imageElements = imageRefs.current;
//       const totalCards = imageElements.length;
//       if (!imageElements[0]) return;

//       gsap.set(imageElements[0], { y: "0%", scale: 1, rotation: 0 });
//       for (let i = 1; i < totalCards; i++) {
//         if (!imageElements[i]) continue;
//         gsap.set(imageElements[i], { y: "100%", scale: 1, rotation: 0 });
//       }

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".sticky-cards",
//           start: "top top",
//           end: `+=${window.innerHeight * (totalCards - 1)}`,
//           pin: true,
//           scrub: 0.5,
//           pinSpacing: true,
//         },
//       });

//       for (let i = 0; i < totalCards - 1; i++) {
//         const current = imageElements[i];
//         const next = imageElements[i + 1];
//         if (!current || !next) continue;
//         tl.to(current, { scale: 0.85, rotation: 4, duration: 1, ease: "none" }, i);
//         tl.to(next, { y: "0%", duration: 1, ease: "none" }, i);
//       }

//       const ro = new ResizeObserver(() => ScrollTrigger.refresh());
//       if (container.current) ro.observe(container.current);

//       return () => {
//         ro.disconnect();
//         tl.kill();
//         ScrollTrigger.getAll().forEach(t => t.kill());
//       };
//     },
//     { scope: container }
//   );

//   return (
//     <div ref={container} className="relative h-full w-full">
//       <div className="sticky-cards relative flex h-screen w-full items-center justify-center overflow-hidden p-3 lg:p-8">
//         <div className="relative h-[90%] w-full max-w-5xl overflow-hidden rounded-3xl">
//           {stackCards.map((card, i) => (
//             <img
//               key={card.id}
//               src={card.image.src}
//               alt={`slide-${card.id}`}
//               className="absolute h-full w-full object-cover rounded-3xl"
//               ref={(el) => { imageRefs.current[i] = el; }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

function OneTeam() {
  return (

      <>
       <div className="
flex flex-col lg:flex-row gap-8 p-[30px]
border border-white/15
border-t-4 border-t-[rgba(135,135,135,0.24)]
bg-[radial-gradient(circle_at_20%_0%,_rgba(255,255,255,0.15)_0%,_rgba(24,24,27,0.24)_35%,_rgba(0,0,0,1)_100%)]
rounded-3xl text-white
">
          <div className="flex flex-col gap-5">
            <Image src={ceoImg} alt="Vimal Narayanan" className="max-w-[280px] rounded-xl" />
          </div>
          <div className="flex items-start justify-center lg:px-10 flex-col gap-10">
            <p className="lg:text-[30px] text-[22px] leading-relaxed">
              &ldquo;We believe great outcomes are built by great teams. Our strength lies in our people and the way we come together as{" "}
              <span className="text-red-500">one </span> to solve complex challenges, support one another, and deliver meaningful impact for our clients.&rdquo;
            </p>
            <div className="flex items-center justify-between gap-2">
              <div>
                <h5 className="lg:text-[28px] text-[22px] font-semibold">Vimal Narayanan</h5>
                <p className="lg:text-[20px] text-[16px]  text-gray-300">Founder and CEO</p>
              </div>
              <Image src={linkedinImg} alt="LinkedIn" className="w-[60px] h-[60px] object-contain cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-12 text-white">
          {vpData.map((vp, index) => (
            <div key={index} className="flex flex-col gap-1 px-5 py-5 pb-4  border border-[#252525] border-t-4 border-t-[rgba(135,135,135,0.24)] bg-[radial-gradient(circle_at_20%_0%,_rgba(255,255,255,0.15)_0%,_rgba(24,24,27,0.24)_35%,_rgba(0,0,0,1)_100%)] border-t-[rgba(135,135,135,0.24)]  rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-center">
                <Image src={vp.img} alt={vp.name} className="w-full h-auto object-contain" />
              </div>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h5 className="text-[20px] font-semibold leading-tight">{vp.name}</h5>
                  <p className="text-gray-400 mt-1 text-[14px]">{vp.role}</p>
                </div>
                <Image src={linkedinImg} alt="LinkedIn" className="w-[56px] h-[56px] object-contain cursor-pointer shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* <StickyCards /> */}
         <section className="relative ">
        <div className="flex items-center justify-center py-[50px]  lg:py-[100px]  ">
          <Image src={gptwImg} alt="Great Place to Work" className="hidden lg:block" />
          <Image src={gptwMobileImg} alt="Great Place to Work" className="block lg:hidden" />

        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[40px] rounded-full" style={{ background: 'radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)' }} />

        </section>

        <section className="bg-black lg:py-[100px]  py-[50px]  px-6 lg:px-2 relative overflow-hidden">
        <div className="
inline-flex px-8 py-3 rounded-full mb-10
bg-[linear-gradient(to_right,_rgba(255,255,255,0.2),_rgba(0,0,0,0.4))] border border-[#2A2525]
">
            <span className="text-white tracking-[4px] text-sm font-semibold uppercase">One Commitment</span>
          </div>
          <h2 className="text-3xl text-[26px] lg:text-[70px] font-bold mb-[10px] lg:mb-20">
            <span className="text-red-500">Client</span>{" "}
            <span className="text-white">Success</span>
          </h2>
          <div className="grid grid-cols-3  lg:grid-cols-6 gap-y-16 gap-x-10 items-center justify-items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="w-full h-[80px] flex items-center justify-center transition duration-300 hover:scale-105">
                <img src={logo.src} alt={`client-${index}`} className="max-h-[50px] w-auto object-contain opacity-90" />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[40px] rounded-full" style={{ background: 'radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)' }} />

        </section>

        <section className="pt-[50px] pb-[50px] lg:pt-[100px] lg:pb-[80px] relative overflow-hidden">
          <div className="inline-flex px-6 py-3 rounded-full bg-[#262626] mb-10 bg-[linear-gradient(to_right,_rgba(255,255,255,0.2),_rgba(0,0,0,0.4))] border border-[#2A2525]">
            <span className="text-white uppercase tracking-[4px] text-sm font-semibold">One Standard</span>
          </div>
          <h2 className="text-[26px] lg:text-[70px] font-bold mb-[30px] lg:mb-16 leading-tight">
            <span className="text-red-500">Excellence,</span>
            <span className="text-white"> recognized by the industry.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {awardsData.map((award, index) => (
              <div key={index} className="   flex items-center justify-center p-2 transition-all duration-300 hover:-translate-y-1">
              <Image src={award} alt={`award-${index}`} className="lg:max-w-[250px]  object-contain" />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[40px] rounded-full" style={{ background: 'radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)' }} />

        </section>

        {/* <section className="bg-black px-6 lg:px-1 flex flex-col items-center">
          <Image src={mapImg} alt="Contact Locations" className="w-full object-contain" />
          <button className="mt-8 px-10 py-4 bg-[#FF3B3B] text-white rounded-full text-lg font-medium hover:bg-red-600 transition-all duration-300">
            Contact Us
          </button>
          
        </section> */}
      </>

  );
}

export default OneTeam;
