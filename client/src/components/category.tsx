import React from 'react'
import TopicHeader from './topicHeader'

const CategoryPage = () => {
    return (
        <div className="p-4">
            {/* Example 1: Web Development */}
            <TopicHeader
                title="Web Development"
                subtitle="Master HTML, CSS, JavaScript, React, and Node.js to build powerful modern web applications."
                courseCount={1840}
            />

            {/* Example 2: Mobile App Development */}
            <TopicHeader
                title="App Development"
                subtitle="Design and build iOS and Android applications using React Native, Flutter, Swift, and Kotlin."
                courseCount={920}
            />
        </div>
    )
}

export default CategoryPage