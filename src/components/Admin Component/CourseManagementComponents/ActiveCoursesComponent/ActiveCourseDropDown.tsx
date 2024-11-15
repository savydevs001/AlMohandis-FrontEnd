// import React from 'react'

function ActiveCourseDropDown() {
  return (
    <div className="flex items-center w-full gap-8 space-y-1">
    <div className="flex flex-col space-y-1 w-[35%]">
    <label className="font-semibold" htmlFor="">Select Category</label>
      <select className="w-[100%] rounded-lg py-2 border-slate-300" name="" id="">
            <option value="">Select Category</option>
            <option value="">Category 1</option>
            <option value="">Category 2</option>
            <option value="">Category 3</option>
            {/* <option value="">Select Category</option> */}
      </select>
    </div>
    <div className="flex flex-col space-y-1 w-[35%]">
    <label className="font-semibold" htmlFor="">Select Category</label>
      <select className="w-[100%] rounded-lg py-2 border-slate-300" name="" id="">
            <option value="">Select teachers</option>
            <option value="">teacher 1</option>
            <option value="">teacher 2</option>
            <option value="">teacher 3</option>
            {/* <option value="">Select Category</option> */}
      </select>
    </div>
    </div>
  )
}

export default ActiveCourseDropDown
