// import React from 'react'
import { IoStar } from "react-icons/io5";
function ReviewBox() {
  return (
    <div className=' w-[90%] lg:w-[33%] mt-4 bg-txtColor rounded-lg p-4 space-y-2'>
      <h5 className='text-lg font-semibold'>Student 1</h5>
      <div className='flex items-center justify-start mt-1 text-sm'>
    <IoStar className='text-secondary' />
    <IoStar className='text-secondary'   />
    <IoStar className='text-secondary' />
    <IoStar className='text-secondary' />
    <span className='px-2 rounded-full text-txtColor bg-primary'>3.0</span>
    </div>
    <h6 className='text-sm text-secondary'>Best courses for Learning</h6>
    <p className='text-sm text-tertiary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero</p>
    </div>
  )
}

export default ReviewBox
