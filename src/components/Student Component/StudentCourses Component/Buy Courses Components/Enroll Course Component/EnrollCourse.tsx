// import React from 'react'

import EnrollCourseHeader from "./EnrollCourseHeader"
import CourseObjective from "./EnrollCourseName Component/CourseObjectivesComponent/CourseObjective"
import EnrollCourseModule from "./EnrollCourseName Component/EnrollCourseModule"
import EnrollCourseName from "./EnrollCourseName Component/EnrollCourseName"
import EnrollCourseSeasonInstructur from "./EnrollCourseName Component/EnrollCourseSeasonInstructur"

function EnrollCourse() {
  return (
    <div className="flex-1 space-y-6">
      <EnrollCourseHeader/>
      <EnrollCourseName/>
      <div className="flex w-full gap-5">
        <div className="w-[55%]">
          <EnrollCourseModule/>
          <CourseObjective/>
        </div>
        <div className="w-[45%]">
          <EnrollCourseSeasonInstructur/>
        </div>
      </div>
    </div>
  )
}

export default EnrollCourse
