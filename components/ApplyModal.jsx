"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

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
      if (!res.ok) throw new Error(data.message || "Something went wrong.");
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bg-[#121212] overflow-y-auto"
        style={{ inset: 0, zIndex: 9999 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <div className="relative w-full md:w-[80%] mx-auto p-8 md:p-12 min-h-screen">

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-500 hover:text-white transition-colors cursor-pointer hover:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Job title */}
          <p className="text-[#A1A1A1] text-4xl mb-4 truncate">{jobTitle}</p>
          <p className="mb-10">Choose an option to autocomplete your application. You can still fill your profile manually.</p>

          {submitted ? (
            <motion.div
              className="flex flex-col items-center justify-center text-center py-10 gap-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-16 h-16 rounded-full bg-[#FF3838]/15 flex items-center justify-center mb-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF3838" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="text-white font-semibold text-xl">Application Submitted!</p>
              <p className="text-[#A1A1A1] text-sm">We'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Upload Resume */}
              <div>
                <div className="border border-dashed border-[#FF3838] rounded-xl p-5 text-center">
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => setResume(e.target.files?.[0] ?? null)}
                  />
                  <label htmlFor="resume" className="cursor-pointer flex flex-col items-center">
                    <p className="text-[24px] md:text-xl text-white font-medium">
                      <span className="text-[#FF3838]">Choose a file</span> or drop it here
                    </p>
                    <p className="text-[#6D6D6D] mt-2">16MB size limit</p>
                    {resume && (
                      <p className="text-green-500 mt-4">{resume.name}</p>
                    )}
                  </label>
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <h3 className="text-white text-[25px] md:text-[30px] font-semibold">
                  Personal information
                </h3>
                <p className="text-[#A1A1A1] mt-2">Fields marked with * are required.</p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <label className="block text-white mb-2">
                      First name <span className="text-[#FF3838]">*</span>
                    </label>
                    <input
                      required
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full bg-transparent border border-[#404040] rounded-lg h-[56px] px-4 text-white focus:outline-none focus:border-[#FF3838] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">
                      Last name <span className="text-[#FF3838]">*</span>
                    </label>
                    <input
                      required
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full bg-transparent border border-[#404040] rounded-lg h-[56px] px-4 text-white focus:outline-none focus:border-[#FF3838] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-3">
                  <div>
                    <label className="block text-white mb-3">
                      Email <span className="text-[#FF3838]">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-transparent border border-[#404040] rounded-lg h-[56px] px-4 text-white focus:outline-none focus:border-[#FF3838] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">
                      Phone number <span className="text-[#FF3838]">*</span>
                    </label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-transparent border border-[#404040] rounded-lg h-[56px] px-4 text-white focus:outline-none focus:border-[#FF3838] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <h3 className="text-white text-[25px] md:text-[30px] font-semibold">
                  Message to the Hiring Team
                </h3>
                <p className="text-[#A1A1A1] mt-2">
                  Let the company know about your interest working there
                </p>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full mt-8 bg-transparent border border-[#404040] rounded-lg p-4 text-white resize-none focus:outline-none focus:border-[#FF3838] transition-colors"
                />
              </div>

              {error && <p className="text-red-500">{error}</p>}

              {/* Buttons */}
              <div className="flex justify-center gap-5 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-10 h-[56px] rounded-full bg-[#3A3A3A] text-white font-semibold cursor-pointer hover:bg-[#4a4a4a] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-10 h-[56px] rounded-full bg-[#FF3838] text-white font-semibold disabled:opacity-60 cursor-pointer hover:bg-[#e02e2e] transition-colors"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </div>

            </form>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
