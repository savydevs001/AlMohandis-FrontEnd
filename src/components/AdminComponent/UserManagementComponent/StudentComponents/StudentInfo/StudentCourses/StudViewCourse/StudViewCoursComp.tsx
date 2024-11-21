// import React from 'react'

import UserManagementHeader from "../../../../UserManagementHeader"
import ViewCourse from "../ViewCourse/ViewCourse"
import CourseDetail from "./CourseDetail"

function StudentViewCourseShowComp() {
  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title = 'Course Detail'/>
      <CourseDetail/>
      <hr />
      <ViewCourse/>
    </div>
  )
}

export default StudentViewCourseShowComp
