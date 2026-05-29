'use client';
import { useEffect, useState } from 'react';

export default function LandscapeLock() {
  const [mode, setMode] = useState(null); // 'mobile' | 'tablet' | null

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (w < 768 && w > h) {
        setMode('mobile');
      } else if (w >= 768 && w <= 1024 && h > w) {
        setMode('tablet');
      } else {
        setMode(null);
      }
    };
    check();
    window.addEventListener('resize', check);
    window.addEventListener('orientationchange', check);
    return () => {
      window.removeEventListener('resize', check);
      window.removeEventListener('orientationchange', check);
    };
  }, []);

  if (!mode) return null;

  const isMobile = mode === 'mobile';

  return (
    <div className="landscape-message fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center gap-6 px-8">
      <svg
        className="rotate-phone-icon"
        width="72"
        height="72"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E1251B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
      <p className="text-white text-center text-lg font-semibold leading-relaxed">
        {isMobile
          ? <>Please rotate your device<br />to portrait mode</>          
          : <>Please rotate your device<br />to landscape mode</>}
      </p>
      <p className="text-white/40 text-sm text-center">
        {isMobile
          ? 'This site is best viewed in portrait orientation on mobile'
          : 'This site is best viewed in landscape orientation on tablets & iPads'}
      </p>
    </div>
  );
}
