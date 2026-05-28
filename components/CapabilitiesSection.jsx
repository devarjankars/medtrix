"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* ── Tab data ─────────────────────────────────────────────────────────────── */
const tabs = [
  "Experience",
  "Websites",
  "Videos",
  "3D Content, MOA / MOD",
  "Interactive Platforms",
];

const tabContent = {
  "Experience": {
    mediaType: "video",
    mediaSrc: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Video/AMI_Aesthetic_Showcase_01.mp4",
    headline: "Experience",
    desc: "Immersive and stunning experiential solutions for communication at Congresses, Symposia, and meetings that deliver engaging, compliant, and scalable digital experiences.",
    points: [
      { title: "Multi-screen LED experiences:", desc: "Synchronized engagement solutions for Congresses" },
      { title: "Immersive experiences:", desc: "Large-screen and HMD-driven experiences for individual and group engagement" },
      { title: "Device-independent experiences:", desc: "Browser-based scalable experiences across devices" },
    ],
    caseStudy: null,
  },
  "Websites": {
    mediaType: "image",
    mediaSrc: "/ourcap1.jpg",
    headline: "Websites",
    desc: "End-to-end capability for design, development, SEO, deployment, maintenance, and omnichannel integration of websites and microsites.",
    points: [
      { title: "Audience Expertise:", desc: "Websites across brand, HCP, patient, disease education, and medical affairs audiences" },
      { title: "CMS & Platforms:", desc: "Expertise across Drupal, WordPress, Adobe Experience Manager, and headless CMS platforms" },
      { title: "Compliance & Integrations:", desc: "Capabilities across GDPR/HIPAA/SOC2 compliance and Veeva PromoMats/Engage integrations" },
    ],
    caseStudy: null,
  },
  "Videos": {
    mediaType: "video",
    mediaSrc: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Video/Celltrion_Whiteboard_Animation+_Video+1+%281%29.mp4",
    headline: "Videos",
    desc: "Video development capabilities to produce videos that cover the whole spectrum of video animation styles and narrative storytelling.",
    points: [
      { title: "2D and 3D videos:", desc: "Full-scale production capabilities for 2D and 3D video content of varying complexity of animation" },
      { title: "Live action videos:", desc: "Planning, Production, and Post-production of KOL and patient videos" },
      { title: "Multimodal videos:", desc: "Video content deployed as regular videos and immersive AR/VR experiences" },
    ],
    caseStudy: null,
  },
  "3D Content, MOA / MOD": {
    mediaType: "video",
    mediaSrc: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Video/Merck+Prostate+Cancer+%281%29.mp4",
    headline: "3D Content, MOA / MOD",
    desc: "3D mechanism of action (MOA) and mechanism of disease (MOD) videos, developed by expert 3D artists and guided by medical experts.",
    points: [
      { title: "MOA and MOD videos:", desc: "Hyper realistic and scientifically accurate structures and animations" },
      { title: "3D content development:", desc: "3D content development for integration into banners, slides, detail aids, websites etc." },
    ],
    caseStudy: { label: "Read the Keytruda MOD Case Study →", href: "/our-work/commercial-solutions" },
  },
  "Interactive Platforms": {
    mediaType: "image",
    mediaSrc: "/ourcap2.jpg",
    headline: "Interactive Platforms",
    desc: "Custom applications and data-driven platforms that enable informed decision-making and effective engagement.",
    points: [
      { title: "Interactive guidelines and management algorithms:", desc: "Applications that support and augment clinical decision making" },
      { title: "Product and Data-driven applications:", desc: "Unified data and product portfolio showcase platforms for web and interactive screens" },
      { title: "Webcast and Symposia platform:", desc: "Unified platform for onboarding, video streaming, quiz and interaction delivery for webinars" },
    ],
    caseStudy: null,
  },
};

/* ── Autoplay video that restarts when it becomes the active tab ─────────── */
function TabVideo({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    v.play().catch(() => {});
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className="w-full h-full object-cover"
      muted
      loop
      playsInline
      autoPlay
      preload="auto"
    />
  );
}

