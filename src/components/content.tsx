import Image from 'next/image'
import React from 'react'

export default function Content() {
  return (
    <div  >
        <div className='justify-center items-center flex  flex-col  text-[#252444]  w-full '>
      <h2 className='text-8xl'>Create the <span>growth</span></h2><h2 className=' text-8xl'>
your company is</h2>
<p className=' text-8xl'>capable of.</p>
<Image src="/image/642310daa3b52127b6a47193_header_mark-text.svg" width={500} height={100} alt='underline'/>

</div>


    </div>
  )
}
