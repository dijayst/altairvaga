"use client";
import React from 'react'
import { motion } from "framer-motion";

export default function Spinninglogo() {
  return (
    <>
   

<motion.div
  initial={{ scale: 0.1, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
>
  <div className="max-h-[12rem] flex items-center justify-center font-nunito ">
    <div className="relative w-44 h-64 mx-auto">
      {/* Rotating circular text */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 300 300"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10,
        }}
      >
        <defs>
          <path
            id="circlePath"
            d="
              M 150, 150
              m -100, 0
              a 100,100 0 1,1 200,0
              a 100,100 0 1,1 -200,0
            "
          />
        </defs>
        <text
          fill="#ffff"
          fontSize="25"
          fontWeight="500"
          letterSpacing="3"
         
        >
          <textPath href="#circlePath" startOffset="0" textLength="628">
            * LEADING MARKETING, BRANDING & DESIGN AGENCY *
          </textPath>
        </text>
      </motion.svg>

      {/* Center logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-5xl font-serif text-white">AV</span>
      </div>
    </div>
  </div>
</motion.div>

</>
  )
}
