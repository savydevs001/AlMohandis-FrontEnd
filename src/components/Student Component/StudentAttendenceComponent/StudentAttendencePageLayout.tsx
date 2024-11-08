// import React from 'react'

import DashBoardHeader from "../../Teacher Component/Dashboard Component/DashBoardHeader"
import StudentAttendancePresent from "./StudentAttendancePresent"
import StudentAttendenceDropDown from "./StudentAttendenceDropDown"
import StudentTotalAttendanceBox from "./StudentTotalAttendanceBox"

function StudentAttendencePageLayout() {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between">
<h1 className="text-2xl font-semibold">Attendance Record</h1>
<DashBoardHeader/>
      </div>
      <div className="space-y-6">
            <StudentAttendenceDropDown/>
            <StudentTotalAttendanceBox/>
            <div className="space-y-4">
      <h3 className="font-semibold">Monday (25-02-2025)</h3>
            <StudentAttendancePresent status="Present"/>
            <StudentAttendancePresent status="Absent"/>
            <StudentAttendancePresent status="Present"/>
            <StudentAttendancePresent status="Absent"/>
            </div>
      </div>
    </div>
  )
}

export default StudentAttendencePageLayout
