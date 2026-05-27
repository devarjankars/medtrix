import Link from "next/link";
import heder from "../../../public/3dAmi.png";
import lineDesign from "../../../public/AMIline_Design.png"

import linembldesign  from "../../../public/AmiLinemblDesign.png"
import recognitions  from "../../../public/recognitions.png"
import Slider from "@/components/Slider";
import Image from "next/image";
import img1 from "../../../public/slider1.png";

import TestimonialSlider from "@/components/TestimonialSlider";
// import img2 from "../../../public/slider2.webp";
// import img3 from "../../../public/slider3.webp";
const testimonials = [
  {
    text:
      "The team at MedTrix has proven to be incredibly easy to work with, consistently pushing themselves to meet deadlines even in the face of a dynamic environment that introduced unforeseen changes. I am extremely impressed with their dedication and professionalism and look forward to continuing our collaboration with MedTrix in the future.",

    role: "Associate Director",

    location: "Digital (US)",
  },

  {
    text:
      "The team at MedTrix is truly exemplary, exhibiting utmost professionalism, responsiveness, and proactivity. Working with them has been an absolute pleasure, as they consistently collaborate to find innovative solutions and continuously surpass our expectations. I’m looking forward to collaborating on more projects together in the future! ",

    role: "Associate Director",

    location: "Digital (US)",
  },

  {
    text:
      "The team at MedTrix has proven to be incredibly easy to work with, consistently pushing themselves to meet deadlines even in the face of a dynamic environment that introduced unforeseen changes. I am extremely impressed with their dedication and professionalism and look forward to continuing our collaboration with MedTrix in the future.",

    role: "AMI Digital Specialist",

    location: "(Southeast Europe)",
  },
];
const cadaverSlides = [
  {
    image: img1,

    leftText:
      "Our team of experts explored photogrammetry to digitally reconstruct a cadaver dissection procedure in a laboratory. This created a photorealistic 3D cadaver model with a high degree of realism. The planning process involved studying the photogrammetry process and applications required to generate 3D models with natural texture and almost no manual image manipulation. ",

    rightText:
      "The application was developed using Unity to seamlessly incorporate a detailed 3D model with a high polycount mesh and visually impressive, high-resolution image textures. It caters to both Android and IOS users, ensuring compatibility across various smartphones and tablets. ",
  },

 {
    image: img1,

    leftText:
      "Our team of experts explored photogrammetry to digitally reconstruct a cadaver dissection procedure in a laboratory. This created a photorealistic 3D cadaver model with a high degree of realism. The planning process involved studying the photogrammetry process and applications required to generate 3D models with natural texture and almost no manual image manipulation. ",

    rightText:
      "The application was developed using Unity to seamlessly incorporate a detailed 3D model with a high polycount mesh and visually impressive, high-resolution image textures. It caters to both Android and IOS users, ensuring compatibility across various smartphones and tablets. ",
  },

  {
    image: img1,

    leftText:
      "Our team of experts explored photogrammetry to digitally reconstruct a cadaver dissection procedure in a laboratory. This created a photorealistic 3D cadaver model with a high degree of realism. The planning process involved studying the photogrammetry process and applications required to generate 3D models with natural texture and almost no manual image manipulation. ",

    rightText:
      "The application was developed using Unity to seamlessly incorporate a detailed 3D model with a high polycount mesh and visually impressive, high-resolution image textures. It caters to both Android and IOS users, ensuring compatibility across various smartphones and tablets. ",
  },
];


