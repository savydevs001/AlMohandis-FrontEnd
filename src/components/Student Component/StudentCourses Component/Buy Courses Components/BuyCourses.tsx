// import React from 'react'

import StudentSidebar from "../../StudentSidebar"

function BuyCourses() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <StudentSidebar/>
      
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
        {/* <StudentCardContent /> */}
      </div>
    </div>
  )
}

export default BuyCourses
