'use client';
import React from 'react'
import { ourteam } from './data'
import Image from "next/image";
import Testimonials from '../Testimonials/Testimonials';
import Eighthsection from '../Eightsection/Eighthsection';
import RoleCards from '../RoleCards/RoleCards';
import Header from '../Header/Header';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function About() {
const { ref, inView } = useInView({
    triggerOnce: false, // animate only once
    threshold: 0.2,     // 20% of the component is visible
  });


  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });



  
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  
  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
     <div className=" bg-[#f1f1f1] py-20 ">


    
      <p className="max-w-130 font-nunito text-black text-xl sm:text-2xl mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-80">
  We are a team of creative minds and strategic thinkers, dedicated to helping businesses reach their full potential. Our approach is simple: understand your business, identify your unique selling proposition, and develop a marketing strategy that will help you stand out in a crowded market.
</p>




 <div className="px-15 py-20">
   <div className="border w-full h-0.5 border-black  "></div></div>
 







   
      <section className=" py-16  my-10  md:px-15 px-5">
        <div className="">
          <h2 className="text-center font-nunito py-[2rem] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#19183a] mb-6">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10  justify-items-center ">
            {ourteam.map((member, i) => (
              <div
                key={i}
                className="  transition-shadow duration-300  text-justify font-nunito  "
              >
               
                <div className=" py-3">
                  <h3 className="text-xl font-semibold text-[#19183a] font-nunito ">{member.name}</h3>
                  <p className="text-gray-600 text-xl">{member.title}</p>
                </div>
                <div><p className='text-gray-600 text-xl'>{member.describe}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
           <section className="hero-section-container md:h-[32rem] h-[27rem] flex items-center relative ">
                   
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

                  <section className="bg-[#f1f1f1] py-16   md:px-15 px-5">
  <div className="max-w-4xl mx-auto">
<Header/>
 
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-nunito">Excellence</h3>
       <motion.p
      ref={ref}
      className="text-2xl text-gray-700 leading-relaxed font-nunito"
      initial={{ opacity: 0, x: -100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >      We strive for excellence in everything we do. Whether it's providing
        top-quality products and services or delivering exceptional customer
        experiences, we always aim to exceed expectations.
      </motion.p>
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-nunito">Creativity</h3>
      <motion.p
      ref={ref1}
      className="text-2xl text-gray-700 leading-relaxed font-nunito"
      initial={{ opacity: 0, x: -100 }}
      animate={inView1 ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >      We strive for excellence in everything we do. Whether it's providing
        top-quality products and services or delivering exceptional customer
        experiences, we always aim to exceed expectations.
      </motion.p>
  
    </div>

     <div className="mb-12 font-nunito">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 ">Partnership</h3>
      <motion.p
      ref={ref2}
      className="text-2xl text-gray-700 leading-relaxed"
      initial={{ opacity: 0, x: -100 }}
      animate={inView2 ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    > 
       Collaboration is at the heart of what we do. Wevalue partnerships and seek to build strong, lasting relationships with ourclients, vendors, and other agencies.
      </motion.p>
    </div>


    <div className="mb-12 font-nunito">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4"> Integrity</h3>
       <motion.p
      ref={ref3}
      className="text-2xl text-gray-700 leading-relaxed"
      initial={{ opacity: 0, x: -100 }}
      animate={inView3 ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    > 
We hold ourselves to the highest ethical standards and are committedto doing the right thing, even when no one is watching. Trust and transparencyare fundamental to the way we operate.
        </motion.p>
    </div>


    <div className="mb-12 font-nunito">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Teamwork</h3>
       <motion.p
      ref={ref4}
      className="text-2xl text-gray-700 leading-relaxed"
      initial={{ opacity: 0, x: -100 }}
      animate={inView4 ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    > 
We believe that great things are achieved through teamwork. Wefoster a culture of collaboration, communication, and mutual support, whereevery team member has a voice and is valued.  </motion.p>
    </div>

    <div className="mb-12 font-nunito">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4"> Tech-Driven</h3>
       <motion.p
      ref={ref5}
      className="text-2xl text-gray-700 leading-relaxed"
      initial={{ opacity: 0, x: -100 }}
      animate={inView5 ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    > 
We are passionate about technology and how it can transformbusinesses and industries.
 We leverage the latest tools and platforms to driveinnovation, efficiency, and growth.  </motion.p>
    </div>
  </div>
</section>

<div>

<div className="py-20 flex items-center justify-center px-4 font-nunito">
  <div className="flex flex-col items-center text-center md:max-w-[60%] w-full">
    <p className="text-6xl text-[#19183a] leading-snug">
      Here's a sneek peak of our world-class roster of talent.
    </p>
  </div>
</div>

    <RoleCards/>

</div>
 <Testimonials/>
  <div className="md:px-15 px-5">
      <Eighthsection/></div>
      
   </div>
  )
}
