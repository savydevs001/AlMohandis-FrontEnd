// import React from 'react'
import { NavLink } from 'react-router-dom'
import StudentImg from '../../../assets/studentImg1.jpeg'
function MyStudentCard() {
  return (
    <div className="flex flex-col items-center justify-between p-4 space-y-4 bg-white border shadow-sm lg:flex-row rounded-xl lg:space-y-0">
    <div className='flex lg:w-[50%] w-full gap-5 '>
      <div className='lg:w-[18%] w-[30%] bg-red-100 rounded-full'>
            {/* <h1>Hello</h1> */}
  <img src={StudentImg} alt="" className='w-[100%] rounded-full h-[100%] object-cover' />
      </div>
      <div className='space-y-1'>
            <h1 className='text-xl font-semibold'>Student Name</h1>
            <p className=''>student@gmail.com</p>
            <p className=''>Reg No. 98893</p>
      </div>
    </div>
    <div className='flex flex-row gap-4 lg:flex-col'>
      <NavLink className='px-4 py-2 text-center text-white rounded-md bg-primary' to='StudentInformation'>
      <button >View</button>
      </NavLink>
      <button className='px-4 py-2 text-white rounded-md bg-primary'>Attendance</button>
    </div>
    </div>
  )
}

export default MyStudentCard
