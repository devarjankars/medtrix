import { useRef, useEffect, useState } from 'react';
import BeanBackground from '@/components/BeanBackground';
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { numeric: 3200, suffix: "+", label: "Projects Delivered" },
  { numeric: 200000, suffix: "+", label: "HCPs Engaged" },
  { numeric: 100000, suffix: "+", label: "Assets Created" },
];

/* Format number with commas */
function fmt(n) {
  return n.toLocaleString("en-US");
}

/* ── Animated counter card ── */
function StatCard({ numeric, suffix, label, onRef }) {
  const [count, setCount] = useState(0);
  const triggered = useRef(false);
  const innerRef   = useRef(null);

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: innerRef.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;
        const duration = 1600;
        const steps    = 60;
        const stepTime = duration / steps;
        let current    = 0;
        const inc      = numeric / steps;
        const timer    = setInterval(() => {
          current += inc;
          if (current >= numeric) {
            setCount(numeric);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, stepTime);
      },
    });
    return () => st.kill();
  }, [numeric]);

  return (
    <div
      ref={(el) => {
        innerRef.current = el;
        onRef?.(el);
      }}
      className="relative overflow-hidden rounded-2xl border border-[#222222] p-8 lg:p-10 flex flex-col min-h-[200px] bg-gradient-to-b from-[rgba(137,124,124,0.26)] to-[rgba(35,32,32,0.45)]"
    >
      <div className="w-0 h-1 bg-[#FF2F2F] rounded-full mb-3 stat-line" />
      <h3 className="text-[50px] font-bold text-white tracking-tight leading-none">
        {fmt(count)}{suffix}
      </h3>
      <p className="text-[20px] lg:text-base text-gray-500 font-medium tracking-wide mt-2">
        {label}
      </p>
    </div>
  );
}

export default function Animation() {
  const cardRefs  = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slide cards up from bottom with stagger
      gsap.fromTo(
        cardRefs.current.filter(Boolean),
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Grow accent lines
      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".stat-line"),
        { width: 0 },
        {
          width: 32,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
          delay: 0.3,
        }
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="overflow-hidden relative h-auto" style={{ isolation: 'isolate' }}>
      <BeanBackground
        className="absolute hidden lg:block inset-0 pointer-events-none z-0"
        style={{ pointerEvents: 'none' }}
      />

      <section className="relative px-0 lg:px-0 py-[50px] lg:py-[100px] overflow-hidden z-10 w-[90%] md:w-[80%] mx-auto">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-14 items-center flex flex-col-reverse lg:grid">

          {/* LEFT - empty on desktop, tablet animation on mobile */}
          <div className="w-full h-[280px] lg:h-auto relative">
            <div className="block lg:hidden absolute inset-0">
              <BeanBackground className="absolute inset-0" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative z-10">
            <motion.h2
              className="text-[26px] lg:text-[65px] leading-none font-bold text-[#F2F2F2] mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
              }}
            >
              {["The", "Power", "of"].map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.25em]"
                  variants={{
                    hidden: { opacity: 0, y: 32, rotateX: -20 },
                    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  style={{ transformOrigin: "bottom center" }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                className="inline-block text-[#FF2F2F]"
                variants={{
                  hidden: { opacity: 0, y: 32, rotateX: -20 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                }}
                style={{ transformOrigin: "bottom center" }}
              >
                One
              </motion.span>
            </motion.h2>

            <p className="text-[#7f818B] text-[14px] lg:text-[19px] lg:leading-[2]">
              MedTrix is driven by the philosophy of the Power of One—the belief that when diverse minds align around a single goal, they can achieve greater outcomes. It is our unified way of working—bringing people, expertise, and technology together as a unified force to <span className="text-white font-semibold">Catalyze</span> how our clients engage their stakeholders and how physicians deliver patient care.
            </p>

            <Link href="/services/Commercial_Solutions">
              <motion.div
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 380, damping: 22 }}
                className="relative inline-flex w-fit items-center gap-2 px-8 py-4 mt-8 rounded-full text-[#F2F2F2] font-medium overflow-hidden cursor-pointer"
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
                <span className="relative z-10">Our Services</span>
              </motion.div>
            </Link>
          </div>

        </div>
      </section>

      <section ref={sectionRef} className="relative px-0 lg:px-0 lg:pb-[100px] pb-[50px] overflow-hidden isolate w-[90%] md:w-[80%] mx-auto mt-0 lg:mx-auto z-20">
        <div className="px-0 sm:px-6 lg:px-0 mb-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-20">
            {statsData.map((stat, index) => (
              <StatCard
                key={index}
                numeric={stat.numeric}
                suffix={stat.suffix}
                label={stat.label}
                onRef={(el) => (cardRefs.current[index] = el)}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[40px] rounded-full" style={{ background: 'radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)' }} />
    </div>
  );
}
