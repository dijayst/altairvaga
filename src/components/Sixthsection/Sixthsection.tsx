import React from 'react'

export default function Sixthsection() {
  return (







   <>
   
   <div className="bg-gray-100 p-10 relative overflow-hidden my-20 font-nunito">
      {/* Statistics Section */}


      {/* SVG Ellipse as Background */}
      <div className="absolute top-1/2 left-1/2 w-[1240px] -translate-x-1/2 -translate-y-1/2 z-0">
        <svg viewBox="0 0 1240 270" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="__lottie_element_6" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#7e22ce" />
            </linearGradient>
          </defs>
          <path
            stroke="url(#__lottie_element_6)"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            fillOpacity="0"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="1"
            d="M0,-135 C342.178,-135 620,-74.506 620,0 C620,74.506 342.178,135 0,135 C-342.178,135 -620,74.506 -620,0 C-620,-74.506 -342.178,-135 0,-135z"
            transform="translate(620 135)" />
        </svg>
      </div>

      {/* Marketing Content Bubbles */}
      <div className="relative z-10 text-center">
        <div className="text-3xl font-bold text-purple-600 mb-6">01</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
          {[
            'Content Marketing',
            'Advertising',
            'Email Marketing',
            'Blogging',
            'Case Studies',
            'Marketing Automationn',
            'Events',
            'Webinars',
          ].map((item, idx) => (
            <span
              key={idx}
              className="bg-purple-600 px-4 py-2 text-white w-50 rounded-full text-sm font-medium "
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
    
    




    

    
      
</>

  )
}
