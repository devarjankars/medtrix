"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, forwardRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const links = [
  {
    label: "Services",
    href: null,
    items: [
      { label: "Commercial Solutions", href: "/services/Commercial_Solutions" },
      { label: "Medical Affairs",       href: "/services/medical-affairs" },
      { label: "Digital Innovation",  href: "/services/digital-innovation" },
      { label: "AI Catalysts",          href: "/services/ai-catalysts" },
      { label: "Strategy & Consulting", href: "/services/Strategy-Consulting" },
    ],
  },
  { label: "Our Work",      href: "/our-work" },
  { label: "News & Updates", href: "/news" },
  { label: "Life @ Medtrix",  href: "/life-at-medtrix" },
  { label: "Contact Us",    href: "/contact", button: true },
];

/* ── Desktop nav item ── */
const NavItem = forwardRef(function NavItem({ label, href, items, pathname, button }, ref) {
  const [open, setOpen]     = useState(false);
  const hasItems            = items && items.length > 0;
  const dropdownRef         = useRef(null);
  const itemsRef            = useRef([]);
  const MLR_PARENT = "/services/ai-catalysts";
  const isChildActive       = hasItems && items.some((i) => {
    const clean = pathname.replace(/\/$/, "");
    return clean === i.href || (clean === "/MLR-Catalyst" && i.href === MLR_PARENT);
  });
  const isActive            = !hasItems && pathname.replace(/\/$/, "") === href;

  /* Dropdown open: stagger items in */
  useEffect(() => {
    if (open && dropdownRef.current) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -10, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: "power3.out" }
      );
      gsap.fromTo(
        itemsRef.current.filter(Boolean),
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.18, stagger: 0.045, ease: "power2.out", delay: 0.05 }
      );
    }
  }, [open]);

  if (button) {
    return (
      <li ref={ref}>
        <Link href={href} className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-full text-white text-sm font-semibold px-5 py-2 cursor-pointer"
          style={{ background: "linear-gradient(135deg, #E1251B 0%, #ff4d42 100%)", boxShadow: "0 0 14px rgba(225,37,27,0.35)" }}>
          <motion.span
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)", backgroundSize: "200% 100%" }}
            animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
            transition={{ duration: 2.5, ease: "linear", repeat: Infinity, repeatDelay: 1.5 }}
          />
          <span className="relative z-10">{label}</span>
        </Link>
      </li>
    );
  }

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => hasItems && setOpen(true)}
      onMouseLeave={() => hasItems && setOpen(false)}
    >
      {/* Trigger */}
      {hasItems ? (
        <button
          className={`group relative flex items-center gap-1 text-md font-medium py-1 transition-colors duration-200 cursor-pointer ${
            isChildActive ? "" : "text-white/80 hover:text-white"
          }`}
        >
          {label}
          <svg
            xmlns="http://www.w3.org/2000/svg" width="13" height="13"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            className={`transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          {/* animated underline */}
          <span
            className={`absolute bottom-0 left-0 h-[1.5px] rounded-full transition-all duration-300 ${
              isChildActive
                ? "w-full bg-[#E1251B]"
                : "w-0 group-hover:w-full bg-white/60"
            }`}
          />
        </button>
      ) : (
        <Link
          href={href}
          className={`group relative flex items-center gap-1 text-sm font-medium py-1 transition-colors duration-200 ${
            isActive ? "" : "text-white/80 hover:text-white"
          }`}
        >
          {label}
          {/* animated underline */}
          <span
            className={`absolute bottom-0 left-0 h-[1.5px] rounded-full transition-all duration-300 ${
              isActive
                ? "w-full bg-[#E1251B]"
                : "w-0 group-hover:w-full bg-white/60"
            }`}
          />
        </Link>
      )}

      {/* Dropdown */}
      {hasItems && open && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-1/2 -translate-x-1/2 z-50"
          style={{ paddingTop: "10px" }}
        >
          {/* arrow tip */}
          {/* <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#161616] border-l border-t border-white/10 z-10" /> */}

          <ul className="relative w-56 bg-[#161616]/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] py-2 list-none overflow-hidden">
            {items.map((item, i) => {
              const isActive = pathname.replace(/\/$/, "") === item.href ||
                (pathname.replace(/\/$/, "") === "/MLR-Catalyst" && item.href === "/services/ai-catalysts");
              return (
                <li key={item.href} ref={(el) => (itemsRef.current[i] = el)}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`group/item relative flex items-center gap-3 px-4 py-2.5 text-md leading-snug transition-all duration-150 ${
                      isActive
                        ? "bg-red-500 text-white font-semibold"
                        : "text-white/65 hover:text-white hover:bg-white/8"
                    }`}
                  >
                    {/* left accent bar */}
                    {/* <span
                      className={`shrink-0 w-[3px] h-4 rounded-full transition-all duration-200 ${
                        isActive
                          ? "bg-red-400 shadow-[0_0_8px_rgba(225,37,27,0.7)]"
                          : "bg-white/1 group-hover/item:bg-white/40"
                      }`}
                    /> */}
                    <span className={`tracking-wide ${isActive ? "font-semibold" : "font-normal"}`}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
});

/* ── Mobile menu ── */
function MobileMenu({ pathname, onClose, openSection, setOpenSection }) {
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.28, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div
      ref={menuRef}
      className="md:hidden bg-[#000000] px-6 pb-6 flex flex-col gap-1 min-h-screen relative"
    >
      {links.map(({ label, href, items, button }) => {
        const hasItems    = items && items.length > 0;
        const isOpen       = openSection === label;
        const isChildActive = hasItems && items.some((i) => {
          const clean = pathname.replace(/\/$/, "");
          return clean === i.href || (clean === "/MLR-Catalyst" && i.href === "/services/ai-catalysts");
        });

        if (button) {
          return (
            <div key={label} className="fixed bottom-20 left-0 right-0 flex justify-center px-6 z-50">
              <Link
                href={href}
                onClick={() => { setOpenSection(null); onClose(); }}
                className="relative inline-flex items-center justify-center overflow-hidden rounded-full text-white text-lg font-bold px-8 py-2.5 text-center w-full"
                style={{ background: "linear-gradient(135deg, #E1251B 0%, #ff4d42 100%)", boxShadow: "0 0 14px rgba(225,37,27,0.35)" }}
              >
                <motion.span
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)", backgroundSize: "200% 100%" }}
                  animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                  transition={{ duration: 2.5, ease: "linear", repeat: Infinity, repeatDelay: 1.5 }}
                />
                <span className="relative z-10">{label}</span>
              </Link>
            </div>
          );
        }

        return (
          <div key={label} className="border-b border-white/6">
            <div
              className="flex items-center justify-between py-4 cursor-pointer w-full"
              onClick={() => hasItems ? setOpenSection(isOpen ? null : label) : null}
            >
              {hasItems ? (
                <span className={`text-base font-semibold ${isOpen || isChildActive ? "text-red-500" : "text-white/75"}`}>
                  {label}
                </span>
              ) : (
                <Link
                  href={href}
                  onClick={() => { setOpenSection(null); onClose(); }}
                  className={`text-base font-semibold w-full ${pathname.replace(/\/$/, "") === href ? "text-red-500" : "text-white/75"}`}
                >
                  {label}
                </Link>
              )}
              {hasItems && (
                <svg
                  xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className={`text-white/50 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              )}
            </div>

            {hasItems && isOpen && (
              <div className="flex flex-col p py-1 gap-1">
                {items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => { setOpenSection(label); onClose(); }}
                      className={`flex items-center gap-2 py-3 px-2 w-full text-lg font-light ${
                      (pathname.replace(/\/$/, "") === item.href || (pathname.replace(/\/$/, "") === "/MLR-Catalyst" && item.href === "/services/ai-catalysts")) ? "text-red-500" : "text-gray-500 hover:text-gray-200 transition-colors"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── Root Navbar ── */
export default function Navbar() {
  const pathname          = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef            = useRef(null);
  const linksRef          = useRef([]);

  /* Scroll: add frosted glass effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open (iOS safe) */
  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'scroll';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
    };
  }, [menuOpen]);

  /* Mount: stagger nav links in */
  useEffect(() => {
    if (linksRef.current.length) {
      gsap.fromTo(
        linksRef.current.filter(Boolean),
        { opacity: 0, y: -6 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, ease: "power2.out", delay: 0.1 }
      );
    }
  }, []);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
    const onResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "border-b border-white/5"
      }`}
      style={{
        background: scrolled
          ? "rgba(0,0,0,0.7)"
          : "rgba(0,0,0,0.5)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
      }}
    >
      <div
        className="w-[90%] md:w-[80%] mx-auto flex items-center justify-between"
        style={isDesktop ? { padding: scrolled ? '14px 0' : '26px 0', transition: 'padding 0.6s cubic-bezier(0.4,0,0.2,1)' } : { padding: '14px 0' }}
      >
        <a href="/">
          <img
            src="https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/logo.png"
            alt="Medtrix Logo"
            style={isDesktop ? { width: scrolled ? '130px' : '180px', transition: 'width 0.6s cubic-bezier(0.4,0,0.2,1)' } : { width: '130px' }}
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((link, i) => (
            <NavItem
              key={`desktop-${link.label}`}
              {...link}
              pathname={pathname}
              ref={(el) => (linksRef.current[i] = el)}
            />
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-white/80 hover:text-white transition-colors focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="11" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && <MobileMenu pathname={pathname} onClose={() => setMenuOpen(false)} openSection={openSection} setOpenSection={setOpenSection} />}
    </nav>
  );
}
