// import React from 'react'

function ViewRegSubCard() {
  return (
      <div className="flex flex-col justify-between p-3 space-y-4 bg-white border rounded-lg lg:items-start lg:flex-row lg:space-y-0">
      <div className="">
        <h1 className="text-lg font-semibold">Student Name</h1>
        <p>student@gmail.com</p>
        <p className="text-pTag">Reg No : <span className="text-black">20-cs-13</span></p>
        <h5 className="text-md">Computer Science Department</h5>
        <h5 className="text-md text-pTag">Gurardian No: <span className="text-blue-400 border-b border-blue-400">9148384472</span> </h5>
      </div>
      <div className="flex lg:flex-col  lg:w-[10%]  gap-2">
        <button className="w-[100%] px-4 py-2 font-semibold border rounded-md text-primary border-primary">Remove</button>
        <button  className="w-[100%] px-4 py-2 font-semibold border rounded-md text-primary border-primary">Freeze</button>
      </div>
    </div>
  )
}

export default ViewRegSubCard
