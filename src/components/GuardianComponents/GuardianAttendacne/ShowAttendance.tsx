// import React from 'react'

import UserManagementHeader from "../../AdminComponent/UserManagementComponent/UserManagementHeader"
import StudentAttendancePresent from "../../StudentComponent/StudentAttendence/AttendancePresent"
import StudentTotalAttendanceBox from "../../StudentComponent/StudentAttendence/TotalAttendanceBox"
import AttendanceDropDown from "./AttendanceDropDown"

function ShowAttendance() {
  return (
    <div className="flex-1">
      <UserManagementHeader title="Attendance"/>
      <div className="space-y-6">
            <AttendanceDropDown/>
            <StudentTotalAttendanceBox/>
            <div className="space-y-4">
            <StudentAttendancePresent status="Present"/>
            <StudentAttendancePresent status="Absent"/>
            </div>
      </div>
    </div>
  )
}

export default ShowAttendance
