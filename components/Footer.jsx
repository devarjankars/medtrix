"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const footerData = [
  {
    title: "Services",
    href: "/services/Commercial_Solutions",
    links: [
      { label: "Commercial Solutions", href: "/services/Commercial_Solutions" },
      { label: "Medical Affairs", href: "/services/medical-affairs" },
      { label: "Digital Innovation", href: "/services/digital-innovation" },
      { label: "AI Catalysts", href: "/services/ai-catalysts" },
      { label: "Strategy & Consulting", href: "/services/Strategy-Consulting" },
    ],
  },
  { title: "Our Work", href: "/our-work", links: [] },
  { title: "News & Updates", href: "/news", links: [] },
  { title: "Life @ Medtrix", href: "/life-at-medtrix", links: [] },
   
];

export default function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (footerRef.current) obs.observe(footerRef.current);
    return () => obs.disconnect();
  }, []);

  function scrollToTop() {
    import("@/components/LenisProvider").then(({ lenisInstance }) => {
      if (lenisInstance) lenisInstance.scrollTo(0, { duration: 1.2 });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  return (
    <footer ref={footerRef} className="bg-black">
      <div className="w-[90%] md:w-[80%] mx-auto py-4 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12">

          <div className="col-span-2 lg:col-span-1 flex lg:justify-self-start items-start">
            <a href="/">
              <img src="https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo.png" alt="Medtrix" className="w-[180px] object-contain" />
            </a>
          </div>

          {footerData.map((section, index) => (
            <div key={index}>
              <Link href={section.href} className="group inline-block text-white text-lg md:text-2xl font-normal mb-6 relative">
                {section.title}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 group-hover:w-full bg-white/50 rounded-full transition-all duration-300" />
              </Link>
              <div className="flex flex-col gap-5">
                {section.links.map((link) => (
                  <Link key={link.href} href={link.href} className="group relative w-fit text-gray-400 text-base transition-colors duration-200 hover:text-white">
                    {link.label}
                    <span className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-white/40 rounded-full transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>
          ))}

        </div>

        <div className="border-t border-[#222222] pt-8 mt-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <p className="text-center text-gray-500 text-sm">© 2026 Medtrix Healthcare. All rights reserved.</p>
          <div className="flex gap-6 mt-4 items-center">
            <Link href="https://www.linkedin.com/company/medtrix-healthcare/" className="text-gray-400 hover:text-white transition-colors duration-200" target="_blank" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
            <Link href="/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Back to top — fixed bottom-right, only when footer is in view */}
      <AnimatePresence>
        {visible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            whileHover="hover"
            className="fixed bottom-[20%] right-6 z-50 cursor-pointer flex flex-col items-center gap-2"
          >
            {/* Vertical dashed track */}
            <motion.span
              className="w-px h-12 rounded-full"
              style={{ background: "linear-gradient(to top, rgba(225,37,27,0.8), transparent)" }}
              initial={{ scaleY: 0, originY: 1 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            />

            {/* Main button */}
            <motion.span
              className="relative flex items-center justify-center w-12 h-12 rounded-full"
              style={{
                background: "linear-gradient(135deg, #E1251B 0%, #ff4d42 100%)",
                boxShadow: "0 0 20px rgba(225,37,27,0.55)",
              }}
              variants={{
                hover: { scale: 1.15, boxShadow: "0 0 36px rgba(225,37,27,0.85)" },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 16 }}
            >
              {/* Rotating outer ring */}
              <motion.span
                className="absolute inset-[-4px] rounded-full border-2 border-dashed border-red-400/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, ease: "linear", repeat: Infinity }}
              />
              {/* Pulse ring */}
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{ background: "rgba(225,37,27,0.3)" }}
                animate={{ scale: [1, 1.7, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
              />
              {/* Shimmer */}
              <motion.span
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.22) 50%, transparent 65%)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                transition={{ duration: 2, ease: "linear", repeat: Infinity, repeatDelay: 0.8 }}
              />
              {/* Arrow bouncing */}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="40" height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative z-10"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 0.9, ease: "easeInOut", repeat: Infinity }}
              >
                <polyline points="18 15 12 9 6 15" />
              </motion.svg>
            </motion.span>

            {/* Label that slides in on hover */}
            <motion.span
              className="text-[10px] font-bold uppercase tracking-[2px] text-red-400"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
