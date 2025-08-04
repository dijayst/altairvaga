import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function Seventhsection() {
  return (
    <div className="bg-[#19183a] text-white">
      <div className="flex gap-30 py-30">
        <h2>Services</h2>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col text-6xl  text-justify px-10 font-medium">
            <span>Conception to scale,</span>
            <span>we cover the entire growth journey</span>
          </div>
          
          <div className="flex flex-col px-10 text-2xl">
            <span>
             
              Whether you're just building out your marketing or looking to
            </span>
            <span>
             
              explore new strategies, we have the toolkits and experience to
              help
            </span>
            <span> you grow your business.</span>
          </div>
        </div>
      </div>
<div className="flex flex-col gap-10 whitespace-nowrap">
      <div className="flex ">
 <h2 className="text-6xl font-medium w-4/6">Branding & Design</h2>

  <div className="flex-col w-2/6 gap-10 flex">
    
 <div className="flex gap-25">       
   
  
  <div className="flex flex-col gap-15 text-xl">
          <p>
            Branding
            </p>
            <p>
Creative </p>
            <p>
UI/UX Design </p>
            <p>
Video </p>
            <p>
Web Design </p>
            <p>
Photography
          </p>
          
      </div>
       
   <Link
                    href="/about"
                    className="group-hover:hidden transition-all duration-200 h-12 w-40   mt-100 whitespace-nowrap bg-[#6100ff] text-white hover:bg-green-3a px-10 py-3 rounded-full text-lg md:text-md font-semibold "
                  >
                    <FiArrowRight className="hidden group-hover:inline-block transition-all duration-200" />
                         
                  </Link>
            </div>
             <div className="border  h-0.2 bg-white "></div>
            </div>
    </div>


    <div className="flex ">
 <h2 className="text-6xl font-medium w-4/6">Marketing Ops</h2>

  <div className="flex-col w-2/6 gap-10 flex">
    
 <div className="flex gap-25">       
   
  
  <div className="flex flex-col gap-15 text-xl">
          <p>
           Marketing Automation
            </p>
            <p>
Database Management </p>
            <p>
MarTech Consulting </p>
            <p>
WordPress </p>
           
          
      </div>
       
   <Link
                    href="/about"
                    className="group-hover:hidden transition-all duration-200 h-12 w-40   mt-100 whitespace-nowrap bg-[#6100ff] text-white hover:bg-green-3a px-10 py-3 rounded-full text-lg md:text-md font-semibold "
                  >
                    <FiArrowRight className="hidden group-hover:inline-block transition-all duration-200" />
                         
                  </Link>
            </div>
             <div className="border  h-0.2 bg-white "></div>
            </div>
    </div>




    <div className="flex  pb-30">
 <h2 className="text-6xl font-medium w-4/6">Strategy & Growth
</h2>

  <div className="flex-col w-2/6 gap-10 flex">
    
 <div className="flex gap-25">       
   
  
  <div className="flex flex-col gap-15 text-xl">
          <p>
            Strategy Development
            </p>
            <p>
Strategy Implementation </p>
            <p>
Campaign Management </p>
            <p>
Account Based Marketing </p>
            <p>
Content Marketing </p>
            
          
      </div>
       
   <div
                  
                    className="group-hover:hidden transition-all duration-200 h-12 w-40   mt-100 whitespace-nowrap bg-[#6100ff] text-white hover:bg-green-3a px-10 py-3 rounded-full text-lg md:text-md font-semibold "
                  >
                     <FiArrowRight color="white" className="hidden group-hover:inline-block transition-all duration-200" />
                          
                  </div>
            </div>
             <div className="border  h-0.2 bg-white "></div>
            </div>
    </div>
</div>
    </div>
  );
}
