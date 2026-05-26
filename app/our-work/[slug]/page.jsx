import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/Data/project";
import { projectDetails } from "@/Data/projectDetails";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;

  const detail = projectDetails.find((p) => p.slug === slug);

  if (!detail) notFound();

  return (
    <main className="bg-black text-white min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <img
          src={detail.headerImage}
          alt={detail.title}
          className="w-full h-full object-cover"
        />
        {/* dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* back link */}
        <Link
          href="/our-work"
          className="absolute top-8 left-8 md:left-[10%] inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition z-10"
        >
          ← Back to Our Work
        </Link>

        {/* hero text */}
        <div className="absolute bottom-0 left-0 right-0 w-[90%] md:w-[80%] mx-auto pb-14">
          <p className="text-xs uppercase tracking-[3px] text-[#FF2F2F] mb-3">
            {detail.category}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-5 max-w-4xl">
            {detail.title}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            {detail.subtitle}
          </p>
        </div>
      </section>

      {/* ── META BAR ─────────────────────────────────────────────────────── */}
      <section className="w-[90%] md:w-[80%] mx-auto py-10 border-b border-[#252525]">
        <div className="flex flex-wrap gap-3 mb-8">
          {detail.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[#3A3A3A] px-4 py-2 rounded-md text-xs uppercase tracking-[2px]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-xs uppercase text-gray-500 mb-2 tracking-[2px]">
              Platform / Stack
            </p>
            <p className="text-white text-lg">{detail.stack}</p>
          </div>
          <div className="md:border-l border-[#252525] md:pl-8">
            <p className="text-xs uppercase text-gray-500 mb-2 tracking-[2px]">
              Timeline / Status
            </p>
            <p className="text-white text-lg">{detail.timeline}</p>
          </div>
        </div>
      </section>

      {/* ── CHALLENGE ────────────────────────────────────────────────────── */}
      <section className="w-[90%] md:w-[80%] mx-auto py-20 border-b border-[#252525]">
        <SectionLabel label="01" />
        <h2 className="text-3xl md:text-5xl font-medium mb-10">
          {detail.challenge.heading}
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* text */}
          <div className="space-y-5">
            {detail.challenge.content.map((para, i) => (
              <p key={i} className="text-gray-300 text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* images */}
          <div className="grid grid-cols-2 gap-4">
            {detail.challenge.images.map((src, i) => (
              <div key={i} className="rounded-[16px] overflow-hidden">
                <img
                  src={src}
                  alt={`Challenge visual ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR SOLUTION ─────────────────────────────────────────────────── */}
      <section className="w-[90%] md:w-[80%] mx-auto py-20 border-b border-[#252525]">
        <SectionLabel label="02" />
        <h2 className="text-3xl md:text-5xl font-medium mb-10">
          {detail.solution.heading}
        </h2>

        {/* images row */}
        <div
          className={`grid gap-4 mb-12 ${
            detail.solution.images.length === 3
              ? "grid-cols-3"
              : "grid-cols-2"
          }`}
        >
          {detail.solution.images.map((src, i) => (
            <div key={i} className="rounded-[16px] overflow-hidden aspect-video">
              <img
                src={src}
                alt={`Solution visual ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* text */}
        <div className="grid lg:grid-cols-3 gap-8">
          {detail.solution.content.map((para, i) => (
            <div key={i} className="border-t border-[#252525] pt-6">
              <span className="text-[#FF2F2F] text-xs uppercase tracking-[2px] mb-3 block">
                0{i + 1}
              </span>
              <p className="text-gray-300 leading-relaxed">{para}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE RESULT ───────────────────────────────────────────────────── */}
      <section className="w-[90%] md:w-[80%] mx-auto py-20 border-b border-[#252525]">
        <SectionLabel label="03" />
        <h2 className="text-3xl md:text-5xl font-medium mb-12">
          {detail.result.heading}
        </h2>

        {/* stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {detail.result.stats.map((stat, i) => (
            <div
              key={i}
              className="border border-[#252525] rounded-[16px] p-8 flex flex-col gap-2"
            >
              <span className="text-5xl font-medium text-white">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-[2px] text-gray-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* result images */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {detail.result.images.map((src, i) => (
            <div key={i} className="rounded-[16px] overflow-hidden aspect-video">
              <img
                src={src}
                alt={`Result visual ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* result text */}
        <div className="space-y-4">
          {detail.result.content.map((para, i) => (
            <p key={i} className="text-gray-300 text-lg leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* ── CLIENT TESTIMONIAL ───────────────────────────────────────────── */}
      <section className="w-[90%] md:w-[80%] mx-auto py-20">
        <SectionLabel label="04" />
        <h2 className="text-3xl md:text-5xl font-medium mb-12">
          Client Testimonial
        </h2>

        <div className="border border-[#252525] rounded-[22px] p-10 md:p-16 relative overflow-hidden">
          {/* decorative quote mark */}
          <span className="absolute top-8 right-10 text-[120px] leading-none text-[#1a1a1a] font-serif select-none">
            "
          </span>

          <p className="text-2xl md:text-3xl text-white leading-relaxed mb-10 max-w-4xl relative z-10">
            "{detail.testimonial.quote}"
          </p>

          <div className="flex items-center gap-5 relative z-10">
            <div className="w-14 h-14 rounded-full overflow-hidden border border-[#3A3A3A] flex-shrink-0">
              <img
                src={detail.testimonial.avatar}
                alt={detail.testimonial.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-white font-medium">{detail.testimonial.author}</p>
              <p className="text-gray-400 text-sm">{detail.testimonial.company}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BACK CTA ─────────────────────────────────────────────────────── */}
      <section className="w-[90%] md:w-[80%] mx-auto pb-24 flex justify-center">
        <Link
          href="/our-work"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full border border-[#3A3A3A] text-white hover:bg-[#FF2F2F] hover:border-[#FF2F2F] transition-all text-sm uppercase tracking-[2px]"
        >
          ← View All Projects
        </Link>
      </section>

    </main>
  );
}

// ── small helper ─────────────────────────────────────────────────────────────
function SectionLabel({ label }) {
  return (
    <p className="text-xs uppercase tracking-[3px] text-[#FF2F2F] mb-4">
      {label}
    </p>
  );
}
