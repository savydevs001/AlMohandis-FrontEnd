// import React from 'react'

import ActiveCourseDropDown from "./ActiveCourseDropDown"
import ActiveCoursesCard from "./ActiveCoursesCard"

function ActiveCourseShowComp() {
  return (
    <div>
   <ActiveCourseDropDown/>
 <div className="flex flex-wrap items-center gap-4">
 <ActiveCoursesCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <ActiveCoursesCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <ActiveCoursesCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <ActiveCoursesCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <ActiveCoursesCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <ActiveCoursesCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <ActiveCoursesCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />

 </div>
    </div>
  )
}

export default ActiveCourseShowComp
