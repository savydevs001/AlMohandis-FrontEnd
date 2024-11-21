// import React from 'react'

import UserManagementHeader from "../UserManagementComponent/UserManagementHeader"
import CourseManagementShowHeader from "./CourseManageHeader"

function CourseManagementShowAllComp() {
  return (
    <div className="flex-1 space-y-7">
    <UserManagementHeader title="Course Management"/>
    <CourseManagementShowHeader/>
    </div>
  )
}

export default CourseManagementShowAllComp
