"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";

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

const INTERVAL = 4000;
const DRAG_THRESHOLD = 50;

export default function LifeatMet() {
  const currentRef = useRef(0);
  const isAnimating = useRef(false);
  const autoTimer = useRef(null);
  const activeLayer = useRef("A");

  // image layers
  const layerARef = useRef(null);
  const layerBRef = useRef(null);

  // content DOM refs — updated directly, no React state
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  // dot refs
  const dotsRef = useRef([]);

  // drag
  const dragStart = useRef(null);
  const isDragging = useRef(false);

  // ── update dots directly in DOM ───────────────────────────────────────────
  const updateDots = (index) => {
    dotsRef.current.forEach((dot, i) => {
      if (!dot) return;
      dot.style.width = i === index ? "32px" : "20px";
      dot.style.background =
        i === index ? "#e11d1d" : "rgba(255,255,255,0.35)";
    });
  };

  // ── core animation — pure GSAP, zero React re-renders ────────────────────
  const animateTo = useCallback((nextIndex, direction = 1) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const incoming =
      activeLayer.current === "A" ? layerBRef.current : layerARef.current;
    const outgoing =
      activeLayer.current === "A" ? layerARef.current : layerBRef.current;

    // preload image on hidden layer
    incoming.style.backgroundImage = `url(${slides[nextIndex].image})`;
    gsap.set(incoming, { x: `${direction * 100}%`, opacity: 1 });

    const tl = gsap.timeline({
      onComplete: () => {
        activeLayer.current = activeLayer.current === "A" ? "B" : "A";
        currentRef.current = nextIndex;
        isAnimating.current = false;
      },
    });

    // slide images
    tl.to(outgoing, {
      x: `${direction * -8}%`,
      opacity: 0,
      duration: 0.75,
      ease: "power2.inOut",
    });
    tl.to(
      incoming,
      { x: "0%", opacity: 1, duration: 0.75, ease: "power2.inOut" },
      "<"
    );

    // fade out text first — stagger downward
    tl.to(
      [descRef.current, titleRef.current, tagRef.current],
      { opacity: 0, y: -16, duration: 0.3, ease: "power2.in", stagger: 0.06 },
      "<"
    );

    // only after fully faded out — swap content + dots
    tl.call(() => {
      if (tagRef.current) tagRef.current.textContent = slides[nextIndex].tag;
      if (titleRef.current) titleRef.current.textContent = slides[nextIndex].title;
      if (descRef.current) descRef.current.textContent = slides[nextIndex].desc;
      updateDots(nextIndex);
      // reset position ready for fade-in
      gsap.set([tagRef.current, titleRef.current, descRef.current], { y: 24 });
    });

    // fade in text — stagger upward
    tl.to(
      [tagRef.current, titleRef.current, descRef.current],
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.09 },
      "+=0.05"
    );
  }, []);

  // ── auto-play ─────────────────────────────────────────────────────────────
  const startAuto = useCallback(() => {
    clearInterval(autoTimer.current);
    autoTimer.current = setInterval(() => {
      const next = (currentRef.current + 1) % slides.length;
      animateTo(next, 1);
    }, INTERVAL);
  }, [animateTo]);

  const resetAuto = useCallback(() => {
    clearInterval(autoTimer.current);
    startAuto();
  }, [startAuto]);

  // ── mount ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    // set initial image
    layerARef.current.style.backgroundImage = `url(${slides[0].image})`;
    gsap.set(layerBRef.current, { x: "100%", opacity: 0 });

    // set initial text
    tagRef.current.textContent = slides[0].tag;
    titleRef.current.textContent = slides[0].title;
    descRef.current.textContent = slides[0].desc;
    updateDots(0);

    // entrance
    gsap.fromTo(
      [tagRef.current, titleRef.current, descRef.current],
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.12, delay: 0.3 }
    );

    startAuto();
    return () => clearInterval(autoTimer.current);
  }, [startAuto]);

  // ── manual nav ────────────────────────────────────────────────────────────
  const goTo = useCallback((index) => {
    if (index === currentRef.current || isAnimating.current) return;
    const dir = index > currentRef.current ? 1 : -1;
    animateTo(index, dir);
    resetAuto();
  }, [animateTo, resetAuto]);

  const goPrev = useCallback(() => {
    goTo((currentRef.current - 1 + slides.length) % slides.length);
  }, [goTo]);

  const goNext = useCallback(() => {
    goTo((currentRef.current + 1) % slides.length);
  }, [goTo]);

  // ── drag / swipe ──────────────────────────────────────────────────────────
  const onPointerDown = (e) => {
    dragStart.current = e.clientX ?? e.touches?.[0]?.clientX;
    isDragging.current = true;
  };

  const onPointerUp = (e) => {
    if (!isDragging.current || dragStart.current === null) return;
    isDragging.current = false;
    const endX = e.clientX ?? e.changedTouches?.[0]?.clientX;
    const delta = dragStart.current - endX;
    if (Math.abs(delta) >= DRAG_THRESHOLD) {
      delta > 0 ? goNext() : goPrev();
    }
    dragStart.current = null;
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-[20px] select-none cursor-grab active:cursor-grabbing"
      style={{ minHeight: 460 }}
      onMouseDown={onPointerDown}
      onMouseUp={onPointerUp}
      onMouseLeave={onPointerUp}
      onTouchStart={onPointerDown}
      onTouchEnd={onPointerUp}
    >
      {/* Image layers */}
      <div ref={layerARef} className="absolute inset-0 bg-cover bg-center" style={{ willChange: "transform, opacity" }} />
      <div ref={layerBRef} className="absolute inset-0 bg-cover bg-center" style={{ willChange: "transform, opacity" }} />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 z-10" />

      {/* Content — static DOM, text swapped by GSAP */}
      <div className="relative z-20 flex flex-col justify-end h-full px-8 pb-10 pt-56 md:pt-72">

        <div className="mb-3">
          <span
            ref={tagRef}
            className="text-[11px] font-bold uppercase tracking-widest text-white px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(180,30,30,0.75)",
              border: "1px solid rgba(220,50,50,0.5)",
              display: "inline-block",
            }}
          />
        </div>

        <h2
          ref={titleRef}
          className="text-white text-2xl md:text-3xl font-semibold mb-3 leading-snug max-w-xl"
        />

        <p
          ref={descRef}
          className="text-gray-300 text-sm md:text-[15px] leading-relaxed max-w-2xl mb-6"
        />

        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              ref={(el) => (dotsRef.current[i] = el)}
              onClick={(e) => { e.stopPropagation(); goTo(i); }}
              className="h-[3px] rounded-full cursor-pointer"
              style={{ transition: "width 0.3s ease, background 0.3s ease" }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
