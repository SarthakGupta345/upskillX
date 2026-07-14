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
        <div className="max-w-3xl font-sans text-gray-900 bg-white p-2 sm:p-3 md:p-4 lg:p-5 xl:p-1 rounded-xl   ">
            {/* Header section with nice border */}
            <div className="border-b border-gray-200 pb-5 mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight">Instructor Profile</h1>
                <p className="text-sm text-gray-500 mt-1.5">Update your public profile info that students see across the platform.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

                {/* Profile Picture Upload Section with nice rounding */}
                <div className="flex items-center gap-6 p-5 bg-gray-50/50 border border-gray-200 rounded-lg shadow-inner">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border border-gray-300 flex-shrink-0 shadow-md">
                        {avatar ? (
                            <img src={URL.createObjectURL(avatar)} alt="Avatar Preview" className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-2xl text-gray-400">👤</span>
                        )}
                    </div>
                    <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wide text-gray-700">Profile Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setAvatar(e.target.files[0])}
                            className="block w-full text-xs text-gray-600 file:mr-3 file:py-2 file:px-3 file:border file:border-gray-400 file:bg-white file:text-xs file:font-semibold file:rounded-md hover:file:bg-gray-50 cursor-pointer"
                        />
                        <p className="text-xs text-gray-400 mt-1">Recommended: Square image, 200x200px minimum.</p>
                    </div>
                </div>

                {/* Display Name - Rounded input */}
                <div>
                    <label className="block text-xs font-semibold uppercase mb-1.5 tracking-wide text-gray-700">Display Name</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        className="w-full h-11 border border-gray-300 rounded-lg outline-none px-4 text-sm focus:border-[#a435f0] focus:ring-1 focus:ring-[#a435f0]/20 transition-all shadow-sm"
                        required
                    />
                </div>

                {/* Professional Headline - Rounded input */}
                <div>
                    <label className="block text-xs font-semibold uppercase mb-1.5 tracking-wide text-gray-700">Professional Headline</label>
                    <input
                        type="text"
                        name="headline"
                        value={profile.headline}
                        onChange={handleChange}
                        placeholder="e.g. Senior Web Developer & Author"
                        className="w-full h-11 border border-gray-300 rounded-lg outline-none px-4 text-sm focus:border-[#a435f0] focus:ring-1 focus:ring-[#a435f0]/20 transition-all shadow-sm"
                    />
                </div>

                {/* Biography text area - Nice rounding */}
                <div>
                    <label className="block text-xs font-semibold uppercase mb-1.5 tracking-wide text-gray-700">Biography</label>
                    <textarea
                        name="bio"
                        value={profile.bio}
                        onChange={handleChange}
                        rows="5"
                        className="w-full border border-gray-300 rounded-lg outline-none p-4 text-sm focus:border-[#a435f0] focus:ring-1 focus:ring-[#a435f0]/20 transition-all shadow-sm resize-none"
                    />
                </div>

                {/* External Social Profiles Row - Nice input rounding */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-semibold uppercase mb-1.5 tracking-wide text-gray-700">Website URL</label>
                        <input
                            type="url"
                            name="website"
                            value={profile.website}
                            onChange={handleChange}
                            placeholder="https://yourwebsite.com"
                            className="w-full h-11 border border-gray-300 rounded-lg outline-none px-4 text-sm focus:border-[#a435f0] focus:ring-1 focus:ring-[#a435f0]/20 transition-all shadow-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold uppercase mb-1.5 tracking-wide text-gray-700">Twitter / X URL</label>
                        <input
                            type="url"
                            name="twitter"
                            value={profile.twitter}
                            onChange={handleChange}
                            placeholder="https://x.com/username"
                            className="w-full h-11 border border-gray-300 rounded-lg outline-none px-4 text-sm focus:border-[#a435f0] focus:ring-1 focus:ring-[#a435f0]/20 transition-all shadow-sm"
                        />
                    </div>
                </div>

                {/* Save CTA Controls - Nicely rounded button */}
                <div className="flex justify-end pt-4 border-t border-gray-100 mt-8">
                    <button
                        type="submit"
                        className="px-7 py-3 bg-[#a435f0] text-white font-bold text-sm rounded-lg hover:bg-purple-800 transition-colors shadow-md hover:shadow-lg"
                    >
                        Save Profile Changes
                    </button>
                </div>

            </form>
        </div>
    )
}

export default ProfilePage