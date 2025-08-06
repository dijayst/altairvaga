
'use client';

import Image from "next/image";
import Fifthsection from "@/components/Fifthsection/Fifthsection";
import Fourthsection from "@/components/Fourthsection/Fourthsection";
import Secondsection from "@/components/Secondsection";
import Seventhsection from "@/components/Seventhsection/Seventhsection";
import Thirdsection from "@/components/Thirdsection";
import { motion, Variants } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Testimonials from "@/components/Testimonials/Testimonials";
import Eighthsection from "@/components/Eightsection/Eighthsection";


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
    
   <div className="md:px-15 px-5">  <Secondsection/></div>

   <div className=" md:px-15 px-5 "><Thirdsection/></div>
  
   <div className="text-5xl sm:text-6xl font-light text-center leading-tight text-gray-900 h-screen py-50">
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
  <div className="md:px-15 px-5">
   <div className="border w-full h-0.5 bg-black my-30 "></div></div>
    <div className="mb-20 md:px-15 px-5">
      <p    className="md:text-6xl text-4xl flex flex-col justify-center text-center font-medium">
        <span>Our Marketing Services are purpose-built</span><span> around your <em>funnel</em>, to help you create </span><span>sustainable, predictable <em>growth.</em></span>
      </p>
     
    </div>
    <div className="md:px-15 px-5"><Fifthsection/></div>
    {/*
    <div className="mt-20 md:px-15 px-5">
    <Sixthsection/></div>*/}
    <div className="bg-[#19183a] md:px-15 px-5">
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
