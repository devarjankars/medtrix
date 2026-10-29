import OneTeam from "@/components/OneTeam";

export const metadata = {
  title: "About Us | MedTrix Healthcare",
  description: "Meet the people behind MedTrix Healthcare.",
};

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto w-[90%] py-12 md:w-[80%] md:py-16">
        <div className="mb-5">
          <div
            className="relative mb-4 mt-4 inline-block max-w-fit rounded-full p-[1px]"
            style={{
              background:
                "linear-gradient(to right, rgba(225,37,27,0.5), transparent 43%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)",
            }}
          >
            <span className="inline-block rounded-full bg-[#0c0606] px-5 py-2 text-[16px] font-bold uppercase text-white">
              One Team
            </span>
          </div>
        </div>
        <OneTeam showCommitment={false} />
      </div>
    </main>
  );
}
