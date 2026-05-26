"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({ children }) {
  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(
        ref.current,
        {
          y: 120,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            end: "top 45%",
            scrub: 1
          }
        }
      );

    });

    return () => ctx.revert();

  }, []);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}