import React from 'react'
import { stats } from './data'

export default function Fourthsection() {
  return (
     <div className="bg-gray-100 py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-30 text-center text-gray-900 max-w-7xl mx-auto">
        {stats.map((item, index) => (
          <div key={index}>
            <h2 className="text-8xl font-bold">{item.value}</h2>
            <p className="mt-4 text-2xl leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
