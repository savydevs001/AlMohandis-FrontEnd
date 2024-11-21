// import React from 'react'

import Sidebar from '../Sidebar'
import CoursesNav from './CoursesNav'
import PendingCard from './PendingCard'


function PendingCourse() {
  return (
      <div className="flex flex-col w-full min-h-fit lg:flex-row">
      <Sidebar />
      <div className="items-start justify-between flex-1 p-6">
       <CoursesNav/>

        <div className="mt-6">
          <h1 className="text-2xl font-semibold">Pending Courses</h1>
         <div className='flex flex-wrap items-center gap-5'>
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
        </div>

      </div>
  )
}

export default PendingCourse
