// import React from 'react'

import DashBoardHeader from "../../../../TeacherComponent/DashboardComponent/DashBoardHeader"



function EnrollCourseHeader() {
  return (
    <div className="flex-1">
      <div className="flex flex-wrap items-center justify-between">
<div className="flex items-center gap-5">
      <h1 className="text-2xl font-semibold">Courses</h1>
      <li className="text-lg text-pTag"> Course 1</li>
</div>
<DashBoardHeader/>
      </div>
    </div>
  )
}

export default EnrollCourseHeader
