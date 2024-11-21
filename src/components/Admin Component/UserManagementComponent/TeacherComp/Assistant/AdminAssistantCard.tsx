// import React from 'react'
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function AdminAssistantCard() {
  return (
    <div className="w-[100%] border-2  p-4 rounded-lg space-y-1"> 
     <div className="flex items-center justify-between">
      <h1>Assistant Name</h1>
      <PiDotsThreeOutlineVerticalFill />
     </div>
     <p>hello@gmail.com</p>
     <NavLink to='/AssistantInformation'>

     <button className="px-4 py-1 mt-3 text-lg font-semibold text-white rounded-md bg-primary">Manage</button>
     </NavLink>
    </div>
  )
}

export default AdminAssistantCard
