"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const footerData = [
  { title: "About Us", href: "/about", links: [] },
  {
    title: "Services",
    href: "/services",
    links: [
      { label: "Commercial Solutions", href: "/services/Commercial_Solutions" },
      { label: "Medical Affairs", href: "/services/medical-affairs" },
      { label: "Digital & Innovation", href: "/services/digital-innovation" },
      { label: "Cipher", href: "/cipher" },

    ],
  },
  {
    title: "Our Work",
    href: "/our-work",
    links: [
      { label: "Strategy & Consulting", href: "/our-work/strategy-and-consulting" },
      { label: "Commercial Solutions", href: "/our-work/commercial-solutions" },
      { label: "Medical Affairs", href: "/our-work/medical-affairs" },
      { label: "Digital & Innovation", href: "/our-work/digital-innovation" },
    ],
  },
  { title: "News & Updates", href: "/news", links: [] },
  { title: "Life @ Medtrix", href: "/life-at-medtrix", links: [] },
   
];

export default function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(total > 0 && scrolled / total >= 0.2);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    import("@/components/LenisProvider").then(({ lenisInstance }) => {
      if (lenisInstance) lenisInstance.scrollTo(0, { duration: 1.2 });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  return (
    <footer className="bg-black">
      <div className="mx-auto w-[90%] py-8 md:py-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-[1.2fr_0.75fr_1.15fr_1.15fr_1.45fr_1.15fr] lg:gap-8">

          <div className="col-span-2 flex items-start sm:col-span-1">
            <Link href="/">
              <img src="https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo.png" alt="Medtrix" className="w-[150px] object-contain md:w-[180px]" />
            </Link>
          </div>

          {footerData.map((section, index) => (
            <div
              key={index}
              className={index === 0 ? "col-span-2 sm:col-span-1" : ""}
            >
              <Link href={section.href} className="group relative mb-3 inline-block text-[20px] font-semibold text-white md:mb-4 md:text-xl">
                {section.title}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 group-hover:w-full bg-white/50 rounded-full transition-all duration-300" />
              </Link>
              <div className="flex flex-col gap-2 md:gap-3">
                {section.links.map((link) => (
                  <Link key={link.href} href={link.href} className="group relative w-fit text-[15px] text-gray-400 transition-colors duration-200 hover:text-white sm:text-xs md:text-[15px]">
                    {link.label}
                    <span className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-white/40 rounded-full transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>
          ))}

        </div>

        <div className="mt-2 md:mt-8 grid grid-cols-2 gap-y-4 border-t border-[#222222] pt-5 lg:flex lg:items-center lg:justify-between lg:pt-8">
          <p className="mt-2 col-span-2 text-left text-[13px] text-gray-500 lg:col-span-1 lg:text-sm">© 2026. All rights reserved. Medtrix Healthcare</p>
          <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-3 text-[13px] lg:flex lg:items-center lg:gap-6 lg:text-sm">
            <Link href="https://www.linkedin.com/company/medtrix-healthcare/" className="text-gray-400 hover:text-white transition-colors duration-200" target="_blank" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy#cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
              Cookies Policy
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
            className="fixed bottom-8 right-6 z-50 cursor-pointer flex flex-col items-center gap-2"
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
