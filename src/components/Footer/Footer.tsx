import React from 'react'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Ninthsection from '../Ninthsection/Ninthsection'

export default function Footer() {
  return (

      <div className='bg-[#141336]  px-15'>
        <Ninthsection />
      <div className="border w-full h-0.5 bg-white my-30"></div>
      <footer className=" text-white py-16 ">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
              {/* Logo & Contact */}
              <div>
                  <h2 className="text-3xl font-serif mb-6">goodbrand</h2>
                  <p className="mb-2">+01 234 567 77</p>
                  <p className="mb-2 underline">grow@goodbrand.io</p>
                  <p>3711 South Mopac Expressway, Austin TX 78746</p>
              </div>

              {/* Discover */}
              <div>
                  <h3 className="font-semibold mb-4">Discover</h3>
                  <ul className="space-y-2 text-sm">
                      <li>Services</li>
                      <li>About</li>
                      <li>Work</li>
                      <li>Contact</li>
                      <li>Blog</li>
                  </ul>
              </div>

              {/* Newsletter */}
              <div className="md:col-span-2">
                  <h3 className="font-semibold mb-4">Sign up for our newsletter</h3>
                  <div className="flex items-center border-b border-gray-500">
                      <input
                          type="email"
                          placeholder="E-mail"
                          className="bg-transparent text-white w-full py-2 px-2 outline-none placeholder-gray-400" />
                      <button className="text-xl text-white pr-2">&rarr;</button>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                      By signing up to receive emails from Goodbrand, you agree to our{' '}
                      <a href="#" className="text-white underline">
                          Privacy Policy
                      </a>
                      . We treat your info responsibly. Unsubscribe anytime.
                  </p>
                  <div className="flex gap-4 mt-6">
                      <FaLinkedinIn className="text-white text-xl hover:text-gray-300 cursor-pointer" />
                      <FaTwitter className="text-white text-xl hover:text-gray-300 cursor-pointer" />
                  </div>
              </div>
          </div>
          <p className="text-center text-gray-400 text-sm mt-10">
              Copyright © 2023 Goodbrand®
          </p>
      </footer></div>
  )
}
