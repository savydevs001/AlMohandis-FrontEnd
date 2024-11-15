// import React from 'react'

import PendingCard from "../../../Teacher Component/Courses Component/PendingCard"
import ActiveCourseDropDown from "../ActiveCoursesComponent/ActiveCourseDropDown"

function AdminPendingCourses() {
  return (
    <div>
      <ActiveCourseDropDown/>
      <div className="flex flex-wrap items-center gap-5">
            <PendingCard/>
            <PendingCard/>
            <PendingCard/>
            <PendingCard/>
            <PendingCard/>
            <PendingCard/>
            <PendingCard/>
            <PendingCard/>
            <PendingCard/>
      </div>
    </div>
  )
}

export default AdminPendingCourses
