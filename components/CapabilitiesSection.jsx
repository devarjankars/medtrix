"use client";

import { useState } from "react";
import Image from "next/image";

import videothunbExperience from "../public/videothunbExperience.png";
import { motion } from "framer-motion";
import Link from "next/link";


const tabs = [
  "Experience",
  "Websites",
  "Videos",
  "3D Content, MOA / MOD",
  "Interactive Platforms",
];

const cards1 = [
  {
    no: "01",
    title: "Multi-screen LED experiences:",
    desc: "Solutions for synchronous or asynchronous engagement at Congresses",
  },
  {
    no: "02",
    title: "Immersive experiences:",
    desc: "Large-screen driven or HMD-driven immersive experiences",
  },
  {
    no: "03",
    title: "Independent experiences:",
    desc: "Browser-driven device independent experiences",
  },
];

const engage = [
  {
    title: "Emailers",
    img: "/valuecard1.png",
    desc: "Veeva, SFMC, and third-party platforms",
  },
  {
    title: "Paid and Earned media",
    img: "/valuecard2.png",
    desc: "Interactive banners and HCP platforms",
  },
  {
    title: "Rep-driven Engagements",
    img: "/valuecard3.png",
    desc: "E-detailers and explainers",
  },
];


const educate=[
  {
    title: "Detailers",
    img: "/ed1.png",
    desc: "Designed for Veeva and other leading platforms",
  },
 {
    title: "Learning Solutions",
    img: "/ed2.png",
    desc: "Custom-built digital learning programs tailored to diverse audiences",
  },
  {
    title: "Learning Management System",
    img: "/ed3.png",
    desc: "Proprietary platform for scalable deployment, tracking, and optimization",
  },
  {
    title: "Authoring Expertise",
    img: "/ed4.png",
    desc: "Articulate 360, Rise, and Adobe Captivate",
  },
]

export default function CapabilitiesSection() {
  const [active, setActive] = useState("Experience");

  return (
    <section className="bg-black py-28">

      {/* EXPERIENCE */}

      <div className=" mx-auto relative pb-28">

        <span className="inline-block bg-[#4d4949] text-white px-5 py-2 rounded-full text-xs tracking-[3px] uppercase mb-8">
          Our capabilities include
        </span>

        <div className="border border-[#222] rounded-2xl bg-[#111] p-2 flex-wrap gap-2 mb-5">
          {tabs.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-8 py-3 rounded-full whitespace-nowrap text-sm transition ${
                active === item
                  ? "bg-[#FF3838] text-white"
                  : "text-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="bg-[#111] rounded-[26px] border border-[#1F1F1F] overflow-hidden">

          <div className="relative">

            <Image
              src={videothunbExperience}
              alt="experience"
              className="w-full object-contain"
            />

            <div className="absolute inset-0 bg-black/30" />

            {/* <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/20 backdrop-blur text-white text-2xl">
              ▶
            </button> */}

            <p className="absolute bottom-12 left-10 max-w-[700px] text-white text-xl">
              Immersive solutions for communication at Congresses, Symposia, and meetings that deliver engaging, compliant, and scalable digital experiences. 
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10 p-10">
            {cards1.map((item) => (
              <div key={item.no}>
                <h2 className="text-[#FF3838] text-5xl mb-4">{item.no}</h2>
                <h3 className="text-white mb-2">{item.title}</h3>
                <p className="text-gray-400  max-w-[70%]">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>

        <Glow />

      </div>

      <SectionGrid
        label="ENGAGE"
        title="High-impact engagement assets across all channels"
        items={engage}
        cols={3}
        button={"Explore our Omnichannel Catalyst"}
      />
       <SectionGrid
        label="Educate"
        title="Scalable learning and engagement solutions that enable effective knowledge transfer and HCP engagement "
        items={educate}
        cols={2}
        button={"Explore Modulife Expert for Nestlé Health Science"}
      />


    </section>
   
  );
}

function SectionGrid({ label, title, items, cols, button, link }) {
  return (
    <div className="  relative py-30">

      <span className="inline-block bg-[#5e5d5d] rounded-full px-5 py-2 text-sm tracking-[3px] text-white mb-10 mt-5">
        {label}
      </span>

      <p className="text-white mb-10 text-xl">{title}</p>

      <div className={`grid gap-8 ${cols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>

        {items.map((item) => (
          <div
            key={item.title}
            className="relative rounded-[22px] overflow-hidden border border-[#1F1F1F]"
          >
            {/* fixed-height container for fill image */}
            <div className="relative w-full h-[350px]">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute bottom-10 left-8">
              <h3 className="text-white text-2xl mb-2">
                {item.title}
              </h3>

              <p className="text-gray-300">
                {item.desc}
              </p>
            </div>

          </div>
        ))}

      </div>
        <div className="flex justify-center mt-12">
         {button && (
  link ? (
    <Link href={link}>
      <motion.div
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
        className="relative inline-flex w-fit items-center gap-2 px-8 py-4 mt-8 rounded-full text-white font-medium overflow-hidden cursor-pointer"
        style={{
          background: "linear-gradient(135deg, #E1251B 0%, #ff4d42 100%)",
          boxShadow: "0 0 18px rgba(225,37,27,0.45)",
        }}
      >
        <motion.span
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)",
              backgroundSize: "200% 100%",
            }}
            animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
            transition={{
              duration: 2.5,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          />
          <span className="relative z-10">{button}</span>
      </motion.div>
    </Link>
  ) : (
    <motion.div
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
      className="relative inline-flex w-fit items-center gap-2 px-8 py-4 mt-8 rounded-full text-white font-medium overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E1251B 0%, #ff4d42 100%)",
        boxShadow: "0 0 18px rgba(225,37,27,0.45)",
      }}
    >
      <motion.span
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)",
              backgroundSize: "200% 100%",
            }}
            animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
            transition={{
              duration: 2.5,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          />
          <span className="relative z-10">{button}</span>
    </motion.div>
  )
)}
</div>
          
      <Glow />

    </div>
  );
}

function Glow() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[40px] rounded-full"
      style={{
        background:
          "radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)",
      }}
    />
  );
}