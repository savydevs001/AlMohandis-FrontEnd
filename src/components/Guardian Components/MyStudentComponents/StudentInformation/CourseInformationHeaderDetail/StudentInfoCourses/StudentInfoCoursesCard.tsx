// import React from 'react'
import img from '../../../../../../assets/book.webp'
import ProgressBar from '../../../../../Student Component/StudentDashboard/ProgressBar'
function StudentInfoCoursesCard() {
  return (
    <div className="flex flex-col w-full gap-4 p-4 bg-white rounded-lg shadow-sm lg:flex-row">
      <div className='lg:w-[25%] w-full lg:h-[25vh] rounded-lg'>
           <img className='w-[100%] h-[100%] rounded-lg object-cover' src={img} alt="" /> 
      </div>
      <div className='lg:w-[70%] w-full space-y-2'>

            <div className='w-[100%]'>
                  <h1 className='text-2xl font-semibold'>Course 1</h1>
                  <p className='text-lg text-pTag'>Instructor Name</p>
                  <p className='text-lg text-pTag'>Registered By Institute</p>
            </div>
            <div className='space-y-2'>
            <ProgressBar progress={75}/>
                <div className='flex justify-end'>
                <button className='px-4 py-2 text-white rounded-md bg-primary'>Chat with Teacher</button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default StudentInfoCoursesCard
