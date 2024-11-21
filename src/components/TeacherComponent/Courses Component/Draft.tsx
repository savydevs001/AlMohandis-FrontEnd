// import React from 'react'

import Sidebar from "../Sidebar"
import CoursesByMeCard from "./CoursesByMeCard"

import CoursesNav from "./CoursesNav"

function Draft() {
  return (
      <div className="flex flex-col w-full min-h-screen lg:flex-row">
      <Sidebar />
      <div className="items-start justify-between flex-1 p-6">
       <CoursesNav/>

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
