import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

export default function Secondsection() {
  return (
    
       <div className='flex flex-col float-right py-20 px-40 '>
          <div className='flex flex-col text-right  text-2xl'><span>We are Goodbrand, a full-service marketing agency</span><span> based in Austin. We work with believers & big</span><span> dreamers to help them achieve their vision.</span></div>
           <div className='flex justify-center items-center'>
           <div className="group  bg-blue-600 relative flex items-center gap-2 px-4 py-2  rounded hover:bg-gray-100 transition-all duration-300  justify-center">
           
             <Link
                    href="/about"
                    className="group-hover:hidden transition-all duration-200    mt-6 bg-green-600 text-white hover:bg-green-3a px-10 py-3 rounded-full text-lg md:text-md font-semibold w-fit"
                  >
                    Learn More
                  </Link>
            
            
            <FiArrowRight className="hidden group-hover:inline-block transition-all duration-200" />
          </div>
          <p className='hover:underline  hover:decoration-red-500'>
book a meeting</p>
          </div>
          
      </div>
  )
}
