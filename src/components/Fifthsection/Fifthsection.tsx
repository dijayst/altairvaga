import React from 'react'
import { whatwedo } from '../Fourthsection/data'

export default function Fifthsection() {
  return (
    <div className=" py-12 px-6">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center text-gray-900 max-w-9xl mx-auto ">
           {whatwedo.map((item, index) => (
             <div key={index} className='shadow-sm text-justify px-5'>
                <h2 className="text-xl font-bold">{item.id}</h2>
               <h2 className="text-xl font-bold whitespace-nowrap">{item.value}</h2>
               <p className="mt-4 text-lg leading-relaxed">{item.text}</p>
             </div>
           ))}
         </div>

        

       </div>
  )
}
