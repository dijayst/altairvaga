import React from 'react'
import { ourteam } from './data'
import Image from "next/image";
import Testimonials from '../Testimonials/Testimonials';
import Eighthsection from '../Eightsection/Eighthsection';
import RoleCards from '../RoleCards/RoleCards';

export default function About() {
  return (
     <div className=" bg-[#f1f1f1]  ">


    
      <p className="max-w-130 text-black text-xl sm:text-2xl mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-80">
  We are a team of creative minds and strategic thinkers, dedicated to helping businesses reach their full potential. Our approach is simple: understand your business, identify your unique selling proposition, and develop a marketing strategy that will help you stand out in a crowded market.
</p>

     <div className='md:px-15 px-5'><div className="border w-full h-0.5 bg-black my-30  "></div></div>
      <section className=" py-16  my-10  md:px-15 px-5">
        <div className="">
          <h2 className="text-center py-[2rem] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-green-3a mb-6">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-row-2 gap-10  justify-items-center w-full ">
            {ourteam.map((member, i) => (
              <div
                key={i}
                className="  transition-shadow duration-300  text-justify  "
              >
               
                <div className=" py-3">
                  <h3 className="text-xl font-semibold ">{member.name}</h3>
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
    <h2 className="text-5xl font-semibold text-gray-900 mb-12">Our Values</h2>

 
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Excellence</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        We strive for excellence in everything we do. Whether it's providing
        top-quality products and services or delivering exceptional customer
        experiences, we always aim to exceed expectations.
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Creativity</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        We believe that creativity is the key to innovation and success. That's
        why we encourage our team to think outside the box, experiment with new
        ideas, and continuously push boundaries.
      </p>
    </div>

     <div className="mb-12">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Partnership</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
       Collaboration is at the heart of what we do. Wevalue partnerships and seek to build strong, lasting relationships with ourclients, vendors, and other agencies.
      </p>
    </div>


    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4"> Integrity</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
     
We hold ourselves to the highest ethical standards and are committedto doing the right thing, even when no one is watching. Trust and transparencyare fundamental to the way we operate.
        </p>
    </div>


    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Teamwork</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
    
We believe that great things are achieved through teamwork. Wefoster a culture of collaboration, communication, and mutual support, whereevery team member has a voice and is valued.  </p>
    </div>

    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4"> Tech-Driven</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
    
We are passionate about technology and how it can transformbusinesses and industries. We leverage the latest tools and platforms to driveinnovation, efficiency, and growth.  </p>
    </div>
  </div>
</section>

<div>

<div className="py-20 flex items-center justify-center px-4">
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
