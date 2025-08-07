
'use client';

import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import Fourthsection from '../Fourthsection/Fourthsection';
import Eighthsection from '../Eightsection/Eighthsection';
import Servicecontent from './Servicecontent';
import Horixontalrule from './horixontalrule';
import Letsgrow from '../Letgrowbtn/Letsgrow';
import Image from "next/image";
import ServicesCategory from './ServiceCategory';
import { useServiceStore } from './useServiceStore';

export default function Service() {
 

        const { ref, inView } = useInView({
        triggerOnce: true, // animates only once
        threshold: 0.2,     // adjust when it should animate
      });
 const { selectedService, setSelectedService } = useServiceStore();


  return (
    <div className="md:px-15 px-5 bg-[#f1f1f1] py-20 font-nunito ">
      

   

    <section className=" py-16 font-nunito ">
   
    {/* Left Heading */}
    <div className="flex flex-col gap-5">
      <h2 className="md:text-6xl text-4xl font-medium text-[#0f0f2d] leading-snug justify-center text-center">
        Here is what 
        we can <span className="italic">offer</span>.
      </h2>
     <div className="  grid grid-cols-1 md:grid-cols-2 gap-10 text-center text-[#9a8495] max-w-9xl mx-auto">
     
      <ServicesCategory/>

       {selectedService && (
        <div className="bg-white p-6 rounded-2xl shadow-md flex-1 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">{selectedService}</h3>
          <p className="text-black">
            Detailed information about <strong>{selectedService}</strong> will appear here. You can
            expand this with actual data or content.
          </p>

 <div className="w-full  relative lg:h-[600px]">
      <Image
        src="/images/service-2.jpg"
        alt="Top Left"
        width={402}
        height={696}
        className="w-full h-full object-cover rounded-lg shadow"
      />
    </div>


        </div>
      )}
    </div>

    
      

  </div>
   

    
    
 
</section>

    <div className="md:px-15 px-5">
         <Eighthsection/></div>



          
    </div>
  )
}
