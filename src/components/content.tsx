import Image from 'next/image'
import React from 'react'

export const Content = ({ text,text2,text3 }: { text: string,text2:string,text3:string }) => {
  return (
    <div >
     <div className='justify-center items-center flex  flex-col  text-[#252444]  w-full '>
      <h2 className='md:text-8xl text-4xl'>{text}</h2>
      <h2 className=' md:text-8xl text-4xl'>{text2}</h2>
      <p className=' md:text-8xl text-4xl'>{text3}</p>
<Image src="/image/642310daa3b52127b6a47193_header_mark-text.svg" width={500} height={100} alt='underline'/>

</div>
    </div>
  )
}
