"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LifeatMet from "@/components/LifeatMet";
import NewsCard from "@/components/NewsCard";
import NewsDetailsNew from "@/components/NewsDetailsNew";
import JobCard from "@/components/JobCard";
import JobDetailsCard from "@/components/JobDetailsCard";
import { newsData } from "@/Data/newNews";
import { jobsData } from "@/Data/jobs";
import gsap from "gsap";

const newsScrollKey = "lam-news-scroll";
const jobScrollKey = "lam-job-scroll";

function CardGrid({ newsData, onOpen }) {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.15 }
    );
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {newsData.map((item, i) => (
        <div key={item.id} ref={(el) => (cardsRef.current[i] = el)} style={{ opacity: 0 }}>
          <NewsCard news={item} onClick={() => onOpen(item)} />
        </div>
      ))}
    </div>
  );
}

function LifeAtMedtrixInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const newsId = searchParams.get("news");
  const jobId  = searchParams.get("job");

  const selectedNews = newsId ? newsData.find((n) => String(n.id) === newsId) ?? null : null;
  const selectedJob  = jobId  ? jobsData.find((j) => String(j.id) === jobId)  ?? null : null;

  // Restore scroll when returning to list
  useEffect(() => {
    if (!selectedNews && !selectedJob) {
      const saved = sessionStorage.getItem(newsScrollKey) || sessionStorage.getItem(jobScrollKey);
      if (saved) {
        const y = parseInt(saved, 10);
        requestAnimationFrame(() => {
          import("@/components/LenisProvider").then(({ lenisInstance }) => {
            if (lenisInstance) lenisInstance.scrollTo(y, { immediate: true });
            else window.scrollTo(0, y);
          });
        });
        sessionStorage.removeItem(newsScrollKey);
        sessionStorage.removeItem(jobScrollKey);
      }
    }
  }, [selectedNews, selectedJob]);

  // Scroll to top when opening detail
  useEffect(() => {
    if (selectedNews || selectedJob) {
      import("@/components/LenisProvider").then(({ lenisInstance }) => {
        if (lenisInstance) lenisInstance.scrollTo(0, { immediate: true });
        else window.scrollTo(0, 0);
      });
    }
  }, [newsId, jobId]);

  function openNews(item) {
    import("@/components/LenisProvider").then(({ lenisInstance }) => {
      sessionStorage.setItem(newsScrollKey, String(lenisInstance?.scroll ?? window.scrollY));
    });
    router.push(`/life-at-medtrix?news=${item.id}`, { scroll: false });
  }

  function openJob(job) {
    import("@/components/LenisProvider").then(({ lenisInstance }) => {
      sessionStorage.setItem(jobScrollKey, String(lenisInstance?.scroll ?? window.scrollY));
    });
    router.push(`/life-at-medtrix?job=${job.id}`, { scroll: false });
  }

  function goBack() {
    router.push("/life-at-medtrix", { scroll: false });
  }

  if (selectedNews) {
    return (
      <main className="min-h-screen bg-[#0a0a0a]">
        <section className="w-[90%] md:w-[80%] mx-auto py-3 md:py-20">
          <NewsDetailsNew news={selectedNews} onBack={goBack} />
        </section>
      </main>
    );
  }

  if (selectedJob) {
    return (
      <main className="min-h-screen bg-[#0a0a0a]">
        <section className="w-[90%] md:w-[80%] mx-auto py-3 md:py-20">
          <JobDetailsCard job={selectedJob} onBack={goBack} />
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <section className="w-[90%] md:w-[80%] mx-auto py-3 md:py-20">

        {/* ── Badge ── */}
        <div
          className="relative inline-block rounded-full max-w-fit p-[1px] mb-10"
          style={{
            background:
              "linear-gradient(to right, rgba(225,37,27,0.5), transparent 43%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)",
          }}
        >
          <span className="inline-block text-[14px] font-bold uppercase text-[#FFF] bg-[#0c0606] px-5 py-2 rounded-full">
            LIFE @ MEDTRIX
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
        <CardGrid newsData={newsData} onOpen={openNews} />

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
            <JobCard key={job.id} job={job} onClick={() => openJob(job)} />
          ))}
        </div>

        {/* ── Bottom glow ── */}
        <div
          className="pointer-events-none relative left-1/2 -translate-x-1/2 w-full h-[40px] rounded-full my-16"
          style={{ background: "radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)" }}
        />

      </section>
    </main>
  );
}

export default function LifeAtMedtrixPage() {
  return (
    <Suspense>
      <LifeAtMedtrixInner />
    </Suspense>
  );
}
