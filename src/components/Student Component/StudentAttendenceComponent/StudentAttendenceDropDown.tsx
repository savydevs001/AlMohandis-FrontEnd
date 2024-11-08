// import React from 'react'

function StudentAttendenceDropDown() {
  return (
    <div className="flex flex-wrap items-center justify-between w-full mt-8 space-y-4 lg:space-y-0">
      <div className="flex items-center w-[50%] gap-5">
            <div className="flex flex-col space-y-1 lg:w-[35%] w-[50%]">
                  <label className="font-semibold" htmlFor="">Select Subject</label>
                  <select name="" id="" className="w-[100%] rounded-lg">
                        <option value="">All</option>
                        <option value="">Subject 1</option>
                        <option value="">Subject 2</option>
                        <option value="">Subject 3</option>
                  </select>
            </div>
            <div className="lg:w-[30%] w-[50%]">
            <div className="flex flex-col space-y-1 w-[100%]">
                  <label className="font-semibold" htmlFor="">Day</label>
                  <select name="" id="" className="w-[100%] rounded-lg">
                        <option value="">All Week</option>
                        <option value="">Sunday</option>
                        <option value="">Monday </option>
                        <option value="">Tuesday </option>
                  </select>
            </div>
            </div>
      </div>
      <div className="flex flex-col space-y-1 lg:w-[15%]">
                 <input type="date" className="rounded-lg" />
            </div>
    </div>
  )
}

export default StudentAttendenceDropDown
