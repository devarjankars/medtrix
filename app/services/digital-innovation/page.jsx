"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import DynamicHeader from "@/components/DynamicHeader";

const cardContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const strategyParagraphs = [
  "Innovation, for us, has never been just about technology but about solving real problems in meaningful ways. It has been a defining characteristic for us since our beginning. It drove us to do more with less and enable novel experiences for clients and patients.",
  "Our strongest partnerships with pharmaceutical companies have been built through innovative solutions built to achieve unique objectives and address challenges specific to a particular client or set of circumstances.",
];

const innovationData = [
  { img: "/stories1.png", title: "AbbVie-Integrated Engagement Platforms" },
  { img: "/stories2.png", title: "Allergan-Immersive Learning" },
  { img: "/stories3.png", title: "Sanofi-Augmented Reality Experience @ Tandem" },
  { img: "/stories4.png", title: "Merck-Keytruda HCP Engagement" },
  { img: "/stories5.png", title: "Celltrion Virtual Reality Experience @DDW" },
  { img: "/stories6.png", title: "The Patient Case Player" },
];

function Page() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });

  const pillRef = useRef(null);
  const pillInView = useInView(pillRef, { once: true, amount: 0.5 });

  return (
    <main className="relative w-[90%] md:w-[80%] mx-auto min-h-screen">
      <DynamicHeader
        tagText="DIGITAL & INNOVATION"
        title="Innovation that creates meaningful impact"
        paragraphs={strategyParagraphs}
        graphicSrc="/servicesHeader.png"
      />

      <section className="relative bg-black py-20 px-10 md:px-0 overflow-hidden">
        <div className="mb-40">

          {/* Section pill */}
          <motion.div
            ref={pillRef}
            className="mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={pillInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="inline-flex px-6 py-3 rounded-full text-white tracking-[4px] text-sm font-bold uppercase border border-[#2A2525]"
              style={{
                background:
                  "linear-gradient(to right, rgba(255,255,255,0.2), rgba(0,0,0,0.4))",
              }}
            >
              EXPLORE OUR INNOVATION CASE STUDIES
            </div>
          </motion.div>

          {/* Cards grid — single observer, stagger via variants */}
          <motion.div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={cardContainer}
            initial="hidden"
            animate={gridInView ? "visible" : "hidden"}
          >
            {innovationData.map((card, index) => (
              <motion.div
                key={index}
                variants={cardItem}
                className="bg-[#141414] border border-[#2C2C2C] rounded-[34px] overflow-hidden transition-colors duration-300 hover:border-red-500/40"
                whileHover={{ y: -5, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 280, damping: 24 }}
              >
                <div className="p-4 pb-0">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-70 object-cover rounded-3xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-[22px] font-medium leading-snug">
                    {card.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Glow */}
        <motion.div
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-10 rounded-full"
          initial={{ opacity: 0, scaleX: 0.4 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background:
              "radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)",
          }}
        />
      </section>
    </main>
  );
}

export default Page;
