import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

export default function Eighthsection() {
  return (
    <div>
      <p className='flex flex-col text-6xl font-medium text-justify'><span>Our approach is different </span><span>than other agencies.</span></p>
    <div className='justify-center items-center flex flex-col max-w-[50%]'><p>The traditional agency model is flawed. Marketing agencies typically place a group of talent around managing your account, with one goal in mind, get you to renew your contract. We do the opposite by focusing on precisly what your goals are, and placing the best team around to accomplish those goals.
</p>
<div className='flex gap-0 justify-center items-center'>  <Link
                    href="/about"
                    className="group-hover:hidden transition-all duration-200    mt-6 bg-green-600 text-white hover:bg-green-3a px-10 py-3 rounded-full text-lg md:text-md font-semibold w-fit"
                  >
                      <FiArrowRight  />
                           
                  </Link> <p className='hover:underline '>book a meeting</p></div>
</div>

    </div>
  )
}
