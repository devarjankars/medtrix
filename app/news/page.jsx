"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, useInView, AnimatePresence } from "framer-motion";
import NewsCard from "@/components/NewsCard";
import NewsDetails from "@/components/NewsDetails";
import BlogRow from "@/components/BlogRow";
import BlogDetail from "@/components/BlogDetail";
import { newsData } from "@/Data/news";
import { blogsData } from "@/Data/blogs";

const ease = [0.22, 1, 0.36, 1];
const scrollKey = "news-scroll";

// ─── News card grid ────────────────────────────────────────────────────────────
function CardGrid({ data, onOpen }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((item, i) => (
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

// ─── Pill badge header shared by both tabs ────────────────────────────────────
function SectionBadge({ label }) {
  return (
    <motion.div
      className="relative inline-block rounded-full max-w-fit p-[1px]"
      style={{
        background:
          "linear-gradient(to right, rgba(225,37,27,0.5), transparent 43%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease }}
    >
      <span className="inline-block text-[16px] font-bold uppercase text-[#FFF] bg-[#0c0606] px-5 py-2 rounded-full">
        {label}
      </span>
    </motion.div>
  );
}

// ─── Tab toggle bar ───────────────────────────────────────────────────────────
function TabBar({ activeTab, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <SectionBadge label="News &amp; Updates" />

      {/* Blogs tab pill */}
      <motion.button
        onClick={() => onChange("blogs")}
        className={`relative inline-flex items-center px-5 py-2 rounded-full text-[14px] font-semibold uppercase tracking-wider transition-colors duration-200 border cursor-pointer ${
          activeTab === "blogs"
            ? "text-white border-[#E1251B] bg-[#1a0606]"
            : "text-gray-400 border-[#2a2a2a] bg-transparent hover:border-[#E1251B] hover:text-white"
        }`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.1 }}
      >
        Blogs
        {activeTab === "blogs" && (
          <motion.span
            layoutId="tab-active-dot"
            className="ml-2 w-1.5 h-1.5 rounded-full bg-[#E1251B] inline-block"
          />
        )}
      </motion.button>
    </div>
  );
}

// ─── Inner page (needs searchParams) ─────────────────────────────────────────
function NewsPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // tab: "news" | "blogs"
  const tabParam = searchParams.get("tab") ?? "news";
  const articleParam = searchParams.get("article");
  const blogParam = searchParams.get("blog");

  const [activeTab, setActiveTab] = useState(tabParam);
  const [selectedNews, setSelectedNews] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Sync from URL
  useEffect(() => {
    setActiveTab(tabParam);
    setSelectedNews(articleParam ? newsData.find((n) => n.pageTag === articleParam) ?? null : null);
    setSelectedBlog(blogParam ? blogsData.find((b) => b.slug === blogParam) ?? null : null);
  }, [tabParam, articleParam, blogParam]);

  // Restore scroll when returning to news list
  useEffect(() => {
    if (!selectedNews && activeTab === "news") {
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
  }, [selectedNews, activeTab]);

  // Scroll to top when opening any detail
  useEffect(() => {
    if (selectedNews || selectedBlog) {
      import("@/components/LenisProvider").then(({ lenisInstance }) => {
        if (lenisInstance) lenisInstance.scrollTo(0, { immediate: true });
        else window.scrollTo(0, 0);
      });
    }
  }, [articleParam, blogParam]);

  // ── Navigation helpers ──────────────────────────────────────────────────────
  function switchTab(tab) {
    router.push(`/news?tab=${tab}`, { scroll: false });
  }

  function openNewsItem(item) {
    import("@/components/LenisProvider").then(({ lenisInstance }) => {
      sessionStorage.setItem(scrollKey, String(lenisInstance?.scroll ?? window.scrollY));
    });
    router.push(`/news?tab=news&article=${item.pageTag}`, { scroll: false });
  }

  function goBackToNews() {
    router.push("/news?tab=news", { scroll: false });
  }

  function openBlog(blog) {
    import("@/components/LenisProvider").then(({ lenisInstance }) => {
      sessionStorage.setItem(scrollKey, String(lenisInstance?.scroll ?? window.scrollY));
    });
    router.push(`/news?tab=blogs&blog=${blog.slug}`, { scroll: false });
  }

  function goBackToBlogs() {
    router.push("/news?tab=blogs", { scroll: false });
  }

  // ── Render ──────────────────────────────────────────────────────────────────

  // View: News article detail
  if (activeTab === "news" && selectedNews) {
    return (
      <section className="w-[90%] md:w-[80%] mx-auto py-3 md:py-20 min-h-screen">
        <NewsDetails news={selectedNews} onBack={goBackToNews} />
        <BottomGlow />
      </section>
    );
  }

  // View: Blog post detail
  if (activeTab === "blogs" && selectedBlog) {
    return (
      <section className="w-[90%] md:w-[80%] mx-auto py-3 md:py-20 min-h-screen">
        <BlogDetail blog={selectedBlog} onBack={goBackToBlogs} />
        <BottomGlow />
      </section>
    );
  }

  // View: Blog list
  if (activeTab === "blogs") {
    return (
      <section className="w-[90%] md:w-[80%] mx-auto py-3 md:py-20 min-h-screen">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            {/* Back to News */}
            <motion.button
              onClick={() => switchTab("news")}
              className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
              whileHover={{ x: -3 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
            >
              <motion.span
                className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#2A2A2A] group-hover:border-[#E1251B] transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                ←
              </motion.span>
              <span className="text-[13px]">Back to News</span>
            </motion.button>

            {/* Divider */}
            <span className="text-gray-700 select-none">/</span>

            {/* Active badge */}
            <motion.div
              className="relative inline-block rounded-full max-w-fit p-[1px]"
              style={{
                background:
                  "linear-gradient(to right, rgba(225,37,27,0.5), transparent 43%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)",
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
            >
              <span className="inline-block text-[16px] font-bold uppercase text-[#FFF] bg-[#0c0606] px-5 py-2 rounded-full">
                Blogs
              </span>
            </motion.div>
          </div>
        </div>

        {/* Blog rows */}
        <div className="flex flex-col">
          {blogsData.map((blog, i) => (
            <BlogRow key={blog.id} blog={blog} index={i} onClick={openBlog} />
          ))}
        </div>

        <BottomGlow />
      </section>
    );
  }

  // View: News list (default)
  return (
    <section className="w-[90%] md:w-[80%] mx-auto py-3 md:py-20 min-h-screen">
      {/* Tab header */}
      <div className="mb-10">
        <TabBar activeTab={activeTab} onChange={switchTab} />
      </div>

      <CardGrid data={[...newsData].reverse()} onOpen={openNewsItem} />
      <BottomGlow />
    </section>
  );
}

function BottomGlow() {
  return (
    <div
      className="pointer-events-none relative left-1/2 -translate-x-1/2 w-full h-[40px] rounded-full my-16"
      style={{
        background:
          "radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)",
      }}
    />
  );
}

export default function NewsPage() {
  return (
    <Suspense>
      <NewsPageInner />
    </Suspense>
  );
}
