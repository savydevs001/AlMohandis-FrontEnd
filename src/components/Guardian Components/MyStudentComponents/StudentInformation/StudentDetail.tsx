// import React   from 'react'
import StudentImg from '../../../../assets/studentImg1.jpeg'
function StudentDetail() {
  return (
      <div className='flex lg:w-[60%] w-full gap-4'>
      <div className='lg:w-[15%] w-[25%] lg:h-[15vh] h-[10vh]  bg-red-100 rounded-full md:h-[16vh]'>
            {/* <h1>Hello</h1> */}
  <img src={StudentImg} alt="" className='w-[100%] rounded-full h-[100%] object-cover ' />
      </div>
      <div className='space-y-1 lg:w-[50%]'>
            <h1 className='text-xl font-semibold'>Student Name</h1>
            <p className=''>student@gmail.com</p>
            <p className=''>Reg No. 98893</p>
            <p>Department of Computer Science</p>
            <p>6th Semester</p>
            <div className='flex items-center gap-6'>
                  <label className='font-semibold' htmlFor="">Relation</label>
                  <div className='flex items-end gap-1'>
                        <input className='py-1 rounded-md w-[100%]' type="text" placeholder='Father' />
                        <p className='border-b border-black'>Edit</p>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default StudentDetail
