"use client";
import Landing from "@/components/Landing";
import OneTeam from "@/components/OneTeam";
import Animation from "@/components/Animation";

export default function Home() {
  return (
    <div className="w-[100%]  mx-auto">
     <div className="relative w-[90%] md:w-[80%] mx-auto"> <Landing /></div>
      <Animation />
      <div className="mt-24 mb-12 w-[90%] md:w-[80%] mx-auto">
       <span
          className="bg-[#686868] hover:scale-105 text-white text-sm font-bold px-8 py-3 rounded-full transition-transform"
        > ONE TEAM
      </span>
       </div>
    <div className="relative w-[90%] md:w-[80%] mx-auto"> <OneTeam /></div>

    </div>
  );
}
