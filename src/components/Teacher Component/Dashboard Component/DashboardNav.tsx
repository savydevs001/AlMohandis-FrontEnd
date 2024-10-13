// import React from 'react'
import { NavLink } from "react-router-dom"


function DashboardNav() {
  return (
    <div className='flex flex-wrap items-center justify-between gap-4 py-8'>
      <ul className="flex items-center space-x-8">
<li>
      <NavLink to={'/courses'} className={({ isActive }) => isActive ? 'text-tertiary border-b border-primary font-semibold  flex items-center gap-4' : 'text-tertiary flex items-center gap-4'}>Published</NavLink>
</li>
<li>
      <NavLink to={'/draft'} className={({ isActive }) => isActive ? 'text-tertiary border-b border-primary font-semibold  flex items-center gap-4' : 'text-tertiary flex items-center gap-4'}>Draft</NavLink>
</li>
<li>
      <NavLink to={'/pending'} className={({ isActive }) => isActive ? 'text-tertiary border-b border-primary font-semibold  flex items-center gap-4' : 'text-tertiary flex items-center gap-4'}>Pending Approval</NavLink>
</li>
      </ul>
      <div>
<NavLink to={'/createCourse'} className='px-6 py-3 font-semibold text-white rounded-md bg-primary '>Create New Course  <span className="px-2 text-2xl">+</span></NavLink>
      </div>
    </div>
  )
}

export default DashboardNav
