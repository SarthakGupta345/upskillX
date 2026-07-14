"use client"
import React, { useState } from 'react'
import { ChevronDown, UploadCloud, FileImage, X } from 'lucide-react'

const InstructorUploadForm = () => {
    // 1. Unified state hooks mapping to Prisma Schema
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        isFree: false,
        categoryId: ''
    })
    const [thumbnail, setThumbnail] = useState(null)

    // 2. Clear input change runner
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    // 3. Simple form submission handler
    const handleSubmit = (e) => {
        e.preventDefault()

        // Package data for your database controller
        const coursePayload = new FormData()
        coursePayload.append('title', formData.title)
        coursePayload.append('description', formData.description)
        coursePayload.append('price', formData.isFree ? 0 : Number(formData.price || 0))
        coursePayload.append('isFree', formData.isFree)
        coursePayload.append('categoryId', formData.categoryId)
        if (thumbnail) coursePayload.append('thumbnail', thumbnail)

        console.log("Ready to send to backend API:", Object.fromEntries(coursePayload))
    }

    return (
        <div className='w-full bg-neutral-50'>
            <div className="max-w-2xl border border-neutral-100 mx-auto my-10 bg-white  shadow-xl rounded-xl p-8 font-sans text-gray-800">
                {/* Header */}
                <div className="border-b border-gray-100 pb-5 mb-6">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Create New Course</h2>
                    <p className="text-sm text-gray-500 mt-1">Fill out your course settings configurations to get started.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">Course Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="e.g. Master Full-Stack Web Development"
                            className="w-full h-11 border border-gray-200 rounded-lg outline-none px-4 text-sm transition-all focus:border-[#a435f0] focus:ring-2 focus:ring-[#a435f0]/10"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Provide a detailed roadmap of what students will learn..."
                            className="w-full border border-gray-200 rounded-lg outline-none p-4 text-sm transition-all focus:border-[#a435f0] focus:ring-2 focus:ring-[#a435f0]/10 resize-none"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Category Dropdown */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">Category</label>
                            <div className="relative">
                                <select
                                    name="categoryId"
                                    value={formData.categoryId}
                                    onChange={handleChange}
                                    className="w-full h-11 border border-gray-200 rounded-lg outline-none px-4 text-sm bg-white appearance-none cursor-pointer font-medium text-gray-700 transition-all focus:border-[#a435f0] focus:ring-2 focus:ring-[#a435f0]/10"
                                    required
                                >
                                    <option value="" disabled>Select Category</option>
                                    <option value="1">Web Development</option>
                                    <option value="2">Data Science</option>
                                    <option value="3">Mobile Development</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Pricing Fields */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">Pricing (INR)</label>
                            <div className="flex items-center gap-4 h-11">
                                <div className="relative flex-1">
                                    <span className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-sm font-medium ${formData.isFree ? 'text-gray-300' : 'text-gray-500'}`}>₹</span>
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.isFree ? '' : formData.price}
                                        onChange={handleChange}
                                        disabled={formData.isFree}
                                        placeholder="529"
                                        className="w-full h-11 border border-gray-200 rounded-lg outline-none pl-8 pr-4 text-sm transition-all disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-200 focus:border-[#a435f0] focus:ring-2 focus:ring-[#a435f0]/10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        required={!formData.isFree}
                                    />
                                </div>
                                <label className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg cursor-pointer text-sm font-medium text-gray-700 hover:bg-gray-50 select-none transition-colors">
                                    <input
                                        type="checkbox"
                                        name="isFree"
                                        checked={formData.isFree}
                                        onChange={handleChange}
                                        className="w-4 h-4 accent-[#a435f0] rounded border-gray-300"
                                    />
                                    Free Course
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail Dropzone */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">Course Thumbnail</label>
                        <div className="border-2 border-dashed border-gray-200 hover:border-[#a435f0] rounded-xl p-6 bg-gray-50/50 transition-colors text-center relative group">
                            {!thumbnail ? (
                                <label className="flex flex-col items-center justify-center cursor-pointer">
                                    <UploadCloud className="w-8 h-8 text-gray-400 group-hover:text-[#a435f0] mb-2 transition-colors" />
                                    <span className="text-sm font-medium text-gray-700">Click to upload image</span>
                                    <span className="text-xs text-gray-400 mt-1">PNG, JPG or WEBP up to 5MB</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
                                        className="hidden"
                                    />
                                </label>
                            ) : (
                                <div className="flex items-center justify-between bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                                    <div className="flex items-center gap-3 overflow-hidden">
                                        <div className="p-2 bg-purple-50 text-[#a435f0] rounded">
                                            <FileImage className="w-5 h-5" />
                                        </div>
                                        <div className="text-left overflow-hidden">
                                            <p className="text-sm font-medium text-gray-700 truncate">{thumbnail.name}</p>
                                            <p className="text-xs text-gray-400">{(thumbnail.size / 1024 / 1024).toFixed(2)} MB</p>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setThumbnail(null)}
                                        className="p-1.5 hover:bg-gray-100 rounded-full text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                        <button
                            type="button"
                            className="px-5 py-2.5 border border-gray-200 rounded-lg font-semibold text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2.5 bg-[#a435f0] text-white font-semibold text-sm rounded-lg hover:bg-[#8b28d1] shadow-md shadow-purple-500/10 active:scale-[0.98] transition-all"
                        >
                            Next Step
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default InstructorUploadForm