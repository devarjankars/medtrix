"use client";

import { useState } from "react";
import JobCard from "@/components/JobCard";
import JobDetailsCard from "@/components/JobDetailsCard";
import { jobsData } from "@/Data/jobs";

export default function OpenPositionsPage() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <section className="w-[90%] md:w-[80%] mx-auto py-10">

        {selectedJob ? (
          <JobDetailsCard job={selectedJob} onBack={() => setSelectedJob(null)} />
        ) : (
          <>
            {/* ── Badge ── */}
            <div
              className="relative inline-block rounded-full max-w-fit p-[1px] mb-10"
              style={{
                background:
                  "linear-gradient(to right, rgba(225,37,27,0.5), transparent 43%), linear-gradient(to left, rgba(225,37,27,0.5), transparent 33%)",
              }}
            >
              <span className="inline-block text-[14px] font-bold uppercase text-[#FFF] bg-[#0c0606] px-5 py-2 rounded-full">
                Careers
              </span>
            </div>

            {/* ── Heading ── */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Open Positions
            </h1>
            <p className="text-gray-400 text-sm md:text-base mb-10">
              {jobsData.length} roles available · Join the MedTrix team
            </p>

            {/* ── Job card grid ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobsData.map((job) => (
                <JobCard key={job.id} job={job} onClick={setSelectedJob} />
              ))}
            </div>
          </>
        )}

      </section>
    </main>
  );
}
