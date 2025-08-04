import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

export default function Ninthsection() {
  return (
    <div className=" text-white flex gap-20">
    <p className='text-justify flex flex-col'><span>Start making the </span><span>most of your company's potential.</span></p>
      <div className='flex gap-0 justify-center items-center'>  <Link
                    href="/about"
                    className="group-hover:hidden transition-all duration-200    mt-6 bg-green-600 text-white hover:bg-green-3a px-10 py-3 rounded-full text-lg md:text-md font-semibold w-fit"
                  >
                      <FiArrowRight  />
                           
                  </Link> <p className='hover:underline '>book a meeting</p></div>
    </div>
  )
}
