
'use client';


import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function Horixontalrule() {
    const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: "100%",
        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [inView, controls]);
  return (
    <motion.div
      ref={ref}
      initial={{ width: 0 }}
      animate={controls}
      className="overflow-hidden"
    >
      <hr className="border-t-2 border-[#0f0f2d] mt-4" />
    </motion.div>
  )
}
