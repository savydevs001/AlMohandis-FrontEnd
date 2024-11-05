// import React from 'react'

import DashBoardHeader from "../../../../../Teacher Component/Dashboard Component/DashBoardHeader"

function StudentDashboardHeader() {
  return (
    <div>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-semibold">My Courses</h1>
                  <li className="text-[#777]">Course 1</li>
            </div>
            <DashBoardHeader/>
      </div>
    </div>
  )
}

export default StudentDashboardHeader
