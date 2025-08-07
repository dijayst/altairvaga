
'use client';
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import Fourthsection from '../Fourthsection/Fourthsection';
import Eighthsection from '../Eightsection/Eighthsection';
import Servicecontent from './Servicecontent';
import Horixontalrule from './horixontalrule';
import Letsgrow from '../Letgrowbtn/Letsgrow';
export default function Service() {
 

        const { ref, inView } = useInView({
        triggerOnce: true, // animates only once
        threshold: 0.2,     // adjust when it should animate
      });
  return (
    <div className="md:px-15 px-5 bg-[#f1f1f1] py-20 ">
      

        <Servicecontent/>
<br/>
<br/>
     <Horixontalrule/>
   
   <div className="py-20 flex items-center justify-center   ">
      <motion.p
        ref={ref}
        className="text-5xl flex flex-col justify-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className='md:whitespace-nowrap text-[#19183a]'>Drive higher conversions, growth, and retention.</span>
        
      </motion.p>
    </div>
    <Fourthsection/>



    <section className="bg-[#f1f1f1] py-16 px-6 md:px-20">
  <div className="flex flex-col md:flex-row gap-20">
    
    {/* Left Heading */}
    <div className="md:w-1/2 md:sticky md:top-24 self-start">
      
    <h2 className="md:text-6xl text-4xl font-medium text-[#0f0f2d] leading-snug">
        Here is what <br />
        we can <span className="italic">offer</span>.
      </h2>
  </div>
   

    {/* Right Content */}
    <div className="md:w-1/2 space-y-12">
      {/* Service Block 1 */}
      <div>
        <h3 className="text-4xl font-bold text-[#0f0f2d] mb-2">Marketing Strategy</h3>
        <p className="text-[#0f0f2d] text-xl">
          Whether you're just building out your marketing or looking to explore new strategies, we have the toolkits and experience to help you grow your business.
        </p>
         <Horixontalrule/>
      </div>

      {/* Service Block 2 */}
      <div>
        <h3 className="text-4xl font-bold text-[#0f0f2d] mb-2">Branding</h3>
        <p className="text-[#0f0f2d] text-xl">
          Whether you're just building out your marketing or looking to explore new strategies, we have the toolkits and experience to help you grow your business.
        </p>
        <Horixontalrule/>
      </div>

       <div>
        <h3 className="text-4xl font-bold text-[#0f0f2d] mb-2">Campaign Management</h3>
        <p className="text-[#0f0f2d] text-xl">
        Whether you're just building out your marketing or looking to explore new strategies, we have the toolkits and experience to help you grow your business.
         </p>
       <Horixontalrule/>
      </div>

       <div>
        <h3 className="text-4xl font-bold text-[#0f0f2d] mb-2">Content Marketing</h3>
        <p className="text-[#0f0f2d] text-xl">
        Whether you're just building out your marketing or looking to explore new strategies, we have the toolkits and experience to help you grow your business.
        </p>
        <Horixontalrule/>
      </div>

       <Letsgrow/>

      

    </div>
  </div>
</section>

    <div className="md:px-15 px-5">
         <Eighthsection/></div>
    </div>
  )
}
