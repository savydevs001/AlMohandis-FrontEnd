// import React from 'react'

import { Route, Routes } from "react-router-dom"
import AdminStudentMainPage from "./StudentComponents/AdminStudentMainPage"
import AdminStudentInformation from "./StudentComponents/AdminStudentInformation/AdminStudentInformation"
import AdminTeacherShowAllComp from "./AdminTeacherComponent/AdminTeacherShowAllComp"
import TeacherInformation from "./AdminTeacherComponent/TeacherInformatioComponents/TeacherInformation"


function UserManagementComponentPages() {
  return (
    <div className="flex-1">
    <Routes>
      <Route path="" element ={
      <AdminStudentMainPage/>}  />
      <Route path="AdminStudentInformation" element ={
      <AdminStudentInformation/>}  />
      <Route path="AdminTeacher" element ={
      <AdminTeacherShowAllComp/>}  />
      <Route path="TeacherInformation" element ={
      <TeacherInformation/>}  />
    </Routes>

    </div>
  )
}

export default UserManagementComponentPages
