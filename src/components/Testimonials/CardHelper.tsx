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
    <div className="bg-white-fb p-6 rounded-3xl  w-full max-w-full">
      <div className="flex items-center gap-7">
        <h1 className="text-9xl text-blue-700">"</h1>
        <div className="flex flex-col gap-2">
          <p className="mt-[2rem] text-black-21">{text}</p>
     
        </div>
      </div>
       <h1 className="text-indigo-2F font-semibold text-xl">{name}</h1>

    </div>
  );
}

export default CardHelper;