export default function IdorsiaStrategy() {
  return (
     <main className="relative w-[90%] md:w-[80%] mx-auto">
          <section className=" ">
            <div className="py-10" />
               <div className=" relative inline-block rounded-full max-w-fit p-[1px]" style={{ background: 'linear-gradient(to right, rgba(225,37,27,0.5), transparent 53%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)' }}> <span className="inline-block text-[14px] font-bold tracking-[0.15em] uppercase text-[#FFF] bg-[#0c0606] px-4 py-1.5 rounded-full">AMI Essentials 3D Facial Anatomy App </span> </div>
            <div className=" py-10">
              <h1 className="text-4xl md:text-4xl font-medium leading-tight ">
                Idorsia: Building Strategy for TRYVIO
              </h1>
              <img src={heder.src} alt="" srcset="" className=" w-full  mt-5 mb-5" />
            </div>
          </section>
      <section  className=" relative py-20">
      <div className="inline-flex px-6 py-3 rounded-full bg-[#292424] lg:mb-8 text-white tracking-[4px] text-sm font-bold uppercase bg-[linear-gradient(to_right,_rgba(255,255,255,0.2),_rgba(0,0,0,0.4))] border border-[#2A2525]">
        Challenge
      </div>
        <Image
          src={lineDesign}
          alt="challenge"
          className=" hidden  md:block w-[95%]  h-auto object-contain  mb-8 "
          priority
        />
        <Image
          src={linembldesign}
          alt="challenge"
          className=" block  md:hidden  h-auto object-contain    mt-15"
          priority
        />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[60px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at bottom, rgba(0,106,128,0.4) 0%, transparent 80%)',
        }}
      />
      </section>
      <section className="relative py-20">
        <div className="inline-flex px-6 py-3 rounded-full bg-[#292424] lg:mb-8 text-white tracking-[4px] text-sm font-bold uppercase bg-[linear-gradient(to_right,_rgba(255,255,255,0.2),_rgba(0,0,0,0.4))] border border-[#2A2525]">
        Our Solution
      </div>
       <>
      <Slider
        title="OUR SOLUTION"
        slides={cadaverSlides}
      />

          <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[60px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at bottom, rgba(0,106,128,0.4) 0%, transparent 80%)',
        }}
      />
    </>

      </section>
       <section className="relative py-20">
        <div className="inline-flex px-6 py-3 rounded-full bg-[#292424] lg:mb-8 text-white tracking-[4px] text-sm font-bold uppercase bg-[linear-gradient(to_right,_rgba(255,255,255,0.2),_rgba(0,0,0,0.4))] border border-[#2A2525]">
        THE RESULT
      </div>
       <div className="border-[1px] border-gray-700 rounded-2xl px-2  md:px-20 py-6 mt-6 mb-4=6">
        <div  className=" flex flex-col gap-10 text-[24px] text-[#A6A6A6] px-2 py-10">
          <p>The app allowed aesthetic specialists to interact with a virtual cadaver using intuitive touch gestures to explore facial 
            layers, labels, and dissection videos. The app garnered significant attention as <b className="text-[#FFF]">Key Opinion Leaders (KOLs)</b> offered 
            a sneak peek during the Aesthetic and Anti-Aging Medicine World Congress and several AMI Summits, generating
             overwhelmingly positive feedback from healthcare professionals worldwide. </p>
          <p>Following a highly successful launch, the <b className="text-[#FFF]">AMI Essentials 3D Facial Anatomy App</b> has been rolled out across North America, 
            South America, Europe, Asia, and Australia, supporting global medical education initiatives at scale. Today, 
            the platform has registered over <b className="text-[#FFF]">12,000 healthcare professionals (HCPs)</b>, reinforcing its value as an 
            innovative and accessible training solution for aesthetic specialists around the world. </p>
         </div>
         
       </div>
       <div className=" w-full flex  justify-center  py-12">
           <h5 className="text-[#FFF] font-semibold  text-4xl"><span className="text-red-500">The</span> Recognitions</h5>
       </div>
       <div className=" flex items-center justify-center">
          <Image
          src={recognitions}
          alt="recognitions"
          className=" w-[70%] md:w-[50%] "
          priority
        />
       </div>
         <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[60px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at bottom, rgba(0,106,128,0.4) 0%, transparent 80%)',
        }}
      />
      </section>
       <section className="relative py-20">
        <div className="inline-flex px-6 py-3 rounded-full bg-[#292424] lg:mb-8 text-white tracking-[4px] text-sm font-bold uppercase bg-[linear-gradient(to_right,_rgba(255,255,255,0.2),_rgba(0,0,0,0.4))] border border-[#2A2525]">
        Client Testimonial
      </div>

      <div>
        <TestimonialSlider
      items={testimonials}
      autoPlay={true}
      delay={3000}
    />
      </div>
        <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[60px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at bottom, rgba(0,106,128,0.4) 0%, transparent 80%)',
        }}
      />
      </section>
      
    </main>
  );
}
