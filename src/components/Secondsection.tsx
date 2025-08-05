import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

export default function Secondsection() {
  return (
    
       <><div className='flex flex-col float-right py-20 px-40 '>
      <div className='flex flex-col text-right  text-2xl'>
        <span>We are Goodbrand, a full-service marketing agency</span>
        <span> based in Austin. We work with believers & big</span>
        <span> dreamers to help them achieve their vision.</span>
        </div>


<div className="flex justify-center px-4">
  <div className="flex flex-col text-center text-2xl max-w-3xl">
    <span>We are Goodbrand, a full-service marketing agency</span>
    <span>based in Austin. We work with believers & big</span>
    <span>dreamers to help them achieve their vision.</span>
  </div>
</div>


      <div className="flex justify-center items-center gap-4 mt-4">
        <div className="group relative flex items-center justify-center px-20 py-3 rounded-full transition-all duration-300 bg-[#6100ff] hover:bg-gray-100 overflow-hidden w-30">
          {/* Learn More text */}
          <Link
            href="/about"
            className="text-white whitespace-nowrap transition-opacity duration-200 text-lg md:text-md font-semibold group-hover:opacity-0 z-10"
          >
            Learn More
          </Link>

          {/* Arrow icon */}
          <Link
            href="/about"
            className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 z-10"
          >
            <FiArrowRight className="text-white text-xl" />
          </Link>

          {/* Background sliding effect (optional) */}
          <span className="absolute inset-0 bg-[#6100ff] translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></span>
        </div>

        <p className="hover:underline hover:decoration-blue-500">book a meeting</p>
      </div>

    </div>
    

   
      </>



  )
}
