// import React from 'react'

import { Route, Routes } from "react-router-dom"
import GuardianNotification from "../pages/Guardian Page/GuardianNotification"
import MyStudent from "../pages/Guardian Page/MyStudent"

import CourseDetails from "../components/GuardianComponents/MyStudentComponents/StudentInformation/CourseInformationHeaderDetail/StudentInfoCourses/CourseDetail/CourseDetails"
import GuardAttendance from "../pages/Guardian Page/GuardAttendance"
import SupportTicket from "../pages/Guardian Page/SupportTicket"
import GaurdianSchudle from "../pages/Guardian Page/GaurdianSchudle"
import PageNotFound from "../pages/PageNotFound"


function GuardianPageRoutes() {
  return (
    <div>
      <Routes>
            <Route path="/GuardianNotification" element={<GuardianNotification />} />
            <Route path="/MyStudent/*" element={<MyStudent />} />
            <Route path="/CourseDetails" element={<CourseDetails/>}/>
            <Route path="/GuardianAttendance" element={<GuardAttendance/>}/>
            <Route path="/SupportTicket" element={<SupportTicket/>}/>
            <Route path="/GaurdianSchudle" element={<GaurdianSchudle/>}/>
            <Route path="/PageNotFound" element={<PageNotFound/>}/>
          
      </Routes>
    </div>
  )
}

export default GuardianPageRoutes
