// import React from 'react'

function AddDropDwoninPopUp() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 py-6 mb-6 lg:px-20 lg:flex-row lg:mb-0">
      <div className="flex flex-col space-y-1 lg:w-[30%] w-full">
            <label htmlFor="">Exam Type</label>
            <select name="" id="" className="rounded-md ">
                  <option value="">Exam Type 1</option>
                  <option value="">Exam Type 2</option>
                  <option value="">Exam Type 3</option>
            </select>
      </div>
      <div className="flex flex-col space-y-1 lg:w-[30%] w-full">
            <label htmlFor="">Total Marks</label>
           <input type="text"  className="rounded-md " placeholder="100"/>
      </div>
    </div>
  )
}

export default AddDropDwoninPopUp
