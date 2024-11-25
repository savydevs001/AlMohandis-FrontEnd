// import React from 'react'

import SupportTicketComp from "../../components/GuardianComponents/SupportTicket/SupportTicketComp"
import StudentSidebar from "../../components/StudentComponent/StudentSidebar"

function StudentSupportTicket() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <StudentSidebar/>
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
      <SupportTicketComp/>
      </div>
    </div>
  )
}

export default StudentSupportTicket
