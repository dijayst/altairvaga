import React from "react";
import CardHelper from "./CardHelper";

function Testimonials() {
  return (
    <div className=" py-[4rem] mb-[4rem] px-6 lg:px-[5rem] bg-[#f8f8f8] w-full">
      <div className="justify-center items-center flex">
      <h1 className=" max-lg:text-center text-3xl lg:text-5xl font-bold py-[3rem] text-green-3a">
        What Our Customers say about Unlock Coop
      </h1></div>
      <div className="grid lg:grid-cols-3 place-items-stretch gap-5">
        
        <CardHelper
          text="Impressed with Nusa Tech's professionalism and competence. They understand our needs and provide innovative solutions, with outstanding customer service."
          name="Micheal Lee"
         
          description="Small Business Owner of a Local Cafe"
        />
        <CardHelper
          text="Unlock Coop significantly improved our online presence. From website design to PPC campaigns, they deliver outstanding results. Highly recommended!"
          name="Jessica Taylor"
          
          description="Director of Marketing Startup"
        />
        <CardHelper
          text="Very satisfied with Unlock Coop's work. They've improved our brand visibility online and provided valuable insights. Thank you!"
          name="David Smith"
          
          description="CEO of Digital Startup"
        />
      </div>
    </div>
  );
}

export default Testimonials;
