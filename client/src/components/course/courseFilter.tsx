"use client"
import React, { useState } from 'react'

const CourseFilter = ({ totalResults = "10,000" }) => {
    const [selectedSort, setSelectedSort] = useState("Most Popular")

    return (
        <div className="w-full bg-white font-sans p-4">
            {/* 1. Header Title */}
            <h2 className="text-2xl font-bold text-[#2d2f31] mb-4">
                All Development courses
            </h2>

            {/* 2. Guarantee Info Banner */}
            <div className="w-full border border-gray-300 rounded-lg p-4 mb-6 flex items-center gap-3 bg-white">
                {/* Info Circular Icon */}
                <div className="w-6 h-6 rounded-full border-2 border-[#a435f0] flex items-center justify-center text-[#a435f0] font-serif font-bold text-sm flex-shrink-0">
                    i
                </div>
                <span className="text-sm font-bold text-[#2d2f31]">
                    Not sure? All courses have a 30-day money-back guarantee
                </span>
            </div>

            {/* 3. Filter Actions Control Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">

                    {/* Filter Toggle Button */}
                    <button className="h-12 px-5 border border-gray-400 hover:bg-gray-50 font-bold text-sm flex items-center gap-2 text-[#2d2f31] bg-white transition-colors">
                        {/* Filter Lines Icon */}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M6 10h12m-9 6h6" />
                        </svg>
                        Filter
                    </button>

                    {/* Sort Selection Box */}
                    <div className="relative border border-gray-400 bg-white h-12 px-3 py-1.5 flex flex-col justify-center min-w-[120px] group cursor-pointer">
                        <label className="text-[10px] text-gray-500 font-bold block leading-tight uppercase">
                            Sort by
                        </label>
                        <select
                            value={selectedSort}
                            onChange={(e) => setSelectedSort(e.target.value)}
                            className="text-sm font-bold text-[#2d2f31] bg-transparent outline-none pr-6 appearance-none cursor-pointer leading-tight"
                        >
                            <option value="Most Popular">Most Popular</option>
                            <option value="Highest Rated">Highest Rated</option>
                            <option value="Newest">Newest</option>
                        </select>
                        {/* Dropdown Custom Arrow Chevron */}
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-700">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                </div>

                {/* Total Results Count Badge */}
                <div className="text-sm font-bold text-gray-600 sm:self-center">
                    {totalResults} results
                </div>
            </div>
        </div>
    )
}

export default CourseFilter