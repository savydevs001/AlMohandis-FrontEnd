// import React from 'react'
import { MdAssignment } from "react-icons/md";

function NotificationCard() {
  return (
    <div className="flex items-center gap-6 py-4 border-b border-black">
      <div>
      <MdAssignment className="text-4xl rounded-full text-primary bg-[#3E89924D] p-2" />

      </div>
      <div>
            <h4 className="font-semibold">Assignment Due date change</h4>
            <h4 className="text-sm">Due Date 20-24-2024</h4>
            <p className="text-xs text-pTag">19/24/2024 12:00PM</p>
      </div>
    </div>
  )
}

export default NotificationCard
