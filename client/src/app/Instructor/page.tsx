"use client"
import React, { useState } from 'react'
import { Plus, ArrowLeft, Edit2, BookOpen } from 'lucide-react'
import InstructorUploadForm from '../Upload/page'

const InstructorPage = () => {
    // Simple view switcher state
    const [view, setView] = useState('list') // 'list' or 'create'

    // State holding your database course items
    const [courses, setCourses] = useState([
        {
            id: 1,
            title: "The Complete Python Bootcamp From Zero to Hero in Python",
            price: 529,
            isFree: false,
            category: "Programming Languages",
            color: "from-blue-500 to-indigo-600"
        },
        {
            id: 2,
            title: "Modern Web Development with React & Tailwind",
            price: 0,
            isFree: true,
            category: "Web Development",
            color: "from-purple-500 to-pink-600"
        }
    ])

    return (
        <div className=" mx-auto p-6 md:p-10 font-sans bg-white min-h-screen text-gray-900">

            {/* --- DASHBOARD VIEW --- */}
            {view === 'list' && (
                <div>
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Instructor Dashboard</h1>
                            <p className="text-sm text-gray-500 mt-1">Manage, update, and organize your current catalog of courses.</p>
                        </div>
                        <button
                            onClick={() => setView('create')}
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#a435f0] text-white text-sm font-semibold rounded-lg hover:bg-[#8b28d1] shadow-md shadow-purple-500/10 active:scale-[0.98] transition-all self-start sm:self-auto"
                        >
                            <Plus className="w-4 h-4" />
                            Create Course
                        </button>
                    </div>

                    {/* Grid Layout Container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                        {/* "Create New Course" Action Card Element */}
                        <div
                            onClick={() => setView('create')}
                            className="border-2 border-dashed border-gray-200 hover:border-[#a435f0] bg-white hover:bg-purple-50/20 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all min-h-[280px] group shadow-sm"
                        >
                            <div className="p-4 bg-gray-50 text-gray-400 rounded-full group-hover:bg-purple-50 group-hover:text-[#a435f0] transition-colors mb-3">
                                <Plus className="w-6 h-6 stroke-[2.5]" />
                            </div>
                            <span className="text-sm font-semibold text-gray-700 group-hover:text-purple-900 transition-colors">Create New Course</span>
                        </div>

                        {/* Loop rendering dynamic data cards */}
                        {courses.map((course) => (
                            <div
                                key={course.id}
                                className="group border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Simulated Thumbnail Layer */}
                                <div className={`h-28 w-full bg-gradient-to-br ${course.color || 'from-purple-500 to-indigo-600'} p-4 flex flex-col justify-between relative overflow-hidden`}>
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                                    <span className="self-start text-[10px] bg-white/20 backdrop-blur-md text-white font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                                        {course.category || 'General'}
                                    </span>
                                    <BookOpen className="w-8 h-8 text-white/40 self-end" />
                                </div>

                                {/* Content Details */}
                                <div className="p-4 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-bold text-sm text-gray-900 line-clamp-2 leading-snug group-hover:text-[#a435f0] transition-colors">
                                            {course.title}
                                        </h3>
                                    </div>

                                    {/* Card Footer actions */}
                                    <div className="mt-5 pt-3 border-t border-gray-50 flex items-center justify-between">
                                        <span className={`text-sm font-bold ${course.isFree ? 'text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded' : 'text-gray-900'}`}>
                                            {course.isFree ? 'Free' : `₹${course.price}`}
                                        </span>
                                        <button className="inline-flex items-center gap-1 text-xs font-bold text-[#a435f0] hover:text-purple-900 transition-colors">
                                            <Edit2 className="w-3 h-3" />
                                            Edit Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            )}

            {/* --- CREATE NEW COURSE VIEW --- */}
            {view === 'create' && (
                <div>
                    <button
                        onClick={() => setView('list')}
                        className="inline-flex items-center gap-2 mb-6 text-sm font-semibold text-gray-600 hover:text-[#a435f0] transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                        Back to Course Catalog
                    </button>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <InstructorUploadForm />
                    </div>
                </div>
            )}

        </div>
    )
}

export default InstructorPage