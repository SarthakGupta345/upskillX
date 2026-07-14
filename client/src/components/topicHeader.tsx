import React from 'react'

const TopicHeader = () => {
    const subTopics = [
        "Web Development",
        "Data Science",
        "Mobile Development",
        "Game Development",
        "Database Design & Development",
        "Software Testing",
        "Software Engineering"
    ]

    return (
        <div className="w-full   flex flex-row  bg-white border-b border-gray-200 shadow-sm overflow-x-auto scrollbar-none">

            <div className="w-full px-30  mx-auto mx-auto  flex items-center h-12 px-10 whitespace-nowrap text-sm text-gray-600">

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