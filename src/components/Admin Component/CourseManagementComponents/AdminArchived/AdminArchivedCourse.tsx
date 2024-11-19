// import React from 'react'

import ActiveCourseDropDown from "../ActiveCoursesComponent/ActiveCourseDropDown"
import AdminArchivedCards from "./AdminArchivedCards"

function AdminArchivedCourse() {
  return (
    <div>
      <ActiveCourseDropDown/>
      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2">
      <AdminArchivedCards/> 
      <AdminArchivedCards/> 
      <AdminArchivedCards/> 
      <AdminArchivedCards/> 
      <AdminArchivedCards/> 
      </div>
    </div>
  )
}

export default AdminArchivedCourse
