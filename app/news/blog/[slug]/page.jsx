import { blogsData } from "@/Data/blogs";
import BlogDetailClient from "./BlogDetailClient";

export function generateStaticParams() {
  return blogsData.map((b) => ({ slug: b.slug }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug) ?? null;
  return <BlogDetailClient blog={blog} />;
}
