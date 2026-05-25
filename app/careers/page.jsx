"use client";

const openings = [
  { role: "Frontend Engineer", type: "Full-time · Remote" },
  { role: "Backend Engineer", type: "Full-time · Hybrid" },
  { role: "Product Designer", type: "Full-time · On-site" },
  { role: "Clinical Data Analyst", type: "Contract · Remote" },
];

export default function Careers() {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto py-20">
      <h1 className="text-4xl font-bold text-white mb-4">Careers</h1>
      <p className="text-gray-400 mb-10">Join our team and help shape the future of healthcare technology.</p>
      <div className="flex flex-col gap-4">
        {openings.map(({ role, type }) => (
          <div key={role} className="bg-[#18181B] rounded-xl border border-[#2a2a2a] p-5 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">{role}</h2>
              <p className="text-sm text-gray-400">{type}</p>
            </div>
            <button className="text-sm font-medium text-white bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg transition-colors">
              Apply
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
