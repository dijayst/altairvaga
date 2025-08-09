"use client";
import React, { useState } from 'react'

export default function Contactus() {

 const [firstname, setfirstname] = useState("");
     const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [companyname, setcompanyname] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const onSubmit = async () => {
    const mailText = `Name: ${firstname}\n  Email: ${email}\nMessage: ${message}`;
   

  };

  
  return (
   <>
  
    
    
    
    <div className="bg-[#f1f1f1] text-[#333] py-16 px-4 font-nunito">
        <div className="max-w-4xl mx-auto">
          <form className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                
                <input
                  type="email"
                  placeholder='FirstName'
                  className="w-full border-b border-gray-500 bg-transparent outline-none py-2" />
              </div>
              <div>
               
                <input
                  type="text"
                  placeholder='LastName'
                  className="w-full border-b border-gray-500 bg-transparent outline-none py-2" />
              </div>
            </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                
                <input
                  type="email"
                  placeholder='E-mail'
                  className="w-full border-b border-gray-500 bg-transparent outline-none py-2" />
              </div>
              <div>
                
                <input
                  type="text"
                  placeholder='Company name'
                  className="w-full border-b border-gray-500 bg-transparent outline-none py-2" />
              </div>
            </div>
            <div>
             
              <textarea
              placeholder=' What can we help you with?'
                rows={5}
                className="w-full border-b border-gray-500 bg-transparent outline-none py-2 resize-none"
              ></textarea>
            </div>

            <p className="text-sm text-gray-600">
              By submitting, you agree to our{' '}
              <a href="#" className="text-purple-600 underline">
                Privacy Policy
              </a>
              . We treat your info responsibly.
            </p>

            <button className="bg-[#ff5b46] text-white px-8 py-3 rounded-full text-lg font-medium w-fit hover:bg-purple-700 transition">
              Submit
            </button>
          </form>
        </div>
      </div></>
  )
}
