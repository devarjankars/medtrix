"use client";

import { useState } from "react";
import Link from "next/link";
import DynamicHeader from "@/components/DynamicHeader";

const stepIconPaths = {
  shield: ["M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z", "m9 12 2 2 4-4"],
  search: ["m21 21-4.35-4.35", "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"],
  sparkles: ["m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z", "m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z"],
  message: ["M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"],
  layout: ["M3 3h8v8H3z", "M13 3h8v5h-8z", "M13 10h8v11h-8z", "M3 13h8v8H3z"],
  layers: ["m12 2 9 5-9 5-9-5 9-5Z", "m3 12 9 5 9-5", "m3 17 9 5 9-5"],
  file: ["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", "M14 2v6h6", "m9 15 2 2 4-4"],
};

function StepIcon({ name, size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {stepIconPaths[name].map((path) => <path key={path} d={path} />)}
    </svg>
  );
}

function Chevron({ direction = "right", size = 20, className = "" }) {
  const path = direction === "down" ? "m6 9 6 6 6-6" : "m9 6 6 6-6 6";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

const metrics = [
  {
    prefix: "Up to",
    value: "60%",
    description: "Faster content production",
  },
  {
    prefix: "Up to",
    value: "50%",
    description: "Reduction in repetitive production effort",
  },
  {
    prefix: "Up to",
    value: "40%",
    description: "Reduction in content rework through AI-powered MLR review",
  },
  {
    prefix: "",
    value: "~50%",
    description: "Overall cost savings",
  },
];
const products = [
  {
    name: "Storyboard",
    title: "From source content to an editable first draft",
    button: "Watch Cipher create a storyboard",
    image: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/cipherStoryboard.png",
    descriptions: [
      "Cipher helps transform briefs and validated source information into structured first-draft storyboards.",
      "The CIPHER-Storyboard retrieves relevant information from the knowledge repository and uses generative AI to organize it within the required communication framework or template.",
      "The resulting storyboard remains editable, allowing medical writers/editors to review, refine, and optimize the narrative while maintaining visibility to the supporting source information.",
    ],
  },
  {
    name: "Email",
    title: "From approved storyboard to channel-ready email",
    button: "Watch Cipher create an email",
    image: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/cipherEmail.png",
    descriptions: [
      "Cipher transforms approved storyboards into <b>channel-ready emails</b>, using brand-defined templates, reusable modules, and approved content to maintain consistency from narrative to final execution.",
      "Built for pharma workflows, it can incorporate <b>client- and brand-specific MLR requirements</b>, generate downloadable <b>VSBs for MLR submission</b>, and produce HTML tested across commonly used channels, including <b>SFMC and Veeva</b>.",
      "Reduces repetitive production effort, minimizes downstream corrections, and accelerates deployment.",
    ],
  },
  {
    name: "Banner",
    title: "Scale campaign content across formats",
    button: "Watch Cipher create a banner",
    image: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/cipherBanner.png",
    descriptions: [
      "Cipher transforms approved content and creative direction into <b>channel-ready digital banners</b> across multiple formats and dimensions.",
      "Built for pharma advertising, it can optimize banners to <b>commonly used media specifications</b> and incorporate <b>ISI, fair balance, prescribing information links, legal disclaimers, and other mandatory regulatory elements</b>.",
    ],
  },
  {
    name: "Video",
    title: "AI-enabled workflows across video development",
    button: "Watch Cipher create a video",
    image: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/cipherVideo.png",
    descriptions: [
      "Cipher brings AI into the video development process—from early-stage concept and scripting through storyboarding and production support.",
      "AI can assist with scripts, visual storyboards, voice, imagery, animation concepts, and other production elements, while medical, creative, and production specialists retain control over scientific accuracy, storytelling, brand alignment, and final execution.AI can assist with scripts, visual storyboards, voice, imagery, animation concepts, and other production elements, while medical, creative, and production specialists retain control over scientific accuracy, storytelling, brand alignment, and final execution.",
      "This creates opportunities to develop video content faster and explore a broader range of creative approaches without removing expert oversight from the process.",
    ],
  },
  {
    name: "Review (MLR Catalyst)",
    title: "Review intelligence built into the workflow",
    button: "Watch Cipher simplify review",
    image: "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/cipherReview.png",
    descriptions: [
      "Cipher Review brings review intelligence earlier into content development, helping reduce the time and repetitive effort involved in MLR/PRC review.",
      "Grounded in a validated, <b>brand-specific knowledge bank,</b> it can validate claims and references, identify inconsistencies, and flag areas requiring expert attention. <b>MLR reviewer personas</b> and brand-specific requirements further help anticipate potential review considerations before formal submission.",
      "By automating repetitive checks, Cipher enables reviewers to <b>focus on areas requiring expert judgment</b>, helping reduce avoidable review cycles.",
    ],
  },
];

function renderDescription(description) {
  const emphasisPattern = /<(b|strong|i|em)>(.*?)<\/\1>/gi;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = emphasisPattern.exec(description)) !== null) {
    if (match.index > lastIndex) {
      parts.push(description.slice(lastIndex, match.index));
    }

    const isBold = match[1].toLowerCase() === "b" || match[1].toLowerCase() === "strong";
    parts.push(
      isBold ? (
        <strong key={match.index} className="font-semibold text-white">{match[2]}</strong>
      ) : (
        <em key={match.index} className="italic text-[#d4d0d0]">{match[2]}</em>
      ),
    );
    lastIndex = emphasisPattern.lastIndex;
  }

  if (lastIndex < description.length) {
    parts.push(description.slice(lastIndex));
  }

  return parts;
}

