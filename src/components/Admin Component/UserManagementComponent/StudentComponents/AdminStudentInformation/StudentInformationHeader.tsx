// import React from 'react'

import { NavLink } from "react-router-dom"

function StudentInformationHeader() {
  return (
    <div className="flex flex-wrap gap-8 text-pTag">
     <NavLink to='AdminStudentInformation'>Information</NavLink>
     <NavLink to='/AdminStudentCourses'>Courses</NavLink>
     <NavLink to=''>Lectures Attended</NavLink>
     <NavLink to=''>Registered Teachers</NavLink>
    </div>
  )
}

export default StudentInformationHeader
