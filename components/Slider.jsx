"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function Slider({
  title = "OUR SOLUTION",
  slides = [],
  autoPlay = true,
  delay = 2500,
}) {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);
  const dragStartX = useRef(null);

  const isInView = useInView(sectionRef, { amount: 0.4 });

  useEffect(() => {
    if (!autoPlay || !isInView || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, delay);
    return () => clearInterval(timer);
  }, [isInView, autoPlay, delay, slides.length]);

  function prev() {
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }
  function next() {
    setCurrent((p) => (p + 1) % slides.length);
  }

  // touch swipe
  function onTouchStart(e) {
    dragStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e) {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    dragStartX.current = null;
  }

  return (
    <section ref={sectionRef} className="bg-black text-white overflow-x-hidden">
      <div className="mx-auto">

        {/* viewport */}
        <div
          className="relative overflow-hidden rounded-2xl md:rounded-[40px] border border-[#812626] bg-[#090202] h-52 sm:h-72 md:h-96 lg:h-130"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <motion.div
            animate={{ x: `-${current * 100}%` }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full"
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full flex justify-center items-center shrink-0">
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    className="object-contain"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* arrows removed */}
        </div>

        {/* dots */}
        {slides.length > 1 && (
          <div className="flex justify-center gap-3 mt-5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index ? "w-10 bg-white" : "w-2 bg-gray-500"
                }`}
              />
            ))}
          </div>
        )}

        {/* left / right text */}
        {(slides[current]?.leftText || slides[current]?.rightText) && (
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-10 md:mt-14">
            {slides[current]?.leftText && (
              <div className="flex-1">
                <p className="text-gray-300 text-base md:text-lg leading-8 md:leading-10">
                  {slides[current].leftText}
                </p>
              </div>
            )}
            {slides[current]?.leftText && slides[current]?.rightText && (
              <div className="hidden md:block w-px bg-[#3C2323]" />
            )}
            {slides[current]?.rightText && (
              <div className="flex-1">
                <p className="text-gray-300 text-base md:text-lg leading-8 md:leading-10">
                  {slides[current].rightText}
                </p>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
