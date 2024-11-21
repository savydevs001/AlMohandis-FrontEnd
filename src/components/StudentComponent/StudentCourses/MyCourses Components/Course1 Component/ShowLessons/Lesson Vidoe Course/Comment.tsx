// import React from 'react'
import img from '../../../../../../../assets/book.webp'
function Comment() {
  return (
    <div>
        <div className='flex items-start gap-3 mt-5'>
      <div className='w-16 h-16 rounded-full'>
            <img className='w-6 h-6 rounded-full lg:h-10 lg:w-10' src={img} alt="" />
      </div>
      <div className='leading-tight '>
            <h6 className='font-medium'>Name</h6>
            <p className='text-sm text-pTag'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, voluptat em!sk jdsdhsjhjdfhdjfhuhfjdfhdjf  </p>
            <p className='text-sm text-blue-600'>0 replies</p>
      </div>
    </div>
    </div>
  )
}

export default Comment
