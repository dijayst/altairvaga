'use client';
import React, { useEffect, useState } from 'react'
import { testimonials } from './data';
import { AnimatePresence, motion } from 'framer-motion';

export default function Testimonials() {

    const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // auto-slide every 5s
    return () => clearInterval(interval);
  }, []);

  return (
       <div className="bg-gray-100 min-h-screen flex flex-col justify-between py-20 px-8 md:px-24 font-sans text-[#0C0A3E] overflow-hidden">
              {/* Top Navigation */}
              <div className="flex justify-between items-center w-full text-sm">
                  <div className="uppercase tracking-widest font-semibold">
                      What our clients say
                  </div>
                  <div className="text-right">{index + 1} / {testimonials.length}</div>
              </div>

              {/* Testimonial Slider */}
              <div className="mt-10 relative h-[300px] md:h-[350px]">
                  <AnimatePresence mode="wait">
                      <motion.div
                          key={index}
                          initial={{ x: 100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -100, opacity: 0 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                          className="absolute top-0 left-0 w-full"
                      >
                          <div className="flex flex-col gap-6">
                              <div className="text-6xl">“</div>
                              <p className="text-3xl md:text-5xl font-medium leading-tight">
                                  {testimonials[index].quote}
                              </p>
                              <p className="text-sm mt-6">
                                  — <span className="font-medium">{testimonials[index].name}</span>, {testimonials[index].role}
                              </p>
                          </div>
                      </motion.div>
                  </AnimatePresence>
              </div>
          </div>
  )
}
