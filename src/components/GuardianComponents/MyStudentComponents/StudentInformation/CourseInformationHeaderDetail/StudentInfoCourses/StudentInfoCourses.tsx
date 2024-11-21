// import React from 'react'

import StudentInfoCoursesCard from "./StudentInfoCoursesCard"

function StudentInfoCourses() {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
     <StudentInfoCoursesCard/>
     <StudentInfoCoursesCard/>
     <StudentInfoCoursesCard/>
     <StudentInfoCoursesCard/>
     <StudentInfoCoursesCard/>
    </div>
  )
}

export default StudentInfoCourses
