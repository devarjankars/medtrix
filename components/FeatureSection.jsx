"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ── Single container variant — one IntersectionObserver drives everything ────
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Animated glow divider ────────────────────────────────────────────────────
function GlowDivider() {
  return (
    <motion.div
      className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-15 rounded-full"
      initial={{ opacity: 0, scaleX: 0.4 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background:
          "radial-gradient(ellipse at bottom, rgba(225,37,27,0.35) 0%, transparent 80%)",
      }}
    />
  );
}

export default function FeatureSection({
  tagText = "BRAND AND BUSINESS",
  imageSrc = "/path-to-your-image.jpg",
  imageAlt = "Feature image",
  paragraphs = [],
  buttons = [],
  imagePosition = "left",
}) {
  const isImageLeft = imagePosition === "left";

  // One ref + one observer for the whole section
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <section className="relative w-full text-white py-5 md:py-4 overflow-x-hidden">
      <motion.div
        ref={ref}
        className="relative z-10"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Tag pill */}
        <motion.div variants={item} className="mb-8">
          <div
            className="inline-flex px-6 py-3 rounded-full text-white tracking-[4px] text-sm font-bold uppercase border border-[#2A2525]"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.2), rgba(0,0,0,0.4))",
            }}
          >
            {tagText}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Image side */}
          <motion.div
            variants={item}
            className={isImageLeft ? "lg:order-1" : "lg:order-2"}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full lg:w-[70%] h-full object-contain object-top"
              />
            </motion.div>
          </motion.div>

          {/* Text side */}
          <div
            className={`flex flex-col gap-6 ${
              isImageLeft ? "lg:order-2" : "lg:order-1"
            }`}
          >
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                variants={item}
                className="text-[#A6A6A6] text-base md:text-lg leading-relaxed font-light w-full lg:w-[80%]"
              >
                {text}
              </motion.p>
            ))}

            {buttons.length > 0 && (
              <motion.div variants={item} className="flex flex-wrap gap-4 pt-4">
                {buttons.map((btn, index) => {
                  const isPrimary = btn.type === "primary";
                  return (
                    <motion.button
                      key={index}
                      onClick={btn.onClick}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 380, damping: 22 }}
                      className={`px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-colors duration-300 ${
                        isPrimary
                          ? "bg-[#E1251B] text-white hover:bg-[#ff3329] shadow-lg shadow-[#e1251b33]"
                          : "bg-[#1c1616] text-[#b3b3b3] border border-[#3a2f2f] hover:text-white hover:bg-[#282020]"
                      }`}
                    >
                      {btn.label}
                    </motion.button>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      <GlowDivider />
    </section>
  );
}
