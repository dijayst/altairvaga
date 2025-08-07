'use client';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Servicecontent() {
     const controls = useAnimation();
const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

useEffect(() => {
  if (inView) {
    controls.start({ opacity: 1, x: 0 });
  } else {
    controls.start({ opacity: 0, x: 100 });
  }
}, [inView, controls]);  
  return (
    
       <motion.p
        ref={ref}
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-130 text-black text-xl sm:text-2xl mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-80"
      >
        Whether you're
        just building out your marketing or looking to explore new strategies, 
        we have the toolkits and experience to help you grow your business.
      </motion.p>
      
   
  )
}
