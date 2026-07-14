import React from 'react'

const CourseDescriptionPage = ({ course }) => {
    // Graceful fallback containing your exact database relation keys
    const data = course || {
        title: "The Complete Python Bootcamp From Zero to Hero in Python",
        description: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games. Become a professional Python Developer and get hired! This is the most comprehensive, yet straight-forward, course for the Python programming language.",
        price: 529.00,
        isFree: false,
        thumbnail: null,
        instructor: {
            name: "Prof. Ryan Ahmed"
        }
    }

    return (
        <div className="w-full bg-white font-sans text-gray-900 relative">

            {/* 1. Enhanced Hero Header Section */}
            <div className="w-full bg-gradient-to-b from-slate-900 to-slate-950 text-white py-12 px-6 md:px-12 rounded-b-3xl shadow-md">
                <div className="max-w-5xl mx-auto lg:pr-80 space-y-4">

                    <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                        {data.title}
                    </h1>

                    {/* Main Description short preview line */}
                    <p className="text-sm md:text-base text-gray-300 max-w-2xl font-normal line-clamp-2 leading-relaxed">
                        {data.description}
                    </p>

                    {/* Instructor Meta Row */}
                    <div className="text-xs font-medium pt-1 flex flex-wrap items-center gap-2">
                        <span className="text-gray-400">Created by</span>
                        <span className="text-purple-400 font-bold hover:underline cursor-pointer transition-all">
                            {data.instructor?.name || "Unknown Instructor"}
                        </span>
                    </div>

                    {/* Dynamic Badges */}
                    <div className="flex items-center gap-2 pt-2">
                        <span className="bg-[#a435f0] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                            Premium
                        </span>
                        <span className="bg-white/10 text-gray-200 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider backdrop-blur-sm">
                            {data.isFree ? 'Free Access' : 'Paid Course'}
                        </span>
                    </div>

                </div>
            </div>

            {/* 2. Structured Layout Grid Workspace */}
            <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 relative items-start">

                {/* Left Area: Main body text details description */}
                <div className="lg:col-span-2">
                    <div className="border border-gray-100 rounded-2xl p-6 sm:p-8 bg-gray-50/30 shadow-sm">
                        <h2 className="text-xl font-extrabold mb-4 tracking-tight">About This Course</h2>
                        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                            {data.description}
                        </p>
                    </div>
                </div>

                {/* Right Area: Floating action sidebar dashboard tool */}
                <div className="lg:col-span-1 lg:absolute lg:-top-36 lg:right-6 w-full lg:w-[310px] bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden z-20">

                    {/* Asset Course Cover Box Area */}
                    <div className="w-full aspect-video bg-gray-100 border-b border-gray-100 overflow-hidden relative">
                        <img
                            src={data.thumbnail || "https://via.placeholder.com/310x175"}
                            alt={data.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Financials & Interactive Buttons */}
                    <div className="p-6 space-y-5">
                        <div className="flex items-baseline gap-2">
                            {data.isFree ? (
                                <span className="text-3xl font-black text-emerald-600 uppercase tracking-wide">Free</span>
                            ) : (
                                <span className="text-3xl font-black text-gray-950 tracking-tight">₹{data.price.toFixed(2)}</span>
                            )}
                        </div>

                        {/* Platform CTA Action System */}
                        <div className="space-y-2.5">
                            <button className="w-full py-3.5 bg-[#a435f0] hover:bg-purple-800 text-white font-bold text-xs rounded-xl transition-all shadow-md hover:shadow-lg uppercase tracking-wider">
                                Add to Cart
                            </button>
                            <button className="w-full py-3.5 border border-gray-300 hover:bg-gray-50 text-gray-950 font-bold text-xs rounded-xl transition-all uppercase tracking-wider">
                                Buy Now
                            </button>
                        </div>

                        <p className="text-[11px] text-gray-400 text-center tracking-tight font-medium">
                            Full interactive lifetime access included
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CourseDescriptionPage