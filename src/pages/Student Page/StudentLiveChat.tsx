// import React from 'react'
import LiveChat from '../../components/StudentComponent/LiveChat/LiveChat'
import StudentSidebar from '../../components/StudentComponent/StudentSidebar'

function StudentLiveChat() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <StudentSidebar/>
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
     <LiveChat/>
      </div>
    </div>
  )
}

export default StudentLiveChat
