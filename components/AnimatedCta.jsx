"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AnimatedCta({ href, children, className = "" }) {
  return (
    <Link href={href} className={`inline-flex ${className}`}>
      <motion.span
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
        className="relative inline-flex min-w-[176px] items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-base font-medium text-[#F2F2F2] cursor-pointer"
        style={{
          background: "linear-gradient(135deg, #E1251B 0%, #ff4d42 100%)",
          boxShadow: "0 0 18px rgba(225,37,27,0.45)",
        }}
      >
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
          transition={{ duration: 2.5, ease: "linear", repeat: Infinity, repeatDelay: 1.5 }}
        />
        <span className="relative z-10">{children}</span>
      </motion.span>
    </Link>
  );
}
