
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

type NavbarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Navbar = () => {
  
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);




  return (
   

      <div className="fixed top-0 left-0 z-50 w-full bg-[#f1f1f1] ">
        <nav className="flex justify-between items-center mx-auto max-w-6xl w-full px-4 py-4">
          {/* Logo */}
          <div className="flex w-1/3 text-left  space-x-2 text-[#163546]">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/image/logo.jpg"
                alt="Logo"
                className="w-6 h-6 rounded-2xl"
              />
              <p className="font-semibold font-inter text-3xl text-[#3e80e4]">Altairvega</p>
            </Link>
          </div>
<div className="flex w-1/3 items-center gap-2 justify-center ">
          <ul className="hidden md:flex items-center space-x-6 text-[#163546] font-light">
            <li><Link href="/service">Service</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
          </div>
 
             
           

  <div className="w-1/3 text-right">
              <Link
                href="/"
                className=" text-black px-6 py-2 text-lg uppercase rounded hover:underline underline whitespace-nowrap hover:decoration-blue-500  font-semibold "
              >
               let’s grow


              </Link>
            </div>
           













          {/* Mobile Hamburger */}
          <div className="md:hidden pr-2">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <p className="text-black font-bold">X</p>
              ) : (
                <RxHamburgerMenu size={25} />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col space-y-4 px-6 pb-4 bg-white font-semibold">
           <li><Link href="/service">Service</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            
          </ul>
        )}
      </div>
   
  );
};

export default Navbar;















