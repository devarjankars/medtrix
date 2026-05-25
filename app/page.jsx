import Landing from "@/components/Landing";
import OneTeam from "@/components/OneTeam";
import Animation from "@/components/Animation";

export default function Home() {
  return (
    <>
      <Landing />
      <Animation />
      <div className="mt-4 mb-12">
       <span
          className="bg-[#686868] hover:scale-105 text-white text-sm font-bold px-8 py-3 rounded-full transition-transform"
        > ONE TEAM
      </span>
       </div>
      <OneTeam />

    </>
  );
}
