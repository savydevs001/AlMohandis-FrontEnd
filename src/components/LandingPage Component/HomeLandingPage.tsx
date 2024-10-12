// import React from 'react'
import heroImg from '../../assets/heroImg1.png'
import { FaArrowRightLong } from "react-icons/fa6";

function HomeLandingPage() {
  return (
    <div className='flex flex-col lg:flex-row  justify-between max-w-6xl mx-auto mt-4 bg-[#FFF9E7] rounded-lg'>
     <div className='p-8'>
      <h1 className='text-2xl font-bold text-tertiary lg:text-4xl '><span className='text-secondary'>Al Mohandes</span> Educational Institution
</h1>
<h3 className='py-3 text-2xl font-bold lg:text-3xl text-tertiary' > Your Partner on the Path to Success</h3>
      <p className='w-[100%] lg:w-[70%] py-6 text-tertiary'>Providing innovative tools and personalized support to help you achieve your academic goals.</p>
      <button className='flex items-center gap-2 px-6 py-2 rounded-full text-txtColor bg-primary'>Get Started <span><FaArrowRightLong /></span> </button>
     </div>
     <div className=' w-full lg:w-[30%]'>
      <img  className='w-full' src={heroImg} alt="" />
     </div>
    </div>
  )
}

export default HomeLandingPage
