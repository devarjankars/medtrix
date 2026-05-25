'use client'

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const vpData = [
  { img: "/vp1.png", name: "Kumar Badampudi", role: "VP - Medical Affairs & Strategy" },
  { img: "/vp2.png", name: "Shijin Pulikkotil", role: "VP - Head of Operations" },
  { img: "/vp3.png", name: "Hari Prabhakaran", role: "VP - Business Development" },
  { img: "/vp4.png", name: "Vincent Morella", role: "US Operations Admin" },
];

const clientLogos = [
  "/logo1.png", "/logo2.png", "/logo3.png",
  "/logo4.png", "/logo5.png", "/logo6.png",
  "/logo1.png", "/logo2.png", "/logo3.png",
  "/logo4.png", "/logo5.png", "/logo6.png",
];

const awardsData = [
  "/award1.png", "/award2.png", "/award3.png",
  "/award4.png", "/award5.png", "/award6.png",
];

const stackCards = [
  { id: 1, image: "/s1.webp" },
  { id: 2, image: "/s2.jpg" },
  { id: 3, image: "/s3.jpg" },
];

function StickyCards() {
  const container = useRef(null);
  const imageRefs = useRef([]);

  useGSAP(
    () => {
      const imageElements = imageRefs.current;
      const totalCards = imageElements.length;
      if (!imageElements[0]) return;

      gsap.set(imageElements[0], { y: "0%", scale: 1, rotation: 0 });
      for (let i = 1; i < totalCards; i++) {
        if (!imageElements[i]) continue;
        gsap.set(imageElements[i], { y: "100%", scale: 1, rotation: 0 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-cards",
          start: "top top",
          end: `+=${window.innerHeight * (totalCards - 1)}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const current = imageElements[i];
        const next = imageElements[i + 1];
        if (!current || !next) continue;
        tl.to(current, { scale: 0.85, rotation: 4, duration: 1, ease: "none" }, i);
        tl.to(next, { y: "0%", duration: 1, ease: "none" }, i);
      }

      const ro = new ResizeObserver(() => ScrollTrigger.refresh());
      if (container.current) ro.observe(container.current);

      return () => {
        ro.disconnect();
        tl.kill();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    },
    { scope: container }
  );

  return (
    <div ref={container} className="relative h-full w-full">
      <div className="sticky-cards relative flex h-screen w-full items-center justify-center overflow-hidden p-3 lg:p-8">
        <div className="relative h-[90%] w-full max-w-5xl overflow-hidden rounded-3xl">
          {stackCards.map((card, i) => (
            <img
              key={card.id}
              src={card.image}
              alt={`slide-${card.id}`}
              className="absolute h-full w-full object-cover rounded-3xl"
              ref={(el) => { imageRefs.current[i] = el; }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function OneTeam() {
  return (
    <ReactLenis root>
      <>
        <div className="flex flex-col lg:flex-row gap-8 pt-12 px-10 md:px-1 py-10 bg-[#18181B] border-t-4 border-[#878787] rounded-3xl text-white">
          <div className="flex flex-col gap-5">
            <img src="/ceo.png" alt="Vimal Narayanan" className="max-w-[280px] rounded-xl" />
          </div>
          <div className="flex items-start justify-center lg:px-10 flex-col gap-10">
            <p className="text-[30px] leading-relaxed">
              "We believe great outcomes are built by great teams. Our strength lies in our people and the way we come together as{" "}
              <span className="text-red-500">one</span> to solve complex challenges, support one another, and deliver meaningful impact for our clients."
            </p>
            <div className="flex items-center justify-between gap-2">
              <div>
                <h5 className="text-[28px] font-semibold">Vimal Narayanan</h5>
                <p className="text-[20px] text-gray-300">Founder and CEO</p>
              </div>
              <img src="/linkdin.png" alt="LinkedIn" className="w-[60px] h-[60px] object-contain cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mt-12 text-white">
          {vpData.map((vp, index) => (
            <div key={index} className="flex flex-col gap-1 px-5 py-5 pb-4 bg-[#18181B] border border-[#252525] border-t-[3px] border-t-[#504e4e] rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-center">
                <img src={vp.img} alt={vp.name} className="w-full h-auto object-contain" />
              </div>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h5 className="text-[20px] font-semibold leading-tight">{vp.name}</h5>
                  <p className="text-gray-400 mt-1 text-[14px]">{vp.role}</p>
                </div>
                <img src="/linkdin.png" alt="LinkedIn" className="w-[56px] h-[56px] object-contain cursor-pointer shrink-0" />
              </div>
            </div>
          ))}
        </div>

        <StickyCards />

        <section className="bg-black py-24 px-6 lg:px-2 relative overflow-hidden">
          <div className="inline-flex px-8 py-3 rounded-full bg-[#242424] mb-10">
            <span className="text-white tracking-[4px] text-sm font-semibold uppercase">One Commitment</span>
          </div>
          <h2 className="text-3xl font-bold mb-20">
            <span className="text-red-500">Client</span>{" "}
            <span className="text-white">Success</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-10 items-center justify-items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="w-full h-[80px] flex items-center justify-center transition duration-300 hover:scale-105">
                <img src={logo} alt={`client-${index}`} className="max-h-[50px] w-auto object-contain opacity-90" />
              </div>
            ))}
          </div>
          <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[180px] bg-red-700/30 blur-[120px] rounded-full" />
        </section>

        <section className="bg-black lg:px-24 py-24 relative overflow-hidden">
          <div className="inline-flex px-6 py-3 rounded-full bg-[#262626] mb-10">
            <span className="text-white uppercase tracking-[4px] text-sm font-semibold">One Standard</span>
          </div>
          <h2 className="text-3xl font-bold mb-16 leading-tight">
            <span className="text-red-500">Excellence,</span>
            <span className="text-white"> recognized by the industry.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awardsData.map((award, index) => (
              <div key={index} className="bg-[#ECECEC] rounded-3xl h-[220px] flex items-center justify-center p-8 transition-all duration-300 hover:-translate-y-1">
                <img src={award} alt={`award-${index}`} className="max-w-[240px] max-h-[120px] object-contain" />
              </div>
            ))}
          </div>
          <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-red-700/30 blur-[120px] rounded-full" />
        </section>

        <section className="bg-black px-6 lg:px-1 flex flex-col items-center">
          <img src="/map.png" alt="Contact Locations" className="w-full object-contain" />
          <button className="mt-8 px-10 py-4 bg-[#FF3B3B] text-white rounded-full text-lg font-medium hover:bg-red-600 transition-all duration-300">
            Contact Us
          </button>
        </section>
      </>
    </ReactLenis>
  );
}

export default OneTeam;
