"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { pauseLenis, resumeLenis } from "@/components/LenisProvider";

export default function ApplyModal({ jobTitle, onClose }) {
  const [form, setForm]        = useState({ firstName: "", lastName: "", email: "", phone: "", country: "", message: "" });
  const [resume, setResume]    = useState(null);
  const [submitted, setSubmit] = useState(false);
  const [loading, setLoading]  = useState(false);
  const [error, setError]      = useState(null);
  const [mounted, setMounted]  = useState(false);
  const scrollRef              = useRef(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;

    // Pause Lenis completely
    pauseLenis();

    // Lock body scroll with CSS only — no position:fixed
    const prev = document.body.style.cssText;
    document.body.style.overflow = "hidden";
    document.body.style.height   = "100%";

    return () => {
      document.body.style.cssText = prev;
      resumeLenis();
    };
  }, [mounted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError(null);
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    fd.append("jobTitle", jobTitle);
    if (resume) fd.append("resume", resume);
    try {
      const res  = await fetch("/api/apply", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong.");
      setSubmit(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputCls   = "w-full bg-[#1a1a1a] border border-[#333] rounded-xl h-12 px-4 text-white text-sm focus:outline-none focus:border-[#FF3838] transition-colors placeholder:text-zinc-600";
  const selectCls  = "w-full md:w-22 bg-[#1a1a1a] border border-[#333] rounded-xl h-12 px-3 text-white text-sm focus:outline-none focus:border-[#FF3838] transition-colors cursor-pointer";

  const countries = [
    "Afghanistan","Albania","Algeria","Argentina","Australia","Austria","Bangladesh","Belgium",
    "Brazil","Canada","Chile","China","Colombia","Croatia","Czech Republic","Denmark","Egypt",
    "Ethiopia","Finland","France","Germany","Ghana","Greece","Hungary","India","Indonesia",
    "Iran","Iraq","Ireland","Israel","Italy","Japan","Jordan","Kenya","Malaysia","Mexico",
    "Morocco","Netherlands","New Zealand","Nigeria","Norway","Pakistan","Peru","Philippines",
    "Poland","Portugal","Romania","Russia","Saudi Arabia","Singapore","South Africa",
    "South Korea","Spain","Sri Lanka","Sweden","Switzerland","Taiwan","Thailand","Turkey",
    "Ukraine","United Arab Emirates","United Kingdom","United States","Vietnam",
  ];

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="bd"
        className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        style={{ zIndex: 9998 }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Centering shell */}
      <div
        key="shell"
        className="fixed inset-0 flex items-center justify-center p-3 sm:p-6"
        style={{ zIndex: 9999 }}
        onClick={onClose}
      >
        {/* Panel */}
        <motion.div
          className="relative w-full bg-[#111] rounded-2xl shadow-2xl flex flex-col"
          style={{ maxWidth: 860, height: "88vh" }}
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 28, scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full border border-[#333] text-gray-400 hover:text-white hover:border-[#FF3838] transition-colors cursor-pointer">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          {/* Scrollable body — this is the ONLY scroll area */}
          <div
            ref={scrollRef}
            style={{ overflowY: "scroll", WebkitOverflowScrolling: "touch", overscrollBehavior: "contain", flex: 1 }}
            className="rounded-2xl p-5 sm:p-8 md:p-10"
          >
            <p className="text-white text-xl sm:text-3xl font-semibold pr-10 mb-1">{jobTitle}</p>
            <p className="text-zinc-500 text-sm mb-8">Fill in the details below to apply.</p>

            {submitted ? (
              <div className="flex flex-col items-center text-center py-16 gap-3">
                <div className="w-14 h-14 rounded-full bg-[#FF3838]/15 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF3838" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p className="text-white font-semibold text-lg mt-2">Application Submitted!</p>
                <p className="text-zinc-500 text-sm">We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">

                {/* Resume */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-2 font-medium">Resume / CV</label>
                  <div className="border border-dashed border-[#FF3838]/50 rounded-xl p-5 text-center hover:border-[#FF3838] transition-colors">
                    <input type="file" id="resume" accept=".pdf,.doc,.docx" className="hidden"
                      onChange={(e) => setResume(e.target.files?.[0] ?? null)} />
                    <label htmlFor="resume" className="cursor-pointer flex flex-col items-center gap-1">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF3838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                      </svg>
                      <span className="text-white text-sm"><span className="text-[#FF3838]">Click to upload</span> or drag & drop</span>
                      <span className="text-zinc-600 text-xs">PDF, DOC, DOCX — 16 MB max</span>
                      {resume && <span className="text-green-400 text-xs mt-1">{resume.name}</span>}
                    </label>
                  </div>
                </div>

                {/* Personal info */}
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Personal Information</h3>
                  <p className="text-zinc-500 text-xs mb-5">Fields marked <span className="text-[#FF3838]">*</span> are required.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1.5">First name <span className="text-[#FF3838]">*</span></label>
                      <input required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className={inputCls} placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1.5">Last name <span className="text-[#FF3838]">*</span></label>
                      <input required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className={inputCls} placeholder="Doe" />
                    </div>
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1.5">Email <span className="text-[#FF3838]">*</span></label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="john@example.com" />
                    </div>
                    <div className="flex items-center gap-2">
                      
                      <select value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className={selectCls}>
                        <option value="" disabled>+91</option>
                        {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                         <label className="block text-xs text-zinc-400 mb-1.5">Phone number</label>
                      <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} placeholder="000 000 0000" />
                   
                    </div>
                    <div className="sm:col-span-1">
                      <label className="block text-xs text-zinc-400 mb-1.5">Phone number</label>
                      <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} placeholder="000 000 0000" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Message</h3>
                  <p className="text-zinc-500 text-xs mb-4">Tell us why you're a great fit.</p>
                  <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl p-4 text-white text-sm resize-none focus:outline-none focus:border-[#FF3838] transition-colors placeholder:text-zinc-600"
                    placeholder="I'm excited about this opportunity because..." />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2 pb-6">
                  <button type="button" onClick={onClose}
                    className="px-8 h-11 rounded-full border border-[#333] text-zinc-400 hover:text-white hover:border-zinc-500 font-medium text-sm transition-colors cursor-pointer">
                    Cancel
                  </button>
                  <button type="submit" disabled={loading}
                    className="px-8 h-11 rounded-full bg-[#FF3838] text-white font-semibold text-sm disabled:opacity-60 cursor-pointer hover:bg-[#e02e2e] transition-colors">
                    {loading ? "Submitting..." : "Submit Application"}
                  </button>
                </div>

              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
