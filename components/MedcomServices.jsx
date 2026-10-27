"use client";

import { useState } from "react";

const services = [
  {
    id: "clinical",
    label: "Clinical Evidence\nCommunication",
    items: [
      "Systematic literature reviews and evidence synthesis",
      "Meta-analyses and health economic analyses",
      "Clinical evidence & comparative efficacy summaries",
      "Publication strategy development and execution planning",
    ],
    image: "/images/clinical-evidence.jpg",
  },
  {
    id: "digital",
    label: "Digital Publication\nExtensions",
    items: [
      "Visual abstracts with single-slide graphical summaries",
      "Video abstracts explaining study background and significance",
      "Podcasts delivering audio summaries for multitasking physicians",
      "Summaries explaining complex MOAs through 2D/3D animation",
      "Interactive infographics for scientific data visualization",
    ],
    image: "/images/digital-publication.jpg",
  },
  {
    id: "provider",
    label: "Healthcare Provider\nCommunications",
    items: [
      "Peer-reviewed journal articles reprints",
      "Conference presentations & slide decks",
      "Poster and e-poster design",
      "Live/virtual symposia and webinars",
      "Digital learning platforms",
    ],
    image: "/images/provider-communications.jpg",
  },
  {
    id: "patient",
    label: "Patient Education &\nEngagement",
    items: [
      "Patient education brochures & disease awareness",
      "Patient decision aids & shared decision-making tools",
      "Multimedia content (video, animation, interactive)",
      "Patient mobile apps & digital health tools",
      "Social media strategy & content development",
    ],
    image: "/images/patient-education.jpg",
  },
];

export default function MedcomServices() {
  const [activeTab, setActiveTab] = useState("clinical");

  const activeService =
    services.find((service) => service.id === activeTab) ?? services[0];

  return (
    <section className="relative overflow-hidden bg-black S text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[180px]  -translate-x-1/2 bg-red-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* Small label */}
        <div className="mb-6">
          <span className="inline-flex rounded-full bg-[#303030] px-4 py-[7px] text-[9px] font-medium uppercase tracking-[0.22em] text-[#e8e8e8]">
            Medcom Services
          </span>
        </div>

        {/* Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex min-w-[760px] items-center rounded-full bg-[#202020] p-[4px]">
            {services.map((service) => {
              const isActive = activeTab === service.id;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveTab(service.id)}
                  className={`
                    flex min-h-[56px] flex-1 items-center justify-center
                    whitespace-pre-line rounded-full px-4
                    text-center text-[11px] leading-[1.2]
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#ff3535] text-white shadow-[0_0_24px_rgba(255,53,53,0.22)]"
                        : "text-[#d0d0d0] hover:text-white"
                    }
                  `}
                >
                  {service.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Changing content */}
        <div
          key={activeService.id}
          className="grid animate-[fadeIn_.35s_ease] items-stretch gap-8 lg:grid-cols-[0.95fr_1.1fr] lg:gap-10"
        >
          {/* Left content */}
          <div className="flex flex-col gap-3">
            {activeService.items.map((item, index) => (
              <div
                key={item}
                className="relative flex min-h-[105px] items-center rounded-[6px] border border-[#292929] bg-[#050505] px-6 py-5"
              >
                <div>
                  <div className="mb-2 text-[24px] font-light leading-none text-[#ff3737]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="text-[13px] leading-[1.55] text-[#d5d5d5]">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right image */}
          <div className="relative min-h-[430px] overflow-hidden rounded-[8px] bg-[#151515]">
            <img
              src={activeService.image}
              alt={activeService.label.replace("\n", " ")}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}