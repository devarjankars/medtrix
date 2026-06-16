'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const wrapperRef = useRef(null);
  const fillRectRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Fast fill sweep upward
    tl.fromTo(
      fillRectRef.current,
      { attr: { y: 63, height: 0 } },
      { attr: { y: 0, height: 63 }, duration: 0.9, ease: 'power3.inOut' }
    )
    // Split open
    .to(topRef.current, { y: -50, duration: 0.5, ease: 'power3.in' }, '+=0.1')
    .to(bottomRef.current, { y: 50, duration: 0.5, ease: 'power3.in' }, '<')
    // Fade out wrapper
    .to(wrapperRef.current, {
      opacity: 0, duration: 0.4,
      onComplete: () => setVisible(false),
    });

    return () => tl.kill();
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 59 63"
        fill="none"
        style={{ width: 100, height: 100, overflow: 'visible' }}
      >
        <defs>
          {/* Clip that reveals fill from bottom to top */}
          <clipPath id="fill-clip">
            <rect ref={fillRectRef} x="0" y="63" width="59" height="0" />
          </clipPath>
        </defs>

        {/* Grey base (unfilled) */}
        <g opacity="0.15">
          <path d="M25.7324 33.4225C25.1408 33.7183 24.4507 33.9155 23.7606 33.9155H0V28.493C0 28.0986 0.197183 27.8028 0.492958 27.6056C0.788732 27.4084 1.08451 27.2113 1.38028 27.1127H25.338V1.47887C25.4366 1.08451 25.7324 0.690141 26.0282 0.394366C26.3239 0.197183 26.6197 0 27.0141 0H32.9296V25.1408C32.9296 25.6338 32.9296 26.1268 32.7324 26.6197C32.5352 27.0141 32.338 27.4084 31.9437 27.8028L27.2113 32.338C26.7183 32.831 26.2254 33.2253 25.6338 33.5211" fill="#EC1C24"/>
          <path d="M48.7043 28.9859H58.3663L32.9297 0V11.1408L48.7043 28.9859Z" fill="#BE1E2D"/>
          <path d="M33.029 29.2816C33.6206 29.0844 34.2121 28.9858 34.9023 28.9858H58.3671V34.3098C58.3671 34.7041 58.1699 34.9999 57.8741 35.1971C57.5783 35.3943 57.2826 35.5915 56.9868 35.6901H33.029V61.3239C33.029 61.7182 32.8319 62.2112 32.4375 62.507C32.1417 62.7041 31.846 62.9013 31.4516 62.9013H25.4375V37.6619C25.4375 37.1689 25.4375 36.676 25.6347 36.183C25.8319 35.7887 26.1276 35.3943 26.4234 34.9999L31.846 29.9718C32.2403 29.676 32.6347 29.3802 33.1276 29.183L33.029 29.2816Z" fill="#EC1C24"/>
          <path d="M9.76056 34.0142H0L25.338 63.0001V51.7606L9.66197 34.0142H9.76056Z" fill="#BE1E2D"/>
        </g>

        {/* Filled version revealed by clip */}
        <g clipPath="url(#fill-clip)">
          <g ref={topRef}>
            <path d="M25.7324 33.4225C25.1408 33.7183 24.4507 33.9155 23.7606 33.9155H0V28.493C0 28.0986 0.197183 27.8028 0.492958 27.6056C0.788732 27.4084 1.08451 27.2113 1.38028 27.1127H25.338V1.47887C25.4366 1.08451 25.7324 0.690141 26.0282 0.394366C26.3239 0.197183 26.6197 0 27.0141 0H32.9296V25.1408C32.9296 25.6338 32.9296 26.1268 32.7324 26.6197C32.5352 27.0141 32.338 27.4084 31.9437 27.8028L27.2113 32.338C26.7183 32.831 26.2254 33.2253 25.6338 33.5211" fill="#EC1C24"/>
            <path d="M48.7043 28.9859H58.3663L32.9297 0V11.1408L48.7043 28.9859Z" fill="#BE1E2D"/>
          </g>
          <g ref={bottomRef}>
            <path d="M33.029 29.2816C33.6206 29.0844 34.2121 28.9858 34.9023 28.9858H58.3671V34.3098C58.3671 34.7041 58.1699 34.9999 57.8741 35.1971C57.5783 35.3943 57.2826 35.5915 56.9868 35.6901H33.029V61.3239C33.029 61.7182 32.8319 62.2112 32.4375 62.507C32.1417 62.7041 31.846 62.9013 31.4516 62.9013H25.4375V37.6619C25.4375 37.1689 25.4375 36.676 25.6347 36.183C25.8319 35.7887 26.1276 35.3943 26.4234 34.9999L31.846 29.9718C32.2403 29.676 32.6347 29.3802 33.1276 29.183L33.029 29.2816Z" fill="#EC1C24"/>
            <path d="M9.76056 34.0142H0L25.338 63.0001V51.7606L9.66197 34.0142H9.76056Z" fill="#BE1E2D"/>
          </g>
        </g>
      </svg>

      <p className="mt-5 text-white/40 text-[10px] tracking-[6px] uppercase font-medium">
        Loading
      </p>
    </div>
  );
}
