"use client";

export default function NewsCard({ news, onClick }) {
  return (
    <div
      onClick={() => onClick(news)}
      className="group cursor-pointer rounded-[20px] border border-[#2a2a2a] bg-[#0f0f0f] hover:border-[#444] transition-all duration-300 hover:scale-[1.02] overflow-hidden"
    >
      {/* Image wrapper with inset padding */}
      <div className="p-4">
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[14px]">

          {/* Image */}
          <img
            src={news.thumbnail}
            alt={news.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Dark gradient overlay at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-[14px]" />

          {/* Text on top of image */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
           
            <h3 className="text-white text-[18px] font-semibold leading-[22px] line-clamp-3">
              {news.title}
            </h3>
          </div>

        </div>
      </div>
    </div>
  );
}
