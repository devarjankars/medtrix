import Link from "next/link";
import heder from "../../../public/work4.png";

export default function NestleGlobalHcp() {
  return (
     <main className="relative w-[90%] md:w-[80%] mx-auto">
    
          {/* ── HERO ─────────────────────────────────────────────────────────── */}
          <section className=" ">
           
            <div className="py-10" />
            
               <div className=" relative inline-block rounded-full max-w-fit p-[1px]" style={{ background: 'linear-gradient(to right, rgba(225,37,27,0.5), transparent 53%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)' }}> <span className="inline-block text-[14px] font-bold tracking-[0.15em] uppercase text-[#FFF] bg-[#0c0606] px-4 py-1.5 rounded-full">AMI Essentials 3D Facial Anatomy App </span> </div>
    
    
            <div className=" py-10">
    
              <h1 className="text-4xl md:text-4xl font-medium leading-tight ">
              Nestlé Health Science Global HCP
              </h1>
              <img src={heder.src} alt="" srcset="" className=" w-full  mt-5 mb-5" />
            </div>
          </section>
    
          
    
          
        
    
         
    
        </main>
  );
}
