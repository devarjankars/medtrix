import { use } from "react";
import { newsData } from "@/Data/news";
import NewsDetailClient from "./NewsDetailClient";

export function generateStaticParams() {
  return newsData.map((n) => ({ slug: n.pageTag }));
}

export default function NewsDetailPage({ params }) {
  const { slug } = use(params);
  const news = newsData.find((n) => n.pageTag === slug) ?? null;
  return <NewsDetailClient news={news} />;
}
