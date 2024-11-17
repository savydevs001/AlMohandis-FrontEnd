// import React from 'react'

import UserManagementHeader from "../../UserManagementComponent/UserManagementHeader"
import CommunicationTicketList from "./CommunicationTicketList"
import TicketDropdown from "./TicketDropdown"

function CommunicationTicket() {
  return (
      <div className="flex-1 space-y-6">
      <UserManagementHeader title="SupportTicket" />
      <TicketDropdown />
      <div className="">
            <CommunicationTicketList/>
      </div>
    </div>
  )
}

export default 


CommunicationTicket
