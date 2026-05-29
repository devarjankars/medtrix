"use client";

import { useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
  {
    id: 1,
    image: "/stories1.png",
    tag: "EQUALITY",
    title: "Harnessing The Power Of One",
    desc: "We believe diverse perspectives drive stronger ideas. By bringing together people from different backgrounds, disciplines, and experiences, we foster a culture built on inclusion, collaboration, and shared purpose.",
  },
  {
    id: 2,
    image: "/stories2.png",
    tag: "GROWTH",
    title: "Growing Together, Every Day",
    desc: "At MedTrix, growth is not just professional — it's personal. We invest in our people through mentorship, learning opportunities, and a culture that celebrates curiosity and ambition.",
  },
  {
    id: 3,
    image: "/stories3.png",
    tag: "INNOVATION",
    title: "Where Ideas Come To Life",
    desc: "We create space for bold thinking. From strategy to execution, every team member is empowered to challenge the status quo and bring fresh perspectives to the table.",
  },
  {
    id: 4,
    image: "/stories4.png",
    tag: "COMMUNITY",
    title: "More Than A Workplace",
    desc: "MedTrix is a community. We celebrate milestones together, support each other through challenges, and build relationships that go beyond the office walls.",
  },
  {
    id: 5,
    image: "/stories5.png",
    tag: "IMPACT",
    title: "Work That Matters",
    desc: "Every project we take on has a real-world impact on healthcare. Our work helps patients get better access to treatments and empowers healthcare professionals with the knowledge they need.",
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
    <div className="w-full rounded-[20px] overflow-hidden" style={{ height: "clamp(320px, 60vh, 700px)", position: "relative" }}>
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
            {/* Background image */}
            <img
              src={slide.image}
              alt={slide.title}
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover",
              }}
              draggable={false}
            />

            {/* Gradient */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
            }} />

            {/* Content — sits above dots via pb-16 */}
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", flexDirection: "column",
              justifyContent: "flex-end",
              padding: "0 32px 72px 32px",
              zIndex: 10,
            }}>
              {/* Tag */}
              <div style={{ marginBottom: 12 }}>
                <span style={{
                  fontSize: 11, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.15em",
                  color: "white", padding: "5px 12px",
                  borderRadius: 9999, display: "inline-block",
                  background: "rgba(180,30,30,0.75)",
                  border: "1px solid rgba(220,50,50,0.5)",
                }}>
                  {slide.tag}
                </span>
              </div>

              {/* Title */}
              <h2 style={{
                color: "white", fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 600, lineHeight: 1.3,
                marginBottom: 10, maxWidth: 560,
              }}>
                {slide.title}
              </h2>

              {/* Description */}
              <p style={{
                color: "rgba(209,213,219,1)", fontSize: 14,
                lineHeight: 1.7, maxWidth: 640,
              }}>
                {slide.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Custom dots — outside Swiper, always on top ── */}
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
