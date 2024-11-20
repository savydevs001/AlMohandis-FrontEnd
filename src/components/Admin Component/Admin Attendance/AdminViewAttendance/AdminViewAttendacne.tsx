// import React from 'react'

import AttendenceHeader from "../../../Teacher Component/Attendence Component/AttendenceHeader"
import ViewAttendenceSheet from "../../../Teacher Component/Attendence Component/ViewAttendence/ViewAttendenceSheet"

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
