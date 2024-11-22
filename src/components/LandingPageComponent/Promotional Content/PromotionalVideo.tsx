// import React from 'react'
import video from '../../../assets/dumyVideo.mp4'


function PromotionalVideo() {
  return (
    <div className='mt-12 '>
    <div className='p-3 rounded-lg shadow-md bg-cardBg'>
      <video controls loop autoFocus className='rounded-lg'>
      <source src={video} type='video/mp4' />
      </video>
    <div className='mt-3'>
    <p className='font-semibold '>Title</p>
    <p className='text-pTag '>Author</p>
    </div>
    </div>
    </div>
  )
}

export default PromotionalVideo
