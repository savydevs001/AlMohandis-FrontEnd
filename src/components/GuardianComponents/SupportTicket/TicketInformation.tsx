// import React from 'react'

import TicketCard from "./TicketCard"
import TicketForm from "./TicketForm"

function TicketInformation() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="lg:w-[30%] w-full space-y-3  ">
      <TicketCard
        status="Open"
        bgColor="#9747FF2B"
        textColor="#9747FF"
      />
      <TicketCard
        status="In progress"
        bgColor="#0004F32B"
        textColor="#0004F3"
      />
      <TicketCard
        status="Close"
        bgColor="#008D1F2B"
        textColor="#008D1F"
      />
      
      </div>
      <div className="lg:w-[70%] w-full p-4 border-l px-3 ">
            <TicketForm/>
      </div>
    </div>
  )
}

export default TicketInformation
