import BeanBackground from '@/components/BeanBackground';

const statsData = [
  { value: "3,200+", label: "Projects Delivered" },
  { value: "200,000+", label: "HCPs Engaged" },
  { value: "100,000+", label: "Assets Created" },
];
 
// added something here to test the commit and push functionality of git
export default function Animation() {
  return (
    <div className="overflow-hidden relative h-auto">
      <BeanBackground
        className="absolute hidden lg:block  inset-0 pointer-events-none z-0"
        style={{ pointerEvents: 'none' }}
      />
      <section className="relative px-0 lg:px-0 py-[50px] lg:py-[100px] overflow-hidden z-1 w-[90%] md:w-[80%] mx-auto">
 
  <div className="animationBG relative grid grid-cols-1 lg:grid-cols-2 lg:gap-14 items-center">
 
    {/* LEFT IMAGE */}
    <div className="relative flex flex-col items-start h-full z-10">
 
      {/* <div className="inline-flex px-6 py-3 rounded-full bg-[#2A2525] lg:mb-8 text-white tracking-[4px] text-sm font-bold uppercase bg-[linear-gradient(to_right,_rgba(255,255,255,0.2),_rgba(0,0,0,0.4))] border border-[#2A2525]">
        THE POWER OF ONE
      </div> */}

      {/* Mobile: BeanBackground between button and image */}
      <div className="block lg:hidden w-full h-[280px] relative my-6 rounded-xl overflow-hidden">
        <BeanBackground className="absolute inset-0" />
      </div>
 
      <div className="relative rounded-xl overflow-hidden w-full">
 

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
    <div className="lg:pl-10  border-[#2A2A2A] z-10 relative">
 
      <h2 className="text-[26px] lg:text-[70px] leading-none font-bold text-white mb-8">
        The Power of{" "}
        <span className="text-[#FF322A]">
          One
        </span>
      </h2>
 
      <p className="text-[#8E8E8E] text-[14px] lg:text-[20px] lg:leading-[2]">
        MedTrix is driven by the philosophy of the Power of One—the belief that when diverse minds align around a single goal, they can achieve greater outcomes. It is our unified way of working—bringing people, expertise, and technology together as a unified force to <span className="text-white font-semibold">Catalyze</span> how our clients engage their stakeholders and how physicians deliver patient care.
      </p>
 
      <p className="text-[#8E8E8E] text-[14px] lg:text-[20px] lg:leading-[2] mt-6">
        {/* Our capabilities span the entire value chain—from brand and launch strategy to large-scale digital production, innovation, and AI-powered accelerators. */}
      </p>
 
      <p className="text-[#8E8E8E] text-[14px] lg:text-[20px] lg:leading-[2] mt-6">
        {/* If you are looking for a partner that combines the strategic depth and scale of a large agency with the agility and efficiency of a lean organization, we invite you to explore our services. */}
      </p>
 
      <button className="
      mt-10
      px-8
      py-3
      bg-[#FF322A]
      rounded-full
      text-white
      text-[18px]
      lg:text-xl
      font-semibold
      hover:bg-red-600
      transition
      ">
        Our Services
      </button>
 
    </div>
 
  </div>

</section>
     
      <section className="relative  px-0 lg:px-0 lg:pb-[100px]   pb-[50px] overflow-hidden isolate w-[90%] md:w-[80%] mx-auto mt-0  lg:mx-auto z-20">
 
 
        {/* STATS */}
        <div className="p px-0 sm:px-6 lg:px-0 mb-4 mt-4">
          <div className="  grid grid-cols-1 md:grid-cols-3 gap-20">
            {statsData.map((stat, index) => (
              <div
  key={index}
  className="relative overflow-hidden rounded-2xl border-1 border-[#222222] p-8 lg:p-10 flex flex-col min-h-[200px] bg-gradient-to-b from-[rgba(137,124,124,0.26)] to-[rgba(35,32,32,0.45)]"
>
                <div className="w-8 h-1 bg-[#E1251B] rounded-full mb-0" />
                <div>
                  <h3 className="text-[50px] font-bold text-white tracking-tight ">{stat.value}</h3>
                  <p className="text-[20px] lg:text-base text-gray-500 font-medium  tracking-wide">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
 
        {/* GLOW */}

      </section>
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[40px] rounded-full" style={{ background: 'radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)' }} />

    </div>
  );
}