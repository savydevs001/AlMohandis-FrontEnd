// import React from 'react'

import { Route, Routes } from "react-router-dom"
import GuardianSidebar from "../../components/Guardian Components/GuardianSidebar"
import MyStudentShowComp from "../../components/Guardian Components/MyStudentComponents/MyStudentShowComp"
import StudentInformationShowComp from "../../components/Guardian Components/MyStudentComponents/StudentInformation/StudentInforamtionShowComp"

function MyStudent() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <GuardianSidebar/>
           
           <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
          <Routes>
            <Route path="/" element={<MyStudentShowComp/>}/>
            <Route path="StudentInformation" element={<StudentInformationShowComp/>}/>
            
          </Routes>
           </div>
         </div>
  )
}

export default MyStudent
