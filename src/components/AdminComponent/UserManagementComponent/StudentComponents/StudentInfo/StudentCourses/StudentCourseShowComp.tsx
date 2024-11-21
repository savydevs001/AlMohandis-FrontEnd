// import React from 'react'

import UserManagementHeader from "../../../UserManagementHeader"
import StudentInformationHeader from "../StudentInformationHeader"
import StudentCoursesButtons from "./StudentCoursesButtons"
import StudentCourseTable from "./StudentCourseTable"

function StudentCourseShowComp() {
  return (
    <div className="w-full space-y-12 ">
    <UserManagementHeader title = 'Student Information'/>
   <div className="w-full p-2 space-y-3 bg-white shadow-sm">
   <StudentInformationHeader/>
   <StudentCoursesButtons/>
   <StudentCourseTable/>
   </div>
    </div>
  )
}

export default StudentCourseShowComp
