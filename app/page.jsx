"use client";
import Landing from "@/components/Landing";
import OneTeam from "@/components/OneTeam";
import Animation from "@/components/Animation";
import Image from "next/image";
import mapImg from "../public/map.png";
import mobile_map from "../public/mobile_map.png";
export default function Home() {
  return (
    <div className="w-[100%]  mx-auto">
     <div className="relative bg-black"> <Landing /></div>
      <Animation />
      <div className=" lg:mb-12 mb-[50px] lg:mt-[110px] mt-[50px] w-[90%] md:w-[80%] mx-auto ">
       <span
          className="inline-flex px-6 py-3 rounded-full bg-[#2A2525] lg:mb-8 text-white tracking-[4px] text-sm font-bold uppercase bg-[linear-gradient(to_right,_rgba(255,255,255,0.2),_rgba(0,0,0,0.4))] border border-[#2A2525]"
        > ONE TEAM
      </span>
       </div>
    <div className="relative w-[90%] md:w-[80%] mx-auto"> <OneTeam /></div>
    
     <section className=" py-10">
          <h5 className="text-2xl font-bold mb-8 mt-8 text-start w-[90%] md:w-[80%] mx-auto">
            Contact Us
            </h5>
             <div className="w-full px-6 lg:px-1 flex flex-col items-center py-10   gap-4">
          <Image src={mapImg} alt="Contact Locations" className="w-full hidden lg:block object-contain" />
          <Image src={mobile_map} alt="Contact Locations" className="w-full lg:hidden object-contain" />

          <button className="mt-8 px-8 py-2 bg-[#FF3B3B] text-white rounded-full text-lg font-medium hover:bg-red-600 transition-all duration-300">
            Contact Us
          </button>
          </div>
        </section>

    </div>
  );
}
