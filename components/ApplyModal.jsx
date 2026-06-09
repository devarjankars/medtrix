"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ApplyModal({ jobTitle, onClose }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("firstName", form.firstName);
    formData.append("lastName", form.lastName);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("message", form.message);
    formData.append("jobTitle", jobTitle);
    if (resume) formData.append("resume", resume);

    try {
      const res = await fetch("/api/apply", { method: "POST", body: formData });
      const data = await res.json();
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full bg-[#111] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#E1251B] transition-colors duration-200";

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Modal */}
        <motion.div
          className="relative w-full max-w-lg bg-[#0d0d0d] border border-[#1f1f1f] rounded-2xl p-8 shadow-2xl"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <h2 className="text-white text-xl font-bold mb-1">Apply Now</h2>
          <p className="text-gray-500 text-sm mb-6 truncate">{jobTitle}</p>

          {status === "success" ? (
            <motion.div
              className="text-center py-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="w-14 h-14 rounded-full bg-[#E1251B]/10 border border-[#E1251B]/30 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E1251B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="text-white font-semibold text-lg mb-1">Application Submitted!</p>
              <p className="text-gray-400 text-sm">We'll be in touch soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input required className={inputClass} placeholder="First Name" value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                <input required className={inputClass} placeholder="Last Name" value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
              </div>
              <input required type="email" className={inputClass} placeholder="Email" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <input className={inputClass} placeholder="Phone" value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <textarea rows={3} className={`${inputClass} resize-none`} placeholder="Message (optional)" value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })} />

              {/* Resume upload */}
              <label className="flex flex-col gap-1 cursor-pointer">
                <span className="text-gray-500 text-xs uppercase tracking-widest">Resume</span>
                <div className="border border-dashed border-[#2a2a2a] hover:border-[#E1251B] rounded-xl px-4 py-3 text-sm text-gray-500 transition-colors duration-200">
                  {resume ? (
                    <span className="text-white">{resume.name}</span>
                  ) : (
                    <span>Click to upload .pdf, .doc, .docx</span>
                  )}
                  <input type="file" accept=".pdf,.doc,.docx" className="hidden"
                    onChange={(e) => setResume(e.target.files?.[0] ?? null)} />
                </div>
              </label>

              {status === "error" && (
                <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                className="relative w-full rounded-full py-3 text-white font-semibold text-sm overflow-hidden cursor-pointer disabled:opacity-60"
                style={{ background: "linear-gradient(135deg, #E1251B 0%, #ff4d42 100%)", boxShadow: "0 0 18px rgba(225,37,27,0.4)" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)", backgroundSize: "200% 100%" }}
                  animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                  transition={{ duration: 2.5, ease: "linear", repeat: Infinity, repeatDelay: 1.5 }}
                />
                <span className="relative z-10">{loading ? "Submitting..." : "Submit Application"}</span>
              </motion.button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
