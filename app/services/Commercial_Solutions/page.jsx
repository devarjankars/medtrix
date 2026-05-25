"use client";
import DynamicHeader from '@/components/DynamicHeader';


const engageData = [
  {
    icon: "/engage1.png",
    title: "Emailers",
    desc: "SFMC, RTE, and third-party platforms",
  },
  {
    icon: "/engage2.png",
    title: "Banners",
    desc: "Optimized across sizes, formats, and resolutions",
  },
  {
    icon: "/engage3.png",
    title: "Social Media",
    desc: "Instagram, Facebook, Reddit, Sermo",
  },
];
const educateData = [
  {
    icon: "/engage1.png",
    title: "Learning Solutions",
    desc: "Custom-built digital learning programs tailored to diverse audiences  ",
  },
  {
    icon: "/engage2.png",
    title: "LMS",
    desc: "Proprietary platform for scalable deployment, tracking, and optimization ",
  },
  {
    icon: "/engage3.png",
    title: "Authoring Expertise",
    desc: "Articulate Storyline and Rise for interactive learning experiences",
  },
];

 const strategyParagraphs = [
    "through AI-powered tools, structured workflows, and domain expertise with human oversight at the core. Our proprietary accelerators improve speed, consistency, and efficiency across digital delivery programs.",
    "Our omnichannel approach combines enterprise-grade AI guardrails with expert validation to ensure secure, compliant, and accurate outputs. Supported by experienced project teams, we help accelerate large-scale digital production and reduce PRC approval timelines by up to 50%."
  ];
  const capabilityData = [
  {
    icon: "/engage1.png",
    title: "Brand and promotional videos",
  },
  {
    icon: "/engage2.png",
    title: "Educational and scientific content",
  },
  {
    icon: "/engage3.png",
    title: "Motion graphics and animated explainers",
  },
];


const timelineData = [ { no: "01", title: "Videos", icon: "/videologo.png", desc: "Our in-house team delivers a wide range of video formats.", }, 
  { no: "02", title: "3D MOA / MOD", icon: "/cube.png", desc: "We specialize in mechanism of action videos.", }, 
  { no: "03", title: "Interactive Platforms", icon: "/platform.png", desc: "Custom apps and data-driven platforms.", } ];
export default function Commercial_Solutions() {
  return (<div>
    
     <main className=" ">
      {/* Usage 1: Exactly like the image */}
      <DynamicHeader
        tagText="COMMERCIAL SOLUTIONS"
        title="We enable large-scale, high-quality content production "
        paragraphs={strategyParagraphs}
        graphicSrc="/servicesHeader.png"
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">

        {/* 1. Bottom-Left Teal/Cyan Glow */}
        <div
          className="absolute -bottom-20 left-[5%] w-[600px] h-[400px] opacity-30 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(20,110,120,0.4) 0%, rgba(5,5,5,0) 70%)'
          }}
        />

        {/* 2. Right-Center Deep Red Glow (Behind the graphic) */}
        <div
          className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[700px] h-[500px] opacity-25 blur-[130px]"
          style={{
            background: 'radial-gradient(circle, rgba(165,29,29,0.35) 0%, rgba(13,3,3,0.5) 50%, rgba(5,5,5,0) 100%)'
          }}
        />
      </div>
    </main>
    <div className="py-12">
      <section className="relative bg-black py-24 px-6 overflow-hidden">

        <div className="max-w-7xl mx-auto">

          {/* Tag */}
          <div className="flex justify-center">
            <span className="  px-8 py-3 rounded-full  bg-[#2A2323]  text-white  uppercase  tracking-[4px]  text-sm  font-semibold
          ">
              See How We Delivered This For Orserdu
            </span>
          </div>

          {/* Heading */}
          <div className="text-center mt-10">

            <h2 className="  text-5xl  md:text-6xl  font-bold  text-white
          ">
              Engage
            </h2>

            <p className="
            text-gray-300  mt-4 text-lg
          ">
              We create high-impact engagement assets across digital channels:
            </p>

          </div>

          {/* Cards */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16
        ">

            {engageData.map((item, index) => (
              <div
                key={index}
                className="  bg-[#0D0B0B]  border border-[#2B2B2B] rounded-[40px] p-10 min-h-[320px] transition duration-300  hover:border-red-500/40
              "
              >

                <div className=" w-[86px] h-[86px] rounded-2xl bg-red-600  flex items-center justify-center
              ">

                  <img
                    src={item.icon}
                    className="w-10 h-10"
                    alt={item.title}
                  />

                </div>

                <h3 className="
                text-white text-4xl  font-semibold mt-10
              ">
                  {item.title}
                </h3>

                <p className="
                text-gray-400 text-xl mt-6 leading-relaxed
              ">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="flex justify-center mt-20">

            <button className="px-12 py-5 rounded-full bg-red-600 text-white text-lg font-semibold hover:bg-red-500 transition
          ">
              Explore our Email & Banner Builder
            </button>
          </div>

        </div>
         <div
          className="
    absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[1400px] h-[350px] rounded-full pointer-events-none
  "
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,0,0.35) 0%, rgba(180,0,0,0.18) 40%, transparent 75%)",
            filter: "blur(90px)",
          }}
        />
      </section>

      {/* section2 */}
      <section className="relative bg-black py-24 px-6 overflow-hidden">

        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mt-10">

            <h2 className="  text-5xl  md:text-6xl  font-bold  text-white
          ">
              Educate
            </h2>

            <p className="
            text-gray-300  mt-4 text-lg
          ">
              We create scalable learning and engagement solutions that enable effective knowledge transfer and HCP engagement-Detailers: Designed for Veeva and other leading platforms (Veeva Content Partner Logo to be shown here)  
            </p>

          </div>

          {/* Cards */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16
        ">

            {engageData.map((item, index) => (
              <div
                key={index}
                className="  bg-[#0D0B0B]  border border-[#2B2B2B] rounded-[40px] p-10 min-h-[320px] transition duration-300  hover:border-red-500/40
              "
              >

                <div className=" w-[86px] h-[86px] rounded-2xl bg-red-600  flex items-center justify-center
              ">

                  <img
                    src={item.icon}
                    className="w-10 h-10"
                    alt={item.title}
                  />

                </div>

                <h3 className="
                text-white text-4xl  font-semibold mt-10
              ">
                  {item.title}
                </h3>

                <p className="
                text-gray-400 text-xl mt-6 leading-relaxed
              ">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="flex justify-center mt-20">

            <button className="px-12 py-5 rounded-full bg-red-600 text-white text-lg font-semibold hover:bg-red-500 transition
          ">
              Explore Modulife Expert for Nestlé Health Science
            </button>
          </div>

        </div>
        <div
          className="
    absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[1400px] h-[350px] rounded-full pointer-events-none
  "
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,0,0.35) 0%, rgba(180,0,0,0.18) 40%, transparent 75%)",
            filter: "blur(90px)",
          }}
        />
      </section>
      <section className="relative bg-black py-24 px-6 overflow-hidden">
      <div className=" py-12 mt-24 grid lg:grid-cols-[1.2fr_420px] gap-20 items-center
