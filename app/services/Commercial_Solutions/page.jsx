"use client";
import DynamicHeader from '@/components/DynamicHeader';
import CapabilitiesSection from "@/components/CapabilitiesSection";

const strategyParagraphs = [
 
    "Large-scale, high-quality content production, customer engagement design, content intelligence and digital optimization, meetings and events support through a model that combines domain expertise, structured workflows, and AI-powered tools.",
"Our proprietary AI a Catalysts are integrated into our delivery ecosystem and, where appropriate, made available to our clients to enhance speed, consistency, and efficiency. Our model has helped clients achieve up to a 50% reduction in MLR approval time, significantly accelerating time to market."

]
;

export default function Commercial_Solutions() {
  return (
    <main className="relative ">
      <DynamicHeader
        tagText="COMMERCIAL SOLUTIONS"
        title="Capability to achieve transformational outcomes"
         mobileImg={"/csmbl.png"}
         desktopImgHeight={"700px"}
         desktopImgAlign={"top"}
         desktopBg={"/csbg.jpg"}
        paragraphs={strategyParagraphs}
        statsCards={[
          {
            value: "1000,00+",
            label: "Assets Created",
          },
          {
            value: "AI",
            label: "Catalysts",
          },
          {
            value: "Faster MLR",
            label: "Approval",
          },
        ]}
      />
      <div className="p w-[90%] md:w-[80%] mx-auto">
        <section className="relative bg-black lg:py-[100px]  py-[50px] px-6 overflow-hidden">
          <CapabilitiesSection />
        </section>
      </div>
    </main>
  );
}