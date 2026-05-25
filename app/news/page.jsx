const news = [
  { date: "June 2025", title: "Medtrix Launches AI Diagnostics Module", desc: "Our new AI module is now available to all enterprise clients." },
  { date: "April 2025", title: "Partnership with HealthNet", desc: "Medtrix partners with HealthNet to expand telemedicine reach." },
  { date: "January 2025", title: "Series B Funding Secured", desc: "Medtrix raises $40M to accelerate product development." },
];

export default function News() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-zinc-900 mb-10">News & Updates</h1>
      <div className="flex flex-col gap-6">
        {news.map(({ date, title, desc }) => (
          <div key={title} className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm">
            <span className="text-xs text-blue-500 font-semibold uppercase tracking-wide">{date}</span>
            <h2 className="text-xl font-semibold text-zinc-800 mt-1 mb-2">{title}</h2>
            <p className="text-zinc-500">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
