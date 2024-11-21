90// import React from 'react'

import StudentSidebar from "../../../../../../../StudentSidebar"
import CorrectOptionLayout from "./OptionLayout"

function CorrectOption() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <StudentSidebar />

      <div className="flex-1 w-[90%] mx-auto mt-3 lg:p-6 lg:flex bg-gray-50 lg:mt-0">
     {/* <ViewAssignment/> */}
     <CorrectOptionLayout/>
      </div>
    </div>
  )
}

export default CorrectOption
