// import React from 'react'
import img from '/professorsImg.png';

function ProfessorPersonalDetail() {
  return (
    <div className='flex flex-col gap-6 mt-8 lg:flex-row'>
      <div
        className="relative lg:w-[20%] w-full h-[45vh] bg-center bg-cover rounded-2xl flex items-end justify-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent rounded-b-2xl"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-end mb-6 text-white">
          <h1 className="text-lg font-bold">Professor Name</h1>
          <p className="">Field</p>
        </div>
      </div>
      
      <div className='lg:w-[50%] w-full space-y-3'>
        <h1 className='text-2xl font-semibold'>Name of the Professor/Trainer</h1>
        <div className='flex items-center gap-2 '>
            <p className='px-2 py-1 text-xs text-white rounded-full bg-pTag w-fit'>Male Student</p>
            <p className='px-2 py-1 text-xs text-white rounded-full bg-pTag w-fit'>Bachelor's</p>
        </div>
        <div className='text-xl '>
            <p>Description of the coach Description of the coach <br />
            Description of the coach Description of the coach <br />
              Description of the coach Description of</p>
        </div>
        <div className='space-y-1'>
            <h2 className='text-xl font-semibold'>Office Hours</h2>
            <p className='text-lg'>Mon-Wed 9:00AM - 5:00PM</p>
        </div>
        <div className='space-y-1'>
            <h2 className='text-xl font-semibold'>Department</h2>
            <p className='text-lg'>Physics Department office#414</p>
        </div>
        <div className='space-y-1'>
            <h2 className='text-xl font-semibold'>Contact</h2>
            <p className='text-lg'>teacher66@gmail.com</p>
            <p>+1 234 567 890</p>
            <button className='px-4 py-2 font-semibold text-white rounded-md bg-primary'>Chat Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProfessorPersonalDetail;
