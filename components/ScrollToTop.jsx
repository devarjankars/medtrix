"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { lenisInstance } from "@/components/LenisProvider";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // prevent browser from restoring scroll position
    window.history.scrollRestoration = "manual";

    // reset Lenis internal scroll position
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    }

    // fallback — also reset native scroll
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
