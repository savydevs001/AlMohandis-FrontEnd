// import React from 'react'

import InstructorCard from "../../../LandingPage Component/InstructorCard"
import DashBoardHeader from "../../../Teacher Component/DashboardComponent/DashBoardHeader"

function BuyCoursePage() {
  return (
    <div className="flex-1 space-y-7">
      <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Courses</h1>
            <DashBoardHeader/>
      </div>
      <div className="flex items-center justify-end">
            <button className="px-3 py-2 font-semibold text-white rounded-md -2 bg-primary">Add New +</button>
      </div>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-4 sm:grid-cols-2">
            <InstructorCard buttonText="Enroll Now"/>
            <InstructorCard buttonText="Enroll Now"/>
            <InstructorCard buttonText="Enroll Now"/>
            <InstructorCard buttonText="Enroll Now"/>
            <InstructorCard buttonText="Enroll Now"/>
           
      </div>
    </div>
  )
}

export default BuyCoursePage
