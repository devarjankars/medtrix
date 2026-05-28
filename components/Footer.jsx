import Link from "next/link";

const footerData = [
  {
    title: "Services",
    href: "/services/Commercial_Solutions",
    links: [
      { label: "Commercial Solutions",  href: "/services/Commercial_Solutions" },
      { label: "Medical Affairs",        href: "/services/medical-affairs" },
      { label: "Digital & Innovation",   href: "/services/digital-innovation" },
      { label: "AI Catalysts",   href: "/services/ai-catalysts" },
      { label: "Strategy & Consulting",  href: "/services/Strategy-Consulting" },
    ],
  },
  {
    title: "Our Work",
    href: "/our-work",
    links: [
      { label: "Strategy & Consulting", href: "/our-work/strategy-and-consulting" },
      { label: "Commercial Solutions",  href: "/our-work/commercial-solutions" },
      { label: "Medical Affairs",       href: "/our-work/medical-affairs" },
      { label: "Digital Innovation",    href: "/our-work/digital-innovation" },
    ],
  },
  {
    title: "News & Updates",
    href: "/news",
    links: [],
  },
  {
    title: "Life@Medtrix",
    href: "/life-at-medtrix",
    links: [],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="w-[90%] md:w-[80%] mx-auto py-4 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12">

          <div className="col-span-2 lg:col-span-1 flex lg:justify-self-start items-start">
            <Link href="/">
              <img src="/logo.png" alt="Medtrix" className="w-[180px] object-contain" />
            </Link>
          </div>

          {footerData.map((section, index) => (
            <div key={index}>
              <Link
                href={section.href}
                className="group inline-block text-white text-2xl font-semibold mb-6 relative"
              >
                {section.title}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 group-hover:w-full bg-white/50 rounded-full transition-all duration-300" />
              </Link>

              <div className="flex flex-col gap-5">
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative w-fit text-gray-400 text-base transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-white/40 rounded-full transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>
          ))}

        </div>

        <div className="border-t border-[#222222] pt-8 mt-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <p className="text-center text-gray-500 text-sm">© 2026. All rights reserved. Medtrix Healthcare</p>
          <div className="flex gap-6 mt-4">
            <Link href="https://www.medtrixhealthcare.com/privacy-policy" target="_blank" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="https://www.medtrixhealthcare.com/terms-conditions" target="_blank" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
