"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

const HIDDEN_NAVBAR_ROUTES = [];

export function useNavbarHidden() {
  const pathname = usePathname();
  return HIDDEN_NAVBAR_ROUTES.some(
    (route) => pathname === route || pathname === `${route}/`
  );
}

export default function ConditionalNavbar() {
  const hidden = useNavbarHidden();
  if (hidden) return null;
  return <Navbar />;
}
