import Image from "next/image";
import React from "react";

function CardHelper({
 
  name,
  description,
  text,
}: {
 
  name: string;
  description: string;
  text: string;
}) {
  return (
    <div className="bg-white-fb p-6 rounded-3xl  w-full max-w-[27rem]">
      <div className="flex items-center gap-7">
       
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-blue-700">{name}</h1>
          <p className="text-[#1a8998] text-sm h-[2rem]">{description}</p>
         
        </div>
      </div>
      <p className="mt-[2rem] text-black-21">{text}</p>
    </div>
  );
}

export default CardHelper;
