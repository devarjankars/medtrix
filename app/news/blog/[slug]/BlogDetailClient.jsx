"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import BlogDetail from "@/components/BlogDetail";

export default function BlogDetailClient({ blog }) {
  const router = useRouter();

  useEffect(() => {
    if (!blog) router.replace("/news");
  }, [blog, router]);

  if (!blog) return null;

  return (
    <section className="w-[90%] md:w-[80%] mx-auto py-3 md:py-20 min-h-screen">
      <BlogDetail blog={blog} onBack={() => router.push("/news?view=blogs")} />
      <div
        className="pointer-events-none relative left-1/2 -translate-x-1/2 w-full h-10 rounded-full my-16"
        style={{ background: "radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)" }}
      />
    </section>
  );
}
