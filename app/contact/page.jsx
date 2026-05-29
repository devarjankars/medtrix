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
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", subject: "", message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("YOUR_API_ENDPOINT_HERE", {
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

  return (
    <section className="w-[90%] md:w-[80%] mx-auto py-16 md:py-24">

      {/* Header */}
      <div ref={headerRef} className="mb-12 md:mb-16 opacity-0">
        <div className="relative inline-block rounded-full max-w-fit p-px mb-6"
          style={{ background: "linear-gradient(to right, rgba(225,37,27,0.5), transparent 43%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)" }}>
          <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-white bg-[#0c0606] px-5 py-2 rounded-full">
            Contact Us
          </span>
        </div>
        {/* <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          Let's build something <br className="hidden md:block" />
          <span className="text-[#E1251B]">remarkable</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-base md:text-lg max-w-xl">
          Have a question or want to work with us? We'd love to hear from you.
        </p> */}
      </div>

      {/* Two-column layout */}
   <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-14 items-start">


        {/* LEFT: Form */}
        <div ref={formRef}>
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
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-5">

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
            className="relative rounded-2xl overflow-hidden border border-white/10 opacity-0 "
          >
            <img
              src="/map.png"
              alt="Medtrix office locations"
              className="w-full hidden lg:block  object-contain  md:block "
            />
            <img
              src="/mobile_map.png"
              alt="Medtrix office locations"
              className="w-full h-auto block lg:hidden"
            />
            {/* animated pulse dot — Bangalore */}
            <div className="absolute hidden md:flex items-center justify-center" style={{ bottom: "38%", left: "67%" }}>
              {/* <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E1251B] opacity-60" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E1251B]" />
              </span> */}
            </div>
            {/* pulse — New Jersey */}
            <div className="absolute hidden md:flex items-center justify-center" style={{ bottom: "52%", left: "24%" }}>
              {/* <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E1251B] opacity-60" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E1251B]" />
              </span> */}
            </div>
          </div>

          {/* divder line */}

          <div className="border-t border-[#1e1e1e]" />

          {/* linked in and instagram logo */}

          <div className="flex items-center gap-4">
            <motion.a href="https://www.linkedin.com/company/medtrix-healthcare" target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -3 }} transition={{ duration: 0.2 }}
              className="office-card opacity-0 inline-flex items-center gap-3 text-zinc-400 hover:text-white text-m transition-colors group">
              <span className="w-12 h-12 rounded-full   flex items-center justify-center shrink-0  transition-colors">
                   <Image
                              src="/linkdin.png"
                              alt="LinkedIn"
                              width={80}
                              height={80}
                              className="object-contain w-[60px] h-[60px] lg:w-[48px] lg:h-[48px] cursor-pointer shrink-0"
                              loading="lazy"
                            />
              </span>
              LinkedIn
            </motion.a>
     
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
