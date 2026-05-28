"use client";

import { useEffect, useState } from "react";


export default function JobCard({ job, onClick }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");
    setSaved(savedJobs.includes(job.id));
  }, [job.id]);

  return (
    <div className="flex flex-col gap-4 bg-[#111111] border border-[#2a2a2a] rounded-[16px] p-6 hover:border-[#3a3a3a] transition-colors duration-300">

      {/* Title row with saved indicator */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-white text-lg font-semibold leading-snug">{job.title}</h3>
        {saved && (
          <span className="flex-shrink-0 mt-0.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </span>
        )}
      </div>

      {/* Meta */}
      <div className="flex items-center gap-0 text-gray-400 text-[13px]">
        <span>Experience : {job.experience}</span>
        <span className="mx-3 text-[#3a3a3a]">|</span>
        <span>{job.location}</span>
        <span className="mx-3 text-[#3a3a3a]">|</span>
        <span>{job.type}</span>
      </div>

      {/* CTA */}
      <div>
        <button
          onClick={() => onClick?.(job)}
          className="px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-colors duration-200 cursor-pointer"
        >
          Read More
        </button>
      </div>

    </div>
  );
}
