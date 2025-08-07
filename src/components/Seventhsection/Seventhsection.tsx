import { motion, Variants } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { services } from "./data";
import Letsgrow from "../Letgrowbtn/Letsgrow";



const fadeUp: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3, // stagger each line
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};



const fadeUp1: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};


export default function Seventhsection() {
  return (



   <>
   
   

    
    
    <div className="  text-white font-nunito">


        <div className="flex flex-col lg:flex-row gap-20 py-30 px-6 md:px-16">
         <div className="flex flex-col"> <h2 className="text-2xl lg:text-3xl font-medium text-[#ff5b46]">Services</h2>

          <div className="flex flex-col gap-10">
            
<div className="flex justify-between text-5xl md:text-4xl font-medium md:flex-row flex-col gap-5">
  <p className="max-w-2/4 text-black">Digital marketing services aligned with your goals</p><div><Letsgrow/></div>

</div></div>
           
          </div>
        </div>


           <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-12 max-w-6xl mx-auto ">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition "
        >
          <div className="w-16 h-16 rounded-full bg-[#efefef] flex items-center justify-center  text-3xl mb-10">
            {service.icon}
          </div>
          <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{service.description}</p>
          <a
            href="#"
            className="text-[#ff5b46] font-medium inline-flex items-center gap-1 hover:underline"
          >
            Learn More <span className="text-xl">→</span>
          </a>
        </div>
      ))}
    </section>

      </div>
      
      </>
  );
}
