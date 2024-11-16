// import React from 'react'
import img from '../../../../assets/book.webp'
function CourseApprovalCard() {
  return (
    <div className='flex items-center justify-between p-2 border-2 rounded-md'>
      <div className='flex gap-3 lg:w-[70%] w-[50%]'>
            <div className='lg:w-[25%] w-[30%]'>
                  <img className='w-[100%] rounded-xl' src={img} alt="" />
            </div>
            <div>
                  <h1 className='text-lg font-semibold'>Course 1</h1>
                  <p className='text-pTag'>Instructor 1</p>
            </div>
      </div>
      <div className='lg:w-[27%]'>
            <button className='px-4 py-2 text-white rounded-md bg-primary'>Go to Course</button>
      </div>
    </div>
  )
}

export default CourseApprovalCard
