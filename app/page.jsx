"use client";
import Landing from "@/components/Landing";
import OneTeam from "@/components/OneTeam";
import Animation from "@/components/Animation";
import Image from "next/image";


import { motion } from "framer-motion";
import Link from "next/link";
const mapImg = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/blankMap.png";
const mobile_map = "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/mobile_map.png";
const pointerMap= "https://d218mh3sadleh5.cloudfront.net/Website/Internal/Medtrix_2026/Image/pointerMap.png"

export default function Home() {


  return (
    <div className="w-[100%]  mx-auto">
     <div className="relative bg-black"> <Landing /></div>
      <Animation />
      <div className=" lg:mb-12 mb-[50px] lg:mt-[80px] mt-[50px] w-[90%] md:w-[80%] mx-auto ">
       <span
          className="inline-flex px-6 py-3 rounded-full bg-[#2A2525] lg:mb-8 text-white tracking-[4px] text-sm font-bold uppercase bg-[linear-gradient(to_right,_rgba(255,255,255,0.2),_rgba(0,0,0,0.4))] border border-[#2A2525]"
        > ONE TEAM
      </span>
       </div>
    <div className="relative w-[90%] md:w-[80%] mx-auto"> <OneTeam /></div>
      <section className="w-full text-white">
        <h5 className="text-2xl font-bold mb-8 mt-8 text-start w-[90%] md:w-[80%] mx-auto">
            Contact Us
            </h5>
      
      {/* MAP CONTAINER */}
      <div className="relative w-full overflow-hidden mb-4 mt-4">
        
        {/* The Base Map Image */}
        <div className="relative w-full">
          <img 
            src={mapImg} 
            alt="Office Locations Map" 
            className=" hidden lg:block w-full h-auto object-contain opacity-80"
          />
          {/* USA INDICATOR & TEXT */}
          {/* Adjust top% and left% to align exactly with your map's USA red dot */}
          <div className="hidden md:flex flex-col items-center absolute top-[36%] left-[20%] -translate-x-1/2 -translate-y-1/2 group z-10">
 
            {/* Address Box directly below indicator */}
            <div className="mt-3   p-4 rounded-xl shadow-2xl max-w-[260px] transition-all duration-300 group-hover:border-red-500">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[16px]  text-red-500 font-bold px-2 py-0.5 rounded">USA</span>
              </div>
              <p className="text-[16px] text-[#d1d5db] leading-relaxed font-medium">
                100 Somerset Corporate Boulevard 2nd Floor, Suite 130, Bridgewater, NJ 08807
              </p>
            </div>
          </div>

          {/* INDIA INDICATOR & TEXT */}
          {/* Adjust top% and left% to align exactly with your map's India red dot */}
          <div className="hidden md:flex flex-col items-center absolute top-[57%] left-[70%] -translate-x-1/2 -translate-y-1/2 group z-10">
            <div className="mt-3 p-4 rounded-xl shadow-2xl max-w-[260px] transition-all duration-300 group-hover:border-red-500">
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[16px]  text-red-500 font-bold px-2 py-1 rounded">INDIA</span>
              </div>
              <p className="text-[16px] text-[#d1d5db]  leading-relaxed font-medium">
                1st Floor, 574/A, 1st Main, Sector 6, HSR Layout, Bengaluru, KA 560102
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ======================================================== */}
      {/* MOBILE ADDRESS CARDS (Shows only on Mobile screen sizes) */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 gap-4 mt-2 md:hidden">
        
         <motion.div
                      className="bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl p-6 flex flex-col gap-3"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -3 }}
                    >
                      <img src={pointerMap} alt="pointer" width={42} height={42} className="object-contain shrink-0" />
                      <span className="text-md font-extrabold uppercase tracking-[3px] text-[#E1251B]">USA</span>
                      <p className="text-[#d1d5db] text-sm leading-relaxed">
                        100 Somerset Corporate Boulevard,<br />
                        2nd Floor, Suite 130,<br />
                        Bridgewater, NJ 08807
                      </p>
                    </motion.div>
        
                    <motion.div
                      className="bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl p-6 flex flex-col gap-3"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                      whileHover={{ y: -3 }}
                    >
                      <img src={pointerMap} alt="pointer" width={42} height={42} className="object-contain shrink-0" />
                      <span className="text-md font-extrabold uppercase tracking-[3px] text-[#E1251B]">INDIA</span>
                      <p className="text-[#d1d5db] text-sm leading-relaxed">
                        1st Floor, 574/A, 1st Main,<br />
                        Sector 6, HSR Layout,<br />
                        Bengaluru, KA 560102
                      </p>
                    </motion.div>

      </div>
       <div className="w-full px-6 lg:px-1 flex flex-col items-center py-10   gap-4">
        
           <Link href="/contact">
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
              background:
                "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)",
              backgroundSize: "200% 100%",
            }}
            animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
            transition={{
              duration: 2.5,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          />
          <span className="relative z-10">Contact Us</span>
        </motion.div>
      </Link>
          </div>

    </section>
    
    

    </div>
  );
}
