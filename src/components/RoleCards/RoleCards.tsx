'use client';
import { motion } from "framer-motion";

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
  const renderCards = (data: string[]) =>
    [...data, ...data].map((title, i) => (
      <div
        key={i}
        className="min-w-[300px] max-w-[300px] border p-6 bg-[#f1f1f1] shadow-md rounded-lg"
      >
        <h3 className="text-gray-800 font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">
          Creative and passionate graphic designer specializing in licensed product design. Very fast worker and quick learner who thrives in a fast-paced environment.
        </p>
      </div>
    ));

  return (
    <div className=" bg-[#f1f1f1] font-nunito flex flex-col items-center justify-center p-10 space-y-10 overflow-hidden">
      
      {/* Scroll left */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {renderCards(roles)}
        </motion.div>
      </div>

      {/* Scroll right */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {renderCards(roles2)}
        </motion.div>
      </div>
      
    </div>
  );
}
