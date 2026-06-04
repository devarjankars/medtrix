"use client";

import { useNavbarHidden } from "@/components/ConditionalNavbar";

export default function MainWrapper({ children }) {
  const navbarHidden = useNavbarHidden();
  return (
    <main className={`flex-1 w-full bg-black ${navbarHidden ? "" : "pt-[72px]"}`}>
      <div className="w-full">{children}</div>
    </main>
  );
}
