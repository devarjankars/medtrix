"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { pauseLenis, resumeLenis } from "@/components/LenisProvider";

/* ── Country data ─────────────────────────────────────────────────────── */
const COUNTRIES = [
  { name: "Afghanistan",          code: "AF", dial: "+93",  flag: "🇦🇫" },
  { name: "Albania",              code: "AL", dial: "+355", flag: "🇦🇱" },
  { name: "Algeria",              code: "DZ", dial: "+213", flag: "🇩🇿" },
  { name: "Argentina",            code: "AR", dial: "+54",  flag: "🇦🇷" },
  { name: "Australia",            code: "AU", dial: "+61",  flag: "🇦🇺" },
  { name: "Austria",              code: "AT", dial: "+43",  flag: "🇦🇹" },
  { name: "Bangladesh",           code: "BD", dial: "+880", flag: "🇧🇩" },
  { name: "Belgium",              code: "BE", dial: "+32",  flag: "🇧🇪" },
  { name: "Brazil",               code: "BR", dial: "+55",  flag: "🇧🇷" },
  { name: "Canada",               code: "CA", dial: "+1",   flag: "🇨🇦" },
  { name: "Chile",                code: "CL", dial: "+56",  flag: "🇨🇱" },
  { name: "China",                code: "CN", dial: "+86",  flag: "🇨🇳" },
  { name: "Colombia",             code: "CO", dial: "+57",  flag: "🇨🇴" },
  { name: "Croatia",              code: "HR", dial: "+385", flag: "🇭🇷" },
  { name: "Czech Republic",       code: "CZ", dial: "+420", flag: "🇨🇿" },
  { name: "Denmark",              code: "DK", dial: "+45",  flag: "🇩🇰" },
  { name: "Egypt",                code: "EG", dial: "+20",  flag: "🇪🇬" },
  { name: "Ethiopia",             code: "ET", dial: "+251", flag: "🇪🇹" },
  { name: "Finland",              code: "FI", dial: "+358", flag: "🇫🇮" },
  { name: "France",               code: "FR", dial: "+33",  flag: "🇫🇷" },
  { name: "Germany",              code: "DE", dial: "+49",  flag: "🇩🇪" },
  { name: "Ghana",                code: "GH", dial: "+233", flag: "🇬🇭" },
  { name: "Greece",               code: "GR", dial: "+30",  flag: "🇬🇷" },
  { name: "Hungary",              code: "HU", dial: "+36",  flag: "🇭🇺" },
  { name: "India",                code: "IN", dial: "+91",  flag: "🇮🇳" },
  { name: "Indonesia",            code: "ID", dial: "+62",  flag: "🇮🇩" },
  { name: "Iran",                 code: "IR", dial: "+98",  flag: "🇮🇷" },
  { name: "Iraq",                 code: "IQ", dial: "+964", flag: "🇮🇶" },
  { name: "Ireland",              code: "IE", dial: "+353", flag: "🇮🇪" },
  { name: "Israel",               code: "IL", dial: "+972", flag: "🇮🇱" },
  { name: "Italy",                code: "IT", dial: "+39",  flag: "🇮🇹" },
  { name: "Japan",                code: "JP", dial: "+81",  flag: "🇯🇵" },
  { name: "Jordan",               code: "JO", dial: "+962", flag: "🇯🇴" },
  { name: "Kenya",                code: "KE", dial: "+254", flag: "🇰🇪" },
  { name: "Malaysia",             code: "MY", dial: "+60",  flag: "🇲🇾" },
  { name: "Mexico",               code: "MX", dial: "+52",  flag: "🇲🇽" },
  { name: "Morocco",              code: "MA", dial: "+212", flag: "🇲🇦" },
  { name: "Netherlands",          code: "NL", dial: "+31",  flag: "🇳🇱" },
  { name: "New Zealand",          code: "NZ", dial: "+64",  flag: "🇳🇿" },
  { name: "Nigeria",              code: "NG", dial: "+234", flag: "🇳🇬" },
  { name: "Norway",               code: "NO", dial: "+47",  flag: "🇳🇴" },
  { name: "Pakistan",             code: "PK", dial: "+92",  flag: "🇵🇰" },
  { name: "Peru",                 code: "PE", dial: "+51",  flag: "🇵🇪" },
  { name: "Philippines",          code: "PH", dial: "+63",  flag: "🇵🇭" },
  { name: "Poland",               code: "PL", dial: "+48",  flag: "🇵🇱" },
  { name: "Portugal",             code: "PT", dial: "+351", flag: "🇵🇹" },
  { name: "Romania",              code: "RO", dial: "+40",  flag: "🇷🇴" },
  { name: "Russia",               code: "RU", dial: "+7",   flag: "🇷🇺" },
  { name: "Saudi Arabia",         code: "SA", dial: "+966", flag: "🇸🇦" },
  { name: "Singapore",            code: "SG", dial: "+65",  flag: "🇸🇬" },
  { name: "South Africa",         code: "ZA", dial: "+27",  flag: "🇿🇦" },
  { name: "South Korea",          code: "KR", dial: "+82",  flag: "🇰🇷" },
  { name: "Spain",                code: "ES", dial: "+34",  flag: "🇪🇸" },
  { name: "Sri Lanka",            code: "LK", dial: "+94",  flag: "🇱🇰" },
  { name: "Sweden",               code: "SE", dial: "+46",  flag: "🇸🇪" },
  { name: "Switzerland",          code: "CH", dial: "+41",  flag: "🇨🇭" },
  { name: "Taiwan",               code: "TW", dial: "+886", flag: "🇹🇼" },
  { name: "Thailand",             code: "TH", dial: "+66",  flag: "🇹🇭" },
  { name: "Turkey",               code: "TR", dial: "+90",  flag: "🇹🇷" },
  { name: "Ukraine",              code: "UA", dial: "+380", flag: "🇺🇦" },
  { name: "United Arab Emirates", code: "AE", dial: "+971", flag: "🇦🇪" },
  { name: "United Kingdom",       code: "GB", dial: "+44",  flag: "🇬🇧" },
  { name: "United States",        code: "US", dial: "+1",   flag: "🇺🇸" },
  { name: "Vietnam",              code: "VN", dial: "+84",  flag: "🇻🇳" },
];