/* ── Main component ──────────────────────────────────────────────────────── */
export default function CapabilitiesSection() {
  const [active, setActive] = useState("Experience");
  const sectionRef = useRef(null);
  const [sectionInView, setSectionInView] = useState(false);

  /* Auto-trigger Experience video when section scrolls into view */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setSectionInView(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const content = tabContent[active];

  return (
    <section ref={sectionRef} className="bg-black">
      <div className="mx-auto relative pb-28">

        {/* Header pill */}
        <span className="inline-block bg-[#4d4949] text-white px-5 py-2 rounded-full text-xs tracking-[3px] uppercase mb-8">
          Our capabilities include
        </span>

        {/* Tab bar */}
        <div className="border border-[#222] rounded-2xl bg-[#111] p-2 flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-6 py-3 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-200 ${
                active === tab
                  ? "bg-[#E1251B] text-white shadow-[0_0_14px_rgba(225,37,27,0.4)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="bg-[#111] rounded-[26px] border border-[#1F1F1F] overflow-hidden"
          >
            {/* Media area */}
            <div className="relative w-full aspect-video bg-black">
              {content.mediaType === "video" ? (
                <TabVideo key={content.mediaSrc} src={content.mediaSrc} />
              ) : (
                <Image
                  key={content.mediaSrc}
                  src={content.mediaSrc}
                  alt={content.headline}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  unoptimized
                />
              )}
              {/* subtle dark overlay at bottom for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Text content */}
            <div className="p-8 lg:p-12">
              <h2 className="text-white text-2xl lg:text-3xl font-bold mb-3">{content.headline}</h2>
              <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-8 max-w-3xl">
                {content.desc}
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {content.points.map((pt, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="w-8 h-[2px] bg-[#E1251B] rounded-full mb-1" />
                    <h3 className="text-white text-sm font-semibold leading-snug">{pt.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{pt.desc}</p>
                  </div>
                ))}
              </div>

              {content.caseStudy && (
                <Link
                  href={content.caseStudy.href}
                  className="inline-flex items-center gap-2 mt-8 text-[#E1251B] text-sm font-semibold hover:underline underline-offset-4 transition-all"
                >
                  {content.caseStudy.label}
                </Link>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <Glow />
      </div>

      {/* ENGAGE section */}
      <SectionGrid
        label="ENGAGE"
        title="High-impact engagement assets across all channels"
        items={[
          { title: "Emailers",              img: "/valuecard1.png", desc: "Veeva, SFMC, and third-party platforms" },
          { title: "Paid and Earned media", img: "/valuecard2.png", desc: "Interactive banners and HCP platforms" },
          { title: "Rep-driven Engagements",img: "/valuecard3.png", desc: "E-detailers and explainers" },
        ]}
        cols={3}
        button="Explore our Omnichannel Catalyst"
      />

      {/* EDUCATE section */}
      <SectionGrid
        label="EDUCATE"
        title="Scalable learning and engagement solutions that enable effective knowledge transfer and HCP engagement"
        items={[
          { title: "Detailers",                   img: "/ed1.png", desc: "Designed for Veeva and other leading platforms" },
          { title: "Learning Solutions",           img: "/ed2.png", desc: "Custom-built digital learning programs tailored to diverse audiences" },
          { title: "Learning Management System",   img: "/ed3.png", desc: "Proprietary platform for scalable deployment, tracking, and optimization" },
          { title: "Authoring Expertise",          img: "/ed4.png", desc: "Articulate 360, Rise, and Adobe Captivate" },
        ]}
        cols={2}
        button="Explore Modulife Expert for Nestlé Health Science"
      />
    </section>
  );
}

/* ── Reusable image-card grid section ────────────────────────────────────── */
function SectionGrid({ label, title, items, cols, button, link }) {
  return (
    <div className="relative lg:py-24 py-16">
      <span className="inline-block bg-[#5e5d5d] rounded-full px-5 py-2 text-sm tracking-[3px] text-white mb-10">
        {label}
      </span>

      <p className="text-white mb-10 text-xl max-w-3xl">{title}</p>

      <div className={`grid gap-8 ${cols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
        {items.map((item) => (
          <div
            key={item.title}
            className="relative rounded-[22px] overflow-hidden border border-[#1F1F1F]"
          >
            <div className="relative w-full h-[320px]">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-white text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {button && (
        <div className="flex justify-center mt-12">
          {link ? (
            <Link href={link}>
              <ShimmerButton label={button} />
            </Link>
          ) : (
            <ShimmerButton label={button} />
          )}
        </div>
      )}

      <Glow />
    </div>
  );
}

/* ── Shimmer CTA button ──────────────────────────────────────────────────── */
function ShimmerButton({ label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
      className="relative inline-flex w-fit items-center gap-2 px-8 py-4 rounded-full text-white font-medium overflow-hidden cursor-pointer"
      style={{
        background: "linear-gradient(135deg, #E1251B 0%, #ff4d42 100%)",
        boxShadow: "0 0 18px rgba(225,37,27,0.45)",
      }}
    >
      <motion.span
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
        transition={{ duration: 2.5, ease: "linear", repeat: Infinity, repeatDelay: 1.5 }}
      />
      <span className="relative z-10 text-sm">{label}</span>
    </motion.div>
  );
}

/* ── Red glow divider ────────────────────────────────────────────────────── */
function Glow() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-10 rounded-full"
      style={{ background: "radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)" }}
    />
  );
}
