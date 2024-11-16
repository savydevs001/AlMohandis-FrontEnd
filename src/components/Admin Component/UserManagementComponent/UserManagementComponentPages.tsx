// import React from 'react'

import { Route, Routes } from "react-router-dom"
import AdminStudentMainPage from "./StudentComponents/AdminStudentMainPage"
import AdminStudentInformation from "./StudentComponents/AdminStudentInformation/AdminStudentInformation"
import TeacherInformation from "./AdminTeacherComponent/TeacherInformatioComponents/TeacherInformation"


function UserManagementComponentPages() {
  return (
    <div className="flex-1">
    <Routes>
      <Route path="" element ={
      <AdminStudentMainPage/>}  />
      <Route path="/student/view/:Id" element ={
      <AdminStudentInformation/>}  />
      <Route path="TeacherInformation" element ={
      <TeacherInformation/>}  />
    </Routes>

    </div>
  )
}

export default UserManagementComponentPages
