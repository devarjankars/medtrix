"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const inputClass =
  "w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#E1251B] focus:ring-1 focus:ring-[#E1251B]/40 transition-all duration-200";

function ContactInner() {
  const searchParams = useSearchParams();

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", subject: searchParams.get("subject") || "", message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://medtrixhealthcare.com/corporate-websiteapi/api/contact/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Something went wrong. Please try again.");

      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  const headerRef  = useRef(null);
  const formRef    = useRef(null);
  const mapRef     = useRef(null);
  const cardsRef   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.1 }
      );
      gsap.fromTo(
        formRef.current?.querySelectorAll(".form-field"),
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.09, ease: "power3.out",
          scrollTrigger: { trigger: formRef.current, start: "top 80%", once: true } }
      );
      gsap.fromTo(mapRef.current,
        { opacity: 0, x: 60, scale: 0.97 },
        { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: mapRef.current, start: "top 80%", once: true } }
      );
      gsap.fromTo(
        cardsRef.current?.querySelectorAll(".office-card"),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 85%", once: true } }
      );
    });
    return () => ctx.revert();
  }, []);



  /* ── LinkedIn SVG icon — bg changes to red on hover ── */
let _liIconCount = 0;
function LinkedInIcon({ className = "w-12 h-12", hovered = false }) {
  const id = useRef(`li-${_liIconCount++}`);
  const filterId = `filter-${id.current}`;
  const gradientId = `gradient-${id.current}`;
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* background circle */}
      <rect
        width="64" height="64" rx="32"
        fill={hovered ? "#E1251B" : "#272727"}
        style={{ transition: "fill 0.25s ease" }}
      />
      {/* "IN" logo mark — always white */}
      <path
        d="M24.8165 20.2832C23.392 20.2832 22.2363 21.4369 22.2363 22.8615C22.2363 24.2861 23.391 25.4665 24.8146 25.4665C26.2382 25.4665 27.3948 24.2861 27.3948 22.8615C27.3948 21.4379 26.2411 20.2832 24.8165 20.2832ZM37.4047 27.118C35.2381 27.118 33.9985 28.251 33.4038 29.3778H33.3409V27.4212H29.0711V41.7639H33.5202V34.664C33.5202 32.7933 33.6614 30.9854 35.9764 30.9854C38.2582 30.9854 38.2915 33.1185 38.2915 34.7823V41.7639H42.7349V33.886C42.7349 30.0312 41.9118 27.118 37.4047 27.118ZM22.591 27.4212V41.7639H27.0439V27.4212H22.591Z"
        fill="white"
      />
    </svg>
  );
}

