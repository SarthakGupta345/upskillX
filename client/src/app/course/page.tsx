import Coursecard from '@/components/course/courseCard'
import CourseFilter from '@/components/course/courseFilter'
import React from 'react'

const Coursepage = () => {
    return (
        <div className="flex flex-col w-full bg-white px-5 py-3">
            <CourseFilter />
            <Coursecard />
        </div>
    )
}

export default Coursepage