// import React from 'react'

import { NavLink } from "react-router-dom"
import DashBoardHeader from "../Dashboard Component/DashBoardHeader"


function Assignment() {
  return (
    <div className="w-full">
   <div className="flex items-center justify-between w-full gap-4 p-2">
          <h1 className="text-2xl font-bold">Assignments</h1>
          <DashBoardHeader />
        </div>
   <nav className="flex items-center gap-12 mt-8">
      <li className="list-none text-tertiary">
            <NavLink to={''} className={({ isActive }) => isActive ? 'text-tertiary border-b border-primary font-semibold flex items-center gap-4' : 'text-tertiary flex items-center gap-4'}>Ungraded</NavLink>
            </li>
           <li className="list-none">
           <NavLink to={'grades'} className={({ isActive }) => isActive ? 'text-tertiary border-b border-primary font-semibold flex items-center gap-4' : 'text-tertiary flex items-center gap-4'}>Graded</NavLink>
           </li>
   </nav>
   <div className="flex flex-col py-6 space-y-1">
      <label className="font-semibold" htmlFor="">Select Course</label>
      <select name="" id="" className="w-full lg:w-[30%]  rounded-md">
            <option value="">All</option>
            <option value="">Physics</option>
            <option value="">Math</option>
            <option value="">Computer</option>
      </select>
   </div>
   <div>
      {/* <Ungraded/> */}
      {/* <Grades/> */}
   </div>
    </div>
  )
}

export default Assignment
