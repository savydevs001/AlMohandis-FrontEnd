// import React from 'react'

import CourseApprovalCard from "./CourseApprovalCard"

function CourseApproval() {
  return (
    <div className="lg:w-[55%] w-full bg-white rounded-lg shadow-sm lg:p-3 p-1 space-y-3">
      <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">Pending Approval Courses</h1>
            <p className="border-b text-primary border-primary w-fit">View all</p>
      </div>
      <div className="space-y-3">
            <CourseApprovalCard/>
            <CourseApprovalCard/>
            <CourseApprovalCard/>
            <CourseApprovalCard/>
            <CourseApprovalCard/>
      </div>
    </div>
  )
}

export default CourseApproval
