// import React from 'react'

function CoursePerformanceDropDown() {
  return (
    <div className="flex flex-col gap-4 lg:items-center lg:flex-row lg:gap-0">
        <div className="flex items-center w-full gap-8 space-y-1">
    <div className="flex flex-col space-y-1 lg:w-[25%] w-[50%]">
    <label className="font-semibold" htmlFor="">User Role</label>
      <select className="w-[100%] rounded-lg py-2 border-slate-300" name="" id="">
            <option value="">All</option>
            <option value="">Students</option>
            <option value="">Teachers</option>
            <option value="">Guardians</option>
            <option value="">Assistants</option>
            <option value="">Admins</option>
            {/* <option value="">Select Category</option> */}
      </select>
    </div>
    <div className="flex flex-col space-y-1 lg:w-[25%] w-[50%]">
    <label className="font-semibold" htmlFor="">Course</label>
      <select className="w-[100%] rounded-lg py-2 border-slate-300" name="" id="">
            <option value="">All</option>
            <option value="">Course 1</option>
            <option value="">Course 2</option>
            <option value="">Course 3</option>
            <option value="">Course 4</option>
            <option value="">Course 5</option>
            {/* <option value="">Select Category</option> */}
      </select>
    </div>
    </div>
    <input type="date" placeholder="Date" className="rounded-lg border-slate-300"/>
    </div>
  )
}

export default CoursePerformanceDropDown
