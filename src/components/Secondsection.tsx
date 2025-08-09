"use client";

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { motion } from "framer-motion";
import { lines } from './Fourthsection/data';
import { useInView } from "react-intersection-observer";
import Letsgrow from './Letgrowbtn/Letsgrow';

export default function Secondsection() {

  const [show, setShow] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false, // Set to false if you want to animate every time it comes into view
    threshold: 0.2,     // Adjust as needed
  });

  useEffect(() => {
    if (inView) {
      setShow(true);
    } else {
      setShow(false); // comment this line if you only want it to animate once
    }
  }, [inView]);
  return (
    
       <>
       <div className='flex flex-col  justify-center items-center md:px-40 px-0 font-nunito '>
     
 <div ref={ref} className="flex flex-col px-0 md:px-15 text-2xl text-black overflow-hidden">
      {lines.map((line, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ delay: index * 0.4, duration: 0.6, ease: "easeOut" }}
        >
          {line}
        </motion.span>
      ))}
    </div>

      <div className="flex justify-center items-center gap-4 mt-4">
        <Letsgrow/>
        <p className="hover:underline hover:decoration-[#ff5b46] text-black uppercase font-medium">book a meeting</p>
      </div>

    </div>
    

   
      </>



  )
}
