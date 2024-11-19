// import React from 'react'
import book from '../../../../assets/book.webp'


function AdminArchivedCards() {
  return (
      <div className='py-2'>
      <div className="p-5 mt-8 w-full  lg:w-[17.5vw] transition-shadow duration-200 bg-white rounded-lg shadow-md hover:shadow-lg">
        <img className="rounded-lg" src={book} alt="" />
        <h1 className="mt-2 mb-1 text-2xl font-semibold">Course Name</h1>
 <p className='text-sm text-[#666]'>Elliot John</p>
          <p className="text-sm text-[#666]">Made on
            <span className="px-2 font-semibold text-black text-md">20-4-2024</span>
          </p>

        <div className="flex items-center gap-2 mt-2">
            <button className="px-6 py-2 text-sm text-white rounded-md bg-primary">   View    
            </button>
            <button className="px-6 py-2 text-sm text-white rounded-md bg-primary">Activate    
            </button>
        </div>
      </div>
    </div>
  )
}

export default AdminArchivedCards