/* ── Custom country picker ────────────────────────────────────────────── */
function CountryPicker({ value, onChange }) {
  const [open, setOpen]       = useState(false);
  const [search, setSearch]   = useState("");
  const wrapRef               = useRef(null);
  const searchRef             = useRef(null);

  const selected = COUNTRIES.find((c) => c.code === value) ?? null;
  const filtered = search.trim()
    ? COUNTRIES.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.dial.includes(search) ||
        c.code.toLowerCase().includes(search.toLowerCase())
      )
    : COUNTRIES;

  /* close on outside click */
  useEffect(() => {
    if (!open) return;
    function handle(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open]);

  /* focus search when opened */
  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
    else setSearch("");
  }, [open]);

  return (
    <div ref={wrapRef} className="relative shrink-0" style={{ minWidth: 110 }}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-1.5 bg-[#1a1a1a] border border-[#333] rounded-xl h-12 px-3 text-white text-sm focus:outline-none focus:border-[#FF3838] transition-colors cursor-pointer w-full"
      >
        {selected ? (
          <>
            <span className="text-base leading-none">{selected.flag}</span>
            {/* <span className="text-zinc-300 font-medium">{selected.code}</span> */}
            <span className="text-zinc-500">{selected.dial}</span>
          </>
        ) : (
          <span className="text-zinc-500 text-xs">Country</span>
        )}
        <svg
          className="ml-auto shrink-0 text-zinc-500"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s" }}
          width="12" height="12" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>

      {/* Dropdown list */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-[calc(100%+6px)] z-[10000] w-64 bg-[#1e1e1e] border border-[#333] rounded-xl shadow-2xl flex flex-col"
            style={{ maxHeight: 260 }}
          >
            {/* Search */}
            <div className="p-2 border-b border-[#2a2a2a]">
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country…"
                className="w-full bg-[#111] border border-[#333] rounded-lg px-3 py-2 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF3838] transition-colors"
              />
            </div>

            {/* Options — scrollable */}
            <div className="overflow-y-auto" style={{ flex: 1 }}>
              {filtered.length === 0 ? (
                <p className="text-zinc-500 text-xs text-center py-4">No results</p>
              ) : (
                filtered.map((c) => (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => { onChange(c.code); setOpen(false); }}
                    className={`flex items-center gap-3 w-full px-3 py-2.5 text-sm text-left hover:bg-[#2a2a2a] transition-colors ${
                      value === c.code ? "bg-[#FF3838]/10 text-[#FF3838]" : "text-zinc-300"
                    }`}
                  >
                    <span className="text-base shrink-0">{c.flag}</span>
                    <span className="flex-1 truncate">{c.name}</span>
                    <span className="text-zinc-500 text-xs shrink-0">{c.dial}</span>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Main modal ───────────────────────────────────────────────────────── */
export default function ApplyModal({ jobTitle, onClose }) {
  const [form, setForm]        = useState({ firstName: "", lastName: "", email: "", phone: "", countryCode: "", message: "" });
  const [resume, setResume]    = useState(null);
  const [submitted, setSubmit] = useState(false);
  const [loading, setLoading]  = useState(false);
  const [error, setError]      = useState(null);
  const [mounted, setMounted]  = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => { setMounted(true); }, []);

  /* Detect user region via Intl API (no network call) */
  useEffect(() => {
    if (!mounted) return;
    try {
      const tz   = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const locale = navigator.language || "";
      // crude but effective: match by locale region tag e.g. "en-IN" → "IN"
      const regionTag = locale.split("-")[1]?.toUpperCase();
      if (regionTag && COUNTRIES.find((c) => c.code === regionTag)) {
        setForm((p) => ({ ...p, countryCode: regionTag }));
      }
    } catch (_) {}
  }, [mounted]);

  /* Lock body scroll, pause lenis */
  useEffect(() => {
    if (!mounted) return;
    pauseLenis();
    const prev = document.body.style.cssText;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.cssText = prev;
      resumeLenis();
    };
  }, [mounted]);

  function validate() {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required.";
    if (!form.lastName.trim()) errs.lastName = "Last name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = "Enter a valid email address.";
    }
    if (form.phone.trim() && !/^[0-9]{7,15}$/.test(form.phone.trim())) {
      errs.phone = "Enter a valid phone number (7–15 digits).";
    }
    if (!resume) {
      errs.resume = "Please upload your resume.";
    } else {
      const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      const ext = resume.name.split(".").pop().toLowerCase();
      if (!allowed.includes(resume.type) && !["pdf","doc","docx"].includes(ext)) {
        errs.resume = "Only PDF, DOC, or DOCX files are allowed.";
      } else if (resume.size === 0) {
        errs.resume = "The file is empty. Please upload a valid resume.";
      } else if (resume.size > 16 * 1024 * 1024) {
        errs.resume = "File size exceeds 16 MB. Please upload a smaller file.";
      }
    }
    return errs;
  }

  const [serverMsg, setServerMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setFieldErrors(errs); return; }
    setFieldErrors({});
    setLoading(true);

    const selected = COUNTRIES.find((c) => c.code === form.countryCode);
    const fd = new FormData();
    fd.append("firstName", form.firstName);
    fd.append("lastName",  form.lastName);
    fd.append("email",     form.email);
    fd.append("phone",     `${selected?.dial ?? ""}${form.phone}`.trim());
    fd.append("jobTitle",  jobTitle);
    fd.append("message",   form.message);
    if (resume) fd.append("resume", resume);

    try {
      const res = await fetch("https://medtrixhealthcare.com/corporate-websiteapi/api/career/apply", {
        method: "POST",
        body: fd,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || "Something went wrong. Please try again.");
      setServerMsg(data.message || "");
      setSubmit(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputCls = (field) =>
    `w-full bg-[#1a1a1a] border ${fieldErrors[field] ? "border-[#FF3838]" : "border-[#333]"} rounded-xl h-12 px-4 text-white text-sm focus:outline-none focus:border-[#FF3838] transition-colors placeholder:text-zinc-600`;

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {/* Backdrop — no onClick, cannot dismiss by clicking outside */}
      <motion.div
        key="bd"
        className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        style={{ zIndex: 9998 }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      />

      {/* Centering wrapper */}
      <div
        key="shell"
        className="fixed inset-0 flex items-center justify-center p-3 sm:p-6"
        style={{ zIndex: 9999 }}
      >
        {/* Panel — flex column, fixed height, inner div scrolls */}
        <motion.div
          className="relative w-full bg-[#111] rounded-2xl shadow-2xl"
          style={{ maxWidth: 860, height: "88vh", display: "flex", flexDirection: "column" }}
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 28, scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        >
          {/* Close button — only way to dismiss */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full border border-[#333] text-gray-400 hover:text-white hover:border-[#FF3838] transition-colors cursor-pointer"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          {/*
            Scrollable body.
            — position:relative + overflow-y:auto on a flex-1 child is the
              reliable cross-browser pattern for scrollable modal content.
            — touch-action:pan-y lets mobile browsers handle swipe-to-scroll.
            — overscroll-behavior:contain stops the scroll from leaking to the page.
          */}
          <div
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            style={{
              flex: 1,
              minHeight: 0,
              overflowY: "auto",
              overscrollBehavior: "contain",
              WebkitOverflowScrolling: "touch",
              touchAction: "pan-y",
            }}
            className="rounded-2xl px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10"
          >
            {!submitted && <p className="text-white text-xl sm:text-3xl font-semibold pr-10 mb-2">{jobTitle}</p>}
            {!submitted && <p className="text-zinc-500 text-sm mb-8">Fill in the details below to apply.</p>}

            {submitted ? (
              <div className="flex flex-col items-start py-10 gap-5">
                <div className="w-14 h-14 rounded-full bg-[#FF3838]/15 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF3838" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div className="text-white text-base leading-relaxed space-y-4 max-w-xl">
                  <p>Hi <span className="font-semibold ">{form.firstName}</span>,</p>
                  {serverMsg ? (
                    <p>{serverMsg} for the{" "}
                        <span className="font-semibold text-white">{jobTitle}</span> position.</p>
                  ) : (
                    <>
                      <p>
                        Thank you for your interest in joining MedTrix Healthcare and for applying for the{" "}
                        <span className="font-semibold text-white">{jobTitle}</span> position.
                        We appreciate the time and effort you invested in your application and look forward to reviewing your profile.
                      </p>
                      <p>If your experience aligns with our current requirements, a member of our team will be in touch regarding the next steps.</p>
                    </>
                  )}
                  {/* <p className="text-zinc-400">Best regards,<br /><span className="text-white font-semibold">Team MedTrix Healthcare</span></p> */}
                </div>
                <button
                  onClick={onClose}
                  className="mt-4 px-8 h-11 rounded-full bg-[#FF3838] text-white font-semibold text-sm cursor-pointer hover:bg-[#e02e2e] transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">

                {/* Resume upload */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-2 font-medium">Resume / CV</label>
                  <div className={`border border-dashed ${fieldErrors.resume ? "border-[#FF3838]" : "border-[#FF3838]/50"} rounded-xl p-5 text-center hover:border-[#FF3838] transition-colors`}>
                    <input type="file" id="resume" accept=".pdf,.doc,.docx" className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0] ?? null;
                        if (file) {
                          const allowed = ["application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
                          const ext = file.name.split(".").pop().toLowerCase();
                          if (!allowed.includes(file.type) && !["pdf","doc","docx"].includes(ext)) {
                            setFieldErrors((p) => ({ ...p, resume: "Only PDF, DOC, or DOCX files are allowed." }));
                            setResume(null); e.target.value = ""; return;
                          }
                          if (file.size === 0) {
                            setFieldErrors((p) => ({ ...p, resume: "The file is empty. Please upload a valid resume." }));
                            setResume(null); e.target.value = ""; return;
                          }
                          if (file.size > 16 * 1024 * 1024) {
                            setFieldErrors((p) => ({ ...p, resume: "File size exceeds 16 MB. Please upload a smaller file." }));
                            setResume(null); e.target.value = ""; return;
                          }
                        }
                        setResume(file);
                        setFieldErrors((p) => ({ ...p, resume: undefined }));
                      }} />
                    <label htmlFor="resume" className="cursor-pointer flex flex-col items-center gap-1">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF3838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                      </svg>
                      <span className="text-white text-sm"><span className="text-[#FF3838]">Click to upload</span> or drag & drop</span>
                      <span className="text-zinc-600 text-xs">PDF, DOC, DOCX — 16 MB max</span>
                      {resume && <span className="text-green-400 text-xs mt-1">{resume.name}</span>}
                      {fieldErrors.resume && <span className="text-[#FF3838] text-xs mt-1 block">{fieldErrors.resume}</span>}
                    </label>
                  </div>
                </div>

                {/* Personal info */}
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Personal Information</h3>
                  <p className="text-zinc-500 text-xs mb-5">Fields marked<span className="text-[#FF3838]">*</span> are required.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>
                      <label className="block text-xs text-zinc-200 mb-1.5 font-normal">First name<span className="text-[#FF3838]">*</span></label>
                      <input value={form.firstName} onChange={(e) => { setForm({ ...form, firstName: e.target.value }); setFieldErrors((p) => ({ ...p, firstName: undefined })); }} className={inputCls("firstName")} placeholder="John" />
                      {fieldErrors.firstName && <p className="text-[#FF3838] text-xs mt-1">{fieldErrors.firstName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs text-zinc-200 mb-1.5 font-normal">Last name<span className="text-[#FF3838]">*</span></label>
                      <input value={form.lastName} onChange={(e) => { setForm({ ...form, lastName: e.target.value }); setFieldErrors((p) => ({ ...p, lastName: undefined })); }} className={inputCls("lastName")} placeholder="Doe" />
                      {fieldErrors.lastName && <p className="text-[#FF3838] text-xs mt-1">{fieldErrors.lastName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs text-zinc-400 mb-1.5">Email<span className="text-[#FF3838]">*</span></label>
                      <input type="email" value={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }); setFieldErrors((p) => ({ ...p, email: undefined })); }} className={inputCls("email")} placeholder="john@example.com" />
                      {fieldErrors.email && <p className="text-[#FF3838] text-xs mt-1">{fieldErrors.email}</p>}
                    </div>

                    {/* Phone + country picker */}
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1.5">Phone number</label>
                      <div className="flex gap-2">
                        <CountryPicker value={form.countryCode} onChange={(code) => setForm({ ...form, countryCode: code })} />
                        <input type="tel" value={form.phone} onChange={(e) => { setForm({ ...form, phone: e.target.value }); setFieldErrors((p) => ({ ...p, phone: undefined })); }} className={inputCls("phone")} placeholder="0000000000" />
                      </div>
                      {fieldErrors.phone && <p className="text-[#FF3838] text-xs mt-1">{fieldErrors.phone}</p>}
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
