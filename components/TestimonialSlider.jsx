"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function TestimonialSlider({
  items = [],
  autoPlay = true,
  delay = 3500,
}) {
  const [active, setActive] = useState(0);
  const [cardW, setCardW] = useState(720);
  const wrapRef = useRef(null);

  // Measure container width and derive card width responsively
  useEffect(() => {
    function measure() {
      if (!wrapRef.current) return;
      const w = wrapRef.current.offsetWidth;
      // mobile < 640: full width minus padding
      // tablet 640-1024: 80% of container
      // desktop > 1024: fixed 720 capped at 85% of container
      if (w < 640) setCardW(w - 48);
      else if (w < 1024) setCardW(Math.round(w * 0.78));
      else setCardW(Math.min(720, Math.round(w * 0.85)));
    }
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  // Auto-play
  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;
    const t = setInterval(() => setActive((p) => (p + 1) % items.length), delay);
    return () => clearInterval(t);
  }, [items.length, autoPlay, delay]);

  const GAP = 24;
  const STEP = cardW + GAP;

  // On desktop shift the spotlight slightly left of center (–8% of cardW)
  const desktopBias = typeof window !== "undefined" && window.innerWidth >= 1024
    ? Math.round(cardW * 0.08)
    : 0;

  // Single item — simple centered card, no carousel
  if (items.length === 1) {
    return (
      <section ref={wrapRef} className="py-8 w-full">
        <div className="w-full rounded-[36px] p-8 md:p-10 border border-red-500 bg-black">
          <p className="text-white text-base md:text-lg lg:text-[20px] leading-loose">
            &ldquo;{items[0].text}&rdquo;
          </p>
          <div className="mt-10">
            <h3 className="text-white text-lg md:text-xl lg:text-2xl font-semibold">
              {items[0].role}
            </h3>
            <p className="mt-1 text-gray-400 text-sm md:text-base">{items[0].location}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={wrapRef} className="relative py-8 w-full" style={{ overflow: "clip" }}>
      {/*
        Centering formula (container-relative, not viewport-relative):
          offset = containerW/2 - cardW/2 - active*STEP - desktopBias
        This keeps the active card centered inside the parent container,
        with a slight left bias on desktop for the spotlight feel.
      */}
      <motion.div
        animate={{
          x:
            wrapRef.current
              ? wrapRef.current.offsetWidth / 2 - cardW / 2 - active * STEP - desktopBias
              : 0,
        }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="flex w-max"
        style={{ gap: GAP }}
      >
        {items.map((item, index) => {
          const isActive = active === index;
          return (
            <motion.div
              key={index}
              animate={{
                scale: isActive ? 1 : 0.88,
                opacity: isActive ? 1 : 0.4,
              }}
              transition={{ duration: 0.7 }}
              onClick={() => setActive(index)}
              style={{ width: cardW }}
              className={`
                shrink-0 cursor-pointer
                rounded-[36px]
                p-7 md:p-10
                ${isActive
                  ? "border border-red-500 bg-black"
                  : "border border-[#2A2A2A] bg-[#151515]"
                }
              `}
            >
              {/* Quote mark */}
              

              <p className="text-white text-base md:text-lg lg:text-[20px] leading-loose">
                "{item.text}"
              </p>

              <div className="mt-10 md:mt-12">
                <h3 className="text-white text-lg md:text-xl lg:text-2xl font-semibold">
                  {item.role}
                </h3>
                <p className="mt-1 text-gray-400 text-sm md:text-base">{item.location}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

     
    </section>
  );
}
