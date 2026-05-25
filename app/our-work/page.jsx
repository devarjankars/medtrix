const projects = [
  { title: "Regional Hospital Network", desc: "Unified EHR system across 12 hospitals." },
  
];

export default function OurWork() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 bg-transparent">
      <h1 className="text-4xl font-bold text-[#FFF] mb-10">Our Work</h1>
      <div className="flex flex-col gap-6">
        {projects.map(({ title, desc }) => (
          <div key={title} className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-800 mb-2">{title}</h2>
            <p className="text-zinc-500">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
