"use client";

import { useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
  {
    id: 1,
    image: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/f_1.png",
    imgMbl:"https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/lm1.png",
    tag: "EQUALITY",
    title: "Harnessing The Power Of One",
    desc: "We believe diverse perspectives drive stronger ideas. By bringing together people from different backgrounds, disciplines, and experiences, we foster a culture built on inclusion, collaboration, and shared purpose.",
  },
  {
    id: 2,
    image: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/f_2.png",
    imgMbl:"https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/lm2.png",
    tag: "AUDACITY",
    title: "Challenging what’s possible",
    desc: "We embrace bold thinking and ambitious ideas that push healthcare communication forward. From emerging technologies to new engagement models, we continuously strive to create meaningful impact for our clients and their audiences. ",
  },
  {
    id: 3,
    image: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/f_3.png",
    imgMbl:"https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/lm3.png",
    tag: "Originality",
    title: "Crafting unique experiences",
    desc: "We combine creativity, science, and technology to create innovative healthcare communication experiences. From Artificial Intelligence to Augmented and Mixed Reality, we challenge convention through solutions that redefine engagement. ",
  },
  
  {
    id: 4,
    image: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/f_4.png",
    imgMbl:"https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/lm4.png",
    tag: "Simplicity",
    title: "Delivering clarity through design",
    desc: "We simplify complex concepts through inventive strategy, graphical storytelling, implementation expertise, and high-quality in-house content to create intuitive, user-friendly, end-to-end solutions.",
  },
];

export default function LifeatMet() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = useCallback((index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index, 500);
    }
  }, []);

  return (
    <div className="w-full rounded-[20px] overflow-hidden" style={{ height: "clamp(420px, 60vh, 700px)", position: "relative" }}>
      <Swiper
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        speed={600}
        grabCursor
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} style={{ position: "relative" }}>
            {/* Background image — desktop */}
            <img
              src={slide.image}
              alt={slide.title}
              className="hidden md:block"
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover",
              }}
              draggable={false}
            />
            {/* Background image — mobile */}
            <img
              src={slide.imgMbl}
              alt={slide.title}
              className="block md:hidden"
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
              draggable={false}
            />

            {/* Gradient */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
            }} />

            {/* Content */}
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", flexDirection: "column",
              justifyContent: "flex-end",
              padding: "0 20px 56px 20px",
              zIndex: 10,
            }}>
              {/* Tag */}
              <div style={{ marginBottom: 8 }}>
                <span style={{
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "white",
                  padding: "4px 10px",
                  borderRadius: 9999,
                  display: "inline-block",
                  background: "#742323",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
                className="shadow-sm"
                >
                  {slide.tag}
                </span>
              </div>

              {/* Title */}
              <h2 style={{
                color: "white",
                fontSize: "clamp(14px, 4vw, 28px)",
                fontWeight: 600, lineHeight: 1.3,
                marginBottom: 6, maxWidth: 560,
              }}>
                {slide.title}
              </h2>

              {/* Description */}
              <p style={{
                color: "rgba(209,213,219,1)",
                fontSize: "clamp(11px, 3vw, 14px)",
                lineHeight: 1.6, maxWidth: 640,
              }}>
                {slide.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Custom dots—outside Swiper, always on top ── */}
      <div style={{
        position: "absolute",
        bottom: 32, left: 32,
        display: "flex", alignItems: "center", gap: 8,
        zIndex: 30,
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              height: 24,           // large tap target
              width: i === activeIndex ? 44 : 28,
              borderRadius: 9999,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "10px 0",    // extra vertical hit area
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "width 0.25s ease",
            }}
          >
            {/* visible bar */}
            <span style={{
              display: "block",
              height: 3,
              width: "100%",
              borderRadius: 9999,
              background: i === activeIndex ? "#e11d1d" : "rgba(255,255,255,0.35)",
              transition: "background 0.25s ease",
              pointerEvents: "none",
            }} />
          </button>
        ))}
      </div>
    </div>
  );
}
