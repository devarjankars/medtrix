"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, useInView } from "framer-motion";
import NewsCard from "@/components/NewsCard";
import NewsDetails from "@/components/NewsDetails";
import { newsData } from "@/Data/news";

const ease = [0.22, 1, 0.36, 1];
const scrollKey = "news-scroll";

function CardGrid({ newsData, onOpen }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {newsData.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: i * 0.1 }}
        >
          <NewsCard news={item} onClick={() => onOpen(item)} />
        </motion.div>
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
          <motion.div
            className="relative inline-block rounded-full max-w-fit p-[1px] mb-10"
            style={{
              background:
                "linear-gradient(to right, rgba(225,37,27,0.5), transparent 43%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="inline-block text-[14px] font-bold uppercase text-[#FFF] bg-[#0c0606] px-5 py-2 rounded-full">
              NEWS &amp; UPDATES
            </span>
          </motion.div>
          <CardGrid newsData={newsData} onOpen={openNews} />
        </>
      )}
      <div
          className="pointer-events-none relative left-1/2 -translate-x-1/2 w-full h-[40px] rounded-full my-16"
          style={{ background: "radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)" }}
        />
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
