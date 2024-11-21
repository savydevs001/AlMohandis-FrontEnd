// import React from 'react'

import AdminSidebar from "../../AdminSidebar"
import CoursePerformanceShowAllComp from "./CoursePerformance"

function CoursePerformanceReport() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <AdminSidebar/>
           
           <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
       <CoursePerformanceShowAllComp/>
           </div>
         </div>
  )
}

export default CoursePerformanceReport
