// import React from 'react'
import { IoStar } from "react-icons/io5";


function InstructorCard() {
  return (
    <div className='max-w-6xl mx-auto mt-6 text-txtColor'>
      <div className="w-full p-2 text-black rounded-lg shadow-xl lg:w-64 bg-txtColor max-h-fit card">
  <figure className="px-4 pt-4">
    <img
      src="https://i0.wp.com/apeejay.news/wp-content/uploads/2023/10/281023-10-most-read-books-Blog.jpg?resize=740%2C524&ssl=1"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="items-center text-center card-body">
    <div className='flex items-center justify-end px-4 mt-1 text-sm'>
    <IoStar className='text-secondary' />
    <IoStar className='text-secondary'   />
    <IoStar className='text-secondary' />
    <IoStar className='text-secondary' />
    <span className='px-2 rounded-full text-txtColor bg-primary'>3.0</span>
    </div>
    <div className='flex flex-col items-start px-4'>
    <h4 className='text-xl font-bold' >Course 1</h4>
    <h5 className='text-md' >Instructor</h5>
    <h3 className='text-xl font-bold text-primary' >Free</h3>
    </div>
    <div className="w-[90%] m-auto mt-3 p-2 border-2 card-actions border-primary rounded-lg mb-3">
      <button className="font-medium btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default InstructorCard
