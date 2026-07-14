import React, { useState } from 'react'

const InstructorUploadForm = () => {
  // 1. Unified state hooks mapping to Prisma Schema
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: 0,
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
    coursePayload.append('price', formData.isFree ? 0 : formData.price)
    coursePayload.append('isFree', formData.isFree)
    coursePayload.append('categoryId', formData.categoryId)
    if (thumbnail) coursePayload.append('thumbnail', thumbnail)

    console.log("Ready to send to backend API:", Object.fromEntries(coursePayload))
  }

  return (
    <div className="max-w-2xl mx-auto my-10 bg-white border border-gray-200 shadow-sm p-6 rounded font-sans text-gray-900">
      <div className="border-b border-gray-200 pb-3 mb-6">
        <h2 className="text-xl font-bold">Create New Course</h2>
        <p className="text-xs text-gray-500">Fill out your course settings configurations.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-xs font-bold mb-1 uppercase tracking-wide">Course Title</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange}
            className="w-full h-10 border border-gray-400 outline-none px-3 text-sm focus:border-[#a435f0]"
            required 
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-bold mb-1 uppercase tracking-wide">Description</label>
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-400 outline-none p-3 text-sm focus:border-[#a435f0] resize-none"
            required 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category Dropdown */}
          <div className="border border-gray-400 h-11 px-3 py-1 flex flex-col justify-center relative bg-white">
            <label className="text-[9px] font-bold text-gray-500 uppercase">Category</label>
            <select 
              name="categoryId" 
              value={formData.categoryId} 
              onChange={handleChange}
              className="text-sm font-bold bg-transparent outline-none w-full appearance-none cursor-pointer"
              required
            >
              <option value="">Select Category</option>
              <option value="1">Web Development</option>
              <option value="2">Data Science</option>
              <option value="3">Mobile Development</option>
            </select>
          </div>

          {/* Pricing Toggle Fields */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <label className="block text-[9px] font-bold text-gray-500 uppercase mb-0.5">Price (INR)</label>
              <input 
                type="number" 
                name="price" 
                value={formData.isFree ? '' : formData.price} 
                onChange={handleChange}
                disabled={formData.isFree}
                placeholder="529"
                className="w-full h-8 border border-gray-400 outline-none px-2 text-sm disabled:bg-gray-100 disabled:border-gray-200"
                required={!formData.isFree}
              />
            </div>
            <label className="flex items-center gap-1.5 mt-4 cursor-pointer text-xs font-bold select-none">
              <input 
                type="checkbox" 
                name="isFree" 
                checked={formData.isFree} 
                onChange={handleChange}
                className="w-4 h-4 accent-[#a435f0]"
              />
              Free
            </label>
          </div>
        </div>

        {/* Thumbnail Selector File Dropdown */}
        <div>
          <label className="block text-xs font-bold mb-1 uppercase tracking-wide">Course Thumbnail</label>
          <div className="border border-gray-300 rounded p-4 bg-gray-50 text-center">
            <input 
              type="file" 
              accept="image/*" 
              onChange={(e) => setThumbnail(e.target.files[0])} 
              className="text-xs text-gray-600 file:mr-4 file:py-1.5 file:px-3 file:border file:border-gray-400 file:bg-white file:text-xs file:font-bold hover:file:bg-gray-50 cursor-pointer"
            />
            {thumbnail && <p className="text-xs text-emerald-600 font-medium mt-2">✓ Loaded: {thumbnail.name}</p>}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2 pt-2">
          <button type="button" className="px-4 py-2 border border-gray-400 font-bold text-xs hover:bg-gray-50">
            Cancel
          </button>
          <button type="submit" className="px-5 py-2 bg-[#a435f0] text-white font-bold text-xs hover:bg-purple-800">
            Publish Course
          </button>
        </div>
      </form>
    </div>
  )
}

export default InstructorUploadForm