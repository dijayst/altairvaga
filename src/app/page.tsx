
'use client';

import Image from "next/image";
import Fifthsection from "@/components/Fifthsection/Fifthsection";
import Fourthsection from "@/components/Fourthsection/Fourthsection";
import Secondsection from "@/components/Secondsection";
import Seventhsection from "@/components/Seventhsection/Seventhsection";
import { motion, Variants } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Eighthsection from "@/components/Eightsection/Eighthsection";
import Testimonials from "@/components/Testimonials/Testimonials";


const textVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};
export default function Home() {
    const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,     
  });


   const lines = [
    'We help ambitious companies meet',
    '& exceed their growth goals.',
  ];

  return (
    <div className=" bg-[#f1f1f1] flex flex-col ">
    
   <div className="md:px-15 px-5 py-10">  <Secondsection/></div>

   {/*<div className=" md:px-15 px-5 "><Thirdsection/></div>*/}
  
   <div className="text-5xl font-nunito sm:text-6xl font-light text-center leading-tight  text-gray-900  md:py-20 py-20 ">
      {lines.map((line, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
          variants={textVariants}
          className="block"
        >
          {line}
        </motion.span>
      ))}
    </div>

    
  <div className="md:px-15 px-5 "> <Fourthsection/></div>

   <div className="px-15">
  <motion.div
    className="border w-full h-0.5 border-black my-10 origin-left"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  />
</div>
    <div className="mb-20 md:px-15 px-5">
      <p    className="md:text-6xl text-4xl font-nunito flex flex-col justify-center text-center font-medium text-black">
        Our Marketing Services are purpose-built around your funnel, to help you create sustainable, predictable <span className="italic">growth.</span>
      </p>
     
    </div>
    <div className="md:px-15 px-5"><Fifthsection/></div>
    {/*
    <div className="mt-20 md:px-15 px-5">
    <Sixthsection/></div>*/}
    <div className=" md:px-15 px-5">
    <Seventhsection/></div>


    
     <section className="hero-section-container md:h-[32rem] h-[27rem] flex items-center relative">
             
              <div className="image-container relative h-full w-full">
                     <Image
                       src={"/image/background.jpg"}
                       alt="hero-images"
                       layout="fill"
                   objectFit="cover"
                       
                     />
                      <div className="absolute inset-0 bg-black/40 z-10" />
                   </div>
     
     
            </section>
     
     <Testimonials/>
     <div className="md:px-15 px-5">
     <Eighthsection/></div>
     
    </div>
  );
}
