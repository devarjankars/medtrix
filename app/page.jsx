"use client";
import Landing from "@/components/Landing";
import OneTeam from "@/components/OneTeam";
import Animation from "@/components/Animation";

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

    </div>
  );
}
