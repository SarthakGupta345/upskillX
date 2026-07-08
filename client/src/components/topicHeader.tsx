import React from 'react'

const TopicHeader = () => {
    const subTopics = [
        "Web Development",
        "Data Science",
        "Mobile Development",
        "Programming Languages",
        "Game Development",
        "Database Design & Development",
        "Software Testing",
        "Software Engineering"
    ]

    return (
        <div className="w-full bg-white border-b border-gray-200 shadow-sm overflow-x-auto scrollbar-none">
            <div className="w-full mx-auto flex items-center h-12 px-10 whitespace-nowrap text-sm text-gray-600">

                {/* Active/Parent Category Section */}
                <div className="flex items-center h-full pr-2 font-bold text-gray-900 border-r border-transparent relative">
                    <span>Development</span>


                </div>

                {/* Sub-Topics List */}
                <nav className="flex items-center space-x-6 pl-6 h-full overflow-x-auto scrollbar-none flex-1">
                    {subTopics.map((topic, index) => (
                        <a
                            key={index}
                            href={`#${topic.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                            className="hover:text-purple-600 transition-colors duration-150 py-3 block"
                        >
                            {topic}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export default TopicHeader