/* ── Hover LinkedIn button — bg turns red, size stays fixed ── */
function LinkedInButton({ href, size = "w-12 h-12" }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`shrink-0 block ${size}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <LinkedInIcon className="w-full h-full" hovered={hovered} />
    </a>
  );
}

  return (
    <section className="w-[90%] md:w-[80%] mx-auto py-16 md:py-24 overflow-hidden">

      {/* Header */}
      <div ref={headerRef} className="mb-12 md:mb-16 opacity-0">
        <div className="relative inline-block rounded-full max-w-fit p-px mb-6"
          style={{ background: "linear-gradient(to right, rgba(225,37,27,0.5), transparent 43%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)" }}>
          <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-white bg-[#0c0606] px-5 py-2 rounded-full">
            Contact Us
          </span>
        </div>
        
      </div>

      
   <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-14 items-start">


        {/* LEFT: Form */}
        <div ref={formRef} className="w-full">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center py-24 gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#E1251B]/15 flex items-center justify-center mb-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E1251B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-white text-lg md:text-2xl font-bold">Message sent!</h3>
              <p className="text-zinc-400 text-sm max-w-xs">We'll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-field flex flex-col gap-1.5 opacity-0">
                  <label className="text-xs font-semibold uppercase tracking-[2px] text-zinc-400">
                    Name <span className="text-[#E1251B]">*</span>
                  </label>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your name" className={inputClass} />
                </div>
                <div className="form-field flex flex-col gap-1.5 opacity-0">
                  <label className="text-xs font-semibold uppercase tracking-[2px] text-zinc-400">
                    Company
                  </label>
                  <input name="company" value={formData.company} onChange={handleChange} type="text" placeholder="Your company" className={inputClass} />
                
                 
                </div>
              </div>

              <div className="form-field flex flex-col gap-1.5 opacity-0">
                <label className="text-xs font-semibold uppercase tracking-[2px] text-zinc-400">
                  Email <span className="text-[#E1251B]">*</span>
                </label>
                <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="you@company.com" className={inputClass} />
              </div>

              <div className="form-field flex flex-col gap-1.5 opacity-0">
                <label className="text-xs font-semibold uppercase tracking-[2px] text-zinc-400">
                  Subject <span className="text-[#E1251B]">*</span>
                </label>
                <input required name="subject" value={formData.subject} onChange={handleChange} type="text" placeholder="How can we help?" className={inputClass} />
              </div>

              <div className="form-field flex flex-col gap-1.5 opacity-0">
                <label className="text-xs font-semibold uppercase tracking-[2px] text-zinc-400">
                  Message <span className="text-[#E1251B]">*</span>
                </label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us about your project..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Error message */}
              {error && (
                <p className="text-[#E1251B] text-sm">{error}</p>
              )}

              <div className="form-field opacity-0">
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.04 } : {}}
                  whileTap={!loading ? { scale: 0.97 } : {}}
                  transition={{ type: "spring", stiffness: 380, damping: 22 }}
                  className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-sm overflow-hidden cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, #E1251B 0%, #ff4d42 100%)",
                    boxShadow: "0 0 20px rgba(225,37,27,0.4)",
                  }}
                >
                  <motion.span className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)", backgroundSize: "200% 100%" }}
                    animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                    transition={{ duration: 2.5, ease: "linear", repeat: Infinity, repeatDelay: 1.5 }}
                  />
                  {loading ? (
                    <>
                      <svg className="animate-spin relative z-10" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                      <span className="relative z-10">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Send Message</span>
                      <motion.span
                        className="relative z-10"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
                      >→</motion.span>
                    </>
                  )}
                </motion.button>
              </div>

            </form>
          )}
        </div>

        {/* ── RIGHT: Map + info (wider column, sticky on desktop) ── */}
        <div className="flex flex-col gap-6 order-first lg:order-last lg:top-24" ref={cardsRef}>

          {/* Map */}
          <div
            ref={mapRef}
            className="relative rounded-2xl overflow-hidden border border-white/10 opacity-0"
          >
            {/* MAP CONTAINER */}
            <div className="relative w-full overflow-hidden mb-4 mt-4">
              <div className="relative w-full">
                <img
                  src="https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/blankMap.png"
                  alt="Office Locations Map"
                  className="w-full h-auto object-contain opacity-80 hidden md:block"
                />
                <img
                  src="https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/blankMap.png"
                  alt="Office Locations Map"
                  className="w-full h-auto object-contain opacity-80 block md:hidden"
                />

                {/* USA indicator */}
                <div className="hidden md:flex flex-col items-center absolute top-[40%] left-[20%] -translate-x-1/2 -translate-y-1/2 group z-10">
                  <div className="mt-3 p-4 rounded-xl shadow-2xl max-w-[260px] transition-all duration-300 group-hover:border-red-500">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[16px] text-red-500 font-bold px-2 py-0.5 rounded">USA</span>
                    </div>
                    <p className="text-[16px] text-gray-300 leading-relaxed font-medium">
                      100 Somerset Corporate Boulevard 2nd Floor, Suite 130, Bridgewater, NJ 08807
                    </p>
                  </div>
                </div>

                {/* India indicator */}
                <div className="hidden md:flex flex-col items-center absolute top-[60%] left-[70%] -translate-x-1/2 -translate-y-1/2 group z-10">
                  <div className="mt-3 p-4 rounded-xl shadow-2xl max-w-[260px] transition-all duration-300 group-hover:border-red-500">
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[16px] text-red-500 font-bold px-2 py-0.5 rounded">IND</span>
                    </div>
                    <p className="text-[16px] text-gray-300 leading-relaxed font-medium">
                      1st Floor, 574/A, 1st Main, Sector 6, HSR Layout, Bangalore 560 102
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile address cards */}
            <div className="grid grid-cols-1 gap-4 mt-2 mb-4 px-4 md:hidden">
              <div className="p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-bold tracking-wider text-red-400">USA</h4>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  100 Somerset Corporate Boulevard<br />
                  2nd Floor, Suite 130,<br />
                  Bridgewater, NJ 08807
                </p>
              </div>
              <div className="p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-bold tracking-wider text-red-400">IND</h4>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  1st Floor, 574/A, 1st Main,<br />
                  Sector 6, HSR Layout,<br />
                  Bangalore 560 102
                </p>
              </div>
            </div>
          </div>

          {/* divder line */}

          <div className="border-t border-[#1e1e1e]" />

          {/* linked in and instagram logo */}

          <div className="flex items-center gap-4">
            <motion.div
              
              className="office-card opacity-0 inline-flex items-center gap-3 text-zinc-400 ">
              <LinkedInButton href="https://www.linkedin.com/company/medtrix-healthcare" size="w-[45px] h-[45px] lg:w-[45px] lg:h-[45px] hover:scale-105" />
              <span>LinkedIn</span>
            </motion.div>
            {/* <motion.a href="https://www.instagram.com/medtrixhealthcare" target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -3 }} transition={{ duration: 0.2 }}
              className="office-card opacity-0 inline-flex items-center gap-3 text-zinc-400 hover:text-white text-sm transition-colors group">
              <span className="w-8 h-8 rounded-full bg-[#E1251B]/10 border border-[#E1251B]/20 flex items-center justify-center shrink-0 group-hover:bg-[#E1251B]/20 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E1251B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="4" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              Instagram
            </motion.a> */}
          </div>




          

          {/* Office cards */}
          {/* <div className("grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { city: "Bangalore", country: "India",   address: "Medtrix Healthcare Pvt. Ltd.", icon: "🇮🇳" },
              { city: "New Jersey", country: "USA",    address: "100 Somerset Corporate Boulevard 2nd Floor, Suite 130, Bridgewater, NJ 08807",   icon: "🇺🇸" },
            ].map((office) => (
              <motion.div key={office.city} whileHover={{ y: -3 }} transition={{ duration: 0.25 }}
                className="office-card opacity-0 bg-[#0f0f0f] border border-[#1e1e1e] rounded-xl p-5 flex flex-col gap-1">
                <span className="text-xl mb-1">{office.icon}</span>
                <h4 className="text-white font-semibold text-sm">{office.city}, {office.country}</h4>
                <p className="text-zinc-500 text-xs">{office.address}</p>
              </motion.div>
            ))}
          </div> */}

          {/* Email */}
          {/* <motion.a href="mailto:info@medtrixhealthcare.com"
            whileHover={{ x: 4 }} transition={{ duration: 0.2 }}
            className="office-card opacity-0 inline-flex items-center gap-3 text-zinc-400 hover:text-white text-sm transition-colors group">
            <span className="w-8 h-8 rounded-full bg-[#E1251B]/10 border border-[#E1251B]/20 flex items-center justify-center shrink-0 group-hover:bg-[#E1251B]/20 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E1251B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            info@medtrixhealthcare.com
          </motion.a> */}

        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <Suspense>
      <ContactInner />
    </Suspense>
  );
}
