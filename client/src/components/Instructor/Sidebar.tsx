"use client"
import React, { useState } from 'react'

const Sidebar = ({ activeTab, setActiveTab }) => {
    // Navigation configuration array
    const menuItems = [
        { id: 'courses', label: 'Courses', icon: '📚' },
        { id: 'analytics', label: 'Analytics', icon: '📊' },
        { id: 'revenue', label: 'Revenue', icon: '💰' },
        { id: 'profile', label: 'Profile', icon: '👤' },
    ]

    return (
        <div className="w-full md:w-64 bg-white border-r border-gray-200 min-h-screen p-4 font-sans flex flex-col justify-between">
            <div className="space-y-6">
                {/* Brand / Role Branding Area */}
                <div className="px-3 py-2">
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Instructor Panel</h2>
                </div>

                {/* Dynamic Navigation Links */}
                <nav className="space-y-1">
                    {menuItems.map((item) => {
                        const isActive = activeTab === item.id
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold rounded transition-colors duration-150 text-left ${isActive
                                        ? 'bg-purple-50 text-[#a435f0] border-l-4 border-[#a435f0]'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <span className="text-base">{item.icon}</span>
                                {item.label}
                            </button>
                        )
                    })}
                </nav>
            </div>

            {/* Optional bottom branding tag */}
            <div className="pt-4 border-t border-gray-100 px-3 text-[11px] text-gray-400 font-medium">
                v1.0.0 Stable
            </div>
        </div>
    )
}

export default Sidebar