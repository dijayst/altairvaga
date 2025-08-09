import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

export default function Ninthsection() {
  return (
    <div className=" text-white flex gap-20 justify-between py-30 md:flex-row flex-col font-nunito">
    <p className='text-justify flex flex-col md:text-6xl text-4xl font-medium'>
      <span>Start making the </span><span>most of your </span><span>company's </span><span> potential.</span></p>
      
                  
                  <div className="flex items-center justify-center gap-4 mt-6 md:flex-row flex-col">
  <Link
    href="/about"
    className="flex items-center justify-center bg-blue-600 text-white hover:bg-green-700 px-10 py-3 rounded-full text-lg font-semibold transition-all duration-200 w-fit"
  >
    <FiArrowRight className="mr-2" />
  </Link>
  <p className="text-xl font-medium text-white underline- hover:underline hover:decoration-gray-500 cursor-pointer">
    Book a meeting
  </p>
</div>

    </div>
  )
}
