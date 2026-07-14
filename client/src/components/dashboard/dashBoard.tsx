"use client"
import React, { useState } from 'react'
import DiscoverCard from './coursecart'

const Dashboard = () => {
    // Mock asset list data matching parameters requested
    const [courses] = useState([
        {
            id: 1,
            title: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA...",
            instructor: "Ligency, Ed Donner",
            rating: 4.7,
            reviews: 37878,
            price: 639,
            oldPrice: 3299,
            isFree: false,
            thumbnail: "https://via.placeholder.com/240x135"
        },
        {
            id: 2,
            title: "The AI Engineer Course 2026: Complete AI Engineer Bootcamp",
            instructor: "365 Careers",
            rating: 4.6,
            reviews: 22977,
            price: 639,
            oldPrice: 3089,
            isFree: false,
            thumbnail: "https://via.placeholder.com/240x135"
        },
        {
            id: 3,
            title: "AI Agent Development Masterclass from scratch",
            instructor: "Maximilian Müller",
            rating: 4.8,
            reviews: 1450,
            price: 0,
            oldPrice: 0,
            isFree: true,
            thumbnail: "https://via.placeholder.com/240x135"
        },
        {
            id: 4,
            title: "The Complete Claude Code & Claude Cowork Masterclass...",
            instructor: "Prof. Ryan Ahmed, Ph.D., MBA",
            rating: 4.6,
            reviews: 5317,
            price: 549,
            oldPrice: 1239,
            isFree: false,
            thumbnail: "https://via.placeholder.com/240x135"
        }
    ])

    return (
        <div className="w-full bg-white py-6 font-sans">
            <div className="max-w-7xl mx-auto px-4 relative group/slider">



                {/* Horizontal Container Area Wrapper */}
                <div className="relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {courses.map((course) => (
                            <DiscoverCard key={course.id} course={course} />
                        ))}
                    </div>

                    {/* Slick Round Slide Navigation Circle Arrow Indicator Overlay (Right Side)
                    <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 shadow-md rounded-full items-center justify-center hidden lg:flex hover:bg-gray-50 text-gray-800 transition-all active:scale-95 z-10 font-bold text-sm">
                        ➔
                    </button> */}
                </div>

            </div>
        </div>
    )
}

export default Dashboard