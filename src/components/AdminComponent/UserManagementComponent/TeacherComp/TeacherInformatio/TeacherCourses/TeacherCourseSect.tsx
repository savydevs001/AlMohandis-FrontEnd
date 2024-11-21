// import React from 'react'

import TeacherCourseTable from "./TeacherCourseTable"

function TeacherCourseSect() {
  return (
    <div>
        <div className="flex items-center gap-3 py-6 lg:gap-6">
            <button className="px-4 py-1 text-sm font-semibold text-white rounded-md lg:py-3 lg:text-lg bg-primary">Total <span className="px-3 lg:text-xl">08</span></button>
            <button className="px-4 lg:py-3 py-1 lg:text-lg text-sm font-semibold text-white rounded-md bg-[#098E02]">Published <span className="px-3 lg:text-xl">06</span></button>
            <button className="px-4 lg:py-3 py-1 lg:text-lg text-sm font-semibold text-white rounded-md bg-[#0900FF]">Pending <span className="px-3 lg:text-xl">02</span></button>
    </div>
    <div>
      <TeacherCourseTable/>
    </div>
    </div>
  )
}

export default TeacherCourseSect
