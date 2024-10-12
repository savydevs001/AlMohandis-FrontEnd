// import React from 'react'
import ReviewBox from './ReviewBox'

function ReviewSection() {
  return (
    <div className='w-full bg-primary'>
     <div className='max-w-5xl p-6 mx-auto'>
      <h3 className='text-2xl font-semibold text-txtColor'>Our Students Feedback</h3>
      <div className='flex flex-wrap gap-6 lg:flex-nowrap'>
        <ReviewBox/>
        <ReviewBox/>
        <ReviewBox/>
      </div>
     </div>
    </div>
  )
}

export default ReviewSection
