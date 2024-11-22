// import React from 'react'

import { Route, Routes } from "react-router-dom"
import GuardianNotification from "../pages/Guardian Page/GuardianNotification"
import MyStudent from "../pages/Guardian Page/MyStudent"

import CourseDetails from "../components/GuardianComponents/MyStudentComponents/StudentInformation/CourseInformationHeaderDetail/StudentInfoCourses/CourseDetail/CourseDetails"

function GuardianPageRoutes() {
  return (
    <div>
      <Routes>
            <Route path="/GuardianNotification" element={<GuardianNotification />} />
            <Route path="/MyStudent/*" element={<MyStudent />} />
            <Route path="/CourseDetails" element={<CourseDetails/>}/>
      </Routes>
    </div>
  )
}

export default GuardianPageRoutes
