// import React from 'react'

function GaurdianStudentCard() {
  return (
    <div className="flex flex-col justify-between p-3 bg-white border rounded-lg lg:items-center lg:flex-row">
      <div className="">
        <h1 className="text-lg font-semibold">Student Name</h1>
        <p>student@gmail.com</p>
        <p className="text-pTag">Reg No : <span className="text-black">20-cs-13</span></p>
        <h5 className="text-md">Computer Science Department</h5>
      </div>
      <div className="flex lg:flex-col items-center lg:w-[10%] lg:space-y-2 gap-3 mt-4">
        <button className="w-[100%] px-4 py-2 font-semibold border rounded-md text-primary border-primary">Remove</button>
        <button  className="w-[100%] px-4 py-2 font-semibold border rounded-md text-primary border-primary">View</button>
      </div>
    </div>
  )
}

export default GaurdianStudentCard
