'use client';

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const roles = [
  'ABM SPECIALIST',
  'ILLUSTRATOR',
  'SOCIAL MEDIA MANAGER',
];


const roles2 = [
  'GRAPHIC DESIGNER',
  'MARKETING MANAGER',
  'WEBSITE DEVELOPER',
];

export default function RoleCards() {

    
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    const scrollLoop = async (controls: any, distance: number, direction: "left" | "right") => {
      while (true) {
        await controls.start({
          x: direction === "left" ? -distance : distance,
          transition: { duration: 20, ease: "linear" },
        });
        await controls.set({ x: 0 });
      }
    };

    scrollLoop(controls1, 1000, "left");
    scrollLoop(controls2, 1000, "right");
  }, []);

  const renderCards = (data: string[]) =>
    [...data, ...data].map((title, i) => (
      <motion.div
        key={i}
        className="min-w-[300px] max-w-[300px] border p-6 bg-[#f1f1f1] shadow-md rounded-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <h3 className="text-gray-800 font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">
          Creative and passionate graphic designer specializing in licensed product design. Very fast worker and quick learner who thrives in a fast-paced environment.
        </p>
      </motion.div>
    ));

  return (
    <div className="min-h-screen bg-[#f1f1f1] flex flex-col items-center justify-center p-10 space-y-10 overflow-hidden">
      
      {/* Scroll left */}
      <div className="w-full overflow-hidden">
        <motion.div className="flex gap-6 w-max" animate={controls1}>
          {renderCards(roles)}
        </motion.div>
      </div>

      {/* Scroll right */}
      <div className="w-full overflow-hidden">
        <motion.div className="flex gap-6 w-max" animate={controls2}>
          {renderCards(roles2)}
        </motion.div>
      </div>
      
    </div>
  );
}