">

        {/* LEFT TIMELINE */}
        <div className="relative">

          {/* Vertical line */}
          <div className=" absolute left-[52px] top-0 w-[8px] h-[88%] bg-[#FFE9E9]  rounded-full
    ">

            <div className=" absolute  top-0  left-0  w-full  h-[220px]  bg-red-600  rounded-full
      "/>

          </div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className="  relative  flex  gap-12  mb-36
        "
            >

              {/* circle */}
              <div className="z-20 shrink-0">

                <div className="
          w-[110px]
          h-[110px]
          rounded-full
          bg-[#4b2925]
          flex
          items-center
          justify-center
          ">

                  <div className="
            w-[88px]
            h-[88px]
            rounded-full
            bg-red-600
            flex
            items-center
            justify-center
            text-[32px]
            font-bold
            ">
                    {item.no}
                  </div>

                </div>

              </div>

              {/* text */}
              <div className="
        pt-4
        max-w-[650px]
        ">

                <img
                  src={item.icon}
                  className="
            w-[70px]
            mb-6
            "
                />

                <h2 className="
          text-[28px]
          font-bold
          mb-4
          leading-none
          ">
                  {item.title}
                </h2>

                <p className="
          text-[18px]
          text-gray-300
          leading-relaxed
          ">
                  {item.desc}
                </p>

                {index === 1 && (
                  <button className="
            mt-10
            px-10
            py-5
            rounded-full
            bg-red-600
            text-[20px]
            font-semibold
            ">
                    Explore the Keytruda MOD story
                  </button>
                )}

              </div>

            </div>
          ))}

          {/* bottom button aligned left */}
          <div className="mt-1 ml-[120px]">

            <button className="
      px-8
      py-4 text-[20px]
      rounded-full
      bg-red-600
      text-white
      font-semibold
      ">
              See how we delivered the Lilly Integrated Dashboard
            </button>

          </div>

        </div>

        {/* RIGHT CARDS */}
        <div className=" flex flex-col gap-14 "> {capabilityData.map((item, index) => (
          <div key={index} className=" bg-[#0E0B0B] border border-[#2B2B2B] rounded-[36px] p-12 min-h-[200px] flex flex-col items-start transition duration-300 hover:border-red-500/40 " >
            <div className=" w-[90px] h-[90px] rounded-2xl bg-red-600 flex items-center justify-center ">
              <img src={item.icon} alt="" className="w-9 h-9" /> </div>
            <h3 className=" text-white text-2xl font-semibold mt-4  leading-snug "> {item.title} </h3>
          </div>))}
        </div>

        

      </div>
      <div
          className="
    absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[1400px] h-[350px] rounded-full pointer-events-none
  "
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,0,0.35) 0%, rgba(180,0,0,0.18) 40%, transparent 75%)",
            filter: "blur(90px)",
          }}
        />
      </section>

    </div>
  </div>
    
  );
}
