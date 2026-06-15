"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import NewsDetails from "@/components/NewsDetails";

export default function NewsDetailClient({ news }) {
  const router = useRouter();

  useEffect(() => {
    if (!news) router.replace("/news");
  }, [news, router]);

  if (!news) return null;

  return (
    <section className="w-[90%] md:w-[80%] mx-auto py-3 md:py-20 min-h-screen">
      <NewsDetails news={news} onBack={() => router.push("/news")} />
    </section>
  );
}
