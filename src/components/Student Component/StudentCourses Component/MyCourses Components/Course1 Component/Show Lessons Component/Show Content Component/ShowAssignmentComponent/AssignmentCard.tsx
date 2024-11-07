// import React from 'react'

import { NavLink } from "react-router-dom"

function AssignmentCard() {
  return (
    <div className="mt-6">
   <div className="p-4 space-y-1 rounded-md bg-cardBg">
      <h1>Assignment 1</h1>
      <h5 className="text-pTag">Chapter 1 - Assignment 1</h5>
      <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis recusandae laudantium voluptatibus. Iure, nobis optio!</p>
    <NavLink to="/studentAssignments">
    <button className="px-4 py-2 mt-3 font-semibold text-white rounded-md bg-primary">View</button>
    </NavLink>
   </div>
    </div>
  )
}

export default AssignmentCard
