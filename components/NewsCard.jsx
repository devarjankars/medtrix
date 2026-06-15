"use client";

export default function NewsCard({ news, onClick }) {
  return (
    <div
      onClick={() => onClick(news)}
      className="group cursor-pointer rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
    >
      {/* Image fills the card fully — no inset padding */}
      <div className="relative w-full aspect-4/3 bg-[#1a1a1a]">

        {/* Mobile image */}
        <img
          src={news.thumbnailMbl || news.thumbnail}
          alt={news.title}
          className="w-full h-full object-cover object-top md:hidden"
        />
        {/* Desktop image */}
        <img
          src={news.thumbnail}
          alt={news.title}
          className="w-full h-full object-cover object-top hidden md:block"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        {/* Text overlaid on image bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-5">
          {news.date && (
            <span className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">{news.date}</span>
          )}
          <h3 className="text-[#d1d5db] text-[16px] lg:text-[19px] font-semibold leading-normal line-clamp-3">
            {news.title}
          </h3>
        </div>

      </div>
    </div>
  );
}
