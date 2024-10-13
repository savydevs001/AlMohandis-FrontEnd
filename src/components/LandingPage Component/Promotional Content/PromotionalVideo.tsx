// import React from 'react'
import video from '../../../assets/dumyVideo.mp4'


function PromotionalVideo() {
  return (
    <div className='mt-12 '>
    <div className='w-full p-4 rounded-lg bg-cardBg lg:w-64'>
      <video controls loop autoFocus className=''>
      <source src={video} type='video/mp4' />
      </video>
      <p className='py-2 font-semibold'>Title</p>
    </div>
    </div>
  )
}

export default PromotionalVideo
