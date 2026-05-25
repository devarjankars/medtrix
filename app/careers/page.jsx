const openings = [
  { role: "Frontend Engineer", type: "Full-time · Remote" },
  { role: "Backend Engineer", type: "Full-time · Hybrid" },
  { role: "Product Designer", type: "Full-time · On-site" },
  { role: "Clinical Data Analyst", type: "Contract · Remote" },
];

export default function Careers() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-zinc-900 mb-4">Careers</h1>
      <p className="text-zinc-500 mb-10">Join our team and help shape the future of healthcare technology.</p>
      <div className="flex flex-col gap-4">
        {openings.map(({ role, type }) => (
          <div key={role} className="bg-white rounded-xl border border-zinc-200 p-5 shadow-sm flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-zinc-800">{role}</h2>
              <p className="text-sm text-zinc-500">{type}</p>
            </div>
            <button className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
              Apply
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
