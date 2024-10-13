// import React from 'react'

import Sidebar from "../Sidebar"
import CoursesByMeCard from "./CoursesByMeCard"
import DashBoardHeader from "./DashBoardHeader"
import DashboardNav from "./DashboardNav"

function Draft() {
  return (
      <div className="flex flex-col w-full min-h-screen lg:flex-row">
      <Sidebar />
      <div className="items-start justify-between flex-1 p-6">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-2xl font-bold">Courses</h1>
          <DashBoardHeader />
        </div>
        <DashboardNav />

        <div className="mt-6">
          <h1 className="text-2xl font-semibold">Draft</h1>
          
            <div className="flex flex-wrap items-center gap-5">
              <CoursesByMeCard name="Course Name" published="Last Changed"  button="Publish" showButton={true} />
              <CoursesByMeCard name="Course Name"  published="Last Changed"   button="Publish" showButton={true} />
              <CoursesByMeCard name="Course Name" published="Last Changed"   button="Publish" showButton={true} />
              <CoursesByMeCard name="Course Name" published="Last Changed"   button="Publish" showButton={true} />
              <CoursesByMeCard name="Course Name" published="Last Changed"   button="Publish" showButton={true} />
              <CoursesByMeCard name="Course Name" published="Last Changed"   button="Publish" showButton={true} />
              <CoursesByMeCard name="Course Name" published="Last Changed"   button="Publish" showButton={true} />
              <CoursesByMeCard name="Course Name" published="Last Changed"   button="Publish" showButton={true} />
              <CoursesByMeCard name="Course Name" published="Last Changed"   button="Publish" showButton={true} />
              <CoursesByMeCard name="Course Name" published="Last Changed"    button="Publish" showButton={true} />
            </div>
          </div>
        </div>

      </div>
    
  )
}

export default Draft
