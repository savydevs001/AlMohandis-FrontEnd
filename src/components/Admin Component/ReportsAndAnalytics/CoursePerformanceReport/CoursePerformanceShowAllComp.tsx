// import React from 'react'

import UserManagementHeader from "../../UserManagementComponent/UserManagementHeader"
import CourseCompletionGraph from "./CourseCompletionGraph"
import CoursePerformanceDropDown from "./CoursePerformanceDropDown"
import CoursePerformanceTable from "./CoursePerformanceTable"
import LastViewCourseGraph from "./LastViewCourseGraph"
import MostViewCourseGraph from "./MostViewCourseGraph"


function CoursePerformanceShowAllComp() {
  return (
    <div className="flex-1 space-y-6">
<UserManagementHeader title="Course performance Reports"/>      
<div>
      <CoursePerformanceDropDown/>
</div>
<div className="flex flex-col items-center gap-4 lg:flex-row">
      <CourseCompletionGraph/>
      <MostViewCourseGraph/>
</div>
<div>
      <LastViewCourseGraph/>
</div>
<div>
      <CoursePerformanceTable/>
</div>
    </div>
  )
}

export default CoursePerformanceShowAllComp
