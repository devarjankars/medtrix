"use client";

import { useState, useEffect, useRef } from "react";
import LifeatMet from "@/components/LifeatMet";
import NewsCard from "@/components/NewsCard";
import NewsDetails from "@/components/NewsDetails";
import JobCard from "@/components/JobCard";
import JobDetailsCard from "@/components/JobDetailsCard";
import { newsData } from "@/Data/news";
import { jobsData } from "@/Data/jobs";
import gsap from "gsap";

function CardGrid({ newsData, setSelected }) {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.15 }
    );
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsData.map((item, i) => (
        <div key={item.id} ref={(el) => (cardsRef.current[i] = el)} style={{ opacity: 0 }}>
          <NewsCard news={item} onClick={setSelected} />
        </div>
      ))}
    </div>
  );
}

export default function LifeAtMedtrixPage() {
  const [selected, setSelected] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <section className="w-[90%] md:w-[80%] mx-auto py-10">

        {selected ? (
          <NewsDetails news={selected} onBack={() => setSelected(null)} />
        ) : selectedJob ? (
          <JobDetailsCard job={selectedJob} onBack={() => setSelectedJob(null)} />
        ) : (
          <>
            {/* ── Badge ── */}
            <div
              className="relative inline-block rounded-full max-w-fit p-[1px] mb-10"
              style={{
                background:
                  "linear-gradient(to right, rgba(225,37,27,0.5), transparent 43%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)",
              }}
            >
              <span className="inline-block text-[14px] font-bold uppercase text-[#FFF] bg-[#0c0606] px-5 py-2 rounded-full">
                LIFE AT MEDTRIX
              </span>
            </div>

            {/* ── Heading ── */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                What we believe in
              </h1>
            </div>

            {/* ── Slider ── */}
            <LifeatMet />

            {/* ── Divider ── */}
            <div
              className="pointer-events-none relative left-1/2 -translate-x-1/2 w-full h-[40px] rounded-full my-16"
              style={{ background: "radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)" }}
            />

            {/* ── News badge ── */}
            <div className="inline-flex px-6 py-3 rounded-full bg-[#2A2525] mb-8 text-white tracking-[4px] text-sm font-bold uppercase bg-[linear-gradient(to_right,_rgba(255,255,255,0.2),_rgba(0,0,0,0.4))] border border-[#2A2525]">
              WHAT&apos;s NEW @ MEDTRIX
            </div>

            {/* ── News card grid ── */}
            <CardGrid newsData={newsData} setSelected={setSelected} />

            {/* ── Divider ── */}
            <div
              className="pointer-events-none relative left-1/2 -translate-x-1/2 w-full h-[40px] rounded-full my-16"
              style={{ background: "radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)" }}
            />

            {/* ── Jobs badge ── */}
            <div className="inline-flex px-6 py-3 rounded-full bg-[#2A2525] mb-8 text-white tracking-[4px] text-sm font-bold uppercase bg-[linear-gradient(to_right,_rgba(255,255,255,0.2),_rgba(0,0,0,0.4))] border border-[#2A2525]">
              Current Openings at MedTrix
            </div>

            {/* ── Job card grid ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobsData.map((job) => (
                <JobCard key={job.id} job={job} onClick={setSelectedJob} />
              ))}
            </div>

            {/* ── Bottom glow ── */}
            <div
              className="pointer-events-none relative left-1/2 -translate-x-1/2 w-full h-[40px] rounded-full my-16"
              style={{ background: "radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)" }}
            />
          </>
        )}

      </section>
    </main>
  );
}
