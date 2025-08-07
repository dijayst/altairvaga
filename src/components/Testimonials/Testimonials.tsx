'use client';
import React, { useEffect, useState } from 'react'
import { testimonials } from './data';
import { AnimatePresence, motion } from 'framer-motion';
import Image from "next/image";
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {

    const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // auto-slide every 5s
    return () => clearInterval(interval);
  }, []);

  return (
     <div className="bg-gray-100 min-h-screen flex flex-col font-nunito justify-between py-20 px-8 md:px-24 font-sans text-[#0C0A3E] overflow-hidden ">
          {/* Top Navigation */}
          <div className="flex justify-between items-center w-full text-sm">
              <div className="uppercase tracking-widest font-semibold text-[#ff5b46]">
                  What our clients say
              </div>
              <div className="text-right">{index + 1} / {testimonials.length}</div>
          </div>

          {/* Testimonial Slider */}
          <div className="mt-10 relative h-[370px] md:h-[350px]">
              <AnimatePresence mode="wait">
                  <motion.div
                      key={index}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -100, opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute top-0 left-0 w-full"
                  >
                          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
    
                           <div className="flex-shrink-0 relative md:w-32 w-15 md:h-32 h-15 flex items-center justify-center rounded-full bg-[#3e80e4] text-white text-3xl font-bold">
                                    <FaQuoteLeft />
                                   
                                  </div>
                                  <div>
                          <p className="text-3xl md:text-5xl font-medium leading-tight">
                              {testimonials[index].quote}
                          </p>
                         
                          <div className="flex items-center gap-4 border-t pt-4">
            
             <Image width={100} height={100} src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-20 h-20 rounded-full object-cover"
        />
     
            <div>
              <p className="font-semibold text-black">{testimonials[index].name}</p>
              <p className="text-sm text-gray-500">{testimonials[index].role}</p>
            </div>
          </div></div>
                      </div>
                  </motion.div>
              </AnimatePresence>
          </div>
      </div>
      
  )
}
