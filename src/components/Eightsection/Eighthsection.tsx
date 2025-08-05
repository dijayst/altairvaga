import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

export default function Eighthsection() {
  return (
    <div>
      <p className='flex flex-col md:text-6xl text-4xl font-medium text-justify'><span>Our approach is different </span><span>than other agencies.</span></p>
   

<div className="py-20 flex items-center justify-center  px-4">
      <div className="flex flex-col items-center text-center md:max-w-[50%] w-full">
        <p className="text-xl text-gray-700 leading-relaxed">
          The traditional agency model is flawed. Marketing agencies typically place a
          group of talent around managing your account, with one goal in mind — get you to renew your contract.
          We do the opposite by focusing on precisely what your goals are, and placing the best team around to
          accomplish those goals.
        </p>

        <div className="flex items-center justify-center gap-4 mt-6">
          <Link
            href="/about"
            className="flex items-center justify-center bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-200"
          >
            <FiArrowRight className="mr-2" />
            Learn More
          </Link>
          <p className="text-xl font-medium text-gray-800 hover:decoration- hover:underline cursor-pointer hover:decoration-[[#6100ff]]">
            Book a meeting
          </p>
        </div>
      </div>
    </div>

    </div>
  )
}
