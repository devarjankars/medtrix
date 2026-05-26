export default function FeatureSection({
  tagText = "BRAND AND BUSINESS",
  imageSrc = "/path-to-your-image.jpg",
  imageAlt = "Feature image",
  paragraphs = [],
  buttons = [],
  imagePosition = "left"
}) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="relative w-full text-white py-5 md:py-4 overflow-x-hidden">

      <div className="relative z-10">

        <div className="mb-10">
          <span className="inline-block text-[#e5e5e5] text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full border border-[#2c2222]">
            {tagText}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-start">

          <div className={isImageLeft ? "lg:order-1" : "lg:order-2"}>
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl">
              <img
                src={imageSrc}
                alt={imageAlt}
                className=" w-full lg:w-[70%] h-full object-contain object-top transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className={`flex flex-col gap-6  ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
            {paragraphs.map((text, index) => (
              <p key={index} className="text-[#b3b3b3] text-base md:text-lg leading-relaxed font-light w-full lg:w-[80%]">
                {text}
              </p>
            ))}
            {buttons.length > 0 && (
              <div className="flex flex-wrap gap-4 pt-4">
                {buttons.map((btn, index) => {
                  const isPrimary = btn.type === "primary";
                  return (
                    <button
                      key={index}
                      onClick={btn.onClick}
                      className={`px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                        isPrimary
                          ? "bg-[#E1251B] text-white hover:bg-[#ff3329] shadow-lg shadow-[#e1251b33]"
                          : "bg-[#1c1616] text-[#b3b3b3] border border-[#3a2f2f] hover:text-white hover:bg-[#282020]"
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

      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[40px] rounded-full"
        style={{ background: "radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)" }}
      />

    </section>
  );
}
