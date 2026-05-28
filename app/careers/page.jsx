"use client";

import { useState } from "react";
import LifeatMet from "@/components/LifeatMet";
import JobCard from "@/components/JobCard";
import JobDetailsCard from "@/components/JobDetailsCard";
import { jobsData } from "@/Data/jobs";

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <section className="w-[90%] md:w-[80%] mx-auto py-20">

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

            {/* ── Life at MedTrix slider ── */}
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              What we believe in
            </h2>
            <div className="mb-20">
              <LifeatMet />
            </div>

            {/* ── Open positions ── */}
            <p className="text-xs uppercase tracking-[0.2em] text-red-500 font-semibold mb-2">
              Open Roles
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
              Current Openings
            </h2>

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
