// import React from 'react'
import video from '../../../assets/dumyVideo.mp4'


function PromotionalVideo() {
  return (
    <div className='mt-12 '>
    <div className='p-4 rounded-lg bg-cardBg lg:w-[21vw] shadow-md'>
      <video controls loop autoFocus className='rounded-lg'>
      <source src={video} type='video/mp4' />
      </video>
      <p className='py-2 font-semibold'>Title</p>
    </div>
    </div>
  )
}

export default PromotionalVideo
