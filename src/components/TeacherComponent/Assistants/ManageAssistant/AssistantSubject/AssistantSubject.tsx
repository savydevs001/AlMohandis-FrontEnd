// import React from 'react'

import CoursePermissionCards from "../CoursePermissions/CoursePermissionCards"
import SubjectPermission from "./SubjectPermission"

function AssistantSubject() {
  return (
      <div className="flex flex-col gap-4 lg:flex-row">
      <div className="lg:w-[35%] w-full space-y-2">
            <div className="flex items-center justify-end gap-2">
                  <h4 className="text-lg font-semibold">Select all</h4>
                  <input type="checkbox" className="w-3 h-3 bg-[#00A200] rounded-full" />
            </div>
            <div className="space-y-3">
            <CoursePermissionCards/>
            <CoursePermissionCards/>
            <CoursePermissionCards/>
            <CoursePermissionCards/>
            <CoursePermissionCards/>
            </div>
      </div>
      <div className="lg:w-[65%] w-full">

            <SubjectPermission/>
      </div>
    </div>
  )
}

export default AssistantSubject
