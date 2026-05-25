import BeanCanvasAnimation from '@/components/BeanCanvasAnimation';
const statsData = [
  { value: "3,200+", label: "Projects Delivered" },
  { value: "200,000+", label: "HCPs Engaged" },
  { value: "100,000+", label: "Assets Created" },
];

export default function Animation() {
  return (
    <div>
      <section className="relative bg-black px-6 lg:px-10 py-20 overflow-hidden">

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[48%_52%] gap-14 items-center">

    {/* LEFT IMAGE */}
    <div className="relative">

      <div className="inline-flex px-6 py-3 rounded-full bg-[#2A2525] mb-8 text-white tracking-[4px] text-sm font-bold uppercase">
        THE POWER OF ONE
      </div>

      <div className="
      relative
      rounded-xl
      overflow-hidden
      
      ">

        <img
          src="/images/power-one.png"
          alt=""
          className="
          w-full
          h-auto
          object-cover
          block
          "
        />

      </div>

    </div>

    {/* RIGHT CONTENT */}
    <div className="
    lg:pl-10
    lg:border-l
    border-[#2A2A2A]
    ">

      <h2 className="text-[70px] leading-none font-bold text-white mb-8">
        The Power of{" "}
        <span className="text-[#FF322A]">
          One
        </span>
      </h2>

      <p className="text-[#8E8E8E] text-[20px] leading-[2]">
        MedTrix is driven by the philosophy of the Power of One—the belief that when diverse minds align around a single goal, they can achieve greater outcomes. It is our unified way of working—bringing people, expertise, and technology together as a unified force to <span className="text-white font-semibold">Catalyze</span> how our clients engage their stakeholders and how physicians deliver patient care.
      </p>

      <p className="text-[#8E8E8E] text-[20px] leading-[2] mt-6">
        Our capabilities span the entire value chain—from brand and launch strategy to large-scale digital production, innovation, and AI-powered accelerators.
      </p>

      <p className="text-[#8E8E8E] text-[20px] leading-[2] mt-6">
        If you are looking for a partner that combines the strategic depth and scale of a large agency with the agility and efficiency of a lean organization, we invite you to explore our services.
      </p>

      <button className="
      mt-10
      px-10
      py-5
      bg-[#FF322A]
      rounded-full
      text-white
      text-xl
      font-semibold
      hover:bg-red-600
      transition
      ">
        Our Services
      </button>

    </div>

  </div>

</section>
      
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
