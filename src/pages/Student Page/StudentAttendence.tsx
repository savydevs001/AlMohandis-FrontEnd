// import React from 'react'

import StudentAttendencePageLayout from "../../components/Student Component/StudentAttendenceComponent/StudentAttendencePageLayout"
import StudentSidebar from "../../components/Student Component/StudentSidebar"

function StudentAttendence() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <StudentSidebar/>
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
        {/* <StudentCardContent /> */}
       <StudentAttendencePageLayout/>
      </div>
    </div>
  )
}

export default StudentAttendence
