import BeanBackground from '@/components/BeanBackground';
import { motion } from "framer-motion";
import Link from "next/link";

const statsData = [
  { value: "3,200+", label: "Projects Delivered" },
  { value: "200,000+", label: "HCPs Engaged" },
  { value: "100,00+", label: "Assets Created" },
];

export default function Animation() {
  return (
    <div className="overflow-hidden relative h-auto" style={{ isolation: 'isolate' }}>
      <BeanBackground
        className="absolute hidden lg:block inset-0 pointer-events-none z-0"
        style={{ pointerEvents: 'none' }}
      />

      <section className="relative px-0 lg:px-0 py-[50px] lg:py-[100px] overflow-hidden z-10 w-[90%] md:w-[80%] mx-auto">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-14 items-center flex flex-col-reverse lg:grid">

          {/* LEFT - empty on desktop, tablet animation on mobile */}
          <div className="w-full h-[280px] lg:h-auto relative">
            <div className="block lg:hidden absolute inset-0">
              <BeanBackground className="absolute inset-0" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative z-10">
            <h2 className="text-[26px] lg:text-[70px] leading-none font-bold text-white mb-8">
              The Power of{" "}
              <span className="text-[#FF322A]">One</span>
            </h2>

            <p className="text-[#8E8E8E] text-[14px] lg:text-[20px] lg:leading-[2]">
              MedTrix is driven by the philosophy of the Power of One—the belief that when diverse minds align around a single goal, they can achieve greater outcomes. It is our unified way of working—bringing people, expertise, and technology together as a unified force to <span className="text-white font-semibold">Catalyze</span> how our clients engage their stakeholders and how physicians deliver patient care.
            </p>

            <Link href="/services/Commercial_Solutions">
              <motion.div
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 380, damping: 22 }}
                className="relative inline-flex w-fit items-center gap-2 px-8 py-4 mt-8 rounded-full text-white font-medium overflow-hidden cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #E1251B 0%, #ff4d42 100%)",
                  boxShadow: "0 0 18px rgba(225,37,27,0.45)",
                }}
              >
                <motion.span
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                  transition={{ duration: 2.5, ease: "linear", repeat: Infinity, repeatDelay: 1.5 }}
                />
                <span className="relative z-10">Our Services</span>
              </motion.div>
            </Link>
          </div>

        </div>
      </section>

      <section className="relative px-0 lg:px-0 lg:pb-[100px] pb-[50px] overflow-hidden isolate w-[90%] md:w-[80%] mx-auto mt-0 lg:mx-auto z-20">
        <div className="px-0 sm:px-6 lg:px-0 mb-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-20">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl border-1 border-[#222222] p-8 lg:p-10 flex flex-col min-h-[200px] bg-gradient-to-b from-[rgba(137,124,124,0.26)] to-[rgba(35,32,32,0.45)]"
              >
                <div className="w-8 h-1 bg-[#E1251B] rounded-full mb-0" />
                <div>
                  <h3 className="text-[50px] font-bold text-white tracking-tight">{stat.value}</h3>
                  <p className="text-[20px] lg:text-base text-gray-500 font-medium tracking-wide">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[40px] rounded-full" style={{ background: 'radial-gradient(ellipse at bottom, rgba(225,37,27,.3) 0%, transparent 60%)' }} />
    </div>
  );
}
