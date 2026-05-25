export default function Landing() {
  return (
    <section className=" py-20 bg-[#000] relative isolate z-10 px-6 lg:px-10">
      <div className="flex flex-col md:flex-row items-center gap-18">
        <div className="text-left flex flex-col gap-5">
           <h1 className=" text-4xl font-bold leading-[1.2] text-[#FFF]
1  ">MedTrix - Catalyzing <span className=" text-red-600">Healthcare</span></h1>
                  <p className="text-[22px] text-[#7f818B]">MedTrix is a growth catalyst for pharmaceutical and life science companies. 
                    We work with the science you've built, the teams you've assembled, and the brands you've invested in, 
                    to drive outcomes that are faster, bigger, and precise.
                  </p>
            <p className="text-[22px] text-[#7f818B]">Our proven mix of science, creativity, technology, and strategy accelerates compliant, 
              high-impact engagement across Medical Affairs and Commercial functions - exponentially. 
              From launch through the lifecycle, we don't just support your growth. We <b className="text-[#FFF]">Catalyze</b> it. </p>
          
        </div>
         <img src="./tablet.png" alt=""  className=" items-center min-w-70 md:min-w-1" />
      </div>
       <div
          className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[1400px] h-[350px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,106,128,0.3) 0%, rgba(0,0,0,0.4) 100%)",
            filter: "blur(90px)",
          }}
        />
    </section>
  );
}
