'use client'

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export let lenisInstance = null;

function createLenis() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  lenisInstance = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  const raf = (time) => lenis.raf(time * 1000);
  gsap.ticker.add(raf);
  return { lenis, raf };
}

export function pauseLenis() {
  if (lenisInstance) lenisInstance.stop();
}

export function resumeLenis() {
  if (lenisInstance) lenisInstance.start();
}

export default function LenisProvider({ children }) {
  useEffect(() => {
    const { lenis, raf } = createLenis();
    gsap.ticker.lagSmoothing(0);
    return () => {
      lenis.destroy();
      lenisInstance = null;
      gsap.ticker.remove(raf);
    };
  }, []);

  return children;
}
