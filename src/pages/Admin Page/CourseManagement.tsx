// import React from 'react'

import { Route, Routes } from "react-router-dom"
import AdminSidebar from "../../components/Admin Component/AdminSidebar"
import CourseManagementShowAllComp from "../../components/Admin Component/CourseManagementComponents/CourseManagementShowAllComp"
import AdminCreateCourse from "../../components/Admin Component/CourseManagementComponents/AdminCreateCourseComponent/AdminCreateCourse"

function CourseManagement() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <AdminSidebar/>
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
<Routes>
      <Route path="/" element={<CourseManagementShowAllComp/>}/>
      <Route path="" element/>
      <Route path="AdminCreateCourse/*" element={<AdminCreateCourse/>}/>
      <Route path="" element/>
</Routes>
      </div>
    </div>
  )
}

export default CourseManagement
