"use client";
import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";

const text = "Our Values";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
};

export default function Header() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" }); // `once: true` means animation only happens once

  return (
    <motion.h2
      ref={ref}
      className="text-5xl font-semibold text-gray-900 mb-12 flex"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  );
}
