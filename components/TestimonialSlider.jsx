"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TestimonialSlider({
  items = [],
  autoPlay = true,
  delay = 3500,
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, delay);

    return () => clearInterval(timer);
  }, [items.length, autoPlay, delay]);

  return (
    <section className="overflow-hidden py-15">
      <div className="relative  mx-auto overflow-hidden">

        <motion.div
          animate={{
            x: `calc(50% - ${
              active * 760 + 380
            }px)`,
          }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
          className="flex gap-8 w-max"
        >
          {items.map((item, index) => {
            const isActive = index === active;

            return (
              <div
                key={index}
                className={`
                transition-all duration-700 shrink-0

                w-[320px]
                md:w-[520px]
                lg:w-[720px]

                rounded-[36px]
                p-8 lg:p-8
                border

                ${
                  isActive
                    ? "border-red-500 bg-black opacity-100 scale-100"
                    : "border-[#2d2d2d] bg-[#151515] opacity-40 scale-90"
                }
                `}
              >
                <p className="text-white text-lg lg:text-[20px] leading-8 lg:leading-[58px]">
                  {item.text}
                </p>

                <div className="mt-12 lg:mt-20">
                  <h2 className="text-white text-1xl lg:text-3xl font-semibold">
                    {item.role}
                  </h2>

                  <p className="text-gray-400 mt-2 text-lg">
                    {item.location}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}