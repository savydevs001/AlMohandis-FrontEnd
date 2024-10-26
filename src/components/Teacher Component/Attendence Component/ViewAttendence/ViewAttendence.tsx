// import React from 'react'

import Sidebar from "../../Sidebar"
import AttendenceHeader from "../AttendenceHeader"
import ViewAttendenceSheet from "./ViewAttendenceSheet"

function ViewAttendence() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <Sidebar/>
      
      <div className="flex-1 lg:p-6">
      <div className="mx-auto mt-3 lg:flex bg-gray-50 lg:mt-0">
        <AttendenceHeader/>
      </div>
      <div className="space-y-3">
          <ViewAttendenceSheet/>
          <ViewAttendenceSheet/>
          <ViewAttendenceSheet/>
      </div>
      </div>
    </div>
  )
}

export default ViewAttendence
