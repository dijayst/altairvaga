import React from 'react'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Facebook, Instagram, LinkedIn, TwitterXIcon } from './Icons/SocialMedia'
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
    
  const router = useRouter();
  return (

    
          
          
          <div className="bg-[#141336] px-6 lg:px-[3rem] text-[#6ddce1] py-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                  {/* Logo */}
                  <div>
                      <Image width={180} height={50} alt="logo" src={""} />
                      Altairvega
                  </div>

                  {/* Address + Privacy */}
                  <div className="flex flex-col lg:flex-row items-center gap-10 text-white">

                      {/* Contact Info */}
                      <div className="flex flex-col gap-3 mt-4 text-center lg:text-left">
                          <p className="flex items-center gap-2 justify-center lg:justify-start hover:text-[white]">
                              <span className="text-white">
                                  <MapPin color="white" />
                              </span>
                              Chicago, Illinois.
                          </p>
                          {/*
    <p className="flex items-center gap-2 justify-center lg:justify-start hover:text-[white]">
      <span className="text-white">
        <Phone color="white" />
      </span>
      
    </p>*/}
                          <p
                              className="flex items-center gap-2 justify-center lg:justify-start hover:text-[white]">
                              <span className="text-white">
                                  <Mail color="white" />
                              </span>
                              grow@goodbrand.io
                          </p>
                      </div>

                      {/* Privacy & Copyright  onClick={() => setOpenPrivacy(true)}*/}
                      <div className="flex flex-col text-center lg:text-left pt-6 lg:pt-0">
                          <p
                              className="cursor-pointer hover:opacity-55 hover:text-[white]"

                          >
                              Privacy Policy
                          </p>
                          <p className="cursor-pointer hover:text-[white]">
                              Copyright © 2023 Goodbrand®
                          </p>
                      </div>
                  </div>

                  {/* Social Icons */}
                  <div className="flex gap-4 pt-6 lg:pt-0">
                      <Facebook
                          color="white"
                          className="cursor-pointer"
                          onClick={() => router.push(
                              "https://www.facebook.com/profile.php?id=61577588234877&mibextid=wwXIfr&mibextid=wwXIfr"
                          )} />
                      <Instagram
                          color="white"
                          className="cursor-pointer"
                          onClick={() => router.push("https://www.instagram.com/unlockcoop?igsh=Mnd6MnFlMnM0bnV5&utm_source=qr")} />
                      <LinkedIn
                          color="white"
                          className="cursor-pointer"
                          onClick={() => router.push("https://www.linkedin.com/company/unlock-co-op/")} />

                      <TwitterXIcon
                          color="white"
                          className="cursor-pointer"
                          onClick={() => router.push("")} />
                  </div>

              </div>
          </div>

  )
}
