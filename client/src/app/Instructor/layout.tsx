"use client"
import Sidebar from '@/components/Instructor/Sidebar'
import React, { useState } from 'react'

const InstructorLayout = ({ children }) => {
    // Shared state to sync active navigation tracking down to the sidebar
    const [activeTab, setActiveTab] = useState('courses')

    return (
        <div className="flex flex-col md:flex-row min-h-screen w-full bg-[#f8f9fa] font-sans">

            {/* Left Navigation Control Drawer Column */}
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Right Flex Workspace Core Container */}
            <main className="flex-1 bg-white p-4 sm:p-6 md:p-8 overflow-y-auto">
                {/* Injecting current active sub-page screen view components */}
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>

        </div>
    )
}

export default InstructorLayout