// import React from 'react'
import DashBoardHeader from '../Dashboard Component/DashBoardHeader'
import DashboardNav from './DashboardNav'

function CoursesNav() {
  return (
    <div>
       <div>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Courses</h1>
          <DashBoardHeader />
        </div>
        <DashboardNav />
        </div>
    </div>
  )
}

export default CoursesNav
