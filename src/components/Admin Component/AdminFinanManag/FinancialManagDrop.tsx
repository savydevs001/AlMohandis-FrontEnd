// import React from 'react'

import ActiveCourseDropDown from "../CourseManagementComp/ActiveCoursesComponent/ActiveCourseDropDown"

function FinancialManagementDropDown() {
  return (
    <div className="flex flex-col w-full gap-4 lg:items-center lg:flex-row lg:gap-0">
      <ActiveCourseDropDown/>
      <div>
            <input type="date"  className="rounded-lg border-slate-300"/>
      </div>
    </div>
  )
}

export default FinancialManagementDropDown