function PlayCircle({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m10 8 6 4-6 4V8Z" />
    </svg>
  );
}

function CipherLogo() {
  return (
    <img
      src="/cipher-logo.png"
      alt="Cipher"
      className="h-7 w-[100px] shrink-0 object-contain sm:h-9 sm:w-[128px]"
    />
  );
}

const steps = [
  { number: "01", label: <>VALIDATED<br />KNOWLEDGE</>, icon: "shield" },
  { number: "02", label: <>TRACEABLE<br />INFORMATION</>, icon: "search" },
  { number: "03", label: <>AI CONTENT<br />DEVELOPMENT</>, icon: "sparkles" },
  { number: "04", label: <>GENERATIVE<br />DESIGN</>, icon: "message" },
  { number: "05", label: <>AI-ASSISTED<br />PRODUCTION</>, icon: "layout" },
  { number: "06", label: <>REVIEW</>, icon: "layers" },
  { number: "07", label: <>VALIDATION</>, icon: "file" },
];

export default function CipherPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex];

  return (
    <main className="relative overflow-hidden bg-black text-white">
      <DynamicHeader
        tagImageSrc="https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/product-hunt-label.png"
        tagImageAlt="Product Hunt"
        title={
          <>
            <span className="block whitespace-nowrap text-[clamp(20px,6vw,36px)] leading-[1.25] lg:text-inherit lg:leading-inherit">Decoding complexity.</span>
            <span className="block whitespace-nowrap text-[clamp(20px,6vw,36px)] leading-[1.25] lg:text-inherit lg:leading-inherit">Catalyzing healthcare.</span>
          </>
        }
        paragraphs={[
          "The content for pharma owes responsibility and commitment to patients. It must be scientifically validated, visually captivating, delivered in innovative formats, and now has to be produced faster and at lower cost than ever. It is a complex undertaking and involves multiple teams, multiple handoffs, and multiple review cycles.",
        ]}
        contentAfterParagraphs={
          <div className="flex flex-col gap-3">
            <p className="text-base font-bold leading-snug text-white lg:text-lg">
              <span className="text-[#ff3034]">CIPHER</span> is an integrated multicomponent solution.
            </p>
            <p className="text-[16px] leading-[130%] text-[#d1d5db] lg:text-[19px]">
              Cipher builds on our years of expertise in pharma communications and reflects a pharma-specific application of AI expertise — and is already being used to deliver a variety of content in pilot and live client projects.
            </p>
          </div>
        }
        cta={{ label: "Book a Demo", href: "/contact" }}
        desktopBg="https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/cipherDesk_v2.png"
        mobileImg="https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/cipherMobile.png"
      />

      <section className="relative overflow-hidden bg-black py-16 text-white lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-16 w-full -translate-x-1/2 rounded-full"
          style={{ background: "radial-gradient(ellipse at bottom, rgba(225,37,27,0.35) 0%, transparent 80%)" }}
        />
        
      <div className="relative z-10 mx-auto w-[90%] py-5 md:w-[80%]">
        {/* Section heading */}
        <div className="mb-8  inline-flex rounded-full bg-[#292929] px-5 py-4">
          <span className="text-xs font-semibold tracking-[0.25em] sm:text-sm">
            HOW CIPHER WORKS
          </span>
        </div>

        {/* Image and description */}
        <div className="mb-11 grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:gap-16">
          {/* Workflow illustration */}
          <div className="flex min-h-[280px] items-center justify-start overflow-hidden p-4 sm:min-h-[340px] sm:p-6 md:min-h-0 md:px-0 md:py-0">
            <img
              src="https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/ciphar_Iv1.png"
              alt="Cipher platform workflow"
              className="relative z-10 h-auto max-h-[420px] w-full object-contain object-left"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col justify-center text-left border-t border-[#383838] pt-6 md:border-l md:border-t-0 md:py-0 md:pl-8 lg:pl-16">
            <p className="mb-4 text-base leading-[1.9] tracking-[-0.025em] text-[#eeeeee] sm:text-lg">
              AI systems synthesize information grounded in approved sources,
              ensuring every claim is traceable to its reference.
            </p>

            <p className="mb-4 text-base leading-[1.9] tracking-[-0.025em] text-[#eeeeee] sm:text-lg">
              Generative design workflows turn that content into scientifically
              precise, on-brand visuals, layouts, and designs.
            </p>

            <p className="text-base leading-[1.9] tracking-[-0.025em] text-[#eeeeee] sm:text-lg">
              AI-assisted development and custom-built components then
              transform the content and designs into pharma-specific digital
              formats.
            </p>
          </div>
        </div>

        {/* Workflow panel */}
        <div className="rounded-[24px] border border-[#302d2d] bg-[radial-gradient(ellipse_at_65%_110%,rgba(255,45,45,0.045),transparent_45%),#100e0e] px-5 py-8 sm:px-8 sm:py-10 lg:px-11 lg:py-12">
          <p className="mb-9 text-base leading-relaxed tracking-[-0.02em] sm:text-lg">
            From approved source to finished deliverable. Content, design, and
            code in one system.
          </p>
                <div className="w-full">
      {/* DESKTOP: horizontal workflow */}
      <div className="hidden sm:block">
        <div className="grid grid-cols-7">
          {steps.map(({ number, label, icon }, index) => {
            const active = index >= 4;
            const redConnector = index >= 3;

            return (
              <div
                key={number}
                className="relative flex min-w-0 flex-col items-center text-center"
              >
                {/* Connector: runs from one circle's center to the next */}
                {index < steps.length - 1 && (
                  <div className="pointer-events-none absolute left-1/2 right-[-50%] top-[55px] z-0 h-px">
                    <div
                      className={`absolute inset-0 ${
                        redConnector ? "bg-[#ff3030]" : "bg-[#777777]"
                      }`}
                    />

                    {/* Arrowhead sits ON the line, halfway between circles */}
                    <Chevron
                      size={19}
                      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
                        redConnector ? "text-[#ff3030]" : "text-[#999999]"
                      }`}
                    />
                  </div>
                )}

                {/* Icon circle */}
                <div
                  className={`relative z-10 flex h-[112px] w-[112px] shrink-0 items-center justify-center rounded-full border-2 ${
                    active
                      ? "border-[#ff3030] bg-[#ff3030] text-white shadow-[0_0_30px_9px_rgba(255,48,48,0.38)]"
                      : "border-[#393536] bg-[#100e0e] text-white"
                  }`}
                >
                  <StepIcon name={icon} size={24} />
                </div>

                <span className="mt-8 text-[22px] font-bold leading-none tracking-wider text-[#ff3030]">
                  {number}
                </span>

                <span className="mt-4 px-1 text-sm font-semibold leading-[1.5] tracking-[0.06em] text-white lg:text-base">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* MOBILE: vertical workflow */}
      <div className="sm:hidden">
        {steps.map(({ number, label, icon }, index) => {
          const active = index >= 4;
          const redConnector = index >= 3;
          const last = index === steps.length - 1;

          return (
            <div
              key={number}
              className={`relative flex min-h-[176px] gap-8 ${
                last ? "min-h-[100px]" : ""
              }`}
            >
              {/* Vertical line and arrow between circles */}
              {!last && (
                <div className="pointer-events-none absolute left-[43px] top-[88px] h-[88px] w-px">
                  <div
                    className={`absolute inset-0 ${
                      redConnector ? "bg-[#ff3030]" : "bg-[#777777]"
                    }`}
                  />

                  {/* Downward chevron centered on the line */}
                  <Chevron
                    direction="down"
                    size={25}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
                      redConnector ? "text-[#ff3030]" : "text-[#999999]"
                    }`}
                  />
                </div>
              )}

              {/* Icon */}
              <div
                className={`relative z-10 flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-full border-2 ${
                  active
                    ? "border-[#ff3030] bg-[#ff3030] text-white shadow-[0_0_30px_9px_rgba(255,48,48,0.38)]"
                    : "border-[#393536] bg-[#100e0e] text-white"
                }`}
              >
                <StepIcon name={icon} size={28} />
              </div>

              {/* Text */}
              <div className="flex flex-col pt-2">
                <span className="text-xl font-bold leading-none text-[#ff3030]">
                  {number}
                </span>

                <span className="mt-3 text-lg font-semibold leading-snug tracking-wide text-white">
                  {label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
         
        </div>
      </div>
    </section>
      <section className="relative overflow-hidden bg-black py-16 text-white lg:py-24">
      {/* Bottom red ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-16 w-full -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(ellipse at bottom, rgba(225,37,27,0.35) 0%, transparent 80%)" }}
      />

      <div className="relative mx-auto w-[90%] py-5 md:w-[80%]">
        {/* Section label */}
        <div className="mb-6">
          <span className="inline-flex rounded-full bg-[#292929] px-6 py-4 text-xs font-semibold tracking-[0.22em] text-white sm:text-sm">
            MEASURABLE BUSINESS IMPACT
          </span>
        </div>

        {/* Introduction */}
        <p className="mb-10 max-w-none text-base  tracking-[-0.025em] text-[#eeeeee] sm:text-lg lg:mb-8 lg:text-[23px] ">
          By integrating AI across content development, production, and review,
          Cipher is designed to deliver measurable improvements in speed,
          efficiency, quality, and cost.
        </p>

        {/* Metric cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.value}
              className="group min-h-[230px] rounded-xl border border-[#292626] bg-gradient-to-br from-[#1c1919] via-[#171414] to-[#0d0b0b] px-7 py-7 transition-colors duration-300 hover:border-[#443030] sm:min-h-[245px] lg:px-[34px] lg:py-8"
            >
              {/* Red accent */}
              <div className="mb-5 h-[3px] w-[38px] bg-[#ff3038]" />

              {/* Optional prefix */}
              {metric.prefix && (
                <p className="mb-1 text-base text-[#858181] sm:text-lg">
                  {metric.prefix}
                </p>
              )}

              {/* Metric */}
              <h3 className="mb-3 text-[48px] font-medium leading-[1.1] tracking-[-0.045em] text-white sm:text-[52px] lg:text-[56px]">
                {metric.value}
              </h3>

              {/* Description */}
              <p className="max-w-[280px] text-base leading-[1.65] text-[#898585] sm:text-lg">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
     <section className="relative overflow-hidden bg-[#090403] py-10 font-sans text-white lg:py-14">
      {/* Ambient red glow */}
     
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-16 w-full -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(ellipse at bottom, rgba(225,37,27,0.35) 0%, transparent 80%)" }}
      />

      <div className="relative mx-auto w-[90%] py-5 md:w-[80%]">
        {/* Section label */}
        <div className="mb-6">
          <span className="inline-flex rounded-full bg-[#292929] px-5 py-2.5 text-xs font-semibold tracking-[0.22em] text-white sm:text-sm">
            CIPHER CAPABILITIES
          </span>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Cipher capabilities"
          className="mb-6 grid grid-cols-3 items-center gap-2.5 rounded-[20px] border border-[#302d2d] bg-[#1b1b1b] p-3 sm:gap-4 sm:p-4 lg:mb-8 lg:flex lg:gap-1 lg:rounded-full lg:p-1.5"
        >
          {products.map((product, index) => (
            <button
              key={product.name}
              id={`product-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls="product-panel"
              onClick={() => setActiveIndex(index)}
              className={`min-h-10 whitespace-nowrap rounded-full border px-3 py-2.5 text-[13px] transition-colors duration-200 sm:px-5 sm:text-base lg:min-h-10 lg:flex-1 lg:border-transparent lg:px-5 ${index === products.length - 1 ? "col-span-2 justify-self-start lg:justify-self-auto" : ""} ${
                activeIndex === index
                  ? "border-[#ff3034] bg-[#ff3034] font-semibold text-white"
                  : "border-[#393939] text-[#e7e7e7] hover:bg-white/5"
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Main product card */}
        <div
          id="product-panel"
          role="tabpanel"
          aria-labelledby={`product-tab-${activeIndex}`}
          className="rounded-[28px] border border-[#302d2d] bg-[#1b1b1b] p-5 sm:p-6 lg:rounded-[28px] lg:p-5"
        >
          {/* Hero image */}
          <div className="relative min-w-0 lg:aspect-[2.3/1] lg:overflow-hidden lg:rounded-[18px] lg:bg-[#080909]">
            <img
              key={activeProduct.image}
              src={activeProduct.image}
              alt={`${activeProduct.name} capability`}
              className="block aspect-[1.8] w-full rounded-[14px] object-cover object-center lg:absolute lg:inset-0 lg:h-full lg:rounded-none"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            {/* Readability overlay */}
            <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-black via-black/75 to-transparent lg:block" />

            {/* Hero content */}
            <div className="relative z-10 pt-5 text-center lg:text-left lg:absolute lg:inset-y-0 lg:left-0 lg:flex lg:w-[48%] lg:max-w-[560px] lg:items-center lg:px-10 lg:py-8">
              <div>
              <div className="mb-4 flex flex-wrap items-center justify-center gap-2.5 lg:mb-6 lg:justify-start">
                <CipherLogo />
                <span className="text-xl text-white sm:text-2xl lg:text-[clamp(20px,1.8vw,32px)]">
                  {activeProduct.name}
                </span>
              </div>

              <h2 className="mb-5 text-xl font-medium leading-[1.4] tracking-[-0.025em] sm:text-[28px] lg:text-[clamp(24px,2.2vw,40px)]">
                {activeProduct.title}
              </h2>

              {activeIndex === products.length - 1 && (
                <Link
                  href="/MLR-Catalyst"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ff3034] px-5 py-3 text-xs font-semibold text-white shadow-[0_5px_24px_rgba(255,48,52,0.18)] transition hover:bg-[#e92228] sm:text-[13px]"
                >
                  <PlayCircle size={16} />
                  {activeProduct.button}
                </Link>
              )}
              </div>
            </div>
          </div>

          {/* Three descriptions */}
          <div className="grid grid-cols-1 gap-6 pt-6 lg:grid-cols-3 lg:gap-6 lg:px-2 lg:pb-8 lg:pt-7">
            {activeProduct.descriptions.map((description, index) => (
              <div key={`${activeProduct.name}-${index}`}>
                <span className="mb-3 block text-[36px] sm:text-[44px] font-light leading-none tracking-[-0.04em] text-[#ff3034]">
                  0{index + 1}
                </span>

                <p className="text-[15px] leading-[1.65] text-[#999595] sm:text-lg lg:text-[clamp(15px,1.15vw,20px)]">
                  {renderDescription(description)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center sm:mt-8">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#ff3034] px-6 py-3 text-xs font-semibold text-white shadow-[0_6px_24px_rgba(255,48,52,0.3)] transition hover:bg-[#e92228] sm:text-[13px]"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
    </main>
  );
}
