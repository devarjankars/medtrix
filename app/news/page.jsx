"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import NewsCard from "@/components/NewsCard";
import NewsDetails from "@/components/NewsDetails";
import { newsData } from "@/Data/news";
import gsap from "gsap";

const scrollKey = "news-scroll";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {newsData.map((item, i) => (
        <div key={item.id} ref={(el) => (cardsRef.current[i] = el)} style={{ opacity: 0 }}>
          <NewsCard news={item} onClick={() => onOpen(item)} />
        </div>
      ))}
    </div>
  );
}

function NewsPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const newsId = searchParams.get("id");

  const selected = newsId ? newsData.find((n) => String(n.id) === newsId) ?? null : null;

  // Restore scroll when returning to list
  useEffect(() => {
    if (!selected) {
      const saved = sessionStorage.getItem(scrollKey);
      if (saved) {
        const y = parseInt(saved, 10);
        requestAnimationFrame(() => {
          import("@/components/LenisProvider").then(({ lenisInstance }) => {
            if (lenisInstance) lenisInstance.scrollTo(y, { immediate: true });
            else window.scrollTo(0, y);
          });
        });
        sessionStorage.removeItem(scrollKey);
      }
    }
  }, [selected]);

  // Scroll to top when opening article
  useEffect(() => {
    if (selected) {
      import("@/components/LenisProvider").then(({ lenisInstance }) => {
        if (lenisInstance) lenisInstance.scrollTo(0, { immediate: true });
        else window.scrollTo(0, 0);
      });
    }
  }, [newsId]);

  function openNews(item) {
    import("@/components/LenisProvider").then(({ lenisInstance }) => {
      sessionStorage.setItem(scrollKey, String(lenisInstance?.scroll ?? window.scrollY));
    });
    router.push(`/news?id=${item.id}`, { scroll: false });
  }

  function goBack() {
    router.push("/news", { scroll: false });
  }

  return (
    <section className="w-[90%] md:w-[80%] mx-auto py-3 md:py-20 min-h-screen">
      {selected ? (
        <NewsDetails news={selected} onBack={goBack} />
      ) : (
        <>
          <div
            className="relative inline-block rounded-full max-w-fit p-[1px] mb-10"
            style={{
              background:
                "linear-gradient(to right, rgba(225,37,27,0.5), transparent 43%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)",
            }}
          >
            <span className="inline-block text-[14px] font-bold uppercase text-[#FFF] bg-[#0c0606] px-5 py-2 rounded-full">
              NEWS &amp; UPDATES
            </span>
          </div>
          <CardGrid newsData={newsData} onOpen={openNews} />
        </>
      )}
    </section>
  );
}

export default function NewsPage() {
  return (
    <Suspense>
      <NewsPageInner />
    </Suspense>
  );
}
