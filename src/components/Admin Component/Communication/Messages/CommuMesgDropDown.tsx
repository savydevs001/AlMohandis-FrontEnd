// import React from 'react'

function CommunicationMessageDropDown() {
  return (
  <div>
         <div className="flex items-center justify-between ">
      <div className="w-[40%] flex flex-col lg:space-y-1">
            <label className="font-semibold" htmlFor="">User Role</label>
            <select className="lg:w-[60%] w-[100%] rounded-md" name="" id="">
                  <option value="">All</option>
                  <option value="">Student</option>
                  <option value="">Teacher</option>
                  <option value="">Guardian</option>
                  <option value="">Assistant</option>
                  <option value="">Admin</option>
            </select>
      </div>
      <input  type="date" className="mt-5 rounded-md lg:mr-6 lg:mt-0"/>
    </div>
  </div>
  )
}

export default CommunicationMessageDropDown
