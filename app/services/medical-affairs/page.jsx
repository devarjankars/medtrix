"use client";

import { useEffect, useRef } from "react";
import DynamicHeader from "@/components/DynamicHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);


/* ── Data ─────────────────────────────────────────────────────────────────── */
const sections = [
  {
    label: "Medcom Services",
    cols: 2,
    items: [
      {
        title: "Clinical Evidence Communication",
        img: "/medcom1.png",
        points: [
          "Systematic literature reviews and evidence synthesis",
          "Meta-analyses and health economic analyses",
          "Clinical evidence tables and comparative efficacy summaries",
          "Publication strategy development and execution planning",
        ],
      },
      {
        title: "Publication Extenders: Digital Amplification Suite",
        img: "/medcom2.png",
        points: [
          "Visual Abstracts: graphical summaries optimized for social media",
          "Video Abstracts: authors explain study background & significance",
          "Podcasts: audio summaries for multitasking physicians",
          "Animated Summaries: 2D/3D animations explaining complex MOA",
          "Infographics: visual data stories for medical portals",
        ],
      },
      {
        title: "Healthcare Provider Communications",
        img: "/medcom3.png",
        points: [
          "Peer-reviewed journal article reprints",
          "Conference presentations & slide decks",
          "Poster and e-poster design",
          "Live/Virtual symposia and webinars",
          "Digital learning platforms",
        ],
      },
      {
        title: "Patient Education & Engagement",
        img: "/medcom4.png",
        points: [
          "Patient education brochures & disease awareness",
          "Patient decision aids & shared decision-making tools",
          "Multimedia content (video, animation, interactive)",
          "Patient mobile apps & digital health tools",
          "Social media strategy & content development",
        ],
      },
    ],
  },
  {
    label: "Medical Affairs Services",
    cols: 3,
    items: [
      {
        title: "Medical Information & Scientific Support",
        img: "/maservice1.png",
        points: [
          "Medical information center operations",
          "Response development to unsolicited HCP inquiries",
          "Scientific literature monitoring & trend analysis",
          "Evidence-based response protocols",
        ],
      },
      {
        title: "Medical Strategy & Planning",
        img: "/maservice2.png",
        points: [
          "Comprehensive medical affairs strategic plans",
          "Key opinion leader (KOL) mapping strategy",
          "Treatment algorithm and clinical pathway positioning",
        ],
      },
      {
        title: "KOL Engagement",
        img: "/maservice3.png",
        points: [
          "Visual Abstracts for social media",
          "Video Abstracts by study authors",
          "Publication Pulses – audio summaries",
        ],
      },
      {
        title: "Educational Content Development",
        img: "/maservice4.png",
        points: [
          "Disease awareness campaigns",
          "HCP training programs and materials",
          "Webinar and virtual meeting planning",
          "Scientific content authorship",
        ],
      },
      {
        title: "Global Medical Affairs Support",
        img: "/maservice5.png",
        points: [
          "Cross-regional KOL network development",
          "Scientific document translation",
          "Global communication strategy harmonization",
          "International conference participation",
        ],
      },
    ],
  },
  {
    label: "Strategic Lifecycle Management",
    cols: 3,
    items: [
      {
        title: "Launch Planning & Execution",
        img: "/lifecycle1.png",
        points: [
          "Integrated strategy (med + comm)",
          "Timeline & milestone planning",
          "Medical education initiation",
          "Publication strategy execution",
        ],
      },
      {
        title: "Product Lifecycle & Sustained Support",
        img: "/lifecycle2.png",
        points: [
          "Ongoing medical information services",
          "Continued HCP and patient education",
          "Competitive response strategy",
          "Safety surveillance & post-marketing",
        ],
      },
      {
        title: "Real-World Evidence Development",
        img: "/lifecycle3.png",
        points: [
          "Registry development",
          "Patient tracking",
          "Communication strategy",
          "Publication support",
        ],
      },
    ],
  },
  {
    label: "Integration & Special Services",
    cols: 2,
    items: [
      {
        title: "Integrated Strategy Alignment",
        img: "/integration1.png",
        points: [
          "Integrated medical-commercial planning",
          "Coordinated publication strategy",
          "Omnichannel Medical Communication",
          "Attribution and measurement across channels",
        ],
      },
      {
        title: "Medical Review & Quality Assurance",
        img: "/integration2.png",
        points: [
          "Promotional claim substantiation and review",
          "Comparative claim validation and risk assessment",
          "Medical content quality assurance processes",
          "Scientific accuracy review and validation",
        ],
      },
    ],
  },
  {
    label: "Technology & Digital Solutions",
    cols: 3,
    items: [
      {
        title: "Learning Management System",
        img: "/techsol1.png",
        points: [
          "Purpose-built for the Pharma industry",
          "Customizable automation, personalization, and analytics",
          "Multimodal training implementation capabilities",
        ],
      },
      {
        title: "Mobile Apps & Web Platforms",
        img: "/techsol2.png",
        points: [
          "Healthcare provider portals and engagement platforms",
          "Patient mobile applications and digital tools",
          "Virtual meeting and event platforms",
        ],
      },
      {
        title: "AI & Automation",
        img: "/techsol3.png",
        points: [
          "Literature mining and evidence synthesis automation",
          "Chatbot and virtual assistant for medical inquiries",
          "Automated content personalization and delivery",
        ],
      },
    ],
  },
];

/* ── Reusable animated grid section ─────────────────────────────────────── */
function ServiceGrid({ label, cols, items }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".service-card"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12">
      {/* Pill */}
      <div className="mb-8">
        <span className="inline-flex rounded-full bg-[#1a1a1a] border border-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-white/70">
          {label}
        </span>
      </div>

      {/* Grid */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-5 ${
          cols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
        }`}
      >
        {items.map((service, i) => (
          <div
            key={i}
            className="service-card opacity-0 group relative rounded-2xl border border-white/8 p-6 overflow-hidden transition-all duration-300 hover:border-[#E1251B]/40"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {/* hover glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "radial-gradient(circle at top left, rgba(225,37,27,0.07), transparent 60%)" }}
            />

            {/* Icon */}
            <div className="relative mb-5">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#E1251B]/30 bg-[#E1251B]/8 p-2.5">
                <img src={service.img || iconSrc} alt={service.title} className="w-full h-full object-contain opacity-90" />
              </div>
            </div>

            {/* Title */}
            <h3 className="relative text-white text-base font-semibold mb-4 leading-snug">
              {service.title}
            </h3>

            {/* Divider */}
            <div className="w-8 h-px bg-[#E1251B]/50 mb-4" />

            {/* List */}
            <ul className="relative space-y-2">
              {service.points.map((pt, idx) => (
                <li key={idx} className="text-zinc-400 text-sm leading-relaxed flex  gap-2">
                  <span className="shrink-0 mt-[9px] w-1 h-1 rounded-full bg-[#E1251B]/60" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function MedicalAffairs() {
  return (
    <main className="relative">
      <DynamicHeader
        tagText="MEDICAL AFFAIRS"
        title={"Scientific rigor meets digital innovation"}
        paragraphs={[
          "MedTrix offers the full scope of medical communications and medical affairs services, powered by cutting-edge digital solutions to support pharmaceutical companies across the entire lifecycle.",
        ]}
        desktopBg={"/Desk.png"}
        mobileImg={"/Medical_Affairsmbl.png"}
      />

      <div className="w-[90%] md:w-[80%] mx-auto pb-20">
        {sections.map((s) => (
          <ServiceGrid key={s.label} label={s.label} cols={s.cols} items={s.items} />
        ))}
      </div>
    </main>
  );
}
