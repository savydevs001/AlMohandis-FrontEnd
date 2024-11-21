// import React from 'react'

import DashBoardHeader from "../DashboardComponent/DashBoardHeader"

function AttendenceHeader() {
  return (
    <div className="w-full">
       <div className="flex items-center justify-between w-full gap-4 p-2">
             <h1 className="text-2xl font-bold">Attendence</h1>
             <DashBoardHeader />
           </div>
           <div className="flex items-center justify-between lg:w-full w-[90%] mx-auto py-4">
            <div className="flex flex-col w-full space-y-1">
              <label htmlFor="">Select Subject</label>
              <select className="rounded-md lg:w-[25%] w-[50%]" name="" id="">
                <option value="">Subject 1</option>
                <option value="">Subject 2</option>
                <option value="">Subject 3</option>
              </select>
            </div>
            <div className="">
              <select className="rounded-md lg:w-[7vw]" name="" id="">
                <option value="">date</option>
                <option value="">date</option>
                <option value="">date</option>
              </select>
            </div>
           </div>
    </div>
  )
}

export default AttendenceHeader
