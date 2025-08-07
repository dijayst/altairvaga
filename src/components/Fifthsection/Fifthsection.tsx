import React from 'react'
import { whatwedo } from '../Fourthsection/data'

export default function Fifthsection() {
  return (
    <div className=" md:py-12 py-0 px-6 font-nunito">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-[#9a8495] max-w-9xl mx-auto  ">
           {whatwedo.map((item, index) => (
             <div key={index} className=' text-justify px-5 hover:text-[#ff5b46] shadow-md bg-white '>
                
                <span className="text-transparent text-8xl font-bold bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 
               border-2 border-transparent p-2" >
    {item.zero}
  </span>

 
  <span className="text-transparent bg-clip-text text-8xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 
               border-2 border-transparent p-2">
    {item.id}
  </span>
               <h2 className="text-xl font-bold whitespace-nowrap text-black">{item.value}</h2>
               <p className="mt-4 text-lg leading-relaxed">{item.text}</p>
             </div>
           ))}
         </div>

        

       </div>
  )
}
