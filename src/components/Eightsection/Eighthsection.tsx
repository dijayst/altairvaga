
import React from 'react'
import Letsgrow from '../Letgrowbtn/Letsgrow'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Eighthsection() {
  
  
  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div >
      <p className="flex flex-col items-center text-center md:text-6xl text-4xl font-medium text-[#19183a]">
  <span>Our approach is different</span>
  <span>than other agencies.</span>
</p>


<div className="py-20 flex items-center justify-center  px-4">
      <div className="flex flex-col items-center text-center md:max-w-[50%] w-full">
        <motion.p
      ref={ref5}
      className="text-2xl text-gray-700 leading-relaxed"
      initial={{ opacity: 0, x: -100 }}
      animate={inView5 ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    > 
          The traditional agency model is flawed. Marketing agencies typically place a
          group of talent around managing your account, with one goal in mind — get you to renew your contract.
          We do the opposite by focusing on precisely what your goals are, and placing the best team around to
          accomplish those goals.
        </motion.p>

        <div className="flex md:flex-row flex-col items-center justify-center gap-4 mt-6">
           <Letsgrow/>
          <p className="text-xl font-medium text-gray-800 hover:decoration- hover:underline cursor-pointer hover:decoration-[[#6100ff]]">
            Book a meeting
          </p>
        </div>
       
      </div>
    </div>

    </div>
  )
}
