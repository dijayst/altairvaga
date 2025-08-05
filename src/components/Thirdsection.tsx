import React from 'react'
import Image from 'next/image'
import { EmblaCarousel } from './EmblaCarousel'


export default function Thirdsection() {
  return (
  
      <div className=" shadow-sm flex flex-col py-[2rem] overflow-x-hidden md:px-20 px-0 justify-center items-center ">
          <EmblaCarousel
              list={[
                  <Image
                      height={36}
                      alt=""
                      key={1}
                      src={"/images/ripple_logo.png"}
                      width={140} />,
                  <Image
                      key={2}
                      height={45}
                      alt=""
                      src={"/images/spotify_logo.png"}
                      width={150} />,
                  <Image
                      height={30}
                      key={3}
                      alt=""
                      src={"/images/dropbox_logo.png"}
                      width={150} />,
                  <Image
                      height={77}
                      alt=""
                      key={4}
                      src={"/images/aladin_logo.png"}
                      width={190} />,
                  <Image
                      key={5}
                      height={44}
                      alt=""
                      src={"/images/airbnb_logo.png"}
                      width={140} />,
                  <Image
                      key={6}
                      height={37}
                      alt=""
                      src={"/images/walmart_logo.png"}
                      width={150} />,
              ]} />

          <p className="text-center text-purple-2F font-semibold py-3">
              Trusted by 20,000+ companiess
          </p>
      </div>
      
    

    
  )
}
