"use client"
import React, { useState } from 'react'

const ProfilePage = () => {
  // Simple state management for profile updates
  const [profile, setProfile] = useState({
    name: 'Prof. Ryan Ahmed',
    headline: 'Ph.D., MBA & Top-Rated Engineering Instructor',
    bio: 'Passionate about technology education. Specializing in AI, cloud computing, and full-stack software development models.',
    website: 'https://example.com',
    twitter: 'https://twitter.com/instructor'
  })

  const [avatar, setAvatar] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Saving new profile metadata fields directly to User database model:", profile)
  }

  return (
    <div className="max-w-2xl  font-sans text-gray-900 bg-white p-2">
      {/* Header section */}
      <div className="border-b border-gray-200 rounded-md pb-3 mb-6">
        <h1 className="text-2xl font-bold">Instructor Profile</h1>
        <p className="text-xs text-gray-500 mt-0.5">Update your public profile info that students see across the platform.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Profile Picture Upload Section */}
        <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border border-gray-300 flex-shrink-0">
            {avatar ? (
              <img src={URL.createObjectURL(avatar)} alt="Avatar Preview" className="w-full h-full object-cover" />
            ) : (
              <span className="text-xl text-gray-500">👤</span>
            )}
          </div>
          <div>
            <label className="block text-xs font-bold uppercase mb-1 text-gray-700">Profile Image</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
              className="text-xs text-gray-600 file:mr-3 file:py-1 file:px-2.5 file:border file:border-gray-400 file:bg-white file:text-xs file:font-bold hover:file:bg-gray-50 cursor-pointer"
            />
          </div>
        </div>

        {/* Display Name */}
        <div className='rounded-lg'>
          <label className="block text-xs rounded-lg font-bold uppercase mb-1 tracking-wide">Display Name</label>
          <input 
            type="text" 
            name="name" 
            value={profile.name} 
            onChange={handleChange}
            className="w-full h-10 border border-gray-400 outline-none px-3 text-sm focus:border-[#a435f0]"
            required 
          />
        </div>

        {/* Professional Headline */}
        <div>
          <label className="block text-xs font-bold uppercase mb-1 tracking-wide">Professional Headline</label>
          <input 
            type="text" 
            name="headline" 
            value={profile.headline} 
            onChange={handleChange}
            placeholder="e.g. Senior Web Developer & Author"
            className="w-full h-10 border border-gray-400 outline-none px-3 text-sm focus:border-[#a435f0]"
          />
        </div>

        {/* Biography text area */}
        <div>
          <label className="block text-xs font-bold uppercase mb-1 tracking-wide">Biography</label>
          <textarea 
            name="bio" 
            value={profile.bio} 
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-400 outline-none p-3 text-sm focus:border-[#a435f0] resize-none"
          />
        </div>

        {/* External Social Profiles Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase mb-1 tracking-wide">Website URL</label>
            <input 
              type="url" 
              name="website" 
              value={profile.website} 
              onChange={handleChange}
              placeholder="https://yourwebsite.com"
              className="w-full h-10 border border-gray-400 outline-none px-3 text-sm focus:border-[#a435f0]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase mb-1 tracking-wide">Twitter / X URL</label>
            <input 
              type="url" 
              name="twitter" 
              value={profile.twitter} 
              onChange={handleChange}
              placeholder="https://x.com/username"
              className="w-full h-10 border border-gray-400 outline-none px-3 text-sm focus:border-[#a435f0]"
            />
          </div>
        </div>

        {/* Save CTA Controls */}
        <div className="flex justify-end pt-2">
          <button 
            type="submit" 
            className="px-6 py-2.5 bg-[#a435f0] text-white font-bold text-xs hover:bg-purple-800 transition-colors shadow-sm"
          >
            Save Profile Changes
          </button>
        </div>

      </form>
    </div>
  )
}

export default ProfilePage