export default function DynamicHeader({
  tagText = "STRATEGY & CONSULTING",
  title = "Strategy That Adapts to Your Needs",
  paragraphs = [],
  graphicSrc = "/path-to-your-graphic.png",
  graphicAlt = "Header graphic"
}) {
  return (
    <section className="relative   text-white py-24  md:px-0 overflow-hidden  flex items-center">
      
      {/* Background Gradients */}
      {/* Subtle Cyan/Blue Glow bottom left */}
    
      <div className="max-w-7xl  w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          <div className="relative inline-block rounded-full p-[1px]" style={{
            background: 'linear-gradient(to right, rgba(225,37,27,0.5), transparent 33%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)'
          }}>
            <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-[#FFF] bg-[#0c0606] px-4 py-1.5 rounded-full">
              {tagText}
            </span>
          </div>

          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.15] text-[#f5f5f7] max-w-xl">
            {title}
          </h1>

          {/* Image shown only on mobile, after heading */}
          <div className="block lg:hidden w-full">
            <img
              src={graphicSrc}
              alt={graphicAlt}
              className="w-full h-auto object-contain select-none"
            />
          </div>

          <div className="space-y-4 pt-2 max-w-lg pb-8">
            {paragraphs.map((text, index) => (
              <p key={index} className="text-sm md:text-base text-gray-400 leading-relaxed font-light text-[18px]">
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Right Side Graphic Column — desktop only */}
        <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end relative">
          <div className="w-full max-w-full aspect-square flex items-end justify-center">
            <img 
              src={graphicSrc} 
              alt={graphicAlt} 
              className="w-full h-auto object-contain  select-none"
            />
          </div>
          
          {/* Background vector line styling to mimic the graphic borders if needed */}
          
        </div>
       <div
  className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[40px] rounded-full"
  style={{
    background:
      'radial-gradient(ellipse at bottom, rgba(0,106,128,0.4) 0%, transparent 80%)',
  }}
/>
      </div>
      
    </section>
  );
}