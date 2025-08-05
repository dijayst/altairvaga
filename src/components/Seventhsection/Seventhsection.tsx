import { motion, Variants } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";



const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};


export default function Seventhsection() {
  return (
    <div className="bg-[#19183a] text-white">
      





<div className="flex flex-col lg:flex-row gap-20 py-30 px-6 md:px-16">
      <h2 className="text-2xl lg:text-3xl font-medium">Services</h2>

      <div className="flex flex-col gap-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col text-5xl md:text-6xl text-justify px-0 md:px-10 font-medium "
        >
          {[
            "Conception to scale,",
            "we cover the entire growth journey",
          ].map((text, i) => (
            <motion.span key={i} variants={fadeUp} custom={i}>
              {text}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col px-0 md:px-10 text-lg md:text-2xl leading-relaxed text-white"
        >
          {[
            "Whether you're just building out your marketing or looking to",
            "explore new strategies, we have the toolkits and experience to help",
            "you grow your business.",
          ].map((text, i) => (
            <motion.span key={i} variants={fadeUp} custom={i + 2}>
              {text}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>


<div className="flex flex-col gap-10 whitespace-nowrap">

      <div className="flex  md:flex-row flex-col">
  {/* Sticky Title */}
  <div className="w-4/6 sticky top-24 self-start">
    <h2 className="text-6xl font-medium">Branding & Design</h2>
  </div>

  {/* Scrollable Section */}
  <div className="flex-col w-2/6 gap-10 flex">
    <div className="flex gap-25  md:flex-row flex-col">
      <div className="flex flex-col gap-15 text-xl">
        <p>Branding</p>
        <p>Creative</p>
        <p>UI/UX Design</p>
        <p>Video</p>
        <p>Web Design</p>
        <p>Photography</p>
      </div>

      <Link
        href="/about"
        className=" transition-all duration-200 h-12 w-40 mt-100 whitespace-nowrap bg-[#6100ff] text-white hover:bg-green-3a px-10 py-3 rounded-full text-lg md:text-md font-semibold justify-center items-center flex"
      >
        <FiArrowRight color="white" size={30} className=" group-hover:inline-block transition-all duration-200" />
      </Link>
    </div>
    <div className="border h-0.2 bg-white"></div>
  </div>


  
</div>






<div className="flex  md:flex-row flex-col">
  {/* Sticky Title */}
  <h2 className="text-6xl font-medium w-4/6 sticky top-32 self-start">
    Marketing Ops
  </h2>

  {/* Scrollable Right Side */}
  <div className="flex-col w-2/6 gap-10 flex">
    <div className="flex gap-25  md:flex-row flex-col">
      <div className="flex flex-col gap-15 text-xl">
        <p>Marketing Automation</p>
        <p>Database Management</p>
        <p>MarTech Consulting</p>
        <p>WordPress</p>
      </div>

     <Link
        href="/about"
        className=" transition-all duration-200 h-12 w-40 mt-100 whitespace-nowrap bg-[#6100ff] text-white hover:bg-green-3a px-10 py-3 rounded-full text-lg md:text-md font-semibold justify-center items-center flex"
      >
        <FiArrowRight color="white" size={30} className=" group-hover:inline-block transition-all duration-200" />
      </Link>
    </div>

    <div className="border h-0.2 bg-white"></div>
  </div>
</div>











<div className="flex pb-30 min-h-[150vh]  md:flex-row flex-col">
  <div className="w-4/6 sticky top-20 self-start">
    <h2 className="text-6xl font-medium">Strategy & Growth</h2>
  </div>

  <div className="flex-col w-2/6 gap-10 flex">
    <div className="flex gap-25 md:flex-row flex-col">
      <div className="flex flex-col gap-15 text-xl">
        <p>Strategy Development</p>
        <p>Strategy Implementation</p>
        <p>Campaign Management</p>
        <p>Account Based Marketing</p>
        <p>Content Marketing</p>
      </div>

      <Link
        href="/about"
        className=" transition-all duration-200 h-12 w-40 mt-100 whitespace-nowrap bg-[#6100ff] text-white hover:bg-green-3a px-10 py-3 rounded-full text-lg md:text-md font-semibold justify-center items-center flex"
      >
        <FiArrowRight color="white" size={30} className=" group-hover:inline-block transition-all duration-200" />
      </Link>
    </div>

    <div className="border h-0.2 bg-white "></div>
  </div>
</div>


</div>

















    </div>
  );
}
