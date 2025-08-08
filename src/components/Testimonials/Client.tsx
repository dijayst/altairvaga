
'use client';
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    text: "Professional team with deep expertise in Google Ads and social media. They offer clear reporting and measurable results. Great for businesses looking to scale quickly.",
    name: "Roberto Martins",
    role: "Supervisor",
    image: "https://i.pravatar.cc/100?img=12", // Placeholder
  },
  // Add more if needed
];
export default function Client() {
    const [current, setCurrent] = useState(0);
  const testimonial = testimonials[current];

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-gray-100 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Quote Icon Circle */}
        <div className="flex-shrink-0 relative w-32 h-32 flex items-center justify-center rounded-full bg-red-500 text-white text-3xl font-bold">
          <FaQuoteLeft />
          <p className="absolute text-xs text-gray-500 w-40 text-center rotate-[-90deg] left-[calc(100%+1rem)] origin-left">
            REVIEW OUR CLIENTS FEEDBACK
          </p>
        </div>

        {/* Testimonial Text */}
        <div className="flex-1">
             {testimonials.map((testimonials, index) => (
        <div
          key={index}
       >
          <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed mb-6">
            “{testimonials.text}”
          </p>

          {/* Author */}
          <div className="flex items-center gap-4 border-t pt-4">
            <img
              src={testimonials.image}
              alt={testimonials.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-black">{testimonials.name}</p>
              <p className="text-sm text-gray-500">{testimonials.role}</p>
            </div>
          </div>

        </div>
  ))}</div>
        {/* Arrows */}
        <div className="hidden md:flex gap-4 absolute bottom-8 right-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white shadow hover:bg-gray-200"
          >
            <FaArrowLeft className="mx-auto" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white shadow hover:bg-gray-200"
          >
            <FaArrowRight className="mx-auto" />
          </button>
        </div>
      </div>

      
    </section>
  )
}
