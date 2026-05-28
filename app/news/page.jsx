"use client";

import { useState, useEffect, useRef } from "react";
import NewsCard from "@/components/NewsCard";
import NewsDetails from "@/components/NewsDetails";
import { newsData } from "@/Data/news";
import gsap from "gsap";

function CardGrid({ newsData, setSelected }) {
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
          <NewsCard news={item} onClick={setSelected} />
        </div>
      ))}
    </div>
  );
}

export default function NewsPage() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="w-[90%] md:w-[80%] mx-auto py-10 min-h-screen">
      {selected ? (
        <NewsDetails news={selected} onBack={() => setSelected(null)} />
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

          <CardGrid newsData={newsData} setSelected={setSelected} />
        </>
      )}
    </section>
  );
}
