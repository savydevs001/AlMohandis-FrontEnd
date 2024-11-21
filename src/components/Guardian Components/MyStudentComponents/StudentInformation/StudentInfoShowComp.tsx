// import React from 'react'

import UserManagementHeader from "../../../Admin Component/UserManagementComponent/UserManagementHeader"
import CourseInfoHeader from "./CourseInformationHeaderDetail/CourseInfoHeader"
import StudentDetail from "./StudentDetail"

function StudentInformationShowComp() {
  return (
    <div className="flex-1 space-y-8">
<UserManagementHeader title="Student Information"/>
  <StudentDetail/>
  <div className="py-4">
    <CourseInfoHeader/>
  </div>
    </div>
  )
}

export default StudentInformationShowComp
