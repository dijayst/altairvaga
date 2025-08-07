import React from 'react'
import { stats } from './data'

export default function Fourthsection() {
  return (
     <div className=" py-10 px-6 font-nunito">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-gray-900 max-w-7xl mx-auto rounded-xl">
        {stats.map((item, index) => (
          <div key={index} className='shadow-md'>
            <h2 className="text-8xl font-bold">{item.value}</h2>
            <p className="mt-4 text-2xl leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
