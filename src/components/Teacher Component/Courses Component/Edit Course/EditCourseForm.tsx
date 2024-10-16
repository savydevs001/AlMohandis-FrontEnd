// import React from 'react'

import CourseInput from "./CourseInput"
import EditCourseDescription from "./EditCourseDescription"

function EditCourseForm() {
  return (
    <div className="w-full mt-8 space-y-5">
 <div className="flex items-center justify-between">
 <div className="flex items-center w-3/4 space-x-10">
 <CourseInput title="Course Title" placeholder="DBMS for Beginners" />
 <CourseInput title="Course Completion Time" placeholder="4 Weeks" />
 </div>
 <button className="px-4 py-2 font-semibold text-white rounded-md w-fit bg-primary">Add Season</button>
 </div>
<div className="flex items-center w-3/4 space-x-10">
<CourseInput title="Season Amount" placeholder="$98/00" />
<CourseInput title="Season2 Amount" placeholder="$87/99" />
</div>

<div className="space-y-6">
      <EditCourseDescription title="Course Description " placeholder="Write a short Description"/>
      <EditCourseDescription title="Course Objectives " placeholder="Write a short Description"/>
      <EditCourseDescription title="What will students learn " placeholder="Write a short Description"/>
</div>
    </div>
  )
}

export default EditCourseForm
