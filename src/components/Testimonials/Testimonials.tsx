import React from "react";
import CardHelper from "./CardHelper";

function Testimonials() {
  return (
    <div className=" py-[4rem] mb-[4rem] px-6 lg:px-[5rem]  bg-[#f1f1f1] w-full">
      <div className="justify-center items-center flex">
      <p className=" max-lg:text-center text-3xl lg:text-5xl md:text-xl font-bold py-[3rem] text-green-3a">
        What Our Customers say about us
      </p></div>
      <div className="grid lg:grid-cols-3 place-items-stretch gap-5">
        <CardHelper
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
          name="Micheal Lee"
        
          description="Small Business Owner of a Local Cafe"
        />
        <CardHelper
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
          name="Jessica Taylor"
         
          description="Director of Marketing Startup"
        />
        <CardHelper
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
          name="David Smith"
       
          description="CEO of Digital Startup"
        />
      </div>
    </div>
  );
}

export default Testimonials;
