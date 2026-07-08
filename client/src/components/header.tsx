"use client"
import React from 'react';
import { FiSearch, FiShoppingCart, FiGlobe } from 'react-icons/fi';

const MainHeader = () => {
    return (
        <header className="w-full h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between gap-4 text-sm font-normal text-slate-700 select-none">

            {/* Left Section: Logo & Primary Nav */}
            <div className="flex items-center gap-6 shrink-0">
                {/* Brand Logo */}
                <div className="flex items-center gap-1.5 cursor-pointer">
                    <span className="text-xl font-bold text-slate-900 tracking-tight">
                        upskills<span className="text-purple-600">X</span>
                    </span>
                </div>
                <div className="hidden xl:flex items-center gap-4">
                    <a href="#" className="hover:text-purple-600 hover:bg-neutral-100 rounded-md p-2 transition-colors duration-150 whitespace-nowrap">
                        Discover
                    </a>
                    <a href="#" className="hover:text-purple-600 hover:bg-neutral-100 rounded-md p-2 transition-colors duration-150 whitespace-nowrap">
                        About
                    </a>
                </div>

            </div>

            {/* Center Section: Search Bar */}
            <div className="flex-1 max-w-3xl hidden md:block">
                <form className="relative w-full">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <FiSearch className="w-4 h-4 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for anything"
                        className="w-full h-11 pl-12 pr-4 rounded-full border border-slate-300 bg-slate-50/50 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-slate-900 focus:bg-white text-[14px] transition-all"
                    />
                </form>
            </div>

            {/* Right Section: Actions & Buttons */}
            <div className="flex items-center gap-4 shrink-0">
                {/* Business & Teach Links */}
                <div className="hidden xl:flex items-center gap-4">
                    <a href="#" className="hover:text-purple-600 transition-colors duration-150 whitespace-nowrap">
                        Courses
                    </a>
                    <a href="#" className="hover:text-purple-600 transition-colors duration-150 whitespace-nowrap">
                        Teach
                    </a>
                </div>

                {/* Action Icons */}
                <button className="p-2 text-slate-700 hover:text-purple-600 transition-colors relative">
                    <FiShoppingCart className="w-5 h-5" />
                    {/* Optional Badge Indicator */}
                    <span className="absolute top-1 right-1 w-2 h-2 bg-purple-600 rounded-full"></span>
                </button>

                {/* Authentication Buttons */}
                <div className="flex items-center gap-2">
                    <button className="h-10 px-5 border border-slate-900 text-slate-900 font-bold rounded-md hover:bg-slate-50 transition-colors duration-150">
                        Log in
                    </button>
                    <button className="h-10 px-5 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700 transition-colors duration-150">
                        Sign up
                    </button>
                </div>


            </div>

        </header>
    );
};

export default MainHeader;