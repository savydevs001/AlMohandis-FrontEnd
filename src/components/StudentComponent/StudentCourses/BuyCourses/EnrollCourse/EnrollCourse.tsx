// import React from 'react'

import EnrollCourseHeader from "./EnrollCourseHeader"
import CourseObjective from "./EnrollCourseName/CourseObjectives/CourseObjective"
import EnrollCourseModule from "./EnrollCourseName/EnrollCourseModule"
import EnrollCourseName from "./EnrollCourseName/EnrollCourseName"
import EnrollCourseSeasonInstructur from "./EnrollCourseName/SeasonInstructur"
import RelatedCourse from "./EnrollCourseName/RelatedCourses/RelatedCourse"
import StudentsReviews from "./EnrollCourseName/StudentReviews/StudentsReviews"

function EnrollCourse() {
  return (
    <div className="flex-1 space-y-6">
      <EnrollCourseHeader/>
      <EnrollCourseName/>
      <div className="flex flex-col w-full gap-5 lg:flex-row">
        <div className="lg:w-[55%] w-full">
          <EnrollCourseModule/>
          <CourseObjective/>
        </div>
        <div className="lg:w-[45%] w-full">
          <EnrollCourseSeasonInstructur/>
        </div>
      </div>

      <div className="space-y-8 lg:-translate-y-48">
      <StudentsReviews/>
      <RelatedCourse/>
      </div>
    </div>
  )
}

export default EnrollCourse
