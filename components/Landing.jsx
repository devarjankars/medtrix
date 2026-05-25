"use client";
export default function Landing() {
  return (
    <section className=" py-20  relative isolate z-10 px-6 h-[90vh] w-[90%] md:w-[80%] mx-auto lg:px-0">
      <div className="flex flex-col md:flex-row items-center justify-between gap-18 ">
        <div className="text-left flex w-1/2 flex-col gap-5">
           <h1 className=" text-[70px]   font-bold leading-[1.2] text-[#FFF]
1  ">MedTrix - Catalyzing <span className=" text-red-600">Healthcare</span></h1>
                  <p className="text-[22px] text-[#7f818B]">MedTrix is a growth catalyst for pharmaceutical and life science companies. 
                    We work with the science you've built, the teams you've assembled, and the brands you've invested in, 
                    to drive outcomes that are faster, bigger, and precise.
                  </p>
            <p className="text-[22px] text-[#7f818B]">Our proven mix of science, creativity, technology, and strategy accelerates compliant, 
              high-impact engagement across Medical Affairs and Commercial functions - exponentially. 
              From launch through the lifecycle, we don't just support your growth. We <b className="text-[#FFF]">Catalyze</b> it. </p>
          
        </div>
        <div className="w-1/2 ">
          <img src="/tablet.png" alt=""  className=" items-center min-w-70 md:w-full xl:ml-8 " />
        </div>
      </div>
           <div
  className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[40px] rounded-full"
  style={{
    background:
      'radial-gradient(ellipse at bottom, rgba(0,106,128,0.4) 0%, transparent 80%)',
  }}
/>
    </section>
  );
}
  