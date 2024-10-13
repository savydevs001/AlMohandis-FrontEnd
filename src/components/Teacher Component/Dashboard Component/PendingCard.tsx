// import React from 'react'
import book from '../../../assets/book.webp';
function PendingCard() {
  return (
    <div className='flex flex-col items-center p-5 mt-8 rounded-lg lg:w-56 w-72 bg-cardBg'>
       <img className="rounded-md" src={book} alt="" />
      <h1 className="mt-2 mb-1 text-2xl font-semibold">Course Name</h1>
      <p className="text-sm text-[#666]">
            Created On
            <span className="px-2 font-semibold text-black text-md">20-4-2024</span>
          </p>
      <p className="text-[.9vw] text-[#666]">
            Request Publish On
            <span className="px-2 text-[1vw] font-semibold text-black ">20-4-2024</span>
          </p>
          <button className="px-8 py-2 mt-3 text-sm text-white rounded-md bg-primary">
              Back to Draft
            </button>
    </div>
  )
}

export default PendingCard
