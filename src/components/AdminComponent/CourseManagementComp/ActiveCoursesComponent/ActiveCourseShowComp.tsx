// import React from 'react'
import CoursesByMeCard from "../../../Teacher Component/Courses Component/CoursesByMeCard"
import ActiveCourseDropDown from "./ActiveCourseDropDown"

function ActiveCourseShowComp() {
  return (
    <div>
   <ActiveCourseDropDown/>
 <div className="flex flex-wrap items-center gap-4">
 <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 </div>
    </div>
  )
}

export default ActiveCourseShowComp
