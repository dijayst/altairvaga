
'use client';
import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer';
import Fourthsection from '../Fourthsection/Fourthsection';

export default function Service() {
    
        const { ref, inView } = useInView({
        triggerOnce: true, // animates only once
        threshold: 0.2,     // adjust when it should animate
      });
  return (
    <div className="px-15 bg-[#f1f1f1]  ">
      <p className=' max-w-130 text-black text-2xl ml-80'>Whether you're just building out your marketing or looking to explore new strategies, we have the toolkits and experience to help you grow your business.</p>
     <div className="border w-full h-0.5 bg-black my-30 "></div>
   
   <div className="h-screen flex items-center justify-center  ">
      <motion.p
        ref={ref}
        className="text-5xl flex flex-col justify-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className='whitespace-nowrap'>Drive higher conversions, growth, and retention.</span>
        
      </motion.p>
    </div>
    <Fourthsection/>
    </div>
  )
}
