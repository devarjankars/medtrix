import Link from "next/link";
import heder from "../../../public/3dAmi.png";
import lineDesign from "../../../public/AMIline_Design.png"
import Image from "next/image";


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
      <section className="py-20">
      <div className="inline-flex px-6 py-3 rounded-full bg-[#292424] lg:mb-8 text-white tracking-[4px] text-sm font-bold uppercase bg-[linear-gradient(to_right,_rgba(255,255,255,0.2),_rgba(0,0,0,0.4))] border border-[#2A2525]">
        Challenge
      </div>
        <Image
          src={lineDesign}
          alt="challenge"
          className="w-[90%] h-auto object-contain mb mb-8 "
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
    </main>
  );
}
