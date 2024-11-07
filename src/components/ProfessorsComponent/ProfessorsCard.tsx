// import React from 'react'
import { NavLink } from 'react-router-dom'
import professorsImg  from '/professorsImg.png'
function ProfessorsCard() {
  return (
    <div className='mt-8'>
     <div className='p-4 space-y-1 bg-white shadow-sm w-[100%] rounded-xl flex items-center lg:items-start flex-col'>
      <img className='' src={professorsImg} alt="" />
      <h1 className='text-xl font-semibold'>John Doe</h1>
      <p className='text-lg text-pTag'>Field</p>
      <NavLink to='professorsDetail'>
      <button className='px-4 py-2 font-semibold text-white rounded-md bg-primary'>View</button>
      </NavLink>
     </div>
    </div>
  )
}

export default ProfessorsCard
