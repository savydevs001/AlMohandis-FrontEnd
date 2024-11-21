// import React from 'react'

import AttendenceHeader from "../../../TeacherComponent/Attendence Component/AttendenceHeader"
import ViewAttendenceSheet from "../../../TeacherComponent/Attendence Component/ViewAttendence/ViewAttendenceSheet"



function AdminViewAttendacne() {
  return (
    <div className="flex-1">
      <AttendenceHeader/>
      <div className="space-y-3">
      <ViewAttendenceSheet/>
      <ViewAttendenceSheet/>
      <ViewAttendenceSheet/>
      <ViewAttendenceSheet/>
      <ViewAttendenceSheet/>
      <ViewAttendenceSheet/>
      </div>
    </div>
  )
}

export default AdminViewAttendacne
