
"use client";
import DynamicHeader from '@/components/DynamicHeader';
import FeatureSection from '@/components/FeatureSection';

 const strategyParagraphs = [
    "organizations, the MedTrix Catalyst Suite was created to catalyze the way scientific content, brands, and engagement strategies are developed and delivered. ",
 "The MedTrix Catalyst Suite is distilled from decades of collective experience across both MedTrix teams and our client partnerships. The suite brings together AI-enabled workflows, modular content approaches, intelligent automation, and scalable engagement solutions designed to help teams work faster, smarter, and more compliantly. " ];

const catalystData = [
  {
    icon: "/engage1.png",
    title: "Workflow Catalyt",
  },
  {
    icon: "/engage2.png",
    title: "MLR Catalyst",
  },
  {
    icon: "/engage3.png",
    title: "Omnichannel Catalyst",
  },
  {
    icon: "/engage1.png",
    title: "Video Catalyst",
  },
  {
    icon: "/engage2.png",
    title: "Knowledge Catalyst",
  },
];
 export default function page() {
  return (
   
    
        <div className="">
         <section className="relative py-10 overflow-hidden">
                  <DynamicHeader
                 tagText="AI CATALYSTS"
                 title="Built on 14 years of experienceworking with leading pharmaceutical & life sciences  "
                 paragraphs={strategyParagraphs}
                 graphicSrc="/servicesHeader.png"
               />
               
          </section>
          <section className="relative bg-black py-24 px-6 overflow-hidden">

              <div className="max-w-7xl mx-auto">

                  {/* Tag */}
                  <div className="mb-12">

                      <span className="
            inline-flex
            px-6
            py-3
            rounded-full
            bg-[#2A2525]
            text-white
            uppercase
            tracking-[4px]
            text-sm
            font-bold
          ">
                          Catalyst Suite: Powered by GenAI
                      </span>

                  </div>

                  {/* Description */}
                  <p className="
          text-white
          text-[22px]
          leading-[1.8]
          max-w-[1300px]
          mb-16
        ">
                      From leveraging off-the-shelf GenAI technologies informed by our internal research and pilot programs to building customized in-house solutions tailored to specific business and compliance needs, the Catalyst Suite addresses known pain points in the medical communications space while enabling more connected, scalable, and compliant content operations.
                  </p>

                  {/* Cards */}
                  <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-10 mt-5
        ">

                      {catalystData.map((item, index) => (

                          <div
                              key={index}
                              className="
                bg-[#111111]
                border
                border-[#2A2A2A]
                rounded-[36px]
                p-10
                min-h-[270px]
                flex
                flex-col
                justify-center
                transition-all
                duration-300
                hover:border-red-500/40
              "
                          >

                              <div className="
                w-[92px]
                h-[92px]
                rounded-2xl
                bg-red-600
                flex
                items-center
                justify-center
                mb-12
              ">

                                  <img
                                      src={item.icon}
                                      alt=""
                                      className="w-10 h-10"
                                  />

                              </div>

                              <h3 className="
                text-white
                text-[28px]
                font-semibold
                leading-snug
              ">
                                  {item.title}
                              </h3>

                          </div>

                      ))}

                  </div>

              </div>

              {/* Bottom glow */}
              <div
                  className="
          absolute
          bottom-[-220px]
          left-1/2
          -translate-x-1/2
          w-[1300px]
          h-[240px]
          pointer-events-none
        "
                  style={{
                      background:
                          "radial-gradient(circle, rgba(255,0,0,0.28) 0%, rgba(255,0,0,0.12) 40%, transparent 75%)",
                      filter: "blur(70px)",
                  }}
              />

          </section>
             <section className="relative py-16 overflow-hidden">
              
                         <FeatureSection tagText={"Workflow Catalyst "} imageSrc={"/lunchandlifecycle.png"} imageAlt={"Workflow Catalyst "} 
                        imagePosition={"right"} 
                        paragraphs={[
                         "Workflow Catalyst combines MedTrix’s lean delivery process with an enterprise-grade GenAI ecosystem to accelerate medical content workflows while maintaining data security and human oversight.",
                          "Supported by trained teams, standardized prompt frameworks, and a predefined render library with nearly 50 output formats, the platform enables scalable and efficient omnichannel content production.",
                          "In a large-scale program with Ferring Pharmaceuticals, the GenAI-enabled workflow reduced production timelines by 30% within two months."
                        ]}
                        buttons={[{ label: "Learn How Workflow Catalyst Reduced Timelines by 30% ", type: "primary" }]}
                        
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
  )};