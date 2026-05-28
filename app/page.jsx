"use client";
import Landing from "@/components/Landing";
import OneTeam from "@/components/OneTeam";
import Animation from "@/components/Animation";
import Image from "next/image";
import mapImg from "../public/map.png";
import mobile_map from "../public/mobile_map.png";
import { motion } from "framer-motion";
import Link from "next/link";

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
    
     <section className=" py-10">
          <h5 className="text-2xl font-bold mb-8 mt-8 text-start w-[90%] md:w-[80%] mx-auto">
            Contact Us
            </h5>
             <div className="w-full px-6 lg:px-1 flex flex-col items-center py-10   gap-4">
          <Image src={mapImg} alt="Contact Locations" className="w-full hidden lg:block object-contain" />
          <Image src={mobile_map} alt="Contact Locations" className="w-full lg:hidden object-contain" />

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
          {/* shimmer sweep */}
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
