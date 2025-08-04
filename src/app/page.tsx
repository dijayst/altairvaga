
'use client';

import Image from "next/image";
import Content from "@/components/content";
import Fifthsection from "@/components/Fifthsection/Fifthsection";
import Fourthsection from "@/components/Fourthsection/Fourthsection";
import Secondsection from "@/components/Secondsection";
import Seventhsection from "@/components/Seventhsection/Seventhsection";
import Sixthsection from "@/components/Sixthsection/Sixthsection";

import Spinninglogo from "@/components/Spinninglogo";
import Thirdsection from "@/components/Thirdsection";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Testimonials from "@/components/Testimonials/Testimonials";
import Eighthsection from "@/components/Eightsection/Eighthsection";
import Ninthsection from "@/components/Ninthsection/Ninthsection";

export default function Home() {
    const { ref, inView } = useInView({
    triggerOnce: true, // animates only once
    threshold: 0.2,     // adjust when it should animate
  });

  return (
    <div className=" bg-[#f1f1f1]  ">
    <div className="flex  mt-17 px-15   min-h-screen pt-40 ">
      <div className="flex w-[82%]  items-center  justify-center  ">
       <Content /></div>
          <div className="flex w-[18%] max-h-[12rem] items-right  ">
 <Spinninglogo/></div>
    
    </div>
   <div className="px-15">  <Secondsection/></div>

   <div className="mt-87 px-15"><Thirdsection/></div>
  
    <div className="h-screen flex items-center justify-center px-15">
      <motion.p
        ref={ref}
        className="text-6xl flex flex-col justify-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span>We help ambitious companies meet</span>
        <span>& exceed their growth goals.</span>
      </motion.p>
    </div>
  <div className="px-15"> <Fourthsection/></div>
   <div className="border w-full h-0.5 bg-black my-30 px-15"></div>
    <div className="mb-20 px-15">
      <p    className="text-6xl flex flex-col justify-center text-center font-medium">
        <span>Our Marketing Services are purpose-built</span><span> around your <em>funnel</em>, to help you create </span><span>sustainable, predictable <em>growth.</em></span>
      </p>
     
    </div>
    <div className="px-15"><Fifthsection/></div>
    <div className="mt-20 px-15">
    <Sixthsection/></div>
    <div className="bg-[#19183a] px-15">
    <Seventhsection/></div>


    
     <section className="hero-section-container md:h-[32rem] h-[27rem] flex items-center relative">
             
              <div className="image-container relative h-full w-full">
                     <Image
                       src={"/images/enterprice.jpg"}
                       alt="hero-images"
                       layout="fill"
                   objectFit="cover"
                       
                     />
                      <div className="absolute inset-0 bg-black/40 z-10" />
                   </div>
     
     
            </section>
     
     <Testimonials/>
     <div className="px-15">
     <Eighthsection/></div>
      <div className="bg-[#19183a] px-15"><Ninthsection/></div>
    </div>
  );
}
