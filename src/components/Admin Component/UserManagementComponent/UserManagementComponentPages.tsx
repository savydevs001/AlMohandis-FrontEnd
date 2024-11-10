// import React from 'react'

import { Route, Routes } from "react-router-dom"
import AdminStudentMainPage from "./StudentComponents/AdminStudentMainPage"
import AdminStudentInformation from "./StudentComponents/AdminStudentInformation/AdminStudentInformation"
// import AdminStudentCourse from "./StudentComponents/AdminStudentInformation/StudentCourses/AdminStudentCourse"



function UserManagementComponentPages() {
  return (
    <div className="flex-1">
    <Routes>
      <Route path="/" element ={
      <AdminStudentMainPage/>}  />
      <Route path="AdminStudentInformation" element ={
      <AdminStudentInformation/>}  />
    </Routes>

    </div>
  )
}

export default UserManagementComponentPages
