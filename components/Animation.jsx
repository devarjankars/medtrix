import BeanCanvasAnimation from '@/components/BeanCanvasAnimation';
const statsData = [
  { value: "3,200+", label: "Projects Delivered" },
  { value: "200,000+", label: "HCPs Engaged" },
  { value: "100,000+", label: "Assets Created" },
];

export default function Animation() {
  return (
    <div>
      <section className="relative bg-black px-6 lg:px-10 py-20 overflow-hidden isolate z-20">

        <BeanCanvasAnimation />
        {/* STATS */}
        <div className="py-14 px-4 sm:px-6 lg:px-8 mb-4 mt-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#161616] to-[#0a0a0a] border border-[#222222] p-8 lg:p-10 flex flex-col justify-between min-h-[200px]"
              >
                <div className="w-8 h-1 bg-[#E1251B] rounded-full mb-6" />
                <div>
                  <h3 className="text-4xl font-bold text-white tracking-tight">{stat.value}</h3>
                  <p className="text-sm lg:text-base text-gray-500 font-medium mt-2 tracking-wide">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GLOW */}
        <div
          className="absolute bottom-[-260px] left-1/2 -translate-x-1/2 w-[1400px] h-[220px] pointer-events-none rounded-full z-0"
          style={{
            background: "radial-gradient(circle, rgba(225,37,27,0.28) 20%, rgba(225,37,27,0.12) 65%, transparent 95%)",
            filter: "blur(200px)",
          }}
        />

      </section>
    </div>
  );
}
