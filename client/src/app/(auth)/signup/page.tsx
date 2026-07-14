"use client"
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa6';
import authIcon from "../../../../public/images/authicon.png"
import Image from 'next/image';

const SignupPage = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white p-6 md:p-12 selection:bg-purple-100">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

                {/* Left Side: Illustration Area */}
                <div className="hidden md:flex justify-center items-center w-full h-full pr-6">
                    <div className="relative w-full max-w-[500px] aspect-square">
                        <Image
                            src={authIcon}
                            alt="Sign up illustration"
                            fill
                            sizes="(max-w-768px) 100vw, 500px"
                            className="object-contain"

                        />
                    </div>
                </div>

                {/* Right Side: Form Content */}
                <div className="w-full max-w-md mx-auto space-y-6">
                    <p className='text-3xl font-bold text-slate-900 tracking-tight' >WelCome to UpskillsX</p>


                    {/* Registration Form */}
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-1">
                            <label htmlFor="name" className="sr-only">Full name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Full name"
                                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 bg-slate-50/30 focus:bg-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
                                required
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 bg-slate-50/30 focus:bg-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
                                required
                            />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                id="email"
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 bg-slate-50/30 focus:bg-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
                                required
                            />
                        </div>

                        {/* Checkbox Preference */}
                        <div className="flex items-start gap-3 pt-2">
                            <div className="flex items-center h-5">
                                <input
                                    id="marketing"
                                    type="checkbox"
                                    defaultChecked
                                    className="h-4 w-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500/20 accent-purple-600 cursor-pointer"
                                />
                            </div>
                            <label htmlFor="marketing" className="text-xs text-slate-500 leading-normal cursor-pointer select-none">
                                Send me special offers, personalized recommendations, and learning tips.
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3.5 rounded-xl text-sm shadow-md shadow-purple-200 hover:shadow-lg hover:shadow-purple-200 active:scale-[0.99] transition-all duration-200 mt-2"
                        >
                            Continue
                        </button>
                    </form>

                    {/* Footer Legal Text */}
                    <p className="text-center text-[11px] text-slate-400 leading-relaxed max-w-xs mx-auto">
                        By signing up, you agree to our{' '}
                        <a href="#" className="underline font-medium text-slate-500 hover:text-purple-600 transition-colors">Terms of Use</a>{' '}
                        and{' '}
                        <a href="#" className="underline font-medium text-slate-500 hover:text-purple-600 transition-colors">Privacy Policy</a>.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default SignupPage;