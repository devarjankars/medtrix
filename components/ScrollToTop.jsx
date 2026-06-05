"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { lenisInstance } from "@/components/LenisProvider";

/* Only scroll to top when navigating to a project detail (has ?project= param) */
function ScrollToTopInner() {
  const pathname     = usePathname();
  const searchParams = useSearchParams();
  const projectId    = searchParams.get("project");

  useEffect(() => {
    if (!projectId) return; // don't scroll on normal page nav
    window.history.scrollRestoration = "manual";
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, projectId]);

  return null;
}

export default function ScrollToTop() {
  return (
    <Suspense>
      <ScrollToTopInner />
    </Suspense>
  );
}
