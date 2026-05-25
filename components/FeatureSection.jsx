export default function FeatureSection({
  tagText = "BRAND AND BUSINESS",
  imageSrc = "/path-to-your-image.jpg",
  imageAlt = "Feature image",
  paragraphs = [],
  buttons = [],
  imagePosition = "left" // "left" or "right"
}) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="relative w-full bg-[#060606] text-white py-2 px-6 overflow-x-hidden">
      
      {/* Content Container */}
      <div className=" mx-auto relative z-10">
        
        {/* Top Tag */}
        <div className="mb-10">
          <span className="inline-block bg-[#1c1616] text-[#e5e5e5] text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full border border-[#2c2222]">
            {tagText}
          </span>
        </div>

        {/* Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Image Block */}
          <div className={`lg:col-span-5 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative rounded-2xl overflow-hidden aspect-square   shadow-2xl">
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="w-full h-full object-contain object-top transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className={`hidden lg:block lg:col-span-1 justify-self-start h-4/5 w-[1px]  `} />
          <div className={`lg:col-span-6 flex flex-col gap-6 self-start ${isImageLeft ? 'lg:order-3' : 'lg:order-1'}`}>
            {paragraphs.map((text, index) => (
              <p key={index} className="text-[#b3b3b3] text-base md:text-lg leading-relaxed font-light">
                {text}
              </p>
            ))}
            {buttons.length > 0 && (
              <div className="flex flex-wrap gap-4 pt-4">
                {buttons.map((btn, index) => {
                  const isPrimary = btn.type === 'primary';
                  return (
                    <button
                      key={index}
                      onClick={btn.onClick}
                      className={`px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                        isPrimary
                          ? 'bg-[#E1251B] text-white hover:bg-[#ff3329] shadow-lg shadow-[#e1251b33]'
                          : 'bg-[#1c1616] text-[#b3b3b3] border border-[#3a2f2f] hover:text-white hover:bg-[#282020]'
                      }`}
                    >
                      {btn.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[350px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#7a1210] via-[#3a0806] to-transparent opacity-70 blur-3xl pointer-events-none z-0" />
    </section>
  );
}