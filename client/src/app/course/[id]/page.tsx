"use client"
import React, { useState } from 'react'

const CourseDescriptionPage = ({ course }) => {
  // Fallback mock data structure if props aren't loaded yet
  const data = course || {
    title: "The Complete Python Bootcamp From Zero to Hero in Python",
    headline: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
    rating: 4.6,
    reviews: 563274,
    students: 1840291,
    instructor: "Jose Portilla, Pierian Training",
    lastUpdated: "July 2026",
    price: 529,
    oldPrice: 3199,
    isFree: false,
    objectives: [
      "Learn how to use Python professionally, learning both Python 2 and Python 3!",
      "Create games with Python, like Tic Tac Toe and Blackjack!",
      "Learn advanced Python features, like the collections module and how to work with timestamps!",
      "Understand complex topics like Decorators and Object Oriented Programming (OOP)."
    ],
    fullDescription: "Become a professional Python Developer and get hired! This is the most comprehensive, yet straight-forward, course for the Python programming language on the platform! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you!"
  }

  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="w-full bg-white font-sans text-gray-900 relative">
      
      {/* 1. Rich Dark Hero Header Context banner */}
      <div className="w-full bg-slate-900 text-white py-10 px-6 md:px-12 rounded-b-2xl shadow-sm">
        <div className="max-w-5xl mx-auto lg:pr-80 space-y-4">
          
          {/* Breadcrumbs link */}
          <div className="text-xs text-purple-400 font-bold flex gap-2">
            <span>Development</span> <span>➔</span> <span>Programming Languages</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
            {data.title}
          </h1>
          
          <p className="text-sm md:text-base text-gray-300 max-w-2xl font-medium">
            {data.headline}
          </p>

          {/* Social ratings meta */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="bg-[#ecebfa] text-[#2d2f31] font-extrabold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">
              Bestseller
            </span>
            <span className="text-amber-400 font-extrabold text-sm">{data.rating.toFixed(1)}</span>
            <div className="flex text-amber-400 text-xs">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span className="text-purple-300 underline font-medium">({data.reviews.toLocaleString()} ratings)</span>
            <span className="text-gray-400">{data.students.toLocaleString()} students</span>
          </div>

          {/* Instructor & updates metrics */}
          <div className="text-xs text-gray-300 space-y-1">
            <p>Created by <span className="text-purple-300 underline font-medium cursor-pointer">{data.instructor}</span></p>
            <div className="flex items-center gap-4 text-gray-400 mt-2">
              <span>📅 Last updated {data.lastUpdated}</span>
              <span>🌐 English</span>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Main structural core split content workspace grid */}
      <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 relative items-start">
        
        {/* Left: Detailed Information column panels */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* "What you'll learn" features panel box container */}
          <div className="border border-gray-200 rounded-xl p-5 bg-gray-50/30 shadow-sm">
            <h2 className="text-lg font-extrabold mb-4">What you'll learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {data.objectives.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 leading-normal">
                  <span className="text-emerald-600 font-bold text-sm">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expanded Main Text Biography Description */}
          <div className="space-y-3">
            <h2 className="text-lg font-extrabold">Description</h2>
            <div className={`text-xs text-gray-700 leading-relaxed transition-all ${!isExpanded ? 'line-clamp-4' : ''}`}>
              <p className="whitespace-pre-line">{data.fullDescription}</p>
            </div>
            
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#a435f0] hover:text-purple-900 font-bold text-xs flex items-center gap-1 transition-colors"
            >
              {isExpanded ? 'Show less ▴' : 'Show more ▾'}
            </button>
          </div>

        </div>

        {/* 3. Right Sidebar Floating Sticky Checkout Card */}
        <div className="lg:col-span-1 lg:absolute lg:-top-40 lg:right-6 w-full lg:w-[310px] bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-20">
          
          {/* Top thumbnail placeholder preview video asset panel area */}
          <div className="w-full aspect-video bg-gray-900 relative flex items-center justify-center cursor-pointer group">
            <div className="absolute w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center text-gray-900 shadow-md transform transition group-hover:scale-105">
              ▶
            </div>
            <span className="absolute bottom-3 text-xs font-bold text-white tracking-wide bg-slate-950/40 px-3 py-1 rounded-full backdrop-blur-sm">
              Preview this course
            </span>
          </div>

          {/* Checkout transaction block container */}
          <div className="p-5 space-y-4">
            <div className="flex items-baseline gap-2">
              {data.isFree ? (
                <span className="text-2xl font-black text-emerald-600 uppercase tracking-wide">Free</span>
              ) : (
                <>
                  <span className="text-2xl font-black text-gray-950">₹{data.price}</span>
                  <span className="text-sm text-gray-400 line-through">₹{data.oldPrice}</span>
                </>
              )}
            </div>

            {/* Premium badge identifier string strip logic */}
            <div>
              <span className="bg-purple-50 text-[#a435f0] border border-purple-100 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                {!data.isFree ? 'Paid Access Only' : 'Open Access Course'}
              </span>
            </div>

            {/* CTA action operational handles options buttons strip */}
            <div className="space-y-2 pt-2">
              <button className="w-full py-3 bg-[#a435f0] hover:bg-purple-800 text-white font-bold text-xs rounded-lg transition-colors shadow-md uppercase tracking-wider">
                Add to Cart
              </button>
              <button className="w-full py-3 border border-gray-400 hover:bg-gray-50 text-gray-950 font-bold text-xs rounded-lg transition-colors uppercase tracking-wider">
                Buy Now
              </button>
            </div>

            <p className="text-[11px] text-gray-400 text-center tracking-tight mt-2">
              30-Day Money-Back Guarantee Included
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default CourseDescriptionPage