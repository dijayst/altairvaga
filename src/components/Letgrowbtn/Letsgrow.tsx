import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

export default function Letsgrow() {
  return (
     <div className="group relative flex items-center justify-center px-20 py-3 rounded-full transition-all duration-300 bg-[#6100ff] hover:bg-gray-100 overflow-hidden w-30">
              {/* Learn More text */}
              <Link
                href="/about"
                className="text-white whitespace-nowrap transition-opacity duration-200 text-lg md:text-md font-semibold group-hover:opacity-0 z-10"
              >
                let’s grow
    
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
  )
}
