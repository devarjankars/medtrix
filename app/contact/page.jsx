"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const inputClass =
  "w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#E1251B] focus:ring-1 focus:ring-[#E1251B]/40 transition-all duration-200";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
  };

  return (
    <section className="w-[90%] md:w-[80%] mx-auto py-16 md:py-24">

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="mb-12 md:mb-16"
      >
        <div
          className="relative inline-block rounded-full max-w-fit p-px mb-6"
          style={{
            background:
              "linear-gradient(to right, rgba(225,37,27,0.5), transparent 43%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)",
          }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-white bg-[#0c0606] px-5 py-2 rounded-full">
            Contact Us
          </span>
        </div>
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          Let's build something <br className="hidden md:block" />
          <span className="text-[#E1251B]">remarkable</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-base md:text-lg max-w-xl">
          Have a question or want to work with us? We'd love to hear from you.
        </p>
      </motion.div>

      {/* ── Two-column layout ── */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
      >

        {/* ── LEFT: Form ── */}
        <motion.div variants={itemVariants}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease }}
              className="flex flex-col items-center justify-center text-center py-20 gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#E1251B]/15 flex items-center justify-center mb-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E1251B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-white text-2xl font-bold">Message sent!</h3>
              <p className="text-zinc-400 text-sm max-w-xs">We'll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Name + Company row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div variants={itemVariants} className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-[2px] text-zinc-400">Name</label>
                  <input required type="text" placeholder="Your name" className={inputClass} />
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-[2px] text-zinc-400">Company</label>
                  <input type="text" placeholder="Your company" className={inputClass} />
                </motion.div>
              </div>

              {/* Email */}
              <motion.div variants={itemVariants} className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-[2px] text-zinc-400">Email</label>
                <input required type="email" placeholder="you@company.com" className={inputClass} />
              </motion.div>

              {/* Subject */}
              <motion.div variants={itemVariants} className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-[2px] text-zinc-400">Subject</label>
                <input type="text" placeholder="How can we help?" className={inputClass} />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants} className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-[2px] text-zinc-400">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className={`${inputClass} resize-none`}
                />
              </motion.div>

              {/* Submit */}
              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 380, damping: 22 }}
                  className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-sm overflow-hidden cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #E1251B 0%, #ff4d42 100%)",
                    boxShadow: "0 0 20px rgba(225,37,27,0.4)",
                  }}
                >
                  {/* shimmer */}
                  <motion.span
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                    transition={{ duration: 2.5, ease: "linear", repeat: Infinity, repeatDelay: 1.5 }}
                  />
                  <span className="relative z-10">Send Message</span>
                  <motion.span
                    className="relative z-10"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>

            </form>
          )}
        </motion.div>

        {/* ── RIGHT: Map + info ── */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6 order-first lg:order-last">

          {/* Map image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-white/8"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* desktop map */}
            <img
              src="/map.png"
              alt="Medtrix office locations"
              className="w-full h-auto hidden md:block"
            />
            {/* mobile map */}
            <img
              src="/mobile_map.png"
              alt="Medtrix office locations"
              className="w-full h-auto block md:hidden"
            />
            {/* subtle red glow overlay */}
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{ boxShadow: "inset 0 0 40px rgba(225,37,27,0.08)" }}
            />
          </motion.div>

          {/* Office info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                city: "Bangalore",
                country: "India",
                address: "Medtrix Healthcare Pvt. Ltd.",
                icon: "🇮🇳",
              },
              {
                city: "New Jersey",
                country: "USA",
                address: "Medtrix Healthcare Inc.",
                icon: "🇺🇸",
              },
            ].map((office) => (
              <motion.div
                key={office.city}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="bg-[#0f0f0f] border border-[#1e1e1e] rounded-xl p-5 flex flex-col gap-1"
              >
                <span className="text-xl mb-1">{office.icon}</span>
                <h4 className="text-white font-semibold text-sm">{office.city}, {office.country}</h4>
                <p className="text-zinc-500 text-xs">{office.address}</p>
              </motion.div>
            ))}
          </div>

          {/* Email */}
          <motion.a
            href="mailto:info@medtrixhealthcare.com"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-3 text-zinc-400 hover:text-white text-sm transition-colors group"
          >
            <span className="w-8 h-8 rounded-full bg-[#E1251B]/10 border border-[#E1251B]/20 flex items-center justify-center shrink-0 group-hover:bg-[#E1251B]/20 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E1251B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            info@medtrixhealthcare.com
          </motion.a>

        </motion.div>
      </motion.div>

    </section>
  );
}
