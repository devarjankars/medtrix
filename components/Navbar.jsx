"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, forwardRef } from "react";
import gsap from "gsap";

const links = [
  {
    label: "Services",
    href: null,
    items: [
      { label: "Commercial Solutions", href: "/services/Commercial_Solutions" },
      { label: "Medical Affairs",       href: "/services/medical-affairs" },
      { label: "Digital & Innovation",  href: "/services/digital-innovation" },
      { label: "AI Catalysts",          href: "/services/ai-catalysts" },
      { label: "Strategy & Consulting", href: "/services/Strategy-Consulting" },
    ],
  },
  { label: "Our Work",      href: "/our-work" },
  { label: "News & Updates", href: "/news" },
  { label: "Life@Medtrix",  href: "/life-at-medtrix" },
  { label: "Contact Us",    href: "/contact", button: true },
];

/* ── Desktop nav item ── */
const NavItem = forwardRef(function NavItem({ label, href, items, pathname, button }, ref) {
  const [open, setOpen]     = useState(false);
  const hasItems            = items && items.length > 0;
  const dropdownRef         = useRef(null);
  const itemsRef            = useRef([]);
  const isChildActive       = hasItems && items.some((i) => pathname === i.href);
  const isActive            = !hasItems && pathname === href;

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
        <Link
          href={href}
          className="relative inline-flex items-center gap-1.5 bg-[#E1251B] hover:bg-[#c41f17] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200 shadow-[0_0_18px_rgba(225,37,27,0.35)] hover:shadow-[0_0_26px_rgba(225,37,27,0.55)]"
        >
          {label}
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
            isActive ? "text-[#FFF]" : "text-white/80 hover:text-white"
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
              const isActive = pathname === item.href;
              return (
                <li key={item.href} ref={(el) => (itemsRef.current[i] = el)}>
                  <Link
                    href={item.href}
                    className={`group/item relative flex items-center gap-3 px-4 py-2.5 text-md leading-snug transition-all duration-150 ${
                      isActive
                        ? "text-[#FFF] bg-[#E1251B]"
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
function MobileMenu({ pathname }) {
  const [openSection, setOpenSection] = useState(null);
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
    <div className="md:hidden bg-[#000000] px-6 pb-6 flex flex-col gap-1 h-[100vh] relative">
      {links.map(({ label, href, items, button }) => {
        const hasItems = items && items.length > 0;
        const isOpen   = openSection === label;

        if (button) {
          return (
            <div key={label} className="flex justify-center mt-4">
              <Link href={href} className="bg-[#FF0000] absolute bottom-[120px] text-white text-lg font-bold px-8 py-2.5 rounded-full text-center transition-colors w-[90%] lg:w-auto">
                {label}
              </Link>
            </div>
          );
        }

        return (
          <div key={label} className="border-b border-white/6">
            <div
              className="flex items-center justify-between py-4 cursor-pointer"
              onClick={() => hasItems ? setOpenSection(isOpen ? null : label) : null}
            >
              {hasItems ? (
                <span className={`text-base font-semibold ${isOpen ? "text-white" : "text-white/75"}`}>
                  {label}
                </span>
              ) : (
                <Link
                  href={href}
                  className={`text-base font-semibold ${pathname === href ? "text-[#E1251B]" : "text-white/75"}`}
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
                    className={`flex items-center gap-2 py-2 text-lg font-light ${
                      pathname === item.href ? "text-red-500" : "text-gray-500 hover:text-gray-200 transition-colors"
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
  const [scrolled, setScrolled] = useState(false);
  const navRef            = useRef(null);
  const linksRef          = useRef([]);

  /* Scroll: add frosted glass effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  return (
    <nav className="w-full bg-[#000] fixed top-0 left-0 right-0 z-50">
      <div className="w-[90%] md:w-[80%] mx-auto py-5 flex items-center justify-between">
        <Link href="/">
          <img src="/logo.png" alt="Medtrix Logo" width={140} />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((link, i) => (
            <NavItem
              key={link.label}
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
      {menuOpen && <MobileMenu pathname={pathname} />}
    </nav>
  );
}
