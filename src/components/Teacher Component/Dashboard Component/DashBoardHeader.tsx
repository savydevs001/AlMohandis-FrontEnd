// import React from 'react'
import { FaBell } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

function DashBoardHeader() {
  return (
    <div>
      <div className='flex items-center justify-between'>
<div className='flex items-center gap-4'>
<div className='flex items-center gap-2 px-2 w-[80%] py-1 border rounded-full border-tertiary'>
<IoIosSearch className='text-[#777]'  />
<input className='py-0 border-none outline-none w-[50%] px-1' placeholder='Search...' type="text" />
</div>
<FaBell className='text-[#777]'/>
</div>
</div> 
    </div>
  )
}

export default DashBoardHeader
