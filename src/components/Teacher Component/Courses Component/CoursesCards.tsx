// import React from 'react'

// import DashBoardHeader from "../Dashboard Component/DashBoardHeader"
import CoursesByMeCard from "./CoursesByMeCard"

function CoursesNav() {
  return (
    <div>
      <div className="mt-6">
          <h1 className="text-2xl font-semibold text-primary">Course By Me</h1>
          <div className="max-w-[74vw] overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-5">
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-semibold text-primary">Teacher 1 Name</h1>
          <div className="max-w-[74vw] overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-5">
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-semibold text-primary">Teacher 2 Name</h1>
          <div className="max-w-[74vw] overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-5">
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default CoursesNav
