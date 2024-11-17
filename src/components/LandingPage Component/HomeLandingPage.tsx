// import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function HomeLandingPage({ data }:any) {
  console.log(data);
  return (
    <div className='flex flex-col lg:flex-row justify-between max-w-6xl mx-auto mt-4 bg-[#FFF9E7] rounded-lg'>
      <div className='p-8'>
        <h1 className='text-2xl font-bold text-tertiary lg:text-4xl '>
          <span className='text-secondary'>{data.mainHeading}</span>
        </h1>
        <h3 className='py-3 text-2xl font-bold lg:text-3xl text-tertiary'>{data.subHeading}</h3>
        <button className='flex items-center gap-2 px-6 py-2 rounded-full text-txtColor bg-primary'>
          Get Started <span><FaArrowRightLong /></span>
        </button>
      </div>
      <div className='w-full lg:w-[30%]'>
        <img className='w-full' src={data.heroImg} alt="" />
      </div>
    </div>
  );
}

export default HomeLandingPage;