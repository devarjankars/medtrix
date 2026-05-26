export default function ChallengeBlock({
  image,
  topContent,
  bottomContent,
  imageAlt = "",
  reverse = false,
}) {
  return (
    <section className="py-20 overflow-hidden">
      <div className={`grid lg:grid-cols-[480px_1fr] items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>

        {/* IMAGE */}
        <div className="relative">
          <div className="relative max-w-[480px] h-[520px] rounded-[42px] overflow-hidden border border-white/20 before:absolute before:content-[''] before:right-[-170px] before:top-[18%] before:w-[190px] before:h-[130px] before:border-l before:border-t before:border-[#ff2a1a] before:rounded-tl-[90px] after:absolute after:content-[''] after:right-[-170px] after:bottom-[18%] after:w-[190px] after:h-[130px] after:border-l after:border-b after:border-[#ff2a1a] after:rounded-bl-[90px]">
            
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />

          </div>
        </div>

        {/* CONTENT */}
        <div className="lg:pl-24">

          <div className="min-h-[260px] flex items-center border-b border-[#ff2a1a]/40">
            <div className="text-zinc-400 text-lg leading-[2] max-w-[760px]">
              {topContent}
            </div>
          </div>

          <div className="min-h-[260px] flex items-center">
            <div className="text-zinc-400 text-lg leading-[2] max-w-[760px]">
              {bottomContent}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}