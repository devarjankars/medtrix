
import bg from "../public/bg.png";
import mblbg from "../public/mblbg.png";

export default function DynamicHeader({
  tagText,
  title,
  paragraphs = [],
  graphicSrc,
  graphicAlt = "",
  desktopBg = bg,

  // NEW MOBILE IMAGE
  mobileImg = mblbg,

  statsCards = [],
}) {
  return (
    <section className="
      relative
      overflow-hidden
      text-white
      py-24
      min-h-screen
      flex
      items-center
    ">

      {/* DESKTOP BG */}
      <div className="
        hidden
        lg:block
        absolute
        inset-0
        z-0
      ">
        <img
          src={desktopBg.src}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>

      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-12
        gap-8
        items-center
      ">
        

        {/* LEFT */}
        <div className="
          lg:col-span-7
          flex
          flex-col
          gap-5
        ">
           <div className=" relative inline-block rounded-full max-w-fit p-[1px]" style={{ background: 'linear-gradient(to right, rgba(225,37,27,0.5), transparent 53%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)' }}> <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-[#FFF] bg-[#0c0606] px-4 py-1.5 rounded-full"> {tagText} </span> </div>
         

        <h1 className="
            text-4xl
            lg:text-6xl
          ">
            {title}
          </h1>

          {/* MOBILE IMAGE ONLY */}
          {mobileImg && (
            <section className="block  lg:hidden">
            
              <img
                src={mobileImg.src}
                alt=""
                className="
                  w-full
                  
                  object-contain
                "
              />
                 
            </section>
            
          )}

          {paragraphs.map((item, index) => (
            <p
              key={index}
              className="
                text-gray-400
                text-[18px]
                leading-9
              "
            >
              {item}
            </p>
          ))}

          {/* BOXES */}
          {statsCards.length > 0 && (
            <div className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-4
            ">
              {statsCards.map((card, index) => (
                <div
                  key={index}
                  className="
                    bg-black/30
                    border
                    border-[#2A2A2A]
                    rounded-2xl
                    p-6
                  "
                >
                  <div className="
                    w-5
                    h-[2px]
                    bg-red-500
                    mb-4
                  " />

                  <h3>{card.value}</h3>

                  <p>{card.label}</p>

                </div>
              ))}
              
            </div>
          )}

        </div>

        {/* DESKTOP RIGHT IMAGE */}
        <div className="
          hidden
          lg:flex
          lg:col-span-5
          justify-end
        ">
          <img
            src={graphicSrc}
            alt={graphicAlt}
            className="
              w-full
              max-w-[400px]
            "
          />
        </div>

      </div>
                <div
  className="  mt-4 pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[40px] rounded-full lg:hidden"
  style={{
    background:
      'radial-gradient(ellipse at bottom, rgba(0,106,128,0.4) 0%, transparent 80%)',
  }}
/>

    </section>
  );
}