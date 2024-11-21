// import React from 'react'

import InstructorsName from "./InstructorsName"

function Instructors() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Instructor</h1>
      <hr className="border-pTag" />
      <div>
            <InstructorsName/>
            <InstructorsName/>
            <InstructorsName/>
            <InstructorsName/>
      </div>
    </div>
  )
}

export default Instructors
