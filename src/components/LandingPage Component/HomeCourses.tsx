// import React from 'react'
import InstructorCard from './InstructorCard'

function HomeCourses() {
  return (
    <div className='flex flex-col w-full p-8 mx-auto mt-12 bg-tertiary '>
     <div className='pt-12 text-center text-txtColor'>
      <h3 className='text-2xl font-bold'>Popular Courses</h3>
      <p className='py-3 text-md'>Our most popular and demanding Courses</p>
     </div>
<div className='flex flex-wrap items-center'>
<InstructorCard buttonText="View Now" width='[40%]'/>
<InstructorCard buttonText="View Now" width=''/>
<InstructorCard buttonText="View Now" width=''/>
<InstructorCard buttonText="View Now" width=''/>
</div>




<button className='px-2 py-2 m-auto mt-4 text-sm rounded-full text-txtColor btn bg-primary '>View All</button>
    </div>
  )
}

export default HomeCourses
