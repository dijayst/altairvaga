import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export const Content = ({ text,text2,text3 }: { text: string,text2:string,text3:string }) => {
  return (
  
        <div className='justify-center font-nunito items-center flex flex-col text-white w-full'>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            className='md:text-8xl text-4xl'
          >
            {text}
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='md:text-8xl text-4xl'
          >
            {text2}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='md:text-8xl text-4xl'
          >
            {text3}
          </motion.p>

          <Image
            src="/image/642310daa3b52127b6a47193_header_mark-text.svg"
            width={500}
            height={100}
            alt="underline" />
        </div>
      


      

  )
}
