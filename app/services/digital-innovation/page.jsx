"use client";
import DynamicHeader from '@/components/DynamicHeader';
import FeatureSection from '@/components/FeatureSection';

const strategyParagraphs = [
  "Innovation, for us, has never been just about technology but about solving real problems in meaningful ways. It has been a defining characteristic for us since our beginning. It drove us to do more with less and enable novel experiences for clients and patients.",
  "Our strongest partnerships with pharmaceutical companies have been built through innovative solutions built to achieve unique objectives and address challenges specific to a particular client or set of circumstances.",
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
    <main className="relative w-[90%] md:w-[80%] mx-auto min-h-screen">
      <DynamicHeader
        tagText="DIGITAL & INNOVATION"
        title="Innovation that creates meaningful impact "
        paragraphs={strategyParagraphs}
        graphicSrc="/servicesHeader.png"
      />
      <section className="relative bg-black py-20 px-10 md:px-0 overflow-hidden">
        <div className=" mb-40">
          <div className="mb-12">
            <span className="inline-block text-[14px] font-bold tracking-[0.15em] uppercase text-[#FFF] bg-[#201212] px-6 py-2 rounded-full ">
              EXPLORE OUR INNOVATION CASE STUDIES
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {innovationData.map((item, index) => (
              <div
                key={index}
                className="bg-[#141414] border border-[#2C2C2C] rounded-[34px] overflow-hidden transition-all duration-300 hover:border-red-500/40 hover:-translate-y-1"
              >
                <div className="p-4 pb-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[280px] object-cover rounded-[24px]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-[22px] font-medium leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[40px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)",
          }}
        />
      </section>
    </main>
  );
}

export default Page;