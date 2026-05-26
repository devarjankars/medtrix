"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  {
    label: "Services",
    href: null,
    items: [
      { label: "Strategy & Consulting", href: "/services/Strategy-Consulting" },
      { label: "Commercial Solutions", href: "/services/Commercial_Solutions" },
      { label: "Medical Affairs", href: "/services/medical-affairs" },
      { label: "Digital & Innovation", href: "/services/digital-innovation" },
      { label: "MedTrix AI Catalysts", href: "/services/ai-catalysts" },
    ],
  },
  { label: "Our Work", href: "/our-work" },
  { label: "News & Updates", href: "/news" },
  {
    label: "Careers",
    href: null,
    items: [
      { label: "Open Positions", href: "/careers/open-positions" },
      { label: "Life at Medtrix", href: "/careers/life-at-medtrix" },
    ],
  },
  { label: "Contact Us", href: "/contact", button: true },
];

function NavItem({ label, href, items, pathname, button }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const hasItems = items && items.length > 0;

  if (button) {
    return (
      <li>
        <Link
          href={href}
          className="bg-[#FF0000] hover:scale-105 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-transform"
        >
          {label}
        </Link>
      </li>
    );
  }

  return (
    <li
      className="relative"
      onMouseEnter={() => hasItems && setOpen(true)}
      onMouseLeave={() => hasItems && setOpen(false)}
      onClick={() => hasItems && setOpen(!open)}
    >
      {hasItems ? (
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`flex items-center gap-1 text-sm font-medium text-white border-b-2 pb-0.5 transition-all cursor-pointer ${hovered ? "border-white" : "border-transparent"}`}
        >
          {label}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      ) : (
        <Link
          href={href}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`flex items-center gap-1 text-sm font-medium text-white border-b-2 pb-0.5 transition-all ${hovered ? "border-white" : "border-transparent"}`}
        >
          {label}
        </Link>
      )}

      {hasItems && open && (
        <div className="absolute top-full left-0 z-50" style={{ paddingTop: "6px" }}>
          <ul className="w-48 bg-[#282828] rounded-lg shadow-lg py-1   list-none">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 text-sm transition-all  ${
                    pathname === item.href
                      ? ""
                      : "text-white border-transparent  hover:scale-105 "
                  }`}
                >
                  
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

function MobileMenu({ pathname }) {
  const [openSection, setOpenSection] = useState(null);

  return (
    <div className="md:hidden bg-[#111] px-6 pb-6 flex flex-col gap-1 min-h-screen">
      {links.map(({ label, href, items, button }) => {
        const hasItems = items && items.length > 0;
        const isOpen = openSection === label;

        if (button) {
          return (
            <Link key={label} href={href} className="mt-3 bg-[#FF0000] text-white text-lg font-bold px-6 py-2.5 rounded-full text-center transition-colors">
              {label}
            </Link>
          );
        }

        return (
          <div key={label}>
            <div
              className="flex items-center justify-between py-3  border-zinc-800 cursor-pointer"
              onClick={() => hasItems ? setOpenSection(isOpen ? null : label) : null}
            >
              {hasItems ? (
                <span className="text-lg font-bold text-white">{label}</span>
              ) : (
                <Link href={href} className="text-lg font-bold text-white">{label}</Link>
              )}
              {hasItems && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14" height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`text-white transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              )}
            </div>
            {hasItems && isOpen && (
              <div className="flex flex-col pl-4 py-1 gap-1">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2 py-2 text-lg font-bold ${
                      pathname === item.href ? "text-red-500" : "text-zinc-400 hover:scale-105 transition-transform"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0 text-lg font-bold" />
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

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#000] sticky top-0 z-50">
      <div className="w-[90%] md:w-[80%] mx-auto py-5 flex items-center justify-between">
        <Link href="/">
          <img src="/logo.png" alt="Medtrix Logo" width={150} />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 ">
          {links.map((link) => (
            <NavItem key={link.label} {...link} pathname={pathname} />
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && <MobileMenu pathname={pathname} />}
    </nav>
  );
}
