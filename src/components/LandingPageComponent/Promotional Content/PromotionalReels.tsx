// import React from 'react'
// import video from '../../../assets/dumyVideo.mp4'
function PromotionalReels() {
  return (
      <div className='mt-8 '>
      <div className='bg-[#F7F7F7] p-4 rounded-lg w-full lg:w-52 lg:h-72 h-96 shadow-md'>
        <video controls loop autoFocus className='w-full h-full rounded-md lg:w-64 lg:h-60'>
        {/* <source src={video} type='video/mp4' /> */}
        </video>
        <p className='py-2 font-semibold'>Title</p>
      </div>
      </div>
  )
}

export default PromotionalReels
