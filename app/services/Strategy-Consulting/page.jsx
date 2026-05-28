"use client";
import DynamicHeader from '@/components/DynamicHeader';
import FeatureSection from '@/components/FeatureSection';

const strategyParagraphs = [
  "We partner with healthcare brands across stages and scales—serving as an Agency of Record for some, while enabling others through flexible, decoupled engagement models. ",
  "For emerging and mid-sized pharma, we deliver end-to-end brand strategy and execution. For larger organizations, we complement existing ecosystems—driving innovation, omnichannel excellence, and high-impact strategic initiatives. "
];

const singleButton1 = [{ label: "Read the TRYVIO US Launch Case Study ", type: "primary" }];
const singleButton2 = [
  { label: "Read the Elzonris AOR Case Study ", type: "primary" },
];
const singleButton3=[ { label: "Read the Elzonris AOR Case Study ", type: "primary" }]
export default function page() {
  return (
    <main className="relative " >
      <DynamicHeader
        tagText="STRATEGY & CONSULTING"
        title="Strategy That Adapts to Your Needs "
        paragraphs={strategyParagraphs}
        desktopBg={"/stdeskbg.png"}
         mobileImg={"/stmbl.png"}
      />
      <div className="py-5 w-[90%] md:w-[80%] mx-auto">
        <FeatureSection tagText="Launch and lifecycle" imageSrc="/lifecycle.png" imageAlt="Launch and lifecycle " imagePosition="left"
          paragraphs={[
            "We support brands across the entire spectrum—from launch preparation and tactical planning to ongoing lifecycle management. ",
             "Our strategies are designed to be both comprehensive and flexible. Whether you need end-to-end support or targeted interventions at critical moments, we seamlessly plug in where it matters most.  ",
             "From preparing brands for US launches to enhancing brand presence at congress through interactive experiences and gamification, or transforming key touchpoints into immersive digital experiences, we tailor solutions to your needs—scaling from full-scale strategy to high-impact add-ons. "
          ]}
          buttons={singleButton1}
        />
        <div className="py-5" />
        <FeatureSection tagText="Brand and business" imageSrc="/brandandbusiness.png" imageAlt="Brand and business " imagePosition="right"
          paragraphs={[
           
           "We serve as an Agency of Record for emerging and mid-sized pharma brands—enabling brand launches, delivering practical, cost-effective strategies that drive consistent year-on-year growth never seen before in the brand lifecycle",
            "Our approach is grounded in real-world market dynamics and commercial priorities, ensuring every strategic decision is actionable, efficient, and built for impact.",
            "By combining strategic thinking with executional agility, we help brands maximize value—achieving more through focused investments and smarter decision-making. ",
          ]}
          buttons={singleButton2}
        />
        <div className="py-5" />
        <FeatureSection tagText="OMNICHANNEL" imageSrc="/Omnichannel.png" imageAlt="OMNICHANNEL" imagePosition="left"
          paragraphs={[
           "We serve as an Agency of Record for emerging and mid-sized pharma brands—enabling brand launches, delivering practical, cost-effective strategies that drive consistent year-on-year growth never seen before in the brand lifecycle",
            "Our approach is grounded in real-world market dynamics and commercial priorities, ensuring every strategic decision is actionable, efficient, and built for impact.",
            "By combining strategic thinking with executional agility, we help brands maximize value—achieving more through focused investments and smarter decision-making. "
          ]}
          buttons={singleButton3}
        />
        <div className="py-5" />
        <FeatureSection tagText="Measurement and Optimization" imageSrc="/mesurment.png" imageAlt="Chart Image" imagePosition="right"
          paragraphs={[
           "We help brands measure what matters most translating data into clear insights that guide smarter decisions and improve performance over time. ",
           "From defining the right KPIs to tracking engagement across channels, we ensure every activity is aligned to meaningful outcomes and business goals, through custom built engines and dashboards"
          ]}
          
        />
      </div>
    </main>
  );
}
