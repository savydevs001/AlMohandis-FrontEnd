// import React from 'react'

import AttendenceHeader from "../../../TeacherComponent/Attendence Component/AttendenceHeader"
import AttendanceSheet from "../../../TeacherComponent/Attendence Component/MarkAttendence/AttendenceSheet"



function AdminMarkAttendanceShowComp() {
  return (
    <div className="flex-1">
      <AttendenceHeader/>
      <div className="space-y-3">
<AttendanceSheet/>
<AttendanceSheet/>
<AttendanceSheet/>
<AttendanceSheet/>
<AttendanceSheet/>
      </div>
    </div>
  )
}

export default AdminMarkAttendanceShowComp
