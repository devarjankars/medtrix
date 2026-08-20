import { newsData } from "@/Data/news";
import NewsDetailClient from "./NewsDetailClient";

export function generateStaticParams() {
  return newsData.map((n) => ({ slug: n.pageTag }));
}

export default async function NewsDetailPage({ params }) {
  const { slug } = await params;
  const news = newsData.find((n) => n.pageTag === slug) ?? null;
  return <NewsDetailClient news={news} />;
}
