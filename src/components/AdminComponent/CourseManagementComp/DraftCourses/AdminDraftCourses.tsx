// import React from 'react'


import CoursesByMeCard from "../../../TeacherComponent/Courses Component/CoursesByMeCard"
import ActiveCourseDropDown from "../ActiveCoursesComponent/ActiveCourseDropDown"

function AdminDraftCourses() {
  return (
    <div>
      <ActiveCourseDropDown/>
      <div className="flex flex-wrap items-center gap-5">
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={true} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={true} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={true} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={true} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={true} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={true} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={true} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={true} />
            <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={true} />
      </div>
    </div>
  )
}

export default AdminDraftCourses
