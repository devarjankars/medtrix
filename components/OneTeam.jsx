'use client'

import Image from "next/image";

import vp1 from "../public/vp1.webp";
import vp2 from "../public/vp2.webp";
import vp3 from "../public/vp3.webp";
import vp4 from "../public/vp4.webp";
import ceoImg from "../public/ceo.webp";
import linkedinImg from "../public/linkdin.png";
import gptwImg from "../public/gptw.webp";
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

const vpData = [
  { img: vp1, name: "Kumar Badampudi", role: "VP - Medical Affairs & Strategy" },
  { img: vp2, name: "Shijin Pulikkotil", role: "VP - Head of Operations" },
  { img: vp3, name: "Hari Prabhakaran", role: "VP - Business Development" },
  { img: vp4, name: "Vincent Morella", role: "US Operations Admin" },
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
  return (
    <>
      {/* CEO Quote Card */}
      <div
        className="flex flex-col lg:flex-row gap-8 p-[30px] border border-white/10 border-t-4 border-t-[rgba(135,135,135,0.22)] rounded-3xl text-white"
        style={cardStyle}
      >
        <div className="shrink-0">
          <Image
            src={ceoImg}
            alt="Vimal Narayanan"
            className="max-w-[280px] rounded-xl"
            sizes="280px"
            priority
          />
        </div>
        <div className="flex items-start justify-center lg:px-10 flex-col gap-10">
          <p className="lg:text-[30px] text-[22px] leading-relaxed">
            &ldquo;We believe great outcomes are built by great teams. Our strength lies in our people and the way we come together as{" "}
            <span className="text-red-500">one </span>
            to solve complex challenges, support one another, and deliver meaningful impact for our clients.&rdquo;
          </p>
          <div className="flex items-center gap-4">
            <div>
              <h5 className="lg:text-[28px] text-[22px] font-semibold">Vimal Narayanan</h5>
              <p className="lg:text-[20px] text-[16px] text-gray-300">Founder and CEO</p>
            </div>
            <Image
              src={linkedinImg}
              alt="LinkedIn"
              width={56}
              height={56}
              className="object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* VP Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-12 text-white">
        {vpData.map((vp, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 px-5 py-5 pb-4 border border-[#252525] border-t-4 border-t-[rgba(135,135,135,0.22)] rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-1"
            style={{ ...cardStyle, willChange: "transform" }}
          >
            <div className="flex justify-center">
              <Image
                src={vp.img}
                alt={vp.name}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 22vw"
                loading="lazy"
              />
            </div>
            <div className="flex items-start justify-between mt-2">
              <div className="flex-1">
                <h5 className="text-[20px] font-semibold leading-tight">{vp.name}</h5>
                <p className="text-gray-400 mt-1 text-[14px]">{vp.role}</p>
              </div>
              <Image
                src={linkedinImg}
                alt="LinkedIn"
                width={48}
                height={48}
                className="object-contain cursor-pointer shrink-0"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* GPTW */}
      <section className="relative">
        <div className="flex items-center justify-center py-[50px] lg:py-[100px]">
          <Image
            src={gptwImg}
            alt="Great Place to Work"
            
            className="w-full object-contain"
            loading="lazy"
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[40px]" style={redGlow} />
      </section>

      {/* Client Logos */}
      <section className="bg-black lg:py-[100px] py-[50px] px-6 lg:px-2 relative overflow-hidden">
        <Badge label="One Commitment" />
        <SectionHeading red="Client " white="Success" />
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-y-14 gap-x-8 items-center justify-items-center">
          {clientLogos.map((logo, index) => (
            <div key={index} className="w-full h-[70px] flex items-center justify-center transition-transform duration-300 hover:scale-105" style={{ willChange: "transform" }}>
              <Image
                src={logo}
                alt={`client-${index}`}
                height={44}
                className="max-h-[44px] w-auto object-contain opacity-90"
                sizes="(max-width: 768px) 30vw, 14vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[40px]" style={redGlow} />
      </section>

      {/* Awards */}
      <section className="pt-[50px] pb-[50px] lg:pt-[100px] lg:pb-[80px] relative overflow-hidden">
        <Badge label="One Standard" />
        <SectionHeading red="Excellence, " white="recognized by the industry." />
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {awardsData.map((award, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-2 transition-transform duration-300 hover:-translate-y-1"
              style={{ willChange: "transform" }}
            >
              <Image
                src={award}
                alt={`award-${index}`}
                className="lg:max-w-[250px] object-contain"
                sizes="(max-width: 768px) 45vw, 22vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[40px]" style={redGlow} />
      </section>
    </>
  );
}

export default OneTeam;
