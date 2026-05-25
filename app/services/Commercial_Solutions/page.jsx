"use client";
import DynamicHeader from '@/components/DynamicHeader';


 const strategyParagraphs = [
    "through AI-powered tools, structured workflows, and domain expertise with human oversight at the core. Our proprietary accelerators improve speed, consistency, and efficiency across digital delivery programs.",
    "Our omnichannel approach combines enterprise-grade AI guardrails with expert validation to ensure secure, compliant, and accurate outputs. Supported by experienced project teams, we help accelerate large-scale digital production and reduce PRC approval timelines by up to 50%."
  ];



  export default function Commercial_Solutions() {
  return (
  <div className="w-[90%] md:w-[80%] mx-auto">
    
     <main className=" ">
      {/* Usage 1: Exactly like the image */}
    <DynamicHeader
  tagText="COMMERCIAL SOLUTIONS"
  title="Capability to achieve transformational outcomes"
  graphicSrc="/servicesHeader.png"
  paragraphs={strategyParagraphs}
  statsCards={[
    {
      value: "1000,000+",
      label: "Assets Created"
    },
    {
      value: "AI",
      label: "Catalysts"
    },
    {
      value: "Faster MLR",
      label: "Approval"
    }
  ]}
/>
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">

      
      </div>
    </main>
    <div className="py-12">
      <section className="relative bg-black py-24 px-6 overflow-hidden">
      </section>
    </div>


    
  </div>
    
  );
}
