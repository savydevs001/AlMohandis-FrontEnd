// import React from 'react'

import { NavLink } from "react-router-dom"
import UserManagementHeader from "../../../../../../AdminComponent/UserManagementComponent/UserManagementHeader"
import ShowProgress from "../../../../../../StudentComponent/StudentCourses/MyCourses Components/Course1 Component/ShowLessons/ShowProgress"
import StudentDetail from "../../../StudentDetail"
import CoursesHeader from "./CoursesHeader"

function CourseDetailComp() {
  return (
    <div className="flex-1 space-y-6">
<UserManagementHeader title="Course Name"/>
<div className="flex flex-col items-center gap-3 lg:flex-row">
<div className="lg:w-[75%] w-full space-y-6">
<div className="space-y-2">
      <StudentDetail/>
      <div className="flex justify-start ml-20">
        <NavLink className="px-4 py-2 text-center text-white rounded-md bg-primary" to='/GuardianAttendance'>
      <button >Attendance</button>
      </NavLink>
      </div>
</div>
<CoursesHeader/>
</div>
<div className="lg:w-[25%] w-full bg-green-300">
      <ShowProgress/>
</div>
</div>
    </div>
  )
}

export default CourseDetailComp
