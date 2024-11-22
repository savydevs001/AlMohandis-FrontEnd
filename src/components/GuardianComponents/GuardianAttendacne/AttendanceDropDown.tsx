// import React from 'react'

function AttendanceDropDown() {
  return (
      <div className="flex flex-wrap items-center justify-between w-full mt-8 space-y-4 lg:space-y-0">
      <div className="flex items-center w-[70%] gap-5">
            <div className="flex flex-col space-y-1 lg:w-[40%] w-[50%]">
                  <label className="font-semibold" htmlFor="">Select Subject</label>
                  <select name="" id="" className="w-[100%] rounded-lg">
                        <option value="">All</option>
                        <option value="">Subject 1</option>
                        <option value="">Subject 2</option>
                        <option value="">Subject 3</option>
                  </select>
            </div>
            <div className="flex flex-col space-y-1 lg:w-[40%] w-[50%]">
                  <label className="font-semibold" htmlFor="">Select Day</label>
                  <select name="" id="" className="w-[100%] rounded-lg">
                        <option value="">Monday</option>
                        <option value="">Tuesday </option>
                        <option value="">Wednesday </option>
                        <option value="">Thursday</option>
                        <option value="">Friday</option>
                        <option value="">Saturday</option>
                  </select>
            </div>
            <div className="lg:w-[40%] w-[50%]">
            <div className="flex flex-col space-y-1 w-[100%]">
                  <label className="font-semibold" htmlFor="">Select Student</label>
                  <select name="" id="" className="w-[100%] rounded-lg">
                        <option value="">Student 1</option>
                        <option value="">Student 2</option>
                        <option value="">Student 3 </option>
                        <option value="">Student 4 </option>
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

export default AttendanceDropDown
