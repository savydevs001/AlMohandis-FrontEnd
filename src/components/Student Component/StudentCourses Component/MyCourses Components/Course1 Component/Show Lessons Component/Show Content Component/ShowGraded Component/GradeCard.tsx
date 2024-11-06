// import React from 'react'

import { NavLink } from "react-router-dom"

function GradeCard() {
  return (
    <div>
    <div className="p-4 space-y-1 rounded-md bg-cardBg">
      <h1 className="text-xl font-semibold">Exam 1</h1>
      <h5 className="text-pTag">Chapter 1 - Exam 1</h5>
      <p className="text-sm text-pTag"> Submitted on: 20-3-2024</p>
      <h6 className="text-lg font-bold text-primary">7/10</h6>
      <NavLink to = '/correctOptions' className=''>
      <button className="px-4 py-2 mt-3 font-semibold text-white rounded-md bg-primary"> View</button>
      </NavLink>
    </div>
    </div>
  )
}

export default GradeCard
