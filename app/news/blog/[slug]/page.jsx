import { use } from "react";
import { blogsData } from "@/Data/blogs";
import BlogDetailClient from "./BlogDetailClient";

export function generateStaticParams() {
  return blogsData.map((b) => ({ slug: b.slug }));
}

export default function BlogDetailPage({ params }) {
  // Next.js 15: params is a Promise — must be unwrapped with `use`
  const { slug } = use(params);
  const blog = blogsData.find((b) => b.slug === slug) ?? null;
  return <BlogDetailClient blog={blog} />;
}
