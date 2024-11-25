// import React from 'react'

import StudentSidebar from "../../components/StudentComponent/StudentSidebar"
import SeeChats from "../../components/TeacherComponent/ChatComps/SeeChats"

function StudentChat() {
  return (
<div className="flex flex-col min-h-screen lg:flex-row">
      <StudentSidebar/>
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
        {/* <StudentCardContent /> */}
        <SeeChats/>
      </div>
    </div>
  )
}

export default StudentChat
