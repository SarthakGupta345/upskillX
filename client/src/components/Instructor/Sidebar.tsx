"use client"
import React from 'react'
import { BookOpen, BarChart3, Wallet, UserCheck, GraduationCap, LogOut } from 'lucide-react'

const Sidebar = ({ activeTab, setActiveTab }) => {
    // Premium Navigation configuration array
    const menuItems = [
        { id: 'courses', label: 'My Courses', icon: BookOpen },
        { id: 'analytics', label: 'Analytics', icon: BarChart3 },
        { id: 'revenue', label: 'Revenue', icon: Wallet },
        { id: 'profile', label: 'Profile', icon: UserCheck },
    ]

    return (
        <div className="w-full md:w-68 bg-white border-r border-gray-100 min-h-screen p-5 font-sans flex flex-col justify-between shadow-sm">
            <div className="space-y-7">
                {/* Brand Logo / Platform Header */}
                <div className="flex items-center gap-3 px-2 py-1">
                    <div className="w-9 h-9 bg-gradient-to-tr from-[#a435f0] to-[#8b28d1] rounded-xl flex items-center justify-center shadow-md shadow-purple-500/20 text-white">
                        <GraduationCap className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                        <h2 className="text-sm font-bold text-gray-900 tracking-tight leading-none">EduPortal</h2>
                        <span className="text-[10px] font-semibold text-purple-600 uppercase tracking-widest mt-1 block">Instructor Panel</span>
                    </div>
                </div>

                {/* Dynamic Navigation Links */}
                <nav className="space-y-1.5">
                    {menuItems.map((item) => {
                        const isActive = activeTab === item.id
                        const IconComponent = item.icon

                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full flex items-center gap-3.5 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 text-left group relative ${isActive
                                    ? 'bg-purple-50/70 text-[#a435f0]'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                {/* Active subtle indicator line */}
                                {isActive && (
                                    <div className="absolute left-0 top-3 bottom-3 w-1 bg-[#a435f0] rounded-r-full" />
                                )}

                                <IconComponent
                                    className={`w-4 h-4 transition-transform duration-200 group-hover:scale-105 ${isActive ? 'text-[#a435f0] stroke-[2.25]' : 'text-gray-400 group-hover:text-gray-600'
                                        }`}
                                />
                                <span className="flex-1">{item.label}</span>
                            </button>
                        )
                    })}
                </nav>
            </div>

            {/* User Profile Block & Footer Metadata */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50/50 transition-colors">
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-9 h-9 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-sm font-bold text-[#a435f0] flex-shrink-0">
                            RA
                        </div>
                        <div className="overflow-hidden">
                            <h4 className="text-xs font-bold text-gray-800 truncate">Prof. Ryan Ahmed</h4>
                            <p className="text-[10px] text-gray-400 font-medium truncate">ryan.ahmed@edu.com</p>
                        </div>
                    </div>
                    <button
                        className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors ml-1"
                        title="Sign Out"
                    >
                        <LogOut className="w-3.5 h-3.5" />
                    </button>
                </div>

                <div className="px-2 flex items-center justify-between text-[10px] text-gray-400 font-medium">
                    <span>Build Environment v1.0.0</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="System online" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar