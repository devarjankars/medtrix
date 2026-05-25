"use client";
import Landing from "@/components/Landing";
import OneTeam from "@/components/OneTeam";
import Animation from "@/components/Animation";
import Image from "next/image";
import mapImg from "../public/map.png";

export default function Home() {
  return (
    <div className="w-[100%]  mx-auto">
     <div className="relative bg-black"> <Landing /></div>
      <Animation />
      <div className="mt-24 mb-12 w-[90%] md:w-[80%] mx-auto">
       <span
          className="bg-[#686868] hover:scale-105 text-white text-sm font-bold px-8 py-3 rounded-full transition-transform"
        > ONE TEAM
      </span>
       </div>
    <div className="relative w-[90%] md:w-[80%] mx-auto"> <OneTeam /></div>
    
     <section className=" py-10">
          <h5 className="text-2xl font-bold mb-8 mt-8 text-start w-[90%] md:w-[80%] mx-auto">
            Contact Us
            </h5>
             <div className="w-full px-6 lg:px-1 flex flex-col items-center py-10   gap-4">
          <Image src={mapImg} alt="Contact Locations" className="w-full object-contain" />
          <button className="mt-8 px-10 py-4 bg-[#FF3B3B] text-white rounded-full text-lg font-medium hover:bg-red-600 transition-all duration-300">
            Contact Us
          </button>
          </div>
        </section>

    </div>
  );
}
