"use client";
import DynamicHeader from '@/components/DynamicHeader';
import FeatureSection from '@/components/FeatureSection';

 const strategyParagraphs = [
    "Some of our strongest partnerships with global pharmaceutical companies have been built through immersive experiences, custom innovations, and a willingness to solve problems others considered too complex. ",
    "A defining milestone in our journey was the challenge from Allergan to transform facial cadaveric dissection into a digital experience—resulting in the world’s first holographic cadaveric dissection program and establishing a new benchmark in immersive medical engagement. ",
    "When Merck faced delays in PD-L1 biomarker sample logistics, we developed a mobile application connecting HCPs, couriers, and central laboratories to simplify coordination and accelerate the process."
  ];
  const innovationData = [
  {
    img: "/stories1.png",
    title: "AbbVie-Integrated Engagement Platforms",
  },
  {
    img: "/stories2.png",
    title: "Allergan-Immersive Learning",
  },
  {
    img: "/stories3.png",
    title: "Sanofi-Augmented Reality Experience @ Tandem",
  },
  {
    img: "/stories4.png",
    title: "Merck-Keytruda HCP Engagement",
  },
  {
    img: "/stories5.png",
    title: "Celltrion Virtual Reality Experience @DDW",
  },
  {
    img: "/stories6.png",
    title: "The Patient Case Player",
  },
];
function Page() {
  return (
    < div className="min-h-screen ">
        <section className="relative py-10 overflow-hidden">
         <DynamicHeader
        tagText="DIGITAL & INNOVATION"
        title="Innovation lies at the core of who we are"
        paragraphs={strategyParagraphs}
        graphicSrc="/servicesHeader.png"
      />
      
      </section>
      <section className="relative py-10 overflow-hidden">
    
               <FeatureSection tagText={"Innovation That Creates Meaningful Impact"} imageSrc={"/innovation.png"} imageAlt={"Innovation That Creates Meaningful Impact"} 
              imagePosition={"left"} 
              paragraphs={[
               "We also pioneered the Case Player—a refreshingly different approach to presenting patient profiles and clinical evidence through interactive storytelling. Today, over 100 case players authored by our teams are being used by leading pharmaceutical organizations to drive more engaging scientific conversations.",
                "From immersive solutions and custom applications to interactive engagement platforms, we combine science, creativity, and technology to create experiences that resonate more deeply across HCP and patient touchpoints.",
                "For us, innovation has never been just about technology—it is about solving real problems in meaningful ways. If you believe your HCP and patient experiences can do more, we invite you to start a conversation with us."
              ]}
              buttons={[{ label: "Connect With Us", type: "primary" }]}
              
              />
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
         <section className="relative bg-black py-10 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto mb-40">

        {/* top tag */}
        <div className="mb-12">

          <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-[#FFF] bg-[#201212] px-4 py-1.5 rounded-full ">
            Explore Our Innovation Stories
          </span>

        </div>

        {/* cards */}
        <div className="
          grid     grid-cols-1          md:grid-cols-2 xl:grid-cols-3 gap-8
        ">

          {innovationData.map((item, index) => (

            <div
              key={index}
              className="   bg-[#141414] border border-[#2C2C2C]  rounded-[34px]  overflow-hidden   transition-all  duration-300 hover:border-red-500/40 hover:-translate-y-1
              "
            >

              {/* image */}
              <div className="p-4 pb-0">

                <img
                  src={item.img}
                  alt={item.title}
                  className="   w-full  h-[280px]  object-cover   rounded-[24px]
                  "
                />

              </div>

              {/* content */}
              <div className="p-6">

                <span className=" inline-flex  px-4  py-2 rounded-full border border-[#FF7C70]  text-[#FF7C70] text-sm  mb-5
                ">
                  Innovation Stories
                </span>

                <h3 className=" text-white text-[22px]  font-medium  leading-snug
                ">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* bottom glow */}
      <div
        className="
          absolute
          bottom-[-240px]
          left-1/2
          -translate-x-1/2
          w-[1300px]
          h-[220px]
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle, rgba(255,0,0,0.25) 0%, rgba(255,0,0,0.12) 35%, transparent 75%)",
          filter: "blur(70px)",
        }}
      />
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
    
  )
}

export default Page
