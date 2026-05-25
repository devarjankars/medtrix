export default function DynamicHeader({
  tagText = "STRATEGY & CONSULTING",
  title = "Strategy That Adapts to Your Needs",
  paragraphs = [],
  graphicSrc = "/path-to-your-graphic.png",
  graphicAlt = "Header graphic"
}) {
  return (
    <section className="relative w-full bg-[#050505] text-white py-24 px-6 md:px-0 overflow-hidden min-h-[70vh] flex items-center">
      
      {/* Background Gradients */}
      {/* Subtle Cyan/Blue Glow bottom left */}
      <div className="absolute bottom-0 left-[10%] w-[400px] h-[300px] bg-cyan-900/15 radial-gradient blur-[120px] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)' }} />
      
      {/* Deep Red ambient glow behind the graphic on the right */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[140px] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle, rgba(225,37,27,0.12) 0%, transparent 70%)' }} />

      {/* Main Content Box */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Tagline Badge */}
                  <div className="relative inline-block rounded-full p-[1px] "  style={{
    background: 'linear-gradient(to right, rgba(225,37,27,0.5), transparent 33%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)'
  }}>
                      <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-[#FFF] bg-[#0c0606] px-4 py-1.5 rounded-full ">
                          {tagText}
                      </span>
                  </div>
                  {/* Heading Title */}
                  <h1 className="text-4xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.15] text-[#f5f5f7] max-w-xl">
                      {title}
                  </h1>

          {/* Render paragraph chunks dynamically */}
          <div className="space-y-4 pt-2 max-w-lg">
            {paragraphs.map((text, index) => (
              <p key={index} className="text-sm md:text-base text-gray-400 leading-relaxed font-light text-[18px]">
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Right Side Graphic Column */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="w-full max-w-[400px] aspect-square flex items-center justify-center">
            <img 
              src={graphicSrc} 
              alt={graphicAlt} 
              className="w-full h-auto object-contain opacity-85 select-none"
            />
          </div>
          
          {/* Background vector line styling to mimic the graphic borders if needed */}
          <div className="absolute inset-0 pointer-events-none flex justify-center items-end">
            <div className="w-full h-1/2 border-b border-x border-white/5 rounded-b-[40px] opacity-20" />
          </div>
        </div>

      </div>
    </section>
  );
}