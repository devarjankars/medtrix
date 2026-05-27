"use client";
import { useEffect, useRef, useState } from "react";
import DynamicHeader from "@/components/DynamicHeader";
import FeatureSection from "@/components/FeatureSection";

/* ── tiny hook: fires once when element enters viewport ── */
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ── animated counter ── */
function Counter({ target, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.5);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── section number badge ── */
function SectionBadge({ number }) {
  return (
    <div className="hidden lg:flex absolute -left-14 top-0 w-9 h-9 rounded-full border border-[#2c2222] items-center justify-center text-[#E1251B] text-xs font-bold opacity-50">
      {String(number).padStart(2, "0")}
    </div>
  );
}

const strategyParagraphs = [
  "We partner with healthcare brands across stages and scales—serving as an Agency of Record for some, while enabling others through flexible, decoupled engagement models.",
  "For emerging and mid-sized pharmas, we deliver end-to-end brand strategy and execution. For larger organizations, we complement existing ecosystems—driving innovation, omnichannel excellence, and high-impact strategic initiatives.",
];
const singleButton1 = [{ label: "Explore our AOR partnership", type: "primary" }];
const singleButton2 = [
  { label: "Explore a full-scale launch strategy", type: "primary" },
  { label: "See an add-on", type: "secondary" },
];

/* ── stats shown between header and sections ── */
const stats = [
  { value: 10, suffix: "+", label: "Years of omnichannel expertise" },
  { value: 50, suffix: "+", label: "Healthcare brands served" },
  { value: 3,  suffix: "x",  label: "Average ROI improvement" },
];

export default function Services() {
  return (
    <main className="relative w-[90%] md:w-[80%] mx-auto">

      {/* ── subtle animated dot-grid background ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <DynamicHeader
        tagText="STRATEGY & CONSULTING"
        title="Strategy That Adapts to Your Needs"
        paragraphs={strategyParagraphs}
        graphicSrc="/servicesHeader.png"
      />

      {/* ── animated stats strip ── */}
      <div className="relative z-10 grid grid-cols-3 gap-6 py-10 border-y border-[#1e1e1e] my-4">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-1 text-center">
            <span className="text-3xl md:text-4xl font-bold text-white">
              <Counter target={s.value} suffix={s.suffix} />
            </span>
            <span className="text-[#666] text-xs tracking-widest uppercase">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── feature sections ── */}
      <div className="relative z-10 py-10">

        <div className="relative lg:pl-20">
          <SectionBadge number={1} />
          <FeatureSection
            tagText="Brand and Business Strategy"
            imageSrc="/servicesBrand.png"
            imageAlt="Brand Strategy Image"
            imagePosition="left"
            paragraphs={[
              "We serve as an Agency of Record for emerging and mid-sized pharma brands—enabling brand launches, delivering practical, cost-effective strategies that drive consistent year-on-year growth never seen before in the brand lifecycle.",
              "Our approach is grounded in real-world market dynamics and commercial priorities, ensuring every strategic decision is actionable, efficient, and built for impact.",
              "By combining strategic thinking with executional agility, we help brands maximize value—achieving more through focused investments and smarter decision-making.",
            ]}
            buttons={singleButton1}
          />
        </div>

        <div className="py-6" />

        <div className="relative lg:pl-20">
          <SectionBadge number={2} />
          <FeatureSection
            tagText="Launch and Lifecycle"
            imageSrc="/lunchandlifecycle.png"
            imageAlt="Launch and Lifecycle"
            imagePosition="right"
            paragraphs={[
              "We support brands across the entire spectrum—from launch preparation and tactical planning to ongoing lifecycle management.",
              "Our strategies are designed to be both comprehensive and flexible. Whether you need end-to-end support or targeted interventions at critical moments, we seamlessly plug in where it matters most.",
              "From preparing brands for US launches to enhancing brand presence at congress through interactive experiences and gamification, or transforming key touchpoints into immersive digital experiences, we tailor solutions to your needs.",
            ]}
            buttons={singleButton2}
          />
        </div>

        <div className="py-6" />

        <div className="relative lg:pl-20">
          <SectionBadge number={3} />
          <FeatureSection
            tagText="OMNICHANNEL"
            imageSrc="/lunchandlifecycle.png"
            imageAlt="Omnichannel"
            imagePosition="left"
            paragraphs={[
              "For the past 10 plus years, we have been pioneers in omnichannel approaches that bring together channels, content, and data into a connected brand experience ensuring every interaction feels relevant, timely, and consistent.",
              "Built on a strong understanding of HCPs, patients, and stakeholders, we map key journeys and identify the moments that influence decisions—aligning engagement across channels to improve reach and effectiveness.",
            ]}
            buttons={[]}
          />
        </div>

        <div className="py-6" />

        <div className="relative lg:pl-20">
          <SectionBadge number={4} />
          <FeatureSection
            tagText="Measurement and Optimization"
            imageSrc="/Chart.png"
            imageAlt="Chart Image"
            imagePosition="right"
            paragraphs={[
              "We help brands measure what matters most translating data into clear insights that guide smarter decisions and improve performance over time.",
              "From defining the right KPIs to tracking engagement across channels, we ensure every activity is aligned to meaningful outcomes and business goals, through custom built engines and dashboards.",
            ]}
            buttons={[]}
          />
        </div>

      </div>
    </main>
  );
}
