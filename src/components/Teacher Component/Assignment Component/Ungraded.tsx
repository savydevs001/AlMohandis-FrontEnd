// import React from 'react'

import UngradedAssignmentCard from "./Ungrades Component/UngradedAssignmentCard"

function Ungraded() {
  return (
    <div className="p-2 lg:p-0">
      {/* <h1>Ungrades Assignment</h1> */}
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold text-primary">My Courses  </h1>
        <div className="space-y-4">
        <UngradedAssignmentCard/>
        <UngradedAssignmentCard/>
        </div>
       
      </div>
      <div className="mt-3 space-y-3">
        <h1 className="text-2xl font-semibold text-primary">My Teacher 1 Name </h1>
        <div className="space-y-4">
        <UngradedAssignmentCard/>
        <UngradedAssignmentCard/>
        </div>
       
      </div>
      <div className="mt-3 space-y-3">
        <h1 className="text-2xl font-semibold text-primary">My Teacher 2 Name  </h1>
        <div className="space-y-4">
        <UngradedAssignmentCard/>
        <UngradedAssignmentCard/>
        </div>
       
      </div>
    </div>
  )
}

export default Ungraded
