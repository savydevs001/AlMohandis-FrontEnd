// import React from 'react'

import DashBoardHeader from "../../Teacher Component/Dashboard Component/DashBoardHeader"
import StudentAssignmentHeader from "./StudentAssignmentHeader"
import UpComingAssgnment from "./UpComingAssignmets/UpComingAssgnment"

function StudentAssignmentPageLayout() {
  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center justify-between gap-6 lg:gap-0">
            <h1 className="text-2xl font-semibold">Assignment</h1>
            <DashBoardHeader/>
      </div>
      <div className="space-y-6">
            <StudentAssignmentHeader/>
            <UpComingAssgnment/>
      </div>
    </div>
  )
}

export default StudentAssignmentPageLayout
