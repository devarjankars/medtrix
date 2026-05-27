"use client";

import Image from "next/image";
import TestimonialSlider from "@/components/TestimonialSlider";

// ── Section label pill ────────────────────────────────────────────────────────
function SectionPill({ label }) {
  return (
    <div className="inline-flex px-6 py-3 rounded-full bg-[#292424] mb-8 text-white tracking-[4px] text-sm font-bold uppercase border border-[#2A2525]"
      style={{ background: "linear-gradient(to right, rgba(255,255,255,0.2), rgba(0,0,0,0.4))" }}
    >
      {label}
    </div>
  );
}

// ── Glow divider ─────────────────────────────────────────────────────────────
function GlowDivider() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[60px] rounded-full"
      style={{ background: "radial-gradient(ellipse at bottom, rgba(0,106,128,0.4) 0%, transparent 80%)" }}
    />
  );
}

export default function ProjectDetail({ project, onBack }) {
  // Build testimonial items array — support both single object and array
  const testimonialItems = Array.isArray(project.testimonials)
    ? project.testimonials
    : project.testimonial?.quote
    ? [{ text: project.testimonial.quote, role: project.testimonial.author, location: project.category }]
    : [];

  return (
    <div className="w-[90%] md:w-[80%] mx-auto text-white">

      {/* ── BACK BUTTON ──────────────────────────────────────────────────── */}
      <div className="py-10">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xl text-[#FFF] hover:text-white transition   rounded-xl px-3 py-1 bg-red-600 hover:scale-95"
        > Back to Projects
        </button>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="mb-4">
        {/* category pill */}
        <div
          className="relative inline-block rounded-full max-w-fit p-px mb-6"
          style={{ background: "linear-gradient(to right, rgba(225,37,27,0.5), transparent 53%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)" }}
        >
          <span className="inline-block text-[14px] font-bold tracking-[0.15em] uppercase text-white bg-[#0c0606] px-4 py-1.5 rounded-full">
            {project.category}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-medium leading-tight mb-6">
          {project.title}
        </h1>

        {/* tags */}
        {/* <div className="flex flex-wrap gap-3 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="border border-[#3A3A3A] px-4 py-2 rounded-md text-[11px] uppercase tracking-[2px]">
              {tag}
            </span>
          ))}
        </div> */}

        {/* meta bar */}
        {/* <div className="border-y border-[#252525] py-6 mb-8 grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-xs uppercase text-gray-400 mb-2 tracking-[2px]">Engagement Model</p>
            <p className="text-white text-lg">{project.engagementModel}</p>
          </div>
          <div className="md:border-l border-[#252525] md:pl-8">
            <p className="text-xs uppercase text-gray-400 mb-2 tracking-[2px]">Timeline / Status</p>
            <p className="text-white text-lg">{project.timeline}</p>
          </div>
        </div> */}

        {/* hero image */}
        {project.imgfordetail && (
          <img
            src={project.imgfordetail}
            alt={project.title}
            className="w-full rounded-[22px] object-cover"
          />
        )}
      </section>

      {/* ── CHALLENGE ────────────────────────────────────────────────────── */}
      {project.challenge && (
        <section className="relative py-20">
          <SectionPill label="Challenge" />
          <div className="border border-gray-700 rounded-2xl px-6 md:px-16 py-10">
            <p className="text-[20px] leading-[1.9] text-[#A6A6A6]">{project.challenge}</p>
          </div>
          <GlowDivider />
        </section>
      )}

      {/* ── OUR SOLUTION ─────────────────────────────────────────────────── */}
      {project.solution && (
        <section className="relative py-20">
          <SectionPill label="Our Solution" />
          <div className="border border-gray-700 rounded-2xl px-6 md:px-16 py-10">
            <p className="text-[20px] leading-[1.9] text-[#A6A6A6]">{project.solution}</p>
          </div>
          <GlowDivider />
        </section>
      )}

      {/* ── THE RESULT ───────────────────────────────────────────────────── */}
      {project.result && (
        <section className="relative py-20">
          <SectionPill label="The Result" />
          <div className="border border-gray-700 rounded-2xl px-6 md:px-16 py-10 flex flex-col gap-10">
            <p className="text-[20px] leading-[1.9] text-[#A6A6A6]">{project.result}</p>

            {/* desc bullet points */}
            {project.desc?.length > 0 && (
              <ul className="flex flex-col gap-4">
                {project.desc.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#A6A6A6] text-lg">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#FF2F2F] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* recognitions */}
          {project.recognitions?.length > 0 && (
            <div className="mt-12">
              <div className="w-full flex justify-center py-8">
                <h5 className="text-white font-semibold text-4xl">
                  <span className="text-red-500">The</span> Recognitions
                </h5>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {project.recognitions.map((src, i) => (
                  <img key={i} src={src} alt={`Recognition ${i + 1}`} className="h-24 object-contain" />
                ))}
              </div>
            </div>
          )}

          <GlowDivider />
        </section>
      )}

      {/* ── CLIENT TESTIMONIAL ───────────────────────────────────────────── */}
      {testimonialItems.length > 0 && (
        <section className="relative py-20">
          <SectionPill label="Client Testimonial" />
          <TestimonialSlider items={testimonialItems} autoPlay={true} delay={3000} />
          <GlowDivider />
        </section>
      )}

    </div>
  );
}
