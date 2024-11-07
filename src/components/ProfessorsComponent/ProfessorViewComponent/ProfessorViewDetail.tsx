// import React from 'react'

import DashBoardHeader from "../../Teacher Component/Dashboard Component/DashBoardHeader"
import ProfessorsCoursesSect from "./ProfessorCourses/ProfessorsCoursesSect"
import ProfessorPersonalDetail from "./ProfessorPersonalDetail"
import UpComingLecture from "./UpComingLecturesComponent/UpComingLecture"

function ProfessorViewDetail() {
  return (
    <div className="flex-1">
        <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Registered Professors</h1>
      <DashBoardHeader/>
   </div>

   <div className="space-y-3">
      <ProfessorPersonalDetail/>
      <ProfessorsCoursesSect/>
      <UpComingLecture/>
      </div>
    </div>
  )
}

export default ProfessorViewDetail
