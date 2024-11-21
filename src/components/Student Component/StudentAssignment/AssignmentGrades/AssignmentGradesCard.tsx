// import React from 'react'

import { NavLink } from "react-router-dom"

function AssignmentGradesCard() {
  return (
    <NavLink to='/myassignments/view' className=''>
      <div className="flex items-start mt-3 justify-between w-full p-2 px-5 bg-white border rounded-xl shadow-sm border-[#C9C9C9]">
      <div className="space-y-1">
      <h1 className="text-xl font-semibold">Assignment 1</h1>
      <p>Course Name - Chapter 1</p>
      </div>
      <p className="text-sm text-primary">9/10</p>
       </div>
       </NavLink>
  )
}

export default AssignmentGradesCard
