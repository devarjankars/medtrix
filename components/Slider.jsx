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

  const isInView = useInView(sectionRef, {
    amount: 0.4,
  });

  useEffect(() => {
    if (!autoPlay || !isInView || slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, delay);

    return () => clearInterval(timer);
  }, [isInView, autoPlay, delay, slides.length]);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white overflow-x-hidden"
    >
      <div className="mx-auto">

        <div
          className="
            relative
            overflow-hidden
            touch-pan-y
            rounded-[40px]
            border border-[#812626]
            bg-[#090202]
            h-[520px]
            overflow-x-hidden

    [&_.swiper-button-prev]:hidden
    [&_.swiper-button-next]:hidden
          "
        >
          <motion.div
            drag={false}
            animate={{
              x: `-${current * 100}%`,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex h-full"
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="
                  min-w-full
                  flex
                  justify-center
                  items-center
                "
              > 
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
        </div>

        {/* Bottom dots kept */}
        <div className="flex justify-center gap-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300
                ${
                  current === index
                    ? "w-12 bg-white"
                    : "w-2 bg-gray-500"
                }
              `}
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-12 mt-14">

          <div className="flex-1">
            <p className="text-gray-300 text-lg leading-10">
              {slides[current]?.leftText}
            </p>
          </div>

          <div className="hidden md:block w-px bg-[#3C2323]" />

          <div className="flex-1">
            <p className="text-gray-300 text-lg leading-10">
              {slides[current]?.rightText}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}