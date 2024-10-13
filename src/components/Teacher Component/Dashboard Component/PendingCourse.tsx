// import React from 'react'
import DashboardNav from './DashboardNav'
import DashBoardHeader from './DashBoardHeader'
import Sidebar from '../Sidebar'
import PendingCard from './PendingCard'


function PendingCourse() {
  return (
      <div className="flex flex-col w-full min-h-screen lg:flex-row">
      <Sidebar />
      <div className="items-start justify-between flex-1 p-6">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-2xl font-bold">Courses</h1>
          <DashBoardHeader />
        </div>
        <DashboardNav />

        <div className="mt-6">
          <h1 className="text-2xl font-semibold">Pending Courses</h1>
         <div className='flex flex-wrap items-center gap-2'>
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
