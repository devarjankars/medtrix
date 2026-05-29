"use client";
export default function Landing() {
  return (
    <section className="  relative isolate z-10 px-6 pb-[50px] lg:pb-20 bg-black mt-[50px] lg:mt-[50px] lg:px-0">
      <div className="flex flex-col-reverse  lg:m-h-[100vh] mx-auto  w-[90%] md:w-[80%]  md:flex-row items-center justify-between gap-3">
        <div className="text-left flex lg:w-1/2 flex-col gap-5">
           <h1 className="text-[26px] text-center lg:text-left lg:text-[70px]   font-bold leading-[1.2] text-[#FFF]
1  ">MedTrix - Catalyzing <span className=" text-red-600">Healthcare</span></h1>
  <div className="w-full  lg:hidden block ">
          <img src="/tablet.png" alt=""  className=" items-center min-w-70 md:w-full lg:ml-8 " />
        </div>
                  <p className=" text-[14px] text-center lg:text-left lg:text-[20px] text-[#7f818B]">MedTrix is a growth catalyst for pharmaceutical and life science companies. 
                    We work with the science you&apos;ve built, the teams you&apos;ve assembled, and the brands you&apos;ve invested in, 
                    to drive outcomes that are faster, bigger, and precise.
                  </p>
            <p className="text-[14px] lg:text-[20px] text-center lg:text-left text-[#7f818B]">Our proven mix of science, creativity, technology, and strategy accelerates compliant, 
              high-impact engagement across Medical Affairs and Commercial functions—exponentially. 
              From launch through the lifecycle, we don&apos;t just support your growth. We <b className="text-[#FFF]">Catalyze</b> it. </p>
          
        </div>
        <div className="w-1/2 hidden lg:block ">
          <img src="/tablet.png" alt=""  className=" items-center min-w-70 md:w-full lg:ml-8 " />
        </div>
      </div>
           <div
  className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[20px] lg:h-[60px] rounded-full"
  style={{
    background:
      'radial-gradient(ellipse at bottom, rgba(0,106,128,0.4) 0%, transparent 80%)',
  }}
/>
    </section>
  );
}
  