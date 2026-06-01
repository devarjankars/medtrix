"use client";
import DynamicHeader from '@/components/DynamicHeader';
import FeatureSection from '@/components/FeatureSection';


const strategyParagraphs = [
  "Built on 14 years of experience partnering with leading pharmaceutical and life sciences organizations, MedTrix AI Catalysts were created to support the development and delivery of scientific content. ",
  "Developed through years of research, pilot programs, and real-world implementation, the AI Catalysts help automate and streamline key MedComm operations—from content creation and adaptation to review and production—while maintaining regulatory compliance, data security, and human oversight at every stage.  " ];

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
    <main className="relative ">
      <DynamicHeader
        tagText="AI CATALYSTS"
        desktopImgHeight={"95%"}
        desktopImgAlign={"bottom"}
      title={  [
  "Intelligent Catalysts for Content, Compliance, and Engagement"
]
     }     paragraphs={strategyParagraphs}
        desktopBg={"/mAideskb.png"}
         mobileImg={"/maimbl.png"}
      />
      <div className='w-[90%] md:w-[80%] mx-auto'>
      <section className="relative py-5 overflow-hidden">
        <FeatureSection tagText={"MLR Catalyst"} imageSrc={"/mlr.png"} imageAlt={"Workflow Catalyst "}
          imagePosition={"left"}
          paragraphs={[
            "The MLR Catalyst is a tool built to reduce the time and effort involved in the medical-legal-regulatory approval process. It utilizes AI methodologies rooted in a validated and brand-specific knowledge bank to simplify repetitive tasks.",
            "Importantly, it validates claims in a document with information in the knowledge bank and allows reviewers to utilize their time more efficiently by focusing on relevant areas. ",
          ]}
          buttons={[{ label: "Learn More ", type: "primary", href: "/GenAI" }]}
        />
      </section>

      <section className="relative py-5 overflow-hidden">
        <FeatureSection tagText={"Knowledge Catalyst"} imageSrc={"/knowledge.png"} imageAlt={"Workflow Catalyst "}
          imagePosition={"right"}
          paragraphs={[
            "The Knowledge Catalyst is an AI-enabled authoring support tool. It uses a knowledge bank comprising a validated set of documents of different types and gives reference-backed first drafts of content for different types of documents.",
             "It makes content only from the validated knowledge bank and has presets for different types of audience, volume of content, and the type of deliverable. The system can also be synchronized with production tools and supports nearly 50 layout templates, enabling faster adaptation and scalable content development workflows."
          ]}
          buttons={[]}
        />
      </section>
      <section className="relative py-5 overflow-hidden">
        <FeatureSection tagText={"Video Catalyst"} imageSrc={"/video_catlist.png"} imageAlt={"Video Catalyst "}
          imagePosition={"left"}
          paragraphs={[
           "The video catalyst brings together a suite of AI-enabled tools to radically simplify the process of developing videos of all types. It applies AI image and video generation capabilities to pre-production, production, and post-production of live action and all other styles of videos. ",
          "The video catalyst dramatically reduces the time to market for videos and lowers the cost and complexity of producing live action videos by using AI-generated characters, sets, props, and shots. " ]}
          buttons={[{ label: "Read the Video Catalyst Case Study", type: "primary" , href:"/our-work?project=stemline-ai-storytelling&from=%2Fservices%2Fai-catalysts" }]}
        />
      </section>
      <section className="relative py-5 overflow-hidden">
        <FeatureSection tagText={"Campaign Catalyst "} imageSrc={"/Campaign.png"} imageAlt={"Campaign Catalyst  "}
          imagePosition={"right"}
          paragraphs={[
           "The Campaign Catalyst is an AI-enabled production ecosystem designed to accelerate compliant digital communications across email and banner formats. Built specifically for pharmaceutical regulatory requirements, it streamlines content authoring, review formatting, and technical production within a centralized workflow. ",
             "The system includes automated handling of mandatory sections and outputs optimized for Veeva, media channels, and deployment environments. By reducing manual effort and simplifying campaign adaptation, the Campaign Catalyst improves scalability, compliance, efficiency, and speed to deployment. "
          ]}
          buttons={[{ label: "Book a Demo", type: "primary", href: "/contact?subject=Book%20a%20Demo" }]}
        />
      </section>
      </div>
    </main>
  );
